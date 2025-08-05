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
  }, [mode]);

  return (
    <button
      aria-label="Toggle dark/light"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      className="retro-card"
    >
      {mode === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
    </button>
  );
}
