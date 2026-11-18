import Product3D from '@/components/product-3d/Product3D'
import { RentalOffer } from '@/components/RentalOffer'
import type { Product3DConfig } from '@/lib/product-3d'

export function HomeRentalPreview({
  product,
  model,
}: {
  product: { name: string; image: string; id: string; price: number }
  model?: Product3DConfig
}) {
  return (
    <section
      id="products"
      aria-labelledby="rental-preview-title"
      className="mx-auto max-w-xl scroll-mt-28 px-4 py-8 sm:px-6"
    >
      <h2 id="rental-preview-title" className="text-center text-2xl font-bold">
        Xem loa từ mọi góc
      </h2>
      <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
        <Product3D
          config={model}
          name={product.name}
          image={product.image}
          preview
        />
      </div>
      <RentalOffer product={product} />
    </section>
  )
}
