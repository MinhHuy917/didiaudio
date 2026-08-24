'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Music, Volume2, ShieldCheck, Truck, Zap, Phone, ExternalLink } from 'lucide-react'

import { products } from '@/data/products'

// Import contact icons if available or use generic
type LandingContent = {
  language: string
  hero: {
    badge: string
    headline: string
    subheadline: string
    cta: string
    ctaLink: string
    ctaIcon: string
  }
  features: {
    title: string
    items: {
      title: string
      desc: string
      icon: string
    }[]
  }
  useCases: {
    title: string
    items: string[]
  }
  pricing: {
    title: string
    bookBtn: string
  }
  contactGuide: {
    title: string
    desc: string
    platform: string
    link: string
    buttonText: string
  }
}

export default function InternationalLanding({ content }: { content: LandingContent }) {
  // Get main products
  const mainProducts = products.filter(p => p.id === 'loa-jbl-partyBox-encore-2' || p.id === 'loa-jbl-partyBox-stage-320')

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className={className} />
      case 'ShieldCheck': return <ShieldCheck className={className} />
      case 'Zap': return <Zap className={className} />
      case 'Phone': return <Phone className={className} />
      default: return <CheckCircle2 className={className} />
    }
  }

  return (
    <div className="bg-audio-darker min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="text-cyan-400 font-semibold text-sm">{content.hero.badge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {content.hero.headline}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              {content.hero.subheadline}
            </p>

            <Link
              href={content.hero.ctaLink}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
            >
              {content.hero.cta}
              <ExternalLink className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features & Use Cases */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">{content.features.title}</h2>
              <div className="space-y-6">
                {content.features.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      {getIcon(item.icon, "w-6 h-6")}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">{content.useCases.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.useCases.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 text-center flex flex-col items-center gap-3"
                  >
                    <Music className="w-8 h-8 text-purple-400" />
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Pricing */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">{content.pricing.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {mainProducts.map((product) => (
              <div key={product.id} className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden flex flex-col">
                <div className="aspect-square relative p-8 flex items-center justify-center bg-black/40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-cyan-400">{product.name}</h3>
                  <p className="text-gray-400 mb-6 text-sm flex-1">{product.catalogue}</p>

                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-4xl font-black text-white">{product.price.toLocaleString('vi-VN')}k</span>
                    <span className="text-gray-400 mb-1">VND / day</span>
                  </div>

                  <Link
                    href={content.contactGuide.link}
                    target="_blank"
                    className="block w-full py-4 text-center font-bold rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                  >
                    {content.pricing.bookBtn}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Guide */}
      <section className="py-20 bg-gradient-to-t from-black to-black/0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm">
            <Phone className="w-12 h-12 mx-auto text-cyan-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">{content.contactGuide.title}</h2>
            <p className="text-lg text-gray-300 mb-8">{content.contactGuide.desc}</p>
            <div className="inline-block p-4 rounded-2xl bg-black/50 border border-white/10 mb-8">
              <p className="text-gray-400 text-sm mb-1">{content.contactGuide.platform}</p>
              <p className="text-2xl font-mono font-bold text-white">+84 33 919 7917</p>
            </div>
            <br />
            <Link
              href={content.contactGuide.link}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-8 py-4 font-bold transition-transform hover:scale-105"
            >
              {content.contactGuide.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
