
export default {
    name: 'card',
    type: 'document',
    title: 'Kort',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titel',
            description: 'Ange kortets namn',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Pris',
            description: 'Ange pris',
        },
        { //varje kort har endast en bild
            name: 'image',
            type: 'image',
            title: 'Bild',
            options: {hotspot: true},  //gör möjligt att beskära bilder
            
        },
    ],
}