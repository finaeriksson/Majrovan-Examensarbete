

// src/hooks/useSanityGalleryImages.ts
import { useState, useEffect } from "react"
import sanityClient from "../lib/sanityClient"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

const builder = imageUrlBuilder(sanityClient)
const urlFor = (source: SanityImageSource) => builder.image(source).url()


export default function useSanityGalleryImages(docType: 'galleryCard' | 'galleryCalendar') {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Hämta alla gallery-documents med deras images-array
    const query = `*[_type == "${docType}"]{
      "images": images[].asset
    }`

    sanityClient
      .fetch<{ images: SanityImageSource[] }[]>(query)
      .then(docs =>
        setImages(
          docs
            .flatMap(d => d.images ?? [])
            .map(img => urlFor(img!))
        )
      )
      .catch(console.error)
  }, [docType])

  return images
}
