import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '../Container';
import { profile } from '../../data/profile';

const portrait = new URL('../../img/meetkent.png', import.meta.url).href;

export const AboutSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="about-page" aria-labelledby="about-title">
      <Container className="about-page__layout">
        <motion.div
          className="about-page__profile"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-page__greeting">
            <span aria-hidden="true" />
            Hey, I&apos;m Kent, Full-Stack Developer and Founder of BrightWeb IT Solutions.
          </p>

          <figure className="about-page__portrait">
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <p className="about-page__roles">Full-Stack Developer <span aria-hidden="true">|</span> AI Solutions Builder</p>
          <h2 className="about-page__name">{profile.shortName} Escobal</h2>
        </motion.div>

        <motion.div
          className="about-page__introduction"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="editorial-kicker">Meet Kent · {profile.location}</p>
          <h2 id="about-title">
            I build digital experiences and intelligent solutions that help businesses move forward.
          </h2>

          <a href={profile.bookingUrl} className="about-page__cta" target="_blank" rel="noopener noreferrer">
            <ArrowUpRight aria-hidden="true" />
            Book a Discovery Call
          </a>

          <div className="about-page__information">
            <article>
              <h3>Technology with purpose.</h3>
              <p>
                I combine development, thoughtful design, and modern technology to create digital
                experiences that solve real business problems.
              </p>
            </article>
            <article>
              <h3>Built around your next move.</h3>
              <p>
                From websites and custom systems to AI-powered solutions, I help turn ideas into
                practical digital products that move businesses forward.
              </p>
            </article>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
