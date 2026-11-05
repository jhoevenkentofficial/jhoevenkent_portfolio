import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { servicePillars } from '../data/expertise';
import { testimonials } from '../data/testimonials';
import { profile } from '../data/profile';
import { AboutSection } from '../components/sections/AboutSection';
import { WorkShowcaseSection } from '../components/sections/WorkShowcaseSection';
import { PartnerLogoMarquee } from '../components/PartnerLogoMarquee';

const portrait = new URL('../img/hero image.png', import.meta.url).href;
const processSteps = [
  {
    number: '01',
    title: 'First, I get to know your goals and business.',
    label: 'Listen & understand',
    description: 'We start with a focused conversation about your people, priorities, current workflow, and what a successful outcome looks like.',
  },
  {
    number: '02',
    title: 'Then we turn the big picture into a clear plan.',
    label: 'Plan & prioritize',
    description: 'Together, we define the right scope, timeline, and approach—so you know what we are building and why before development begins.',
  },
  {
    number: '03',
    title: 'We design, build, and connect the pieces.',
    label: 'Design & build',
    description: 'I develop the solution in thoughtful steps, sharing progress and incorporating your feedback along the way.',
  },
  {
    number: '04',
    title: 'We test everything and help you move forward.',
    label: 'Launch & support',
    description: 'Before launch, we check the details together. Afterward, I can help with improvements, support, and your next steps.',
  },
];

const faqs = [
  {
    question: 'Who do you work with?',
    answer: 'I work with founders, small businesses, and organizations that want a more effective digital presence or a system that solves a real operational problem. The best projects start with clear goals and open collaboration.',
  },
  {
    question: 'How long does a project take?',
    answer: 'It depends on the scope, features, and feedback or content needed along the way. After we discuss your goals, I’ll outline a practical timeline and keep you updated as we work.',
  },
  {
    question: 'Do I need to have my copy and branding ready?',
    answer: 'Not necessarily. Having those materials ready can help us move faster, but we can also define what is missing early and plan how to prepare it before launch.',
  },
  {
    question: 'Can you improve my existing website?',
    answer: 'Yes. We can review what is working and what is getting in the way, then focus on the right improvements—whether that means a redesign, better performance, new features, or a more useful workflow.',
  },
  {
    question: 'What platforms do you work with?',
    answer: 'I choose the tools to fit your goals, budget, and how you plan to manage the product. That can include modern web technologies, content platforms, APIs, and third-party services; I’ll explain the tradeoffs before we decide.',
  },
  {
    question: 'What happens after launch?',
    answer: 'We make sure the handoff is clear and the product is ready to use. If you need continued help, maintenance and future improvements can be planned as part of the project or arranged separately.',
  },
];

export const HomePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Jhoeven Kent Escobal | Full-Stack Developer, AI Builder & Founder"
        description="Explore the work, services, experience and contact details of Jhoeven Kent Escobal, Full-Stack Developer, AI Solutions Builder and BrightWeb IT Solutions founder."
        canonicalPath="/"
      />

      <div className="home-page">
        <section id="home" className="home-hero" aria-labelledby="home-title">
          <div className="home-hero__atmosphere" aria-hidden="true" />
          <motion.figure
            className="home-hero__portrait"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={portrait}
              alt="Jhoeven Kent Escobal, Full-Stack Developer and Founder of BrightWeb IT Solutions"
              fetchPriority="high"
            />
            <figcaption>Jhoeven Kent Escobal · Siargao, Philippines</figcaption>
          </motion.figure>
          <div className="home-hero__image-shade" aria-hidden="true" />
          <Container className="home-hero__inner">
            <div className="home-hero__monogram" aria-hidden="true">JK</div>

            <motion.aside
              className="home-hero__capabilities"
              initial={reduceMotion ? false : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
              aria-label="Areas of expertise"
            >
              <p className="editorial-kicker">What I build</p>
              <ol>
                <li><span>01</span>Full-Stack Development</li>
                <li><span>02</span>AI Solutions &amp; Automation</li>
                <li><span>03</span>Business Systems</li>
              </ol>
              <Link to="/#work">View my work <ArrowUpRight aria-hidden="true" /></Link>
            </motion.aside>

            <motion.div
              className="home-hero__copy"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="editorial-kicker">Developer · Technology founder · BrightWeb IT Solutions</p>
              <h1 id="home-title">
                <span>Building</span>
                <span>digital experiences</span>
                <span>that move</span>
                <span>businesses forward.</span>
              </h1>
            </motion.div>

            <motion.p
              className="home-hero__intro"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: 'easeOut' }}
            >
              I&apos;m Kent — a developer and technology founder turning complex ideas into powerful digital experiences.
            </motion.p>

            <div className="home-hero__cards" aria-label="Professional profile">
              {[
                ['FULL-STACK DEVELOPER', 'AI SOLUTIONS BUILDER'],
                ['FOUNDER & CEO', 'BRIGHTWEB IT SOLUTIONS'],
                ['OPEN FOR SELECT PROJECTS', 'Let’s build something meaningful.'],
              ].map(([title, detail], index) => (
                <motion.div
                  className={`home-hero__card home-hero__card--${index + 1}`}
                  key={title}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.62 + index * 0.12, ease: 'easeOut' }}
                >
                  <span>{title}</span>
                  {index === 2 ? (
                    <a href={profile.bookingUrl} target="_blank" rel="noopener noreferrer">{detail}<ArrowUpRight aria-hidden="true" /></a>
                  ) : (
                    <strong>{detail}</strong>
                  )}
                </motion.div>
              ))}
            </div>

            <a className="home-hero__scroll" href="#about">
              <span>Scroll to explore</span>
              <span className="home-hero__scroll-icon"><ArrowDown aria-hidden="true" /></span>
            </a>
          </Container>
        </section>

        <AboutSection />
        <PartnerLogoMarquee />

        <WorkShowcaseSection />

        <section id="services" className="editorial-section services-section" aria-labelledby="home-services-title">
          <Container>
            <div className="services-intro">
              <p className="editorial-kicker">What I do</p>
              <h2 id="home-services-title" className="editorial-heading">
                Smart digital solutions <span>built to help businesses grow.</span>
              </h2>
              <p>From a clear first step to an integrated system, each engagement starts with the work your business needs done.</p>
            </div>
            <div className="editorial-service-grid">
              {servicePillars.map((service, index) => (
                <article className="editorial-service" key={service.id}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <details className="editorial-service__details">
                      <summary>Capabilities</summary>
                      <ul>
                        {service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                      </ul>
                    </details>
                  </div>
                  <ArrowUpRight aria-hidden="true" />
                </article>
              ))}
            </div>
            <a href={profile.bookingUrl} className="text-link text-link--light" target="_blank" rel="noopener noreferrer">Discuss a project <ArrowUpRight /></a>
          </Container>
        </section>

        <section id="process" className="editorial-section process-section" aria-labelledby="process-title">
          <Container>
            <header className="process-heading">
              <div className="process-heading__label">
                <p className="editorial-kicker">A clear way forward</p>
              </div>
              <div className="process-heading__copy">
                <h2 id="process-title" className="editorial-heading">Clear steps. Close collaboration. No guesswork.</h2>
                <p>From the first conversation to launch and beyond, you will know what comes next—and have a partner at every step.</p>
              </div>
            </header>
            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span className="process-list__number">{step.number}</span>
                  <div className="process-list__title">
                    <span>{step.label}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.description}</p>
                  <span className="process-list__arrow" aria-hidden="true"><ArrowUpRight /></span>
                </li>
              ))}
            </ol>
            <div className="process-cta">
              <div>
                <p className="editorial-kicker">A good first step</p>
                <h3>Strategy, creativity, and systems—working together.</h3>
              </div>
              <p>Tell me what you are working toward. We can figure out the right next move together.</p>
              <a href={profile.bookingUrl} className="process-cta__link" target="_blank" rel="noopener noreferrer">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </Container>
        </section>

        <section id="testimonials" className="editorial-section testimonials-section" aria-labelledby="testimonials-title">
          <Container>
            <div className="section-heading-row">
              <div>
                <p className="editorial-kicker">Words from collaborators</p>
                <h2 id="testimonials-title" className="editorial-heading">Good work is built together.</h2>
              </div>
            </div>
            <div className="editorial-testimonial-grid">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.id}>
                  <blockquote>“{testimonial.content}”</blockquote>
                  <figcaption><strong>{testimonial.name}</strong><span>{testimonial.role} · {testimonial.company}</span></figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>

        <section id="faq" className="editorial-section faq-section" aria-labelledby="faq-title">
          <Container className="faq-layout">
            <header className="faq-heading">
              <div className="faq-heading__label">
                <p className="editorial-kicker">FAQs</p>
                <span>The details / made simple</span>
              </div>
              <div className="faq-heading__copy">
                <h2 id="faq-title" className="editorial-heading">Questions, answered. So you can move forward.</h2>
                <p className="faq-lead">Clear answers about who I work with, project timing, platforms, and what happens after launch.</p>
              </div>
            </header>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const answerId = `faq-answer-${index + 1}`;

                return (
                  <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.question}>
                    <span className="faq-item__number">/{String(index + 1).padStart(2, '0')}</span>
                    <div className="faq-item__content">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <span>{faq.question}</span>
                        <span className="faq-item__toggle"><Plus aria-hidden="true" /></span>
                      </button>
                      <p id={answerId} hidden={!isOpen}>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="faq-footnote">
              <span>Still have a question?</span>
              <a href={`mailto:${profile.email}`}>Let&apos;s talk about it <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </Container>
        </section>

      </div>
    </>
  );
};
