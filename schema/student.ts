// ./schemas/student.ts

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'studentId',
      title: 'Student ID',
      type: 'string'
    }),
    defineField({
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'date'
    }),
    defineField({
      name: 'parent',
      title: 'Parent',
      type: 'reference',
      to: [{ type: 'parent' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'schoolClass',
      title: 'School Class',
      type: 'reference',
      to: [{ type: 'schoolClass' }],
      validation: Rule => Rule.required()
    })
  ]
})
