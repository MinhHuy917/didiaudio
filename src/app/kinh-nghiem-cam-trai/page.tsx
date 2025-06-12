

import BlogCamTrai from '@/components/BlogCamTrai'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Blog cắm trại',
  description: 'Những Blog Cắm Trại Được Yêu Thích Nhất',
}

export default async function BlogCamTraiPage() {
  return (
    <>
      <BlogCamTrai />
    </>
  )
}
