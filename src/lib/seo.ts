import { type Metadata } from 'next'
import logo from '@/images/logo.png'

export const seoSite = {
  url: 'https://www.didi-audio.com',
  name: 'ĐiĐi Audio',
  telephone: '0339197917',
  area: 'Đà Nẵng',
  address: '41 Tống Duy Tân, Đà Nẵng',
  organizationId: 'https://www.didi-audio.com/#organization',
}
export function absoluteUrl(path: string) {
  return new URL(path, seoSite.url).href
}
export function createPageMetadata({
  title,
  description,
  path,
  image = '/og-image.jpg',
  locale = 'vi_VN',
}: {
  title: string
  description: string
  path: string
  image?: string
  locale?: string
}): Metadata {
  const url = absoluteUrl(path)
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: seoSite.name,
      locale,
      images: [{ url: absoluteUrl(image), alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(image)],
    },
  }
}
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': seoSite.organizationId,
    name: seoSite.name,
    url: seoSite.url,
    logo: absoluteUrl(logo.src),
    telephone: seoSite.telephone,
    areaServed: seoSite.area,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '41 Tống Duy Tân',
      addressLocality: 'Đà Nẵng',
      addressCountry: 'VN',
    },
  }
}
export function rentalServiceSchema(product?: {
  id: string
  name: string
  price: number
  image: string
}) {
  const url = product ? absoluteUrl(`/products/${product.id}`) : seoSite.url
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#rental-service`,
    name: product ? `Thuê ${product.name}` : 'Dịch vụ thuê loa tại Đà Nẵng',
    serviceType: 'Cho thuê loa',
    url,
    areaServed: seoSite.area,
    provider: { '@id': seoSite.organizationId },
    ...(product
      ? {
          image: absoluteUrl(product.image),
          offers: {
            '@type': 'Offer',
            url,
            businessFunction: 'http://purl.org/goodrelations/v1#LeaseOut',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: product.price * 1000,
              priceCurrency: 'VND',
              referenceQuantity: {
                '@type': 'QuantitativeValue',
                value: 1,
                unitText: 'ngày',
                unitCode: 'DAY',
              },
            },
          },
        }
      : {}),
  }
}
export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
