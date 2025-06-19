import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import student from './schema/student'
import parent from './schema/parent'
import teacher from './schema/teacher'
import schoolclass from './schema/schoolclass'
import subject from './schema/subject'
import feepayment from './schema/feepayment'
import announcement from './schema/announcement'
import grade from './schema/grade'
import attendancerecord from './schema/attendancerecord'

export default defineConfig({
    name: 'default',
    title: 'school management system',
    projectId: 'your_project_id',
    dataset: 'production',
    plugins: [deskTool()],
    schema: {
        types: [
            student,
            parent,
            teacher,
            schoolclass,
            subject,
            feepayment,
            announcement,
            grade,
            attendancerecord,
        ],
    },
})
