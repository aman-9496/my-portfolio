"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  User,
  MessageSquare,
  AtSign,
} from "lucide-react";

// ─── EmailJS credentials ───────────────────────────────────────────────────
// Replace these three values with your real EmailJS credentials.
// Sign up free at https://www.emailjs.com → Email Services → Email Templates
const EMAILJS_SERVICE_ID = "service_gf060t8";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_op7k2b7";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY = "exAJSKr452ci4Kx21";   // e.g. "abcDEFghiJKL789"
// ───────────────────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

type FieldError = Partial<FormState>;

// Validates all fields and returns an error object
function validate(form: FormState): FieldError {
  const errors: FieldError = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address.";
  if (!form.message.trim()) errors.message = "Message is required.";
  else if (form.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

// ─── Reusable input wrapper ────────────────────────────────────────────────
function Field({
  label,
  icon,
  error,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
        <span className="text-slate-400 dark:text-slate-500">{icon}</span>
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
}

// ─── Contact info card ─────────────────────────────────────────────────────
function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
      <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-slate-800 dark:text-slate-100 break-all">{value}</p>
        )}
      </div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", message: "",
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (errors[name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Run validation — stop if there are errors
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");

    try {
      // EmailJS sends the form data directly to your email inbox.
      // The template variables ({{name}}, {{email}}, etc.) must match
      // your EmailJS template placeholders exactly.
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setErrors({});

      // Reset success banner after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">

      {/* Page header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 sm:mb-3">
          Contact Me
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
          Have a role, project, or collaboration in mind? Fill in the form and I will get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 items-start">

        {/* ── LEFT: Contact info (2 of 5 columns) ── */}
        <div className="md:col-span-2 flex flex-col gap-3 sm:gap-4">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2 sm:mb-1">
            Get In Touch
          </h2>

          <InfoCard
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            value="amanu235689@gmail.com"
            href="mailto:amanu235689@gmail.com"
          />
          <InfoCard
            icon={<Phone className="w-5 h-5" />}
            label="Phone"
            value="+251994960505"
            href="tel:+251994960505"
          />
          <InfoCard
            icon={<MapPin className="w-5 h-5" />}
            label="Location"
            value="Bahir Dar, Ethiopia"
          />
        </div>

        {/* ── RIGHT: Contact form (3 of 5 columns) ── */}
        <div className="md:col-span-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-6 lg:p-8">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Send a Message
          </h2>

          {/* Success banner */}
          {status === "success" && (
            <div className="mb-4 sm:mb-6 flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium">
                Your message has been sent successfully! I will get back to you soon.
              </p>
            </div>
          )}

          {/* Error banner */}
          {status === "error" && (
            <div className="mb-4 sm:mb-6 flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium">
                Something went wrong. Please try again or email me directly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:gap-4 lg:gap-5">

            {/* Full Name */}
            <Field label="Full Name" icon={<User className="w-3.5 h-3.5" />} error={errors.name}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClass}
              />
            </Field>

            {/* Email */}
            <Field label="Email Address" icon={<AtSign className="w-3.5 h-3.5" />} error={errors.email}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={inputClass}
              />
            </Field>

            {/* Subject */}




            {/* Message */}
            <Field label="Message" icon={<MessageSquare className="w-3.5 h-3.5" />} error={errors.message}>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message here... (min. 10 characters)"
                className={`${inputClass} resize-none`}
              />
            </Field>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-xs sm:text-sm transition-colors duration-200 shadow-sm mt-1 sm:mt-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
