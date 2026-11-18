export type GalleryPhoto = {
  src: string
  alt: string
  /** External reference photographs, never represented as our own rental photos. */
  source?: { name: string; url: string; credit: string }
}
