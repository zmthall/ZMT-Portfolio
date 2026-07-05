<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-black text-white">
      <NuxtImg
        src="/images/pages/index/face-thallas.png"
        alt="Zachary Thallas"
        class="hidden lg:block absolute bottom-0 right-0 h-full object-cover opacity-25"
      />

      <LayoutContainer class="relative z-10 py-28 lg:py-36 mx-auto">
        <div class="max-w-3xl space-y-6">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
            Contact
          </p>

          <h1>
            Let's Build Something Great Together.
          </h1>

          <p class="max-w-2xl text-lg leading-8 text-slate-300">
            Whether you're looking for a developer, need help creating internal
            business software, or simply want to discuss an idea, I'd love to hear
            about your project.
          </p>
        </div>
      </LayoutContainer>
    </section>

    <!-- Contact Form -->
    <section class="bg-white">
      <LayoutContainer class="mx-auto space-y-8 py-20">
        <LayoutSectionDivider title="Start a Conversation" />

        <UiAlert
          variant="warning"
          title="Contact Form Temporarily Unavailable"
          class="mb-8"
        >
          The contact form is currently under development and is not accepting submissions
          at this time. If you'd like to discuss a project or get in touch, please email me
          directly at
          <a
            href="mailto:contact@zmtportfolio.com"
            class="font-semibold underline"
          >
            contact@zmtportfolio.com
          </a>.
          I typically respond within one to two business days.
        </UiAlert>

        <div class="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <UiCard class="contact-card space-y-8">
            <div class="space-y-3">
              <h2>
                Tell Me About Your Project
              </h2>

              <p class="max-w-3xl leading-8 text-slate-600">
                The more information you can provide, the better I can understand
                your goals and respond with something useful.
              </p>
            </div>

            <form class="space-y-8" @submit.prevent="handleSubmit">
              <div class="grid gap-6 md:grid-cols-2">
                <UiFormField
                  label="Full Name"
                  for-id="name"
                  :error="errors.name"
                  required
                >
                  <UiFormInput
                    id="name"
                    v-model="form.name"
                    placeholder="Your name"
                    :error="Boolean(errors.name)"
                    required
                  />
                </UiFormField>

                <UiFormField
                  label="Company"
                  for-id="company"
                  helper="Optional"
                >
                  <UiFormInput
                    id="company"
                    v-model="form.company"
                    placeholder="Company or organization"
                  />
                </UiFormField>

                <UiFormField
                  label="Email Address"
                  for-id="email"
                  :error="errors.email"
                  required
                >
                  <UiFormInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="email@example.com"
                    :error="Boolean(errors.email)"
                    required
                  />
                </UiFormField>

                <UiFormField
                  label="Phone"
                  for-id="phone"
                  helper="Optional"
                >
                  <UiFormInput
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                  />
                </UiFormField>

                <UiFormField
                  label="Project Type"
                  for-id="project-type"
                  helper="Select the closest match."
                >
                  <UiFormSelect
                    id="project-type"
                    v-model="form.projectType"
                    placeholder="Select a project type"
                    :options="projectOptions"
                  />
                </UiFormField>

                <UiFormField
                  label="Estimated Budget"
                  for-id="budget"
                  helper="Optional"
                >
                  <UiFormSelect
                    id="budget"
                    v-model="form.budget"
                    placeholder="Select a budget range"
                    :options="budgetOptions"
                  />
                </UiFormField>

                <UiFormField
                  label="Timeline"
                  for-id="timeline"
                  helper="Optional"
                >
                  <UiFormSelect
                    id="timeline"
                    v-model="form.timeline"
                    placeholder="Select a timeline"
                    :options="timelineOptions"
                  />
                </UiFormField>

                <UiFormField
                  label="Subject"
                  for-id="subject"
                  :error="errors.subject"
                  required
                >
                  <UiFormInput
                    id="subject"
                    v-model="form.subject"
                    placeholder="What would you like to discuss?"
                    :error="Boolean(errors.subject)"
                    required
                  />
                </UiFormField>
              </div>

              <UiFormField
                label="Project Details"
                for-id="message"
                :error="errors.message"
                helper="Tell me about your goals, timeline, or any questions you have."
                required
              >
                <UiFormTextarea
                  id="message"
                  v-model="form.message"
                  placeholder="Describe your project, idea, or question..."
                  :rows="8"
                  :error="Boolean(errors.message)"
                  required
                />
              </UiFormField>

              <UiFormField
                label="Attachments"
                for-id="attachments"
                helper="Optional: Upload screenshots, wireframes, project briefs, or reference files."
              >
                <UiFormFileUpload
                  id="attachments"
                  v-model="form.files"
                  accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                  multiple
                />
              </UiFormField>

              <div class="space-y-4">
                <UiFormCheckbox
                  v-model="form.legitimateInquiry"
                  label="I understand this form is intended for legitimate project inquiries."
                  required
                />

                <UiAlert
                  v-if="submitMessage"
                  :variant="submitStatus"
                  :title="submitTitle"
                >
                  {{ submitMessage }}
                </UiAlert>
              </div>

              <UiButton
                variant="brand"
                type="submit"
                disabled
              >
                Contact Form Coming Soon
              </UiButton>

              <!-- <div class="flex flex-wrap gap-4 pt-2">
                <UiButton
                  variant="brand"
                  type="submit"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting" class="inline-flex items-center gap-2">
                    <UiSpinner size="sm" />
                    Sending...
                  </span>

                  <span v-else>
                    Send Message
                  </span>
                </UiButton>

                <UiButton
                  variant="secondary"
                  type="button"
                  @click="resetForm"
                >
                  Reset Form
                </UiButton>
              </div> -->
            </form>
          </UiCard>

          <!-- Contact Info -->
          <aside class="space-y-6">
            <UiCard class="contact-card space-y-6">
              <div class="space-y-3">
                <p class="text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
                  Contact Info
                </p>

                <h2>
                  Let's Connect
                </h2>

                <p class="leading-7 text-slate-600">
                  I typically respond within one to two business days.
                </p>
              </div>

              <div class="space-y-5">
                <div
                  v-for="item in contactItems"
                  :key="item.label"
                  class="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {{ item.label }}
                  </p>

                  <a
                    v-if="item.href"
                    :href="item.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-1 block font-semibold text-slate-800 transition-colors hover:text-brand-primary"
                  >
                    {{ item.value }}
                  </a>

                  <p v-else class="mt-1 font-semibold text-slate-800">
                    {{ item.value }}
                  </p>
                </div>
              </div>
            </UiCard>

            <UiAlert variant="success" title="Available">
              Currently open to freelance projects, contract work, and full-time
              developer opportunities.
            </UiAlert>

            <UiCard class="contact-card space-y-4">
              <h3>
                Good Fit Projects
              </h3>

              <ul class="space-y-3 text-slate-700">
                <li>✓ Modern websites and landing pages</li>
                <li>✓ Business software and dashboards</li>
                <li>✓ Healthcare technology workflows</li>
                <li>✓ Nuxt, Vue, and TypeScript projects</li>
                <li>✓ SEO and accessibility improvements</li>
              </ul>
            </UiCard>
          </aside>
        </div>
      </LayoutContainer>
    </section>

    <!-- FAQ -->
    <section class="bg-white">
      <LayoutContainer class="mx-auto space-y-8">
        <LayoutSectionDivider title="Frequently Asked Questions" />

        <UiAccordion
          :items="faqItems"
          default-value="project-types"
        />
      </LayoutContainer>
    </section>

    <!-- CTA -->
    <section class="bg-white">
      <LayoutContainer class="mx-auto py-20">
        <div class="mx-auto max-w-4xl space-y-6 text-center">
          <h2>
            Ready to Start a Project?
          </h2>

          <p class="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            Whether you have a project in mind, need help solving a business
            problem, or simply want to connect, I'd love to hear from you.
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <UiLink
              to="/projects"
              variant="brand"
            >
              View Projects
            </UiLink>

            <UiLink
              to="/resume"
              variant="secondary"
            >
              View Resume
            </UiLink>

            <UiLink
              to="/"
              variant="secondary"
            >
              Back to Home
            </UiLink>
          </div>
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ContactPage'
})

type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

const isSubmitting = ref(false)
const submitStatus = ref<AlertVariant>('info')
const submitTitle = ref('')
const submitMessage = ref('')

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  timeline: '',
  subject: '',
  message: '',
  files: [] as File[],
  legitimateInquiry: false
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const projectOptions = [
  {
    label: 'Website',
    value: 'website'
  },
  {
    label: 'Business Software',
    value: 'business-software'
  },
  {
    label: 'Healthcare Technology',
    value: 'healthcare-technology'
  },
  {
    label: 'SEO / Performance',
    value: 'seo-performance'
  },
  {
    label: 'Consultation',
    value: 'consultation'
  },
  {
    label: 'Other',
    value: 'other'
  }
]

const budgetOptions = [
  {
    label: 'Under $1,000',
    value: 'under-1000'
  },
  {
    label: '$1,000 – $3,000',
    value: '1000-3000'
  },
  {
    label: '$3,000 – $7,500',
    value: '3000-7500'
  },
  {
    label: '$7,500+',
    value: '7500-plus'
  },
  {
    label: 'Not sure yet',
    value: 'not-sure'
  }
]

const timelineOptions = [
  {
    label: 'ASAP',
    value: 'asap'
  },
  {
    label: '1–3 months',
    value: '1-3-months'
  },
  {
    label: '3–6 months',
    value: '3-6-months'
  },
  {
    label: 'Flexible',
    value: 'flexible'
  }
]

const contactItems = [
  {
    label: 'Email',
    value: 'contact@zmtportfolio.com',
    href: 'mailto:contact@zmtportfolio.com'
  },
  {
    label: 'GitHub',
    value: 'GitHub Profile',
    href: 'https://github.com/zmthall'
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/zachary-thallas/'
  },
  {
    label: 'Based In',
    value: 'Colorado, United States'
  }
]

const faqItems = [
  {
    title: 'What types of projects do you build?',
    value: 'project-types',
    content:
      'I work on modern websites, business software, healthcare technology, administrative dashboards, internal tools, workflow systems, and operational web applications.'
  },
  {
    title: 'Are you available for freelance work?',
    value: 'freelance',
    content:
      'Yes. I am open to discussing freelance projects, contract work, and full-time developer opportunities depending on the scope and timing.'
  },
  {
    title: 'What technologies do you specialize in?',
    value: 'technologies',
    content:
      'My primary stack includes Nuxt, Vue, TypeScript, Tailwind CSS, Node.js, REST APIs, accessibility, SEO, and business application development.'
  },
  {
    title: 'Do you build backend systems?',
    value: 'backend',
    content:
      'Yes. While my strongest focus is front-end and web platform development, I also build REST APIs, admin workflows, secure form handling, and backend-supported business systems.'
  },
  {
    title: 'How quickly do you respond?',
    value: 'response-time',
    content:
      'I typically respond within one to two business days. More detailed project inquiries may take slightly longer so I can review the information carefully.'
  }
]

const validateForm = () => {
  errors.name = ''
  errors.email = ''
  errors.subject = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!form.subject.trim()) {
    errors.subject = 'Please enter a subject.'
  }

  if (!form.message.trim()) {
    errors.message = 'Please enter a message.'
  }

  if (!form.legitimateInquiry) {
    submitStatus.value = 'warning'
    submitTitle.value = 'Confirmation Required'
    submitMessage.value = 'Please confirm that this is a legitimate project inquiry.'
    return false
  }

  return !errors.name && !errors.email && !errors.subject && !errors.message
}

const handleSubmit = async () => {
  submitMessage.value = ''

  if (!validateForm()) {
    if (!submitMessage.value) {
      submitStatus.value = 'danger'
      submitTitle.value = 'Missing Information'
      submitMessage.value = 'Please fix the highlighted fields before submitting.'
    }

    return
  }

  isSubmitting.value = true

  await new Promise((resolve) => {
    globalThis.setTimeout(resolve, 800)
  })

  submitStatus.value = 'success'
  submitTitle.value = 'Message Ready'
  submitMessage.value =
    'The form is working visually. Connect this submit handler to your API or email service when you are ready.'

  isSubmitting.value = false
}

// const resetForm = () => {
//   form.name = ''
//   form.company = ''
//   form.email = ''
//   form.phone = ''
//   form.projectType = ''
//   form.budget = ''
//   form.timeline = ''
//   form.subject = ''
//   form.message = ''
//   form.files = []
//   form.legitimateInquiry = false

//   errors.name = ''
//   errors.email = ''
//   errors.subject = ''
//   errors.message = ''

//   submitStatus.value = 'info'
//   submitTitle.value = ''
//   submitMessage.value = ''
// }
</script>

<style scoped>
.contact-card {
  background: #ffffff;
  color: #334155;
  box-shadow: 0 20px 40px rgb(15 23 42 / 0.12);
  border: 1px solid rgb(226 232 240);
}

.contact-card :deep(h2),
.contact-card :deep(h3) {
  color: #1e293b;
}
</style>