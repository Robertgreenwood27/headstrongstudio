import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'stylist',
  title: 'Stylist',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (for internal use. just click generate)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'picture',
              title: 'Picture',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'announcements',
      title: 'Announcements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
            }),
            defineField({
              name: 'picture',
              title: 'Picture',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
                name: 'active',
                title: 'Active',
                type: 'boolean',
                validation: Rule => Rule.required()
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              description: 'Enter a description of the image so screen readers can read it',
              options: {
                isHighlighted: true
              }
            }
          ]
        },
      ],
    }),
    
  ],
  fieldsets: [
    {
      name: 'hidden',
      title: 'Hidden fields',
      options: {
        collapsible: true,
        collapsed: true,
        description: 'Fields that are hidden from plain sight',
      },
    },
  ],
})
