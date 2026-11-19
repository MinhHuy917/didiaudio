import Product3D from '@/components/product-3d/Product3D'
import { RentalOffer } from '@/components/RentalOffer'
import type { Product3DConfig } from '@/lib/product-3d'
import { HomeSection } from '@/components/HomeSection'

export function HomeRentalPreview({
  product,
  model,
}: {
  product: { name: string; image: string; id: string; price: number }
  model?: Product3DConfig
}) {
  return (
    <HomeSection
      tone="product"
      width="narrow"
      id="products"
      aria-labelledby="rental-preview-title"
    >
      <h2
        id="rental-preview-title"
        className="text-center text-2xl font-bold sm:text-3xl"
      >
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
    </HomeSection>
  )
}
