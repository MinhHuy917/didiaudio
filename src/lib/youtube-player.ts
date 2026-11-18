// Loaded only after a visitor asks to play a video. No API key or extra dependency.
export type YouTubePlayer = { destroy: () => void }
type PlayerOptions = {
  videoId: string
  host: string
  width: string
  height: string
  playerVars: {
    autoplay: number
    playsinline: number
    origin: string
    hl: string
  }
  events: { onReady: () => void; onError: (event: { data: number }) => void }
}
type YouTubeAPI = {
  Player: new (element: HTMLElement, options: PlayerOptions) => YouTubePlayer
}
declare global {
  interface Window {
    YT?: YouTubeAPI
    onYouTubeIframeAPIReady?: () => void
  }
}
let pending: Promise<YouTubeAPI> | undefined
export function loadYouTubeAPI(): Promise<YouTubeAPI> {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (pending) return pending
  pending = new Promise<YouTubeAPI>((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady
    const script = document.createElement('script')
    const timeout = window.setTimeout(() => fail(), 15000)
    function cleanup() {
      window.clearTimeout(timeout)
      if (window.onYouTubeIframeAPIReady === ready)
        window.onYouTubeIframeAPIReady = previous
    }
    function fail() {
      cleanup()
      script.remove()
      pending = undefined
      reject(new Error('YouTube API unavailable'))
    }
    function ready() {
      cleanup()
      if (window.YT?.Player) resolve(window.YT)
      else fail()
      previous?.()
    }
    window.onYouTubeIframeAPIReady = ready
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    script.onerror = fail
    document.head.appendChild(script)
  })
  return pending
}
