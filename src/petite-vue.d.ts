declare module 'petite-vue' {
  export interface App {
    mount: (el?: string | Element | null) => App
  }
  export const createApp: (initialData?: any) => App
  export const reactive: <T extends object>(target: T) => T
  export const nextTick: (fn: () => void) => Promise<void>
}