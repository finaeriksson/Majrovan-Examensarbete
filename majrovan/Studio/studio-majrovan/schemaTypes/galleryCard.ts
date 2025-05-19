

// schema för galleri kort

export default {
    name: "galleryCard",
    title: "Galleri-kort",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: " Titel",
            description: "Våra bilder"
        },
        {
          name: "slug",
          type: "slug",
          title: "URL-slug",
          options: { source: "title", maxLength: 96 }
        },
        {
          name: "images",
          type: "array",
          title: "Bilder",
          of: [{ type: "image", options: { hotspot: true } }]
        }
    ]
}