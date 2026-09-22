import Link from 'next/link';
import { Arrow, Asterisk } from './Icons';

export default function Footer() {
  return <>
    <section id="contact" className="contact-section">
      <div className="container contact-inner"><div><span className="eyebrow">LET’S MAKE SOMETHING GOOD</span><h2>Your next collection.<br/>Our <em>shared passion.</em></h2></div><a href="mailto:bala@benso.com" className="contact-circle" aria-label="Email Benso to start a conversation"><Arrow diagonal /><span>Let’s talk</span></a></div>
      <div className="container contact-details"><a href="mailto:bala@benso.com">bala@benso.com <Arrow diagonal /></a><span>Tirupur, Tamil Nadu, India <span aria-hidden="true">↗</span></span></div>
    </section>
    <footer className="footer"><div className="container"><div className="footer-top"><p>Premium knitwear.<br/>Lasting partnerships.</p><nav aria-label="Footer navigation"><Link href="/#about">Our story</Link><Link href="/#products">Our products</Link><Link href="/#gallery">Inside Benso</Link><a href="mailto:bala@benso.com">Get in touch</a></nav><span className="footer-origin"><Asterisk /><span>MADE IN INDIA.<br/>WORN AROUND THE WORLD.</span></span></div><div className="footer-wordmark" aria-label="Benso">benso<span>.</span></div><div className="footer-bottom"><span>© {new Date().getUTCFullYear()} Benso Garment Pvt Ltd</span><span>Crafting quality since 1995</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div></div></footer>
  </>;
}
