type AttrValue = null | string
type AttrSetter = (value: AttrValue) => void

const attrElMap = new WeakMap<Element, Map<string, AttrSetter[]>>()

const attrObserver = new MutationObserver((records) => {
  for (const { target, attributeName } of records) {
    if (target instanceof Element && attributeName) {
      const nameMap = attrElMap.get(target)
      if (nameMap) {
        const value = target.getAttribute(attributeName)
        const setters = nameMap.get(attributeName) || []
        setters.forEach((setter) => setter(value))
      }
    }
  }
})

function defineAttr(el: Element, name: string, setter: AttrSetter) {
  let nameMap = attrElMap.get(el)
  if (!nameMap) {
    nameMap = new Map()
    attrElMap.set(el, nameMap)
  }

  let setters = nameMap.get(name)
  if (!setters) {
    setters = []
    nameMap.set(name, setters)
  }

  setters.push(setter)
  attrObserver.observe(el, {
    attributes: true,
    attributeFilter: [...nameMap.keys()],
  })
}

function parseAttrValue(type: string, value: AttrValue): unknown {
  if (value === null) {
    return undefined
  }
  if (type === 'boolean') {
    return value !== 'false'
  }
  if (type === 'number' || type === 'bigint') {
    const str = value.trim()
    return str ? Number(str) : NaN
  }
  if (type === 'object') {
    try {
      return JSON.parse(value)
    } catch {
      return null
    }
  }
  return value
}

export type AccessorConfig<T> = {
  default: T
  get: () => T
  set: (value: T) => void
}

export function defineElementProperty<E extends Element, P extends string, T>(
  el: E,
  propName: P,
  config: AccessorConfig<T>,
): asserts el is E & Record<P, T> {
  const attrName = propName.replace(/(?=[A-Z])/g, '-').toLowerCase()
  const attrParser = parseAttrValue.bind(null, typeof config.default)
  const setter = (value: unknown) => config.set(value === undefined ? config.default : value as T)
  const attrSetter = (value: AttrValue) => setter(attrParser(value))

  let initialValue: unknown = undefined

  if (el.hasAttribute(attrName)) {
    initialValue = attrParser(el.getAttribute(attrName))
  }

  if (initialValue === undefined) {
    initialValue = Reflect.get(el, propName)
  }

  setter(initialValue)

  Object.defineProperty(el, propName, { get: config.get, set: setter })
  defineAttr(el, attrName, attrSetter)
}

export function defineElementProperties<E extends Element, D extends object>(el: E, data: D): asserts el is E & D {
  for (const [name, defaultValue] of Object.entries(data)) {
    defineElementProperty(el, name, {
      default: defaultValue,
      get: () => Reflect.get(data, name),
      set: (value) => Reflect.set(data, name, value),
    })
  }
}
