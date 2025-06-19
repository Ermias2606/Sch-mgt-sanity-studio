import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'attendanceRecord',
  title: 'Attendance Record',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Present', 'Absent', 'Late']
      },
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
      name: 'schoolClass',
      title: 'School Class',
      type: 'reference',
      to: [{ type: 'schoolClass' }],
      validation: Rule => Rule.required()
    })
  ]
})