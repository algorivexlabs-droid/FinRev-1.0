'use client';

import { Target, UserCheck, Clock, Eye, GraduationCap, Briefcase, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Goal-Based Wealth Planning',
    description:
      'Every investment recommendation stems directly from your unique family goals — not market speculation or product targets.',
  },
  {
    icon: UserCheck,
    title: 'Personalized One-on-One Advisory',
    description:
      'Direct interaction with founder Panchanan Kumar (ARN-195797) tailored to your risk appetite and life milestones.',
  },
  {
    icon: Clock,
    title: 'Long-Term Financial Discipline',
    description:
      'We emphasize sustainable compounding through systematic SIP/STP strategies while eliminating emotional timing traps.',
  },
  {
    icon: Eye,
    title: 'Complete Fee & Risk Transparency',
    description:
      'Clear explanations on asset allocation, expense ratios, scheme risks, and expected timelines with zero hidden costs.',
  },
  {
    icon: GraduationCap,
    title: 'Empowered Investor Education',
    description:
      'Building financial literacy through practical calculators, research insights, and transparent market commentary.',
  },
  {
    icon: Briefcase,
    title: 'AMFI Registered Credibility',
    description:
      '15+ years of dedicated capital markets experience with registered distributor credentials (ARN-195797).',
  },
] as const;

export function WhyChooseFinRev() {
  return (
    <section
      id="why-choose"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="why-choose-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Editorial Brand Column */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <span className="mb-3 inline-block font-display text-xs font-bold uppercase tracking-wider text-teal-600">
              Pillars of Trust
            </span>
            <h2
              id="why-choose-heading"
              className="font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl lg:text-5xl"
            >
              Why Families Trust <span className="text-teal-600">FinRev Solutions</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
              We combine academic rigor, capital markets experience, and personalized care to
              safeguard and compound your wealth across generations.
            </p>

            <div className="mt-8 rounded-2xl border border-neutral-200/80 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-600">
                <CheckCircle className="h-4 w-4" />
                <span>Our Single Promise</span>
              </div>
              <p className="mt-3 font-display text-lg font-bold leading-snug text-brand-950">
                "We don't chase short-term returns. We plan for sustainable, lifelong financial
                security."
              </p>
              <p className="mt-2 text-xs font-semibold text-neutral-600">
                — Panchanan Kumar, Founder (ARN-195797)
              </p>
            </div>
          </div>

          {/* Right Content-Driven List */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-neutral-100 rounded-2xl border border-neutral-200/80 bg-white shadow-sm">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex gap-5 p-6 transition-colors hover:bg-slate-50/60 sm:p-8"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                    <pillar.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-950">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
