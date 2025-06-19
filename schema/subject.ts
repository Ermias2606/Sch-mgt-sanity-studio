import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'subject',
  title: 'Subject',
  type: 'document',
  fields: [
    defineField({
      name: 'subjectName',
      title: 'Subject Name',
      type: 'string',
      validation: Rule => Rule.required()
    })
  ]
})