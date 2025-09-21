

import BlogCamTrai from '@/components/BlogCamTrai'
import { Metadata } from 'next'
import Image from 'next/image'
import anh from '/src/images/huy.jpg'


export const metadata: Metadata = {
  title: 'Blog cắm trại',
  description: 'Những Blog Cắm Trại Được Yêu Thích Nhất',
}

export default async function BlogCamTraiPage() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-16">
    <div className="relative w-full h-[500px] mb-24 my-20">
        <Image src={anh.src} alt="Camping Hero" fill    className="object-cover rounded-2xl border-4 border-white shadow-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center px-6">
          <h1 className="text-5xl font-serif font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
            <span className="bg-gradient-to-r from-green-700 via-emerald-500 to-lime-400 bg-clip-text text-transparent drop-shadow-md">
            Blog cắm trại
          </span>
          </h1>
        
        </div>
      </div>

      <BlogCamTrai />
    </div>
    
    </>
  )
}
