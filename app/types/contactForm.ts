export interface ContactForm {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  subject: string
  message: string
  files: File[]
  legitimateInquiry: boolean
}