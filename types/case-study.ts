export interface CaseStudy {
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
  /** Spec chips shown on the listing card */
  specs?: { label: string; value: string }[]
  /** Highlight stat shown on the listing card */
  stats?: { value: string; label: string }
}
