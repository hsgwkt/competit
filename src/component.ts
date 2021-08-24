import { createApp, reactive } from 'petite-vue'
import { compile, serialize, stringify } from 'stylis'
import { defineElementProperty } from './property'
import { getOrPut, emit } from './util'

const docCache = new WeakMap<Document, DocumentFragment>()

function cloneContent(el: Document | HTMLElement) {
  const docFragment = getOrPut(docCache, el, () => {
    const temp = document.createElement('template')
    temp.innerHTML = el instanceof Document
      ? el.head.innerHTML + el.body.innerHTML
      : el instanceof HTMLTemplateElement
      ? el.innerHTML
      : el.outerHTML
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

export interface ComponentConfig {
  $el?: Document | HTMLElement
  $props?: string[]
}

export interface ComponentApi {
  $emit: () => void
}

export type ComponentData = ComponentConfig & ThisType<ComponentApi>

export type ComponentConstructor = (el: HTMLElement) => void | ComponentData

export function createComponent(meta: ImportMeta | null, ctor?: ComponentConstructor) {
  return class Component extends HTMLElement {
    constructor() {
      super()

      const data = reactive(ctor?.(this) || {})
      Reflect.set(data, '$emit', emit.bind(null, this))

      for (const prop of (data.$props || [])) {
        defineElementProperty(this, prop, {
          default: Reflect.get(data, prop),
          get: () => Reflect.get(data, prop),
          set: (value) => Reflect.set(data, prop, value),
        })
      }

      const $el = data.$el || meta?.document

      if ($el) {
        const root = this.attachShadow({ mode: 'open' })
        const app = createApp(data)
        root.append(...cloneContent($el))

        for (const node of root.children) {
          if (!(node instanceof HTMLStyleElement)) {
            app.mount(node)
          }
        }
      }
    }
  } as new () => HTMLElement
}

export function defineComponent(meta: ImportMeta | string, ctor?: ComponentConstructor) {
  const clazz = createComponent(typeof meta === 'string' ? null : meta, ctor)
  const tagName = typeof meta === 'string'
    ? meta
    : new URL(meta.url).pathname.replace(/^.*\/|\..*$/g, '').replace(/^([^-]+)$/, 'x-$1')
  customElements.define(tagName, clazz)
  return clazz
}
