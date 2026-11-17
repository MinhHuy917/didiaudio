import type { Product3DConfig } from '@/lib/product-3d'

// Repository-managed assets. See public/models/stage-320/SOURCE.md before replacing.
export const product3D: Record<string, Product3DConfig> = {
  'loa-jbl-partyBox-stage-320': {
    enabled: true,
    modelUrl: '/models/stage-320/stage-320.glb',
    arEnabled: false,
    scaleVerified: false,
    dimensionsMeters: { width: 0.335, height: 0.67, depth: 0.385 },
    dimensionSource: 'https://vn.jbl.com/loudspeakers/PARTYBOX-STAGE-320.html',
    // GLB includes an extended handle (total height ~1.043m).
    // Keep AR off until real extended dimensions have been confirmed.
    // Do not use the unrelated USDZ currently returned by the supplier API.
  },
}
