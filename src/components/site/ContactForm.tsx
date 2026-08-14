"use client";

import { useId, useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Modulo statico: nessun invio reale, solo conferma lato client.
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="rounded-lg border border-olive/30 bg-card p-6">
        <p className="font-heading text-xl font-semibold text-ink">Messaggio ricevuto.</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/75">
          Grazie, ti risponderemo appena possibile per organizzare l&apos;ordine.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor={nameId} className="text-sm font-medium text-ink">
          Nome e cognome
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 block w-full rounded-md border border-border bg-card px-3.5 py-2.5 text-sm text-ink outline-none focus-visible:border-olive focus-visible:ring-2 focus-visible:ring-olive/40"
        />
      </div>

      <div>
        <label htmlFor={emailId} className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 block w-full rounded-md border border-border bg-card px-3.5 py-2.5 text-sm text-ink outline-none focus-visible:border-olive focus-visible:ring-2 focus-visible:ring-olive/40"
        />
      </div>

      <div>
        <label htmlFor={messageId} className="text-sm font-medium text-ink">
          Cosa vorresti ordinare
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={5}
          placeholder="Es. 2 bottiglie di Coratina e 1 di Riserva del Frantoiano"
          className="mt-1.5 block w-full resize-y rounded-md border border-border bg-card px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink/40 focus-visible:border-olive focus-visible:ring-2 focus-visible:ring-olive/40"
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 items-center rounded-md bg-terracotta px-6 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
      >
        Invia la richiesta
      </button>
    </form>
  );
}
