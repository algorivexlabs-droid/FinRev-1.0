'use client';

import * as React from 'react';
import { useState } from 'react';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Badge } from '@/components/ui/Badge';
import { BRAND, INVESTMENT_INTERESTS } from '@/lib/utils/constants';
import {
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
  Shield,
  ShieldCheck,
  Award,
  UserCheck,
} from 'lucide-react';

interface FormData {
  fullName: string;
  mobile: string;
  email: string;
  investmentInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  mobile?: string;
  email?: string;
  investmentInterest?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    mobile: '',
    email: '',
    investmentInterest: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submitError, setSubmitError] = useState<string>('');

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!data.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(data.mobile.replace(/\D/g, ''))) {
      errs.mobile = 'Enter a valid 10-digit Indian mobile number';
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!data.investmentInterest) {
      errs.investmentInterest = 'Please select an investment interest';
    }
    if (!data.message.trim()) {
      errs.message = 'Message is required';
    } else if (data.message.trim().length < 20) {
      errs.message = 'Message must be at least 20 characters';
    }
    return errs;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('success');
    setFormData({ fullName: '', mobile: '', email: '', investmentInterest: '', message: '' });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-neutral-50 py-20 dark:from-brand-950 dark:via-brand-900 dark:to-brand-950 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2">
              <Badge variant="gold" size="md">
                <ShieldCheck className="mr-1.5 inline h-4 w-4" />
                AMFI Registered Distributor • {BRAND.founder.arn}
              </Badge>
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-600 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              Connect With <span className="text-teal-600 dark:text-teal-400">FinRev Advisors</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-xl">
              Have questions regarding mutual fund investments, retirement planning, or portfolio
              reviews? Submit your inquiry or connect directly with our founder.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="contact-form" aria-labelledby="form-heading">
        <SectionHeader
          title="Direct Consultation Inquiry"
          subtitle="We review every request personally and respond within 24 hours on business days"
        />
        <div className="mx-auto max-w-2xl">
          <Card variant="panel" padding="xl" className="shadow-md">
            {status === 'success' ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950">
                  <CheckCircle
                    className="h-8 w-8 text-emerald-600 dark:text-emerald-400"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="mb-2 font-display text-2xl font-bold text-brand-600 dark:text-neutral-50">
                  Inquiry Received!
                </h2>
                <p className="mb-6 text-neutral-600 dark:text-neutral-300">
                  Thank you for reaching out. Panchanan Kumar (ARN-195797) will contact you shortly
                  to review your investment goals.
                </p>
                <Button variant="primary" onClick={() => setStatus('idle')}>
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Label htmlFor="fullName" required>
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      error={errors.fullName}
                      required
                      autoComplete="name"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div>
                    <Label htmlFor="mobile" required>
                      Mobile Number *
                    </Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => handleChange('mobile', e.target.value)}
                      placeholder="9876543210"
                      error={errors.mobile}
                      required
                      autoComplete="tel"
                      maxLength={10}
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="rajesh@example.com"
                      error={errors.email}
                      autoComplete="email"
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="investmentInterest" required>
                    Investment Category / Goal Interest *
                  </Label>
                  <select
                    id="investmentInterest"
                    name="investmentInterest"
                    value={formData.investmentInterest}
                    onChange={(e) => handleChange('investmentInterest', e.target.value)}
                    className="input appearance-none bg-right bg-no-repeat pr-10 font-semibold"
                    disabled={status === 'submitting'}
                    aria-invalid={errors.investmentInterest ? 'true' : 'false'}
                    aria-describedby={
                      errors.investmentInterest ? 'investmentInterest-error' : undefined
                    }
                  >
                    <option value="" disabled>
                      Select your investment interest
                    </option>
                    {INVESTMENT_INTERESTS.map((interest) => (
                      <option key={interest.value} value={interest.value}>
                        {interest.label}
                      </option>
                    ))}
                  </select>
                  {errors.investmentInterest && (
                    <p
                      id="investmentInterest-error"
                      className="mt-1.5 text-xs font-semibold text-rose-600"
                      role="alert"
                    >
                      {errors.investmentInterest}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="message" required>
                    Investment Objective / Details *
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Describe your current investment horizon, monthly SIP target, or portfolio query..."
                    className={`input min-h-[120px] resize-y ${errors.message ? 'border-rose-500 focus:border-rose-500' : ''}`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    required
                    disabled={status === 'submitting'}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1.5 text-xs font-semibold text-rose-600"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-950/50">
                    <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-xs font-semibold">{submitError}</p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  className="w-full shadow-tactile-primary sm:w-auto"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                      Submitting Request...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </Button>

                <p className="text-center text-xs text-neutral-500 dark:text-neutral-400">
                  By submitting, you agree to our{' '}
                  <a href="/privacy-policy" className="underline hover:text-teal-600">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms-conditions" className="underline hover:text-teal-600">
                    Terms & Conditions
                  </a>
                  .
                </p>
              </form>
            )}
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="direct-contact" aria-labelledby="direct-heading">
        <SectionHeader
          title="Direct Touchpoints"
          subtitle="Immediate phone and instant messaging access"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ContactCard
            icon={Phone}
            title="Call Us Direct"
            description="Speak directly with our investment team"
            action={
              <a href={`tel:${BRAND.contact.phone}`} className="btn-primary w-full justify-center">
                Call {BRAND.contact.phone}
              </a>
            }
            details={BRAND.contact.phone}
          />
          <ContactCard
            icon={MessageSquare}
            title="WhatsApp Consultation"
            description="Quick chat & portfolio query resolution"
            action={
              <a
                href={BRAND.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center bg-[#25D366] hover:bg-[#20BA5A]"
              >
                Chat on WhatsApp
              </a>
            }
            details={<p className="text-xs font-medium text-neutral-500">Pre-filled query ready</p>}
          />
          <ContactCard
            icon={Mail}
            title="Email Consultation"
            description="Send detailed portfolio statements or queries"
            action={
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="btn-outline w-full justify-center"
              >
                Send Email
              </a>
            }
            details={BRAND.contact.email}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper id="advisor-info" aria-labelledby="advisor-heading">
        <SectionHeader
          title="Founder & Principal Advisor"
          subtitle="15+ years of dedicated capital markets experience"
        />
        <Card variant="interactive" padding="xl" className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
            <div className="space-y-4 text-center md:col-span-1">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-brand-900 text-gold-500 shadow-md">
                <span className="font-display text-4xl font-black">PK</span>
              </div>
              <div className="dark:bg-gold-950/20 rounded-xl border border-gold-400/40 bg-gold-50/60 p-4 dark:border-gold-800">
                <p className="font-display text-lg font-bold text-brand-600 dark:text-neutral-50">
                  {BRAND.founder.name}
                </p>
                <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                  {BRAND.founder.designation}
                </p>
                <p className="mt-1 text-xs font-bold text-gold-700 dark:text-gold-400">
                  ARN: {BRAND.founder.arn}
                </p>
              </div>
            </div>

            <div className="space-y-6 md:col-span-2">
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-brand-600 dark:text-neutral-50">
                  Professional Profile & Philosophy
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  Panchanan Kumar is an AMFI Registered Mutual Fund Distributor with over 15 years
                  in capital markets advisory. FinRev Solutions was founded on the principle that
                  true wealth creation requires disciplined asset allocation, goal matching, and
                  long-term holding.
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-display text-base font-bold text-brand-600 dark:text-neutral-50">
                  Registrations & Certifications
                </h3>
                <ul className="space-y-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
                    AMFI Registered Mutual Fund Distributor (ARN-195797)
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
                    NISM Series V-A Mutual Fund Distribution Certified
                  </li>
                  <li className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
                    15+ Years Active Financial Advisory Experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </SectionWrapper>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  description,
  action,
  details,
}: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  action: React.ReactNode;
  details: React.ReactNode;
}) {
  return (
    <Card variant="interactive" padding="lg" className="flex flex-col justify-between text-center">
      <div>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-600 dark:bg-teal-400/20 dark:text-teal-400">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="mb-2 font-display text-lg font-bold text-brand-600 dark:text-neutral-50">
          {title}
        </h3>
        <p className="mb-6 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      <div>
        {action}
        <div className="mt-4 font-mono text-xs font-medium text-neutral-500">{details}</div>
      </div>
    </Card>
  );
}
