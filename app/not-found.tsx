import Link from 'next/link';
import Header from '@/components/Header';
import { Arrow } from '@/components/Icons';

export default function NotFound() {
  return <><Header inner/><main id="main" className="container not-found"><span className="eyebrow">404 / A LOOSE THREAD</span><h1>Let’s get you<br/><em>back on track.</em></h1><p>We couldn’t find this page. Explore our knitwear or return to the Benso story.</p><Link href="/" className="button button-dark">Back to Benso <Arrow diagonal/></Link></main></>;
}
