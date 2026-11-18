'use client'

import { useState } from 'react'
import { faqs } from '@/data/faqs'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import clsx from 'clsx'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-audio-darker px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-audio-electricBlue/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-audio-neonPurple/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
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
                className="overflow-hidden rounded-2xl border border-audio-electricBlue/20 bg-audio-light/30 backdrop-blur-sm transition-all duration-300 hover:border-audio-electricBlue/40"
              >
                <button
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
    </section>
  )
}
