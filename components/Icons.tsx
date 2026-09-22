export function Arrow({ diagonal = false, className = '' }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Cross({ className = '' }: { className?: string }) {
  return <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
}

export function Asterisk({ className = '' }: { className?: string }) {
  return <svg className={className} width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 3v42M3 24h42M9.15 9.15l29.7 29.7m0-29.7-29.7 29.7" stroke="currentColor" strokeWidth="5" /></svg>;
}

export function Globe({ className = '' }: { className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1.5"/><path d="M3 12h18M5 6.5h14M5 17.5h14" stroke="currentColor" strokeWidth="1.5"/></svg>;
}
