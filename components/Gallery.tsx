'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { galleryImages } from '@/lib/content';
import { Arrow, Cross } from './Icons';

export default function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const selectedImage = galleryImages[selected];

  useEffect(() => () => { document.body.style.overflow = ''; }, []);
  const openImage = (index: number, target: HTMLButtonElement) => {
    setSelected(index);
    opener.current = target;
    dialog.current?.showModal();
    document.body.style.overflow = 'hidden';
  };
  const restore = () => { document.body.style.overflow = ''; opener.current?.focus(); };
  const close = () => { dialog.current?.close(); restore(); };
  const move = (direction: number) => setSelected(value => (value + direction + galleryImages.length) % galleryImages.length);

  return <section id="gallery" className="section gallery-section">
    <div className="container">
      <div className="section-top"><span className="eyebrow"><span className="section-number">04</span> INSIDE BENSO</span><span className="section-side-note">THE PEOPLE. THE PROCESS. THE POSSIBILITIES.</span></div>
      <div className="section-heading-row"><h2>A closer look at<br/>what <em>we do.</em></h2><p>Real people. Skilled hands. Step inside the place where your next collection comes to life.</p></div>
      <div className={`gallery-grid ${expanded ? 'is-expanded' : ''}`}>
        {galleryImages.slice(0, expanded ? galleryImages.length : 3).map((item, index) => <button className="gallery-item" type="button" key={item.id} onClick={event => openImage(index, event.currentTarget)} aria-label={`View ${item.title}`}>
          <div className="gallery-photo"><Image src={`/images/gallery-${item.id}.webp`} alt={item.description} fill sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 33vw"/><span className="image-expand"><Arrow diagonal /></span></div>
          <div className="gallery-caption"><span>{item.title}</span><span className="photo-number">{String(index + 1).padStart(2, '0')}</span></div>
        </button>)}
      </div>
      <div className="gallery-action"><button type="button" className="text-link" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? 'Show fewer photos' : 'Explore the full gallery'}<span className="count-label">{expanded ? '−' : '12'}</span><Arrow diagonal /></button></div>
    </div>
    <dialog ref={dialog} className="lightbox" aria-labelledby="photo-title" onClose={restore} onClick={event => { if (event.target === event.currentTarget) close(); }} onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } }}>
      <div className="lightbox-inner"><div className="lightbox-top"><span>BENSO / BEHIND THE SEAMS</span><button type="button" className="icon-button" aria-label="Close photo" onClick={close}><Cross /></button></div>
        <div className="lightbox-image"><Image src={`/images/gallery-${selectedImage.id}.webp`} alt={selectedImage.description} fill sizes="90vw" /></div>
        <div className="lightbox-bottom"><div aria-live="polite"><h3 id="photo-title">{selectedImage.title}</h3><p>{selectedImage.description}</p></div><div className="lightbox-controls"><button type="button" className="icon-button previous" aria-label="Previous photo" onClick={() => move(-1)}><Arrow /></button><span>{selected + 1} / {galleryImages.length}</span><button type="button" className="icon-button" aria-label="Next photo" onClick={() => move(1)}><Arrow /></button></div></div>
      </div>
    </dialog>
  </section>;
}
