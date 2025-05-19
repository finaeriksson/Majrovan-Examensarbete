


// schema för galleri kalender

export default {
    name: "galleryCalendar",
    title: "Galleri-kalender",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: " Titel",
            description: "Vår kalender"
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