import Image from 'next/image'
import { Metadata } from 'next'

type Props = {
  title: string
  description: string
  content: string
  image: string
  date: string
}

export default function BlogArticlePage({ title, description, content, image, date }: Props) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">{title}</h1>
        <p className="text-gray-600 text-base mb-2">{description}</p>
        <p className="text-sm text-gray-400">{new Date(date).toLocaleDateString('vi-VN')}</p>
      </div>

      <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden mb-10">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="prose prose-lg max-w-none prose-green">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  )
}
