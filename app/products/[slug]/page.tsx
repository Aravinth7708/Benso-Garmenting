import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories } from '@/lib/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Arrow, Asterisk } from '@/components/Icons';

export const dynamicParams = false;
export function generateStaticParams() { return categories.map(category => ({ slug: category.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find(item => item.slug === slug);
  return { title: category?.title ?? 'Products', description: category?.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find(item => item.slug === slug);
  if (!category) notFound();
  const index = categories.findIndex(item => item.slug === slug);
  return <div id="top"><Header inner/><main id="main"><div className="container"><Link href="/#products" className="back-link"><span aria-hidden="true">←</span> All our products</Link><section className="category-hero"><div className="category-copy"><span className="eyebrow">BENSO KNITWEAR / 0{index + 1}</span><h1>{category.title}<span className="category-period">.</span></h1><h2>{category.label}</h2><p>{category.description}</p><p>{category.detail}</p><a className="button button-dark" href={`mailto:bala@benso.com?subject=${encodeURIComponent(`Enquiry: ${category.title} manufacturing`)}`}>Discuss your collection <Arrow diagonal /></a><div className="category-note"><Asterisk/><span>Thoughtfully made in Tirupur.<br/>For brands around the world.</span></div></div><div className={`category-image product-${category.color}`}><Image src={`/images/${category.image}.png`} alt={category.title} fill sizes="(max-width: 700px) 90vw, 40vw" priority/><span className="category-photo-caption">{category.title.toUpperCase()} / THE BENSO COLLECTION</span></div></section><section className="other-categories"><div className="section-heading-row"><h2>A common thread.<br/><em>More possibilities.</em></h2><Link className="text-link" href="/#products">All categories <Arrow diagonal/></Link></div><div className="category-links">{categories.filter(item => item.slug !== slug).map(item => <Link key={item.slug} href={`/products/${item.slug}/`}><Image src={`/images/${item.image}.png`} alt="" width={80} height={90}/><div><h3>{item.title}</h3><span>{item.label}</span></div><Arrow diagonal/></Link>)}</div></section></div></main><Footer/></div>;
}
