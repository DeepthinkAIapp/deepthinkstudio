'use client';

import { useCallback, useEffect, useState, type MouseEvent } from 'react';

const CONTACT_MODAL_EVENT = 'contact-modal-toggle';

export const openContactModal = () => {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(CONTACT_MODAL_EVENT, { detail: true }));
};

export const closeContactModal = () => {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(CONTACT_MODAL_EVENT, { detail: false }));
};

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<boolean>).detail;
      setIsOpen(Boolean(detail));
    };

    window.addEventListener(CONTACT_MODAL_EVENT, handler as EventListener);
    return () => window.removeEventListener(CONTACT_MODAL_EVENT, handler as EventListener);
  }, []);

  const handleClose = useCallback(() => {
    closeContactModal();
  }, []);

  const handleBackdropClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeContactModal();
    }
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="contact-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={handleBackdropClick}
    >
      <div className="contact-modal-content">
        <button className="contact-modal-close" aria-label="Close contact modal" type="button" onClick={handleClose}>
          &times;
        </button>
        <h2 id="contact-modal-title">Get In Touch</h2>
        <form action="https://formspree.io/f/mjkognjj" method="POST" className="contact-form">
          <div className="contact-form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email Address" required />
          </div>
          <input type="text" name="phone" placeholder="Your Phone Number" />
          <textarea name="message" placeholder="Your Message" rows={4} required />
          <div className="contact-form-newsletter">
            <input type="checkbox" id="newsletter" name="newsletter" />
            <label htmlFor="newsletter">
              To receive our weekly Newsletter/SMS and offers check here. You can unsubscribe at any time.
            </label>
          </div>
          <button type="submit" className="contact-form-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
