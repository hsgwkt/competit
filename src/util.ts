export function getOrPut<K extends object, V>(map: WeakMap<K, V>, key: K, init: (key: K) => V) {
  let value = map.get(key)
  if (value === undefined) {
    value = init(key)
    map.set(key, value)
  }
  return value
}

export function emit(target: EventTarget, type: string, detail: unknown, options: EventInit = {}) {
  return target.dispatchEvent(new CustomEvent(type, { detail, ...options }))
}
