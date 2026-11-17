export type Product3DConfig = {
  enabled: boolean
  modelUrl: string
  posterUrl?: string
  arEnabled?: boolean
  usdzUrl?: string
  dimensionsMeters?: { width: number; height: number; depth: number }
  dimensionSource?: string
  /** Only set after checking the actual GLB/USDZ bounds and a physical device. */
  scaleVerified?: boolean
}

export function validAssetUrl(value: unknown, extensions: string[]) {
  if (typeof value !== 'string' || !value || value.startsWith('//'))
    return false
  try {
    const url = new URL(value, 'https://www.didi-audio.com')
    return (
      (value.startsWith('/') || url.protocol === 'https:') &&
      !url.username &&
      !url.password &&
      !url.hash &&
      extensions.some((ext) => url.pathname.toLowerCase().endsWith(ext))
    )
  } catch {
    return false
  }
}

export function canView3D(config?: Product3DConfig): config is Product3DConfig {
  return (
    config?.enabled === true &&
    validAssetUrl(config.modelUrl, ['.glb', '.gltf'])
  )
}

export function canUseAR(config: Product3DConfig) {
  const size = config.dimensionsMeters
  return (
    canView3D(config) &&
    config.arEnabled === true &&
    config.scaleVerified === true &&
    !!config.dimensionSource?.trim() &&
    !!size &&
    [size.width, size.height, size.depth].every(
      (n) => Number.isFinite(n) && n > 0,
    ) &&
    (!config.usdzUrl || validAssetUrl(config.usdzUrl, ['.usdz']))
  )
}
