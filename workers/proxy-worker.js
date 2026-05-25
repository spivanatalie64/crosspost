addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const target = `https://spivanatalie64.github.io/acreetionos-blog${url.pathname}${url.search}`
  const req = new Request(target, {
    method: request.method,
    headers: request.headers,
    body: request.body,
  })
  req.headers.set('Host', 'spivanatalie64.github.io')
  return fetch(req)
}
