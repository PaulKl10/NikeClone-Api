export default {
    name: 'variant',
    type: 'document',
    title: 'Variant',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image', 
            options: {
              hotspot: true,
            },}]
        },
        {
            name: 'mainImage',
            title: 'Image principale',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            title: 'Product',
            name: 'product',
            type: 'reference',
            to: [
                {
                    type: 'product'
                }
            ]
        },
        {
            title: 'Color',
            name: 'color',
            type: 'reference',
            to: [
                {
                    type: 'color'
                }
            ]
        }
    ]
  }