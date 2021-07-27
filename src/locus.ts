import { reactive } from 'petite-vue'

export interface URLConfig {
  path?: string
  query?: Record<string, string>
  params?: string[]
}

export type URLValue = string | URLConfig

const basePath = new URL(document.baseURI).pathname

const store = reactive({
  path: '',
  query: {} as Record<string, string>,
  params: [] as string[],
})

function resolveUrl(value: URLValue) {
  const conf = typeof value === 'string' ? { path: value } : value

  let path = conf.path || store.path
  const query = conf.query || {}
  const params = conf.params ? conf.params.slice() : []

  path = path.replace(/[^/]+/g, (key) => {
    const param = key.startsWith('_') && params.pop()
    return param ? `_${param}` : key
  })

  if (path.startsWith('/')) {
    path = basePath.replace(/\/$/, '') + path
  }

  const url = new URL(path, location.href)
  url.pathname = url.pathname.replace(/[^/]+/g, (s) => {
    const p = s.startsWith('_') && params.pop()
    return p ? `_${p}` : s
  })

  for (const [key, value] of Object.entries(query)) {
    url.searchParams.set(key, value)
  }

  return url.href
}

function pushUrl(value: URLValue) {
  const currentUrl = resolveUrl(store)
  const newUrl = resolveUrl(value)

  if (currentUrl !== newUrl) {
    history.pushState(null, '', newUrl)
    dispatchEvent(new PopStateEvent('popstate'))
  }
}

function replaceUrl(value: URLValue) {
  history.replaceState(history.state, '', resolveUrl(value))
  dispatchEvent(new PopStateEvent('popstate'))
}

function updateStore() {
  store.path = location.pathname.replace(basePath, '/')
  store.query = Object.fromEntries(new URLSearchParams(location.search))
  store.params = store.path.split('/').filter((k) => k.startsWith('_')).map((k) => k.substr(1))
}

function toEndpoint(url: string) {
  const urlObj = new URL(url, location.href)
  return (urlObj.origin + urlObj.pathname).replace(/\/$/, '')
}

function isMatchUrl(basis: URLValue, value: URLValue, exact = false) {
  const basisUrl = toEndpoint(resolveUrl(basis))
  const url = toEndpoint(resolveUrl(value))
  return basisUrl === url || (!exact && url.startsWith(basisUrl + '/'))
}

function backUrl() {
  history.back()
}

function onGlobalClick(e: MouseEvent) {
  const a = e.composedPath().find((el) => el instanceof HTMLAnchorElement && el.href) as HTMLAnchorElement | null
  const anyKey = e.altKey || e.ctrlKey || e.shiftKey

  if (a && !a.target && !anyKey && isMatchUrl('/', a.href)) {
    e.preventDefault()
    pushUrl(a.href)
  }
}

addEventListener('click', onGlobalClick)
addEventListener('popstate', updateStore)
updateStore()

export default {
  get path() {
    return store.path
  },
  get query() {
    return store.query
  },
  get params() {
    return store.params
  },
  push: pushUrl,
  replace: replaceUrl,
  resolve: resolveUrl,
  back: backUrl,
  isMatch(value: URLValue, exact = false) {
    return isMatchUrl(value, store, exact)
  }
}