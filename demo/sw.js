const reScript = /<script[\s\S]*?>([\s\S]*?)<\/script>/g

const parseDoc = (html) => {
  return new DOMParser().parseFromString(html, 'text/html')
}

async function fetchModuleHtml(req) {
  const res = await fetch(req)
  const originHtml = await res.text()

  let originScript = ''
  originHtml.replace(reScript, (_, content) => originScript += content)

  const escapedHtml = originHtml.replace(/(`|\$\{)/g, '\\$1')
  const metaScript = `import.meta.document=(${parseDoc})(\`${escapedHtml}\`)`
  const responseText = `${metaScript};${originScript}`

  const headers = new Headers(res.headers)
  headers.set('Content-Type', 'text/javascript')
  headers.set('Content-Length', (new Blob([responseText])).size)

  return new Response(responseText, {
    status: res.status,
    statusText: res.statusText,
    headers: headers
  })
}

self.addEventListener('fetch', (e) => {
  if (e.request.url.endsWith('.html?module')) {
    e.respondWith(fetchModuleHtml(e.request))
  }
})

self.addEventListener('install', (e) => e.waitUntil(self.skipWaiting()))
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()))
