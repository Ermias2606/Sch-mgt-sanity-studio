import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'schoolClass',
  title: 'School Class',
  type: 'document',
  fields: [
    defineField({
      name: 'className',
      title: 'Class Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainTeacher',
      title: 'Main Teacher',
      type: 'reference',
      to: [{ type: 'teacher' }]
    })
  ]
})