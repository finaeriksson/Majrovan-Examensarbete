
// schemas/blogpost.ts
export default {
    name: 'blogpost',
    type: 'document',
    title: 'Blogginlägg',
    fields: [
      {
        name: 'gallery',
        type: 'array',
        title: 'Bildgalleri',
        of: [
            {
                type: 'image',
                options: {
                    hotspot: true,
                }
            }
        ]
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Taggar',
        of: [{ type: 'string' }]
      },
      {
        name: 'title',
        type: 'string',
        title: 'Titel'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        }
      },
      {
        name: 'body',
        type: 'array',
        title: 'Innehåll',
        of: [{ type: 'block' }],
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Publiceringsdatum',
        initialValue: () => new Date().toISOString(), //automatiskt skriva dagens datum
      }
    ]
  }
  