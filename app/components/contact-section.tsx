import { Mail, MessageCircle, MessageSquare, Send } from 'lucide-react';
import { siteConfig } from '../data/site';

export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contact" className={`contact-section section-pad${compact ? ' contact-compact' : ''}`} aria-labelledby="contact-title">
      <p className="eyebrow">Have something in mind?</p>
      <h2 id="contact-title">Let&apos;s work together.</h2>
      <p className="contact-copy">If you have a project in mind or simply want to say hello, send me a message. I would be happy to hear from you.</p>
      <div className="contact-actions">
        <a className="button button-light" href={`mailto:${siteConfig.email}?subject=Project%20inquiry`}>
          Start a conversation <Mail size={18} aria-hidden="true" />
        </a>
        <a className="button button-outline-light" href={`${siteConfig.socials.whatsapp}?text=Hi%20Moses%2C%20I%27d%20like%20to%20discuss%20a%20project`} target="_blank" rel="noopener noreferrer">
          WhatsApp <MessageCircle size={18} aria-hidden="true" />
        </a>
      </div>
      {!compact && (
        <div className="contact-details" aria-label="More ways to contact me">
          <span><MessageSquare size={16} aria-hidden="true" /> Discord: furreal.aep</span>
          <a href={siteConfig.socials.telegram} target="_blank" rel="noopener noreferrer"><Send size={16} aria-hidden="true" /> Telegram: @mo_real26</a>
          <span><MessageCircle size={16} aria-hidden="true" /> WhatsApp: 08142962222</span>
        </div>
      )}
    </section>
  );
}
