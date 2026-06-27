export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted lg:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-bold tracking-tight text-text-primary">
            FZ<span className="text-vermilion">.</span>
          </span>
          <span className="h-3 w-px bg-border-subtle" />
          <span>Biophysics &bull; Neural Engineering</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Built from first principles</span>
          <span className="h-3 w-px bg-border-subtle" />
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

