'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#capabilities', label: 'Capabilities' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  useEffect(() => {
    if (open) mobileNavRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand-mark" href="/" aria-label="Runo.dev, the portfolio of Moses Onerhime, home">
        <span>Runo</span><span className="brand-dot" aria-hidden="true" /><span>dev</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/#contact">Let&apos;s talk</Link>
      <button
        ref={menuButtonRef}
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      {open && (
        <nav ref={mobileNavRef} id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link href="/#contact" onClick={() => setOpen(false)}>Let&apos;s work together</Link>
        </nav>
      )}
    </header>
  );
}
