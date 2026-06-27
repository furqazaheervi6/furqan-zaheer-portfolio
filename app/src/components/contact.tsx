"use client";

import { useState } from "react";

export function Contact() {
  const [email] = useState("furqan@example.com");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      className="relative z-10 border-t border-border-subtle px-6 py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
          / Contact
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left */}
          <div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text-primary">
              Reach out
            </h2>
            <p className="mt-4 max-w-[500px] font-body text-sm leading-relaxed text-text-secondary">
              For research collaboration, project discussions, or anything at the
              intersection of neural engineering, machine learning, and
              biological systems.
            </p>

            {/* Contact methods */}
            <div className="mt-8 space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between border border-border-card bg-black-elevated px-5 py-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                    Email
                  </div>
                  <div className="mt-1 font-body text-sm text-text-primary">
                    {email}
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="border border-border-subtle px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary transition-colors hover:border-vermilion/50 hover:text-vermilion"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-border-card bg-black-elevated px-5 py-4 transition-colors hover:border-text-muted"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                    GitHub
                  </div>
                  <div className="mt-1 font-body text-sm text-text-primary">
                    /furqanzaheer
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  External
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-border-card bg-black-elevated px-5 py-4 transition-colors hover:border-text-muted"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                    LinkedIn
                  </div>
                  <div className="mt-1 font-body text-sm text-text-primary">
                    /in/furqanzaheer
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  External
                </span>
              </a>
            </div>
          </div>

          {/* Right — quick message area */}
          <div className="border border-border-card bg-black-elevated p-8">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              Send a message
            </div>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-border-subtle bg-black-deep px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-vermilion/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-border-subtle bg-black-deep px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-vermilion/50"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full resize-none border border-border-subtle bg-black-deep px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-vermilion/50"
                />
              </div>
              <button
                type="button"
                className="w-full border border-vermilion/60 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-vermilion transition-all hover:bg-vermilion hover:text-black-deep"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

