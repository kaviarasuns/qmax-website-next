export interface CaseStudy {
  serialNumber?: number
  id: string
  title: string
  category: string
  images: string[]
  features: string[]
  summary: string
  importantParts: string[]
  salientFeatures: string[]
  scopeOfWork: string[]
  /** Zero-based indices of images that should be displayed with black padding (object-contain on a black background) */
  paddedImages?: number[]
  /** Map of zero-based image index to rotation in degrees applied before display (e.g. { 0: 90, 2: 180 }) */
  rotatedImages?: Record<number, number>
  /** Map of zero-based image index to scale multiplier used to enlarge selected images */
  enlargedImages?: Record<number, number>
  /** Spec chips shown on the listing card */
  specs?: { label: string; value: string }[]
  /** Highlight stat shown on the listing card */
  stats?: { value: string; label: string }
}
