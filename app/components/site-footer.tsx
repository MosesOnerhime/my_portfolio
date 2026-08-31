import Link from 'next/link';
import { Github, Instagram, Linkedin, MessageCircle, Music2, Send, Youtube } from 'lucide-react';
import { siteConfig } from '../data/site';

const socialLinks = [
  { href: siteConfig.socials.tiktok, label: 'TikTok', icon: Music2 },
  { href: siteConfig.socials.github, label: 'GitHub', icon: Github },
  { href: siteConfig.socials.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: siteConfig.socials.instagram, label: 'Instagram', icon: Instagram },
  { href: siteConfig.socials.youtube, label: 'YouTube', icon: Youtube },
  { href: siteConfig.socials.whatsapp, label: 'WhatsApp', icon: MessageCircle },
  { href: siteConfig.socials.telegram, label: 'Telegram', icon: Send },
];

export function SiteFooter() {
  return (
    <footer className="site-footer section-pad">
      <div>
        <Link className="brand-mark footer-brand" href="/" aria-label="Runo.dev, the portfolio of Moses Onerhime, home">
          <span>Runo</span><span className="brand-dot" aria-hidden="true" /><span>dev</span>
        </Link>
        <p>Software, web, game, and AI developer. Video editor and creative director.</p>
      </div>
      <div className="social-links" aria-label="Social profiles">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`}>
            <Icon size={19} aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="footer-meta">© {new Date().getFullYear()} Moses Onerhime. Built with intent.</p>
    </footer>
  );
}
