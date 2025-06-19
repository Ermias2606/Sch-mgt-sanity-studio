 import {  } from "module"; defineType, defineField } from 'sanity'

export default defineType({
  name: 'parent',
  title: 'Parent',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string'
    }),
    defineField({
      name: 'students',
      title: 'Students',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'student' }] }]
    })
  ]
})