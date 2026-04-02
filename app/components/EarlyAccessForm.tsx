'use client';

import { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function EarlyAccessForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');

    try {
      // Wire up to your preferred service:
      //   Formspree → https://formspree.io/f/<YOUR_ID>
      //   Mailchimp, ConvertKit, Loops, etc.
      // Set NEXT_PUBLIC_FORM_ENDPOINT in your .env.local
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error('submission failed');
      }

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-4">
        <p className="text-green text-base font-bold tracking-widest2 uppercase">
          {t.eaSuccessTitle}
        </p>
        <p className="text-muted text-xs tracking-wide mt-2 uppercase">
          {t.eaSuccessBody}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.eaPlaceholder}
          className="
            flex-1 bg-white/10 border border-white/20 rounded-lg
            px-4 py-3 text-white placeholder-white/30
            text-sm font-mono tracking-wide
            focus:outline-none focus:border-green focus:bg-white/15
            transition-colors
          "
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="
            bg-green hover:bg-green/90 text-navy
            font-bold text-xs tracking-widest2 uppercase
            px-6 py-3 rounded-lg
            transition-colors whitespace-nowrap
            disabled:opacity-60 disabled:cursor-not-allowed
          "
        >
          {status === 'loading' ? t.eaSubmitting : t.eaSubmit}
        </button>
      </form>

      {status === 'error' && (
        <p className="text-red-400 text-xs tracking-wide mt-3 text-center">
          {t.eaError}
        </p>
      )}

      <p className="text-white/25 text-xs tracking-wide mt-4 text-center uppercase">
        {t.eaFinePrint}
      </p>
    </div>
  );
}
