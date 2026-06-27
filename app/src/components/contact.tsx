"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";

export function Contact() {
  const [email] = useState("furqan@zaheer.dev");
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
        <ScrollReveal>
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
            / Contact
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left */}
          <ScrollReveal delay={100}>
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
                <div className="group/card flex items-center justify-between border border-border-card bg-black-elevated px-5 py-4 transition-all duration-300 hover:border-vermilion/20 hover:shadow-[0_0_20px_rgba(220,38,38,0.03)]">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                      Email
                    </div>
                    <div className="mt-1 font-body text-sm text-text-primary transition-colors duration-300 group-hover/card:text-vermilion/90">
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
                  className="group/card flex items-center justify-between border border-border-card bg-black-elevated px-5 py-4 transition-all duration-300 hover:border-text-muted"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                      GitHub
                    </div>
                    <div className="mt-1 font-body text-sm text-text-primary transition-colors duration-300 group-hover/card:text-text-secondary">
                      /furqanzaheer
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-300 group-hover/card:text-text-secondary">
                    External
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card flex items-center justify-between border border-border-card bg-black-elevated px-5 py-4 transition-all duration-300 hover:border-text-muted"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                      LinkedIn
                    </div>
                    <div className="mt-1 font-body text-sm text-text-primary transition-colors duration-300 group-hover/card:text-text-secondary">
                      /in/furqanzaheer
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-300 group-hover/card:text-text-secondary">
                    External
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — quick message area */}
          <ScrollReveal delay={200}>
            <div className="group/form border border-border-card bg-black-elevated p-8 transition-all duration-300 hover:border-vermilion/15">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                Send a message
              </div>
              <div className="space-y-4">
                <div className="group/field">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-border-subtle bg-black-deep px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted outline-none transition-all duration-300 focus:border-vermilion/50 group-hover/form:border-text-muted/30"
                  />
                  <div className="h-[1px] w-0 bg-vermilion/30 transition-all duration-500 group-focus-within/field:w-full" />
                </div>
                <div className="group/field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-border-subtle bg-black-deep px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted outline-none transition-all duration-300 focus:border-vermilion/50 group-hover/form:border-text-muted/30"
                  />
                  <div className="h-[1px] w-0 bg-vermilion/30 transition-all duration-500 group-focus-within/field:w-full" />
                </div>
                <div className="group/field">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full resize-none border border-border-subtle bg-black-deep px-4 py-3 font-body text-sm text-text-primary placeholder-text-muted outline-none transition-all duration-300 focus:border-vermilion/50 group-hover/form:border-text-muted/30"
                  />
                  <div className="h-[1px] w-0 bg-vermilion/30 transition-all duration-500 group-focus-within/field:w-full" />
                </div>
                <button
                  type="button"
                  className="group/btn relative w-full overflow-hidden border border-vermilion/60 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-vermilion transition-all"
                >
                  <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-vermilion/8 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  <span className="relative z-10">Send</span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

