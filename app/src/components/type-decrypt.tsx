"use client";

import { useEffect, useState, useRef } from "react";

interface TypeDecryptProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  chars?: string;
}

const DEFAULT_CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function TypeDecrypt({
  text,
  className = "",
  speed = 30,
  delay = 0,
  chars = DEFAULT_CHARS,
}: TypeDecryptProps) {
  const [displayText, setDisplayText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);

          setTimeout(() => {
            let iteration = 0;
            const totalIterations = text.length * 2;

            const tick = () => {
              const result = text
                .split("")
                .map((char, i) => {
                  if (i < Math.floor(iteration / 2)) {
                    return char;
                  }
                  return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

              setDisplayText(result);

              iteration += 1;
              if (iteration < totalIterations) {
                setTimeout(tick, speed);
              } else {
                setDisplayText(text);
              }
            };

            tick();
          }, delay);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, speed, delay, chars, hasStarted]);

  return (
    <div ref={ref} className={className}>
      {displayText || text}
    </div>
  );
}

