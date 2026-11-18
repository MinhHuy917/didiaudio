import { absoluteUrl } from './seo'
import {
  youtubeWatchUrl,
  videoLibraryPath,
  type ProductVideo,
  type VideoLocale,
} from './product-videos'

export function videoSchema(videos: ProductVideo[], locale: VideoLocale) {
  return {
    '@context': 'https://schema.org',
    '@graph': videos
      .filter((video) => video.uploadDate && video.durationSeconds > 0)
      .map((video) => ({
        '@type': 'VideoObject',
        '@id': absoluteUrl(`${videoLibraryPath}#video-${video.id}`),
        name: video.copy[locale].title,
        description: video.copy[locale].description,
        thumbnailUrl: [absoluteUrl(video.thumbnail)],
        uploadDate: video.uploadDate,
        duration: `PT${video.durationSeconds}S`,
        inLanguage: video.language,
        url: youtubeWatchUrl(video.id),
        ...(video.embeddable
          ? { embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}` }
          : {}),
        author: {
          '@type': 'Organization',
          name: video.channel,
          url: `https://www.youtube.com/channel/${video.channelId}`,
        },
      })),
  }
}
