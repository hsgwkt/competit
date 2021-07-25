import { createApp, reactive } from 'petite-vue'
import { compile, serialize, stringify } from 'stylis'
import { defineElementProperty } from './property'
import { getOrPut, newInstance, InstanceCtor, emit } from './util'

const docCache = new WeakMap<Document, DocumentFragment>()

function cloneDocContent(doc: Document) {
  const docFragment = getOrPut(docCache, doc, () => {
    const temp = document.createElement('template')
    temp.innerHTML = doc.head.innerHTML + doc.body.innerHTML
    for (const node of temp.content.querySelectorAll('script')) {
      node.remove()
    }
    for (const node of temp.content.querySelectorAll('style')) {
      node.innerHTML = serialize(compile(node.innerHTML), stringify)
    }
    return temp.content
  })
  return Array.from(docFragment.childNodes).map((node) => document.importNode(node, true))
}

declare global {
  interface ImportMeta {
    document: Document
  }
}

interface ComponentConfig {
  $props?: string[]
}

interface ComponentApi {
  $emit: () => void
}

export function defineComponent<D extends ComponentConfig>(meta: ImportMeta, ctor: InstanceCtor<HTMLElement, D & ThisType<ComponentApi>>) {
  const fileName = new URL(meta.url).pathname.replace(/^.*\/|\..*$/g, '')
  const tagName = fileName.includes('-') ? fileName : `x-${fileName}`
  const className = tagName.replace(/(^|\-)([a-z])/g, (_, __, c) => c.toUpperCase())

  const clazz = ({
    [className]: class extends HTMLElement {
      constructor() {
        super()

        const data = reactive(newInstance(ctor, this))
        Reflect.set(data, '$emit', emit.bind(null, this))

        for (const prop of (data.$props || [])) {
          defineElementProperty(this, prop, {
            default: Reflect.get(data, prop),
            get: () => Reflect.get(data, prop),
            set: (value) => Reflect.set(data, prop, value),
          })
        }

        const root = this.attachShadow({ mode: 'open' })
        const app = createApp(data)
        root.append(...cloneDocContent(meta.document))

        for (const node of root.children) {
          if (!(node instanceof HTMLStyleElement)) {
            app.mount(node)
          }
        }
      }
    }
  })[className] as new () => HTMLElement

  customElements.define(tagName, clazz)
  return clazz
}
