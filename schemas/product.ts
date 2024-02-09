import { defineField } from "sanity";
import variant from "./variant";

// schemas/pet.js
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
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
        title: 'Category',
        name: 'category',
        type: 'reference',
        to: [{type: 'category'}],
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'published',
        type: 'boolean',
        title: 'Published'
      }
    ],
    preview: {
        select: {
          title: 'name',
          media: 'mainImage',
        },
        
      },
  }