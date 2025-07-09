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
      <section id="faq" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Câu hỏi thường gặp
          </h2>
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-6 py-5 bg-white text-left hover:bg-gray-50 transition-all duration-200"
                  >
                    <span className="text-base font-medium text-gray-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={clsx(
                        'h-5 w-5 text-gray-500 transition-transform duration-300',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={clsx(
                      'px-6 pt-0 pb-5 text-sm text-gray-700 leading-relaxed transition-all duration-300',
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
