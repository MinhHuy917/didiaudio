'use client'

import { useState } from 'react'
import { faqs } from '@/data/faqs'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import clsx from 'clsx'
import { HomeSection } from '@/components/HomeSection'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <HomeSection tone="faq" width="medium" id="faq" aria-labelledby="faq-title">
      <div>
        <h2
          id="faq-title"
          className="mb-6 text-center text-2xl font-bold text-white sm:text-3xl"
        >
          Câu hỏi thường gặp
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-audio-electricBlue/20 bg-audio-light/30 backdrop-blur-sm transition-all duration-300 hover:border-audio-electricBlue/40"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-all duration-200 hover:bg-audio-light/20"
                >
                  <span className="pr-4 text-base font-medium text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={clsx(
                      'h-5 w-5 flex-shrink-0 text-audio-electricBlue transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={clsx(
                    'px-6 pb-5 pt-0 text-sm leading-relaxed text-gray-300 transition-all duration-300',
                    isOpen ? 'block' : 'hidden',
                  )}
                >
                  {item.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </HomeSection>
  )
}
