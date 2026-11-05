import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

const portrait = new URL('../img/hero image.png', import.meta.url).href;

export const Footer = () => (
  <footer className="site-footer">
    <section className="site-footer__cta" aria-labelledby="footer-cta-title">
      <img className="site-footer__portrait" src={portrait} alt="" aria-hidden="true" loading="lazy" />
      <div className="site-footer__cta-content">
        <p className="site-footer__eyebrow">Still have a question?</p>
        <h2 id="footer-cta-title">Let&apos;s build what&apos;s next for your business.</h2>
        <p className="site-footer__cta-description">
          A better website, a smarter workflow, or a system that saves you time—it starts with one clear conversation.
        </p>
        <a
          href={profile.bookingUrl}
          className="site-footer__contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowUpRight aria-hidden="true" /> Book a Discovery Call
        </a>
      </div>
      <div className="site-footer__cta-meta" aria-hidden="true">
        <span>Jhoeven Kent Escobal — your next chapter</span>
        <span>Scroll less. Move forward.</span>
      </div>
    </section>
    <div className="site-footer__bottom">
      <p>Full-Stack Developer · AI Solutions Builder<br />Founder &amp; CEO, BrightWeb IT Solutions</p>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <nav aria-label="Social links">
        <a href={profile.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
      </nav>
      <nav aria-label="Footer navigation">
        <Link to="/#about">About</Link><Link to="/#work">Work</Link><Link to="/#services">Services</Link>
      </nav>
      <button type="button" className="site-footer__top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to top <ArrowUp aria-hidden="true" />
      </button>
      <small>© {new Date().getFullYear()} Jhoeven Kent Escobal. All rights reserved.</small>
    </div>
  </footer>
);
