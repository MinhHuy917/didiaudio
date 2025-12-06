'use client'

import { useState } from 'react'
import { faqs } from '@/data/faqs'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import Script from 'next/script'
import clsx from 'clsx'


export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
  
    const toggle = (index: number) => {
      setOpenIndex(openIndex === index ? null : index)
    }
  
    return (
      <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-audio-darker overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-audio-electricBlue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-audio-neonPurple/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-audio-electricBlue via-audio-neonPurple to-audio-neonOrange bg-clip-text text-transparent">
              Câu hỏi thường gặp
            </span>
          </h2>
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className="bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-2xl overflow-hidden hover:border-audio-electricBlue/40 transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-audio-light/20 transition-all duration-200"
                  >
                    <span className="text-base font-medium text-white pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={clsx(
                        'h-5 w-5 text-audio-electricBlue transition-transform duration-300 flex-shrink-0',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={clsx(
                      'px-6 pt-0 pb-5 text-sm text-gray-300 leading-relaxed transition-all duration-300',
                      isOpen ? 'block' : 'hidden'
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }


export const FAQSchema = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((item) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
