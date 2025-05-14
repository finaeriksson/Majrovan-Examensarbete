

// src/hooks/useSanityGalleryImages.ts
import { useState, useEffect } from "react"
import sanityClient from "../lib/sanityClient"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source: SanityImageSource) {
  return builder.image(source).url()!
}

export default function useSanityGalleryImages() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Hämta alla gallery-documents med deras images-array
    const query = `*[_type == "gallery"]{
      "images": images[].asset
    }`

    sanityClient.fetch<{ images: SanityImageSource[] }[]>(query)
      .then((galleries) => {
        // platta ut till en enkel array av URL:er
        const urls = galleries
          .flatMap(g => g.images)
          .map(imgAsset => urlFor(imgAsset))
        setImages(urls)
      })
      .catch(console.error)
  }, [])

  return images
}
