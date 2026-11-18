/** Resource-only warming: never imports model-viewer, creates WebGL or parses GLB. */
export type ModelConnection = { saveData?: boolean; effectiveType?: string }
export function mayPrefetchModel(connection?: ModelConnection) {
  return (
    !connection?.saveData &&
    !['slow-2g', '2g', '3g'].includes(connection?.effectiveType || '')
  )
}
export function hintModelDownload(url: string) {
  const href = new URL(url, document.baseURI).href
  const existing = Array.from(
    document.querySelectorAll<HTMLLinkElement>(
      'link[data-didi-model-prefetch]',
    ),
  ).find((link) => link.href === href)
  if (existing) return () => {}
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.as = 'fetch'
  link.crossOrigin = 'anonymous'
  link.setAttribute('fetchpriority', 'low')
  link.dataset.didiModelPrefetch = 'true'
  link.href = href
  document.head.appendChild(link)
  return () => link.remove()
}
