import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'feePayment',
  title: 'Fee Payment',
  type: 'document',
  fields: [
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'paymentDate',
      title: 'Payment Date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string'
    }),
    defineField({
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: [{ type: 'student' }],
      validation: Rule => Rule.required()
    })
  ]
})