import { useEffect, useState } from 'react';

export default function DarkToggle() {
  const [mode, setMode] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', mode);

    // Ensure body is visible when component loads
    document.body.classList.add('theme-loaded');
  }, [mode]);

  return (
    <button
      aria-label="Toggle dark/light"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      className="retro-card flex items-center justify-center gap-2"
    >
      {/* Mobile: 8-bit icon */}
      <span className="block md:hidden">
        <img
          src={mode === 'dark' ? '/portfolio/sun.svg' : '/portfolio/moon.svg'}
          alt={mode === 'dark' ? 'Sun (light mode)' : 'Moon (dark mode)'}
          width={32}
          height={32}
          className="pixelated"
          style={{ imageRendering: 'pixelated' }}
        />
      </span>
      {/* Desktop: Text */}
      <span className="hidden md:inline">
        {mode === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
      </span>
    </button>
  );
}
