import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'grade',
  title: 'Grade',
  type: 'document',
  fields: [
    defineField({
      name: 'score',
      title: 'Score',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'examType',
      title: 'Exam Type',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: [{ type: 'student' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'reference',
      to: [{ type: 'subject' }],
      validation: Rule => Rule.required()
    })
  ]
})