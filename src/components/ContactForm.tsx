import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, TriangleAlert } from 'lucide-react'
import { ENDPOINT_URL, budgetRangeOptions, projectTypeOptions } from '../data/contact'
import { contactEmail } from '../data/social'

interface FormState {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  deadline: string
  message: string
  link: string
  consent: boolean
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  deadline: '',
  message: '',
  link: '',
  consent: false,
}

type Errors = Partial<Record<keyof FormState, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Enter your name.'
    if (!values.email.trim()) {
      next.email = 'Enter your email.'
    } else if (!emailPattern.test(values.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!values.projectType) next.projectType = 'Select a project type.'
    if (!values.message.trim()) next.message = 'Tell us a little about your project.'
    if (!values.consent) next.consent = 'Please confirm you agree to be contacted.'
    return next
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (!ENDPOINT_URL) {
      // Honest fallback: no backend is configured, so we don't pretend to send anything.
      setStatus('unconfigured')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(ENDPOINT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('success')
      setValues(initialState)
    } catch {
      setStatus('error')
    }
  }

  const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
    `Project inquiry — ${values.projectType || 'New project'}`,
  )}&body=${encodeURIComponent(
    `Name: ${values.name}\nCompany: ${values.company}\nProject type: ${values.projectType}\nBudget: ${values.budget}\nDeadline: ${values.deadline}\nLink: ${values.link}\n\n${values.message}`,
  )}`

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-bg-elevated p-8"
      >
        <CheckCircle2 className="h-8 w-8 text-accent-lime" aria-hidden="true" />
        <div>
          <h3 className="font-display text-xl font-semibold">Request sent.</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
            Thanks — we've received your project details and will follow up at{' '}
            <span className="text-ink">{values.email || 'the email you provided'}</span>{' '}
            shortly.
          </p>
        </div>
        <button type="button" onClick={() => setStatus('idle')} className="btn-secondary">
          Send another request
        </button>
      </motion.div>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6" aria-describedby="form-status">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Company (optional)" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field label="Deadline (optional)" htmlFor="deadline">
          <input
            id="deadline"
            name="deadline"
            type="date"
            value={values.deadline}
            onChange={(e) => update('deadline', e.target.value)}
            className={inputClass(false)}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Project Type" htmlFor="projectType" error={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            className={inputClass(Boolean(errors.projectType))}
          >
            <option value="">Select one</option>
            {projectTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Budget Range (optional)" htmlFor="budget">
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) => update('budget', e.target.value)}
            className={inputClass(false)}
          >
            <option value="">Select one</option>
            {budgetRangeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="File or project link (optional)" htmlFor="link">
        <input
          id="link"
          name="link"
          type="url"
          inputMode="url"
          placeholder="https://"
          value={values.link}
          onChange={(e) => update('link', e.target.value)}
          className={inputClass(false)}
        />
      </Field>

      <Field label="Tell us about your project" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          className={inputClass(Boolean(errors.message))}
        />
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-muted">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update('consent', e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-line bg-bg-elevated accent-accent-orange"
          />
          <span>I agree to be contacted by MOTA about this project.</span>
        </label>
        {errors.consent && <p className="mt-2 text-sm text-accent-pink">{errors.consent}</p>}
      </div>

      <div id="form-status" aria-live="polite">
        {status === 'unconfigured' && (
          <div className="flex items-start gap-3 rounded-xl border border-accent-orange/30 bg-accent-orange/10 p-4 text-sm text-ink">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" aria-hidden="true" />
            <p>
              This form isn't connected to a live inbox yet — see{' '}
              <code className="text-xs text-ink-muted">src/data/contact.ts</code> for setup
              instructions. In the meantime, please{' '}
              <a href={mailtoHref} className="link-underline font-medium text-ink">
                send your project details by email
              </a>
              .
            </p>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-start gap-3 rounded-xl border border-accent-pink/30 bg-accent-pink/10 p-4 text-sm text-ink">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent-pink" aria-hidden="true" />
            <p>
              Something went wrong sending your request. Please try again, or{' '}
              <a href={mailtoHref} className="link-underline font-medium text-ink">
                email us directly
              </a>
              .
            </p>
          </div>
        )}
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full bg-ink sm:w-auto">
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          'Send Project Request'
        )}
      </button>
    </form>
  )
}

function inputClass(hasError: boolean) {
  return `min-h-[44px] w-full rounded-lg border bg-bg-elevated px-4 py-3 text-base text-ink placeholder:text-ink-muted/60 transition-colors duration-200 focus:outline-none ${
    hasError ? 'border-accent-pink' : 'border-line focus:border-ink/40'
  }`
}

interface FieldProps {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-sm text-accent-pink" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
