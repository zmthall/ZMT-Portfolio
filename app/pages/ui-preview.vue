<template>
  <div>
    <LayoutContainer class="mx-auto space-y-16 py-16">
      <section class="mx-auto max-w-4xl space-y-6 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
          UI Preview
        </p>

        <h1>Component Playground</h1>

        <p class="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
          A simple testing page for buttons, badges, alerts, modals, and form controls.
        </p>
      </section>

      <!-- Buttons -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Buttons" />

        <UiCard class="preview-card space-y-4">
          <div class="flex flex-wrap gap-4">
            <UiButton>Primary</UiButton>
            <UiButton variant="brand">Brand</UiButton>
            <UiButton variant="secondary">Secondary</UiButton>
            <UiButton variant="blank">Blank</UiButton>
            <UiButton disabled>Disabled</UiButton>
          </div>
        </UiCard>
      </section>

      <!-- Loading -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Loading" />

        <UiCard class="preview-card space-y-8">
          <div class="flex flex-wrap items-center gap-6">
            <UiSpinner size="sm" />
            <UiSpinner />
            <UiSpinner size="lg" />
          </div>

          <div class="space-y-4">
            <UiSkeleton height="h-5" width="w-1/2" />
            <UiSkeleton height="h-4" width="w-full" />
            <UiSkeleton height="h-4" width="w-2/3" />
          </div>

          <UiProgress
            label="Upload progress"
            :value="progressValue"
          />
        </UiCard>
      </section>

      <!-- Links -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Links" />

        <UiCard class="preview-card space-y-4">
          <div class="flex flex-wrap gap-4">
            <UiLink to="/projects">Primary Link</UiLink>
            <UiLink to="/projects" variant="brand">Brand Link</UiLink>
            <UiLink to="/projects" variant="secondary">Secondary Link</UiLink>
            <UiLink to="/projects" variant="blank">Blank Link</UiLink>
          </div>
        </UiCard>
      </section>

      <!-- Badges -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Badges" />

        <UiCard class="preview-card">
          <div class="flex flex-wrap gap-3">
            <UiBadge>Brand</UiBadge>
            <UiBadge variant="dark">Dark</UiBadge>
            <UiBadge variant="success">Success</UiBadge>
            <UiBadge variant="warning">Warning</UiBadge>
            <UiBadge variant="danger">Danger</UiBadge>
            <UiBadge variant="neutral">Neutral</UiBadge>
          </div>
        </UiCard>
      </section>

      <!-- Alerts -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Alerts" />

        <div class="grid gap-4">
          <UiAlert title="Info alert">
            This is a standard informational alert.
          </UiAlert>

          <UiAlert variant="success" title="Success alert">
            Your form was submitted successfully.
          </UiAlert>

          <UiAlert variant="warning" title="Warning alert">
            Please double-check the information before continuing.
          </UiAlert>

          <UiAlert variant="danger" title="Danger alert">
            Something went wrong while processing the request.
          </UiAlert>
        </div>
      </section>

      <!-- Navigation Helpers -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Navigation Helpers" />

        <UiCard class="preview-card space-y-8">
          <UiBreadcrumbs :items="breadcrumbs" />

          <div class="flex flex-wrap items-center gap-6">
            <UiDropdown>
              <template #trigger>
                Actions
              </template>

              <template #default="{ close }">
                <UiDropdownItem @click="close">
                  Edit
                </UiDropdownItem>

                <UiDropdownItem @click="close">
                  Duplicate
                </UiDropdownItem>

                <UiDropdownItem
                  danger
                  @click="close"
                >
                  Delete
                </UiDropdownItem>
              </template>
            </UiDropdown>

            <UiTooltip text="This is a tooltip message.">
              <button
                type="button"
                class="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700"
              >
                Hover me
              </button>
            </UiTooltip>
          </div>
        </UiCard>
      </section>

      <!-- Avatar -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Avatar" />

        <UiCard class="preview-card">
          <div class="flex flex-wrap items-center gap-6">
            <UiAvatar
              name="Zachary Thallas"
              size="sm"
              status="online"
            />

            <UiAvatar
              name="Zachary Thallas"
              status="away"
            />

            <UiAvatar
              name="Zachary Thallas"
              size="lg"
              status="busy"
            />
          </div>
        </UiCard>
      </section>

      <!-- Tabs -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Tabs" />

        <UiCard class="preview-card">
          <UiTabs
            v-model="activeTab"
            :tabs="tabs"
          >
            <template #default="{ activeTab: currentTab }">
              <div class="rounded-xl bg-slate-50 p-6 text-slate-700">
                <p v-if="currentTab === 'overview'">
                  This is the overview tab content.
                </p>

                <p v-if="currentTab === 'files'">
                  This is where files or uploaded documents could be displayed.
                </p>

                <p v-if="currentTab === 'activity'">
                  This is where recent activity could be shown.
                </p>

                <p v-if="currentTab === 'notes'">
                  This is where notes or comments could be displayed.
                </p>
              </div>
            </template>
          </UiTabs>
        </UiCard>
      </section>

      <!-- Accordion -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Accordion" />

        <UiAccordion
          :items="accordionItems"
          default-value="first"
        />
      </section>

      <!-- Empty State -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Empty State" />

        <UiEmptyState
          icon="📄"
          title="No consultation requests yet."
          description="Once requests are submitted, they will appear here."
        >
          <UiButton variant="brand">
            Create Request
          </UiButton>
        </UiEmptyState>
      </section>

      <!-- Table -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Table" />

        <UiTable>
          <template #header>
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 class="text-xl font-bold text-slate-900">
                  Example Records
                </h3>

                <p class="text-sm text-slate-500">
                  A reusable table layout for admin-style data.
                </p>
              </div>

              <UiButton variant="brand">
                Add Record
              </UiButton>
            </div>
          </template>

          <UiTableHead>
            <UiTableRow>
              <UiTableHeader>Name</UiTableHeader>
              <UiTableHeader>Status</UiTableHeader>
              <UiTableHeader>Type</UiTableHeader>
              <UiTableHeader>Updated</UiTableHeader>
            </UiTableRow>
          </UiTableHead>

          <UiTableBody>
            <UiTableRow
              v-for="row in tableRows"
              :key="row.name"
            >
              <UiTableCell>{{ row.name }}</UiTableCell>
              <UiTableCell>
                <UiBadge :variant="row.badgeVariant">
                  {{ row.status }}
                </UiBadge>
              </UiTableCell>
              <UiTableCell>{{ row.type }}</UiTableCell>
              <UiTableCell>{{ row.updated }}</UiTableCell>
            </UiTableRow>
          </UiTableBody>

          <template #footer>
            <UiPagination
              v-model:page="tablePage"
              :total-pages="3"
            />
          </template>
        </UiTable>
      </section>

      <!-- Toasts -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Toasts" />

        <UiCard class="preview-card space-y-4">
          <p class="text-slate-600">
            Click a button to preview toast notifications.
          </p>

          <div class="flex flex-wrap gap-4">
            <UiButton
              variant="brand"
              @click="addToast('success')"
            >
              Success Toast
            </UiButton>

            <UiButton
              variant="secondary"
              @click="addToast('info')"
            >
              Info Toast
            </UiButton>

            <UiButton
              variant="secondary"
              @click="addToast('warning')"
            >
              Warning Toast
            </UiButton>
          </div>
        </UiCard>
      </section>

      <!-- Form Controls -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Form Controls" />

        <UiCard class="preview-card space-y-8">
          <div class="grid gap-6 md:grid-cols-2">
            <UiFormField
              label="Full Name"
              for-id="full-name"
              helper="Enter your first and last name."
              required
            >
              <UiFormInput
                id="full-name"
                v-model="form.name"
                placeholder="Zachary Thallas"
                required
              />
            </UiFormField>

            <UiFormField
              label="Email Address"
              for-id="email"
              :error="formErrors.email"
              required
            >
              <UiFormInput
                id="email"
                v-model="form.email"
                type="email"
                placeholder="email@example.com"
                :error="Boolean(formErrors.email)"
                required
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
                placeholder="Choose a project type"
                :options="projectOptions"
              />
            </UiFormField>

            <UiFormField
              label="Budget Range"
              for-id="budget"
            >
              <UiFormRadioGroup
                v-model="form.budget"
                name="budget"
                :options="budgetOptions"
              />
            </UiFormField>
          </div>

          <UiFormField
            label="Message"
            for-id="message"
            helper="Tell me a little about what you want to build."
          >
            <UiFormTextarea
              id="message"
              v-model="form.message"
              placeholder="I need help building..."
              :rows="5"
            />
          </UiFormField>

          <div class="grid gap-6 md:grid-cols-2">
            <UiFormField label="Checkboxes">
              <div class="space-y-4">
                <UiFormCheckbox
                  v-model="form.acceptTerms"
                  label="I agree to the privacy policy."
                />

                <UiFormCheckbox
                  v-model="form.needsConsultation"
                  label="I would like a consultation."
                />
              </div>
            </UiFormField>

            <UiFormField label="Switch">
              <div class="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <div>
                  <p class="font-semibold text-slate-800">
                    Email updates
                  </p>

                  <UiFormHelperText>
                    Receive occasional project updates.
                  </UiFormHelperText>
                </div>

                <UiFormSwitch v-model="form.emailUpdates" />
              </div>
            </UiFormField>
          </div>

          <UiFormField
            label="File Upload"
            for-id="file-upload"
            helper="Upload a sample file or screenshot."
          >
            <UiFormFileUpload
              id="file-upload"
              v-model="form.files"
              accept=".pdf,.png,.jpg,.jpeg"
            />
          </UiFormField>

          <div class="flex flex-wrap gap-4 pt-4">
            <UiButton variant="brand" type="submit">
              Submit Form
            </UiButton>

            <UiButton
              variant="secondary"
              type="button"
              @click="resetForm"
            >
              Reset
            </UiButton>
          </div>
        </UiCard>
      </section>

      <!-- Modal -->
      <section class="space-y-8">
        <LayoutSectionDivider title="Modal" />

        <UiCard class="preview-card space-y-4">
          <p class="text-slate-600">
            Click the button below to preview the modal component.
          </p>

          <UiButton
            variant="brand"
            @click="isModalOpen = true"
          >
            Open Modal
          </UiButton>
        </UiCard>
      </section>
    </LayoutContainer>

    <UiToast
      :toasts="toasts"
      @remove="removeToast"
    />

    <UiModal
      v-model="isModalOpen"
      title="Example Modal"
      description="This is a reusable modal component."
    >
      <p class="leading-7 text-slate-600">
        This modal can be used for confirmations, form previews, content details,
        and other focused interactions.
      </p>

      <template #footer>
        <div class="flex flex-wrap justify-end gap-3">
          <UiButton
            variant="secondary"
            @click="isModalOpen = false"
          >
            Cancel
          </UiButton>

          <UiButton
            variant="brand"
            @click="isModalOpen = false"
          >
            Confirm
          </UiButton>
        </div>
      </template>
    </UiModal>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'UiPreviewPage'
})

type BadgeVariant = 'brand' | 'dark' | 'success' | 'warning' | 'danger' | 'neutral'
type ToastVariant = 'info' | 'success' | 'warning' | 'danger'

const isModalOpen = ref(false)
const activeTab = ref('overview')
const tablePage = ref(1)
const progressValue = ref(68)

const toasts = ref<Array<{
  id: string
  title: string
  message?: string
  variant?: ToastVariant
}>>([])

const form = reactive({
  name: '',
  email: '',
  projectType: '',
  budget: 'small',
  message: '',
  acceptTerms: false,
  needsConsultation: false,
  emailUpdates: true,
  files: [] as File[]
})

const formErrors = reactive({
  email: 'Please enter a valid email address.'
})

const breadcrumbs = [
  {
    label: 'Dashboard',
    to: '/'
  },
  {
    label: 'Components',
    to: '/ui-preview'
  },
  {
    label: 'Preview'
  }
]

const tabs = [
  {
    label: 'Overview',
    value: 'overview'
  },
  {
    label: 'Files',
    value: 'files'
  },
  {
    label: 'Activity',
    value: 'activity'
  },
  {
    label: 'Notes',
    value: 'notes'
  }
]

const accordionItems = [
  {
    title: 'What is this page for?',
    value: 'first',
    content: 'This page previews reusable UI components so they can be tested together in one place.'
  },
  {
    title: 'Can these components be reused?',
    value: 'second',
    content: 'Yes. These components are designed to be reused across public pages, forms, admin dashboards, and future projects.'
  },
  {
    title: 'Why build a component library?',
    value: 'third',
    content: 'A small component library keeps spacing, colors, accessibility, and interaction patterns consistent across the site.'
  }
]

const tableRows: Array<{
  name: string
  status: string
  type: string
  updated: string
  badgeVariant: BadgeVariant
}> = [
  {
    name: 'Consultation Request',
    status: 'Active',
    type: 'Workflow',
    updated: 'Today',
    badgeVariant: 'success'
  },
  {
    name: 'Secure Referral',
    status: 'Draft',
    type: 'Healthcare',
    updated: 'Yesterday',
    badgeVariant: 'warning'
  },
  {
    name: 'Contact Form',
    status: 'Live',
    type: 'Public Form',
    updated: 'Jul 5',
    badgeVariant: 'brand'
  }
]

const projectOptions = [
  {
    label: 'Website',
    value: 'website'
  },
  {
    label: 'Business System',
    value: 'business-system'
  },
  {
    label: 'Healthcare Platform',
    value: 'healthcare-platform'
  },
  {
    label: 'Portfolio',
    value: 'portfolio'
  }
]

const budgetOptions = [
  {
    label: 'Small project',
    value: 'small'
  },
  {
    label: 'Medium project',
    value: 'medium'
  },
  {
    label: 'Large project',
    value: 'large'
  }
]

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.projectType = ''
  form.budget = 'small'
  form.message = ''
  form.acceptTerms = false
  form.needsConsultation = false
  form.emailUpdates = true
  form.files = []
}

const addToast = (variant: ToastVariant) => {
  const id = crypto.randomUUID()

  const titles = {
    info: 'Information',
    success: 'Saved successfully',
    warning: 'Please review',
    danger: 'Something went wrong'
  }

  const messages = {
    info: 'This is an informational toast.',
    success: 'Your changes were saved successfully.',
    warning: 'Please double-check the information.',
    danger: 'There was a problem completing the request.'
  }

  toasts.value.push({
    id,
    title: titles[variant],
    message: messages[variant],
    variant
  })

  window.setTimeout(() => {
    removeToast(id)
  }, 4000)
}

const removeToast = (id: string) => {
  toasts.value = toasts.value.filter((toast) => toast.id !== id)
}
</script>

<style scoped>
.preview-card {
  background: #ffffff;
  color: #334155;
  box-shadow: 0 20px 40px rgb(15 23 42 / 0.12);
  border: 1px solid rgb(226 232 240);
}

.preview-card :deep(h2),
.preview-card :deep(h3) {
  color: #1e293b;
}
</style>