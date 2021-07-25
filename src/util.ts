export function getOrPut<K extends object, V>(map: WeakMap<K, V>, key: K, init: (key: K) => V) {
  let value = map.get(key)
  if (value === undefined) {
    value = init(key)
    map.set(key, value)
  }
  return value
}

type Factory<A, R> = (...args: A[]) => R
type Constructor<A, R> = new (...args: A[]) => R
export type InstanceCtor<A, R> = Factory<A, R> | Constructor<A, R>

export function newInstance<A, R>(ctor: InstanceCtor<A, R>, ...args: A[]): R {
  try {
    return new (ctor as Constructor<A, R>)(...args)
  } catch (err) {
    if (err.message.endsWith('is not a constructor')) {
      return (ctor as Factory<A, R>)(...args)
    } else {
      throw err
    }
  }
}

export function emit(target: EventTarget, type: string, detail: unknown, options: EventInit = {}) {
  return target.dispatchEvent(new CustomEvent(type, { detail, ...options }))
}
