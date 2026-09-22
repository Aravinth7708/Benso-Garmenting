'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Arrow, Cross } from './Icons';

const navigation = [ ['About', 'about'], ['Products', 'products'], ['Markets', 'markets'], ['Gallery', 'gallery'], ['Leadership', 'directors'] ];

export default function Header({ inner = false }: { inner?: boolean }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  const prefix = inner ? '/' : '';
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header">
      <div className="header-inner container">
        <Link href="/" aria-label="Benso Garment home" className="brand"><span className="wordmark">benso<span className="brand-dot">.</span></span><span className="brand-caption">GARMENT PVT LTD</span></Link>
        <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(([title, id]) => <a key={id} href={`${prefix}#${id}`}>{title}</a>)}</nav>
        <a href={`${prefix}#contact`} className="header-contact">Let’s talk <Arrow diagonal /></a>
        <button id="menu-toggle" className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <Cross /> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="1.5" /></svg>}</button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><a href={`${prefix}#home`} onClick={() => setOpen(false)}>Home</a>{navigation.map(([title, id]) => <a key={id} href={`${prefix}#${id}`} onClick={() => setOpen(false)}>{title}<Arrow diagonal /></a>)}<a href={`${prefix}#contact`} onClick={() => setOpen(false)}>Contact <Arrow diagonal /></a></nav>}
    </header>
  </>;
}
