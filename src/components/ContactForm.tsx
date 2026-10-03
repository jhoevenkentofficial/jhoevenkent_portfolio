import { useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { Button } from './Button';
import { profile } from '../data/profile';

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const projectTypes = [
  'Web Application',
  'Mobile Application',
  'AI & Workflow Automation',
  'Business System / Dashboard',
  'Branding & UI/UX',
  'Admin & Operations Support',
  'Other',
];

const budgets = ['Under $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000+', 'Not sure yet'];

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
};

const inputClass =
  'w-full rounded-[10px] border border-[#0B1F33]/15 bg-white px-4 py-3 text-[15px] text-[#111827] placeholder:text-[#66717E]/60 transition-colors focus:border-[#174A7E] focus:outline-none';

const labelClass = 'mb-2 block text-[13.5px] font-semibold text-[#0B1F33]';
export const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.projectType) next.projectType = 'Please select a project type.';
    if (!form.message.trim()) next.message = 'Please describe your project or request.';
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = `New project inquiry — ${form.projectType}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      `Project type: ${form.projectType}`,
      form.budget ? `Budget: ${form.budget}` : null,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[14px] border border-[#174A7E]/25 bg-white p-8 text-center sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#174A7E]/10 text-[#174A7E]">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-[22px] font-bold tracking-[-0.015em] text-[#0B1F33]">
          Your brief is ready to send
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15.5px] leading-[1.68] text-[#111827]/78">
          Your email client should have opened with the details pre-filled. If it didn&apos;t, reach
          me directly at{' '}
          <a
            href={`mailto:${profile.email}`}
            className="font-semibold text-[#174A7E] underline decoration-[#D29A42] decoration-2 underline-offset-2"
          >
            {profile.email}
          </a>
          .
        </p>
        <div className="mt-7 flex justify-center">
          <Button
            onClick={() => {
              setForm(initialState);
              setSubmitted(false);
            }}
            variant="outline-dark"
            size="md"
          >
            Send another brief
          </Button>
        </div>
      </div>
    );
  }
return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[14px] border border-[#0B1F33]/10 bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-[#D29A42]">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass}
            placeholder="Juan Dela Cruz"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="mt-1.5 text-[13px] text-[#B23A2E]">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address <span className="text-[#D29A42]">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="mt-1.5 text-[13px] text-[#B23A2E]">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company / organisation
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className={inputClass}
            placeholder="Optional"
          />
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Indicative budget
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={(e) => update('budget', e.target.value)}
            className={`${inputClass} appearance-none`}
          >
            <option value="">Select a range</option>
            {budgets.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="projectType" className={labelClass}>
            Project type <span className="text-[#D29A42]">*</span>
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            className={`${inputClass} appearance-none`}
            aria-invalid={Boolean(errors.projectType)}
          >
            <option value="">What do you need built?</option>
            {projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-1.5 text-[13px] text-[#B23A2E]">{errors.projectType}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Project details <span className="text-[#D29A42]">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className={`${inputClass} resize-y`}
            placeholder="Tell me about the problem you're solving, your timeline and any existing systems."
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <p className="mt-1.5 text-[13px] text-[#B23A2E]">{errors.message}</p>}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-[1.55] text-[#66717E]">
          Fields marked <span className="text-[#D29A42]">*</span> are required. Typical reply time
          is within 24 hours.
        </p>
        <Button type="submit" variant="primary" size="md" className="shrink-0">
          <Send className="h-4 w-4" />
          Send Project Brief
        </Button>
      </div>
    </form>
  );
};