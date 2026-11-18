export const videoLocales = ['vi', 'en', 'ko', 'ru', 'zh'] as const
export type VideoLocale = (typeof videoLocales)[number]
export const videoCategories = [
  'review',
  'sound',
  'karaoke',
  'bluetooth',
  'usage',
  'outdoor',
] as const
export type VideoCategory = (typeof videoCategories)[number]
export type VideoCopy = { title: string; description: string }
export type ProductVideo = {
  id: string
  originalTitle: string
  channel: string
  channelId: string
  official: boolean
  language: 'vi' | 'en' | 'de'
  uploadDate: string
  durationSeconds: number
  thumbnail: string
  categories: VideoCategory[]
  embeddable: boolean
  verifiedAt: string
  copy: Record<VideoLocale, VideoCopy>
}
export const videoLibraryPath = '/video-jbl-partybox-320'
export const videoRentalHref = '/products/loa-jbl-partyBox-stage-320#dat-thue'
export function videoLocale(value?: string): VideoLocale {
  return videoLocales.includes(value as VideoLocale)
    ? (value as VideoLocale)
    : 'vi'
}
export function videoLibraryHref(locale: VideoLocale) {
  return locale === 'vi'
    ? videoLibraryPath
    : `${videoLibraryPath}?lang=${locale}`
}
export function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`
}
export function filterVideos(
  videos: ProductVideo[],
  category: VideoCategory | 'all',
) {
  return category === 'all'
    ? videos
    : videos.filter((video) => video.categories.includes(category))
}
export function formatVideoDuration(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
}
