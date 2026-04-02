'use client';

import { ShieldCheck, Zap, BarChart3, Languages, Sparkles, UserX } from 'lucide-react';
import EarlyAccessForm from './components/EarlyAccessForm';
import { useTranslation } from './i18n/LanguageContext';
import { Language } from './i18n/translations';

// ─── Shared primitives ────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-white/50 text-sm tracking-widest2 uppercase">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted text-sm tracking-widest2 uppercase font-bold mb-6">
      {children}
    </p>
  );
}

function CheckmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="#00C48C" strokeWidth="2" />
      <path
        d="M8 12l3 3 5-5"
        stroke="#00C48C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const { t, language, setLanguage } = useTranslation();
  const langs: Language[] = ['pt', 'en', 'es'];

  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12 py-5">
      <a href="/" className="flex items-center gap-2 text-white font-bold tracking-wide">
        <CheckmarkIcon />
        <span className="text-base">checked</span>
      </a>

      <div className="flex items-center gap-4">
        {/* Language switcher */}
        <div className="flex items-center gap-1">
          {langs.map((l, i) => (
            <span key={l} className="flex items-center gap-1">
              {i > 0 && <span className="text-white/15 text-sm">·</span>}
              <button
                onClick={() => setLanguage(l)}
                className={`text-sm font-bold tracking-widest2 uppercase transition-colors px-1 ${
                  language === l ? 'text-white' : 'text-white/25 hover:text-white/60'
                }`}
              >
                {l}
              </button>
            </span>
          ))}
        </div>

        <a
          href="#early-access"
          className="
            border border-white/25 hover:border-green hover:text-green
            text-white/70 text-sm font-bold tracking-widest2 uppercase
            px-5 py-2.5 rounded-lg transition-colors hidden sm:block
          "
        >
          {t.navEarlyAccess}
        </a>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { t } = useTranslation();
  const bodyLines = t.heroBody.split('\n');

  return (
    <section className="navy-grid bg-navy min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 relative overflow-hidden">

      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 60%, rgba(0,82,255,0.12) 0%, transparent 70%)',
        }}
      />

      <Nav />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <Tag>
          <span className="w-1.5 h-1.5 rounded-full bg-green inline-block" />
          {t.heroTag}
        </Tag>

        <h1
          className="text-white font-bold leading-none tracking-tight"
          style={{ fontSize: 'clamp(4rem, 12vw, 8rem)' }}
        >
          checked<span className="text-green">.</span>
        </h1>

        <p className="text-white/75 font-bold text-xl md:text-2xl tracking-tight max-w-xl leading-snug">
          {t.heroTagline}
        </p>

        <p className="text-white/40 text-base tracking-wide leading-relaxed max-w-md">
          {bodyLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < bodyLines.length - 1 && <br />}
            </span>
          ))}
        </p>

        <a
          href="#early-access"
          className="
            mt-2 bg-green hover:bg-green/90 text-navy
            font-bold text-sm tracking-widest2 uppercase
            px-8 py-4 rounded-xl transition-colors
          "
        >
          {t.heroCta}
        </a>

        {/* Stats strip */}
        <div className="flex items-center gap-0 mt-8 border border-white/10 rounded-xl overflow-hidden divide-x divide-white/10">
          {[
            { value: '100%', label: t.heroStatOnDevice },
            { value: '0',    label: t.heroStatAccounts },
            { value: '3',    label: t.heroStatLanguages },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center px-8 py-4 gap-1">
              <span className="text-white font-bold text-xl tracking-tight">{value}</span>
              <span className="text-white/35 text-sm tracking-widest2 uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #F5F6FA)' }}
      />
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { number: '01', title: t.how1Title, body: t.how1Body },
    { number: '02', title: t.how2Title, body: t.how2Body },
    { number: '03', title: t.how3Title, body: t.how3Body },
  ];

  return (
    <section className="bg-background px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t.howLabel}</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span className="text-blue font-bold text-sm tracking-widest2 uppercase">
                {step.number}
              </span>
              <div className="w-8 h-px bg-border" />
              <h3 className="text-ink font-bold text-2xl tracking-tight">{step.title}.</h3>
              <p className="text-muted text-base leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

function Features() {
  const { t } = useTranslation();

  const features = [
    { icon: ShieldCheck, title: t.feat1Title, body: t.feat1Body },
    { icon: Zap,         title: t.feat2Title, body: t.feat2Body },
    { icon: BarChart3,   title: t.feat3Title, body: t.feat3Body },
    { icon: Languages,   title: t.feat4Title, body: t.feat4Body },
    { icon: Sparkles,    title: t.feat5Title, body: t.feat5Body },
    { icon: UserX,       title: t.feat6Title, body: t.feat6Body },
  ];

  return (
    <section className="navy-grid bg-navy px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>
          <span className="text-white/40">{t.featuresLabel}</span>
        </SectionLabel>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-navy p-8 flex flex-col gap-3 hover:bg-navy2 transition-colors"
            >
              <f.icon size={24} className="text-green" strokeWidth={1.5} aria-hidden />
              <h3 className="text-white font-bold text-base tracking-wide">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Early Access ─────────────────────────────────────────────────────────────

function EarlyAccess() {
  const { t } = useTranslation();

  return (
    <section
      id="early-access"
      className="navy-grid bg-navy px-6 md:px-12 py-32 relative overflow-hidden"
    >
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,196,140,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-white/15" />
          <span className="text-white/30 text-sm tracking-widest2 uppercase font-bold">
            {t.eaLabel}
          </span>
          <div className="w-8 h-px bg-white/15" />
        </div>

        <h2 className="text-white font-bold text-4xl md:text-5xl tracking-tight leading-none">
          {t.eaHeadline1}
          <br />
          <span className="text-green">{t.eaHeadline2}</span>
        </h2>

        <p className="text-white/45 text-base leading-relaxed max-w-sm">{t.eaBody}</p>

        <EarlyAccessForm />
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const { language, setLanguage } = useTranslation();
  const langs: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <footer className="bg-navy border-t border-white/5 px-6 md:px-12 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white/30 text-sm font-bold tracking-wide">
          <CheckmarkIcon />
          <span>checked · {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-3">
          {langs.map(({ code, label }, i) => (
            <span key={code} className="flex items-center gap-3">
              {i > 0 && <span className="text-white/15 text-sm">·</span>}
              <button
                onClick={() => setLanguage(code)}
                className={`text-sm font-bold tracking-widest2 uppercase transition-colors ${
                  language === code ? 'text-white/60' : 'text-white/20 hover:text-white/40'
                }`}
              >
                {label}
              </button>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
