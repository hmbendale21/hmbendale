import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, MapPin, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import SpecularButton from './SpecularButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Client Message: ${formData.subject}`,
          message: `Client Name: ${formData.name}\nClient Email: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.7 },
          colors: ['#eab308', '#facc15', '#fde047', '#fbbf24']
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback to mailto link
        const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Client Name: ${formData.name}\nClient Email: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoUrl;
        setSubmitted(true);
      }
    } catch (error) {
      // Fallback mailto link if offline or blocked
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Client Name: ${formData.name}\nClient Email: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        paddingTop: '5.5rem',
        paddingBottom: 0,
        zIndex: 20
      }}
    >
      {/* Watermark wrapper — overflow hidden scoped here only so card bleed works */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '20px',
            left: '-20px',
            fontSize: 'clamp(6rem, 18vw, 12rem)',
            fontWeight: '900',
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-primary)',
            opacity: 0.035,
            letterSpacing: '0.05em',
            lineHeight: 1,
            userSelect: 'none'
          }}
        >
          CONTACT
        </div>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Left-Aligned Section Title (OUTSIDE the box) */}
        <div style={{ textAlign: 'left', maxWidth: '680px', marginBottom: '2.75rem' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              marginBottom: '0.85rem',
              color: 'var(--text-primary)'
            }}
          >
            Let’s discuss your <span className="gradient-text">Project</span>
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: '1.7'
            }}
          >
            Have a software project, security audit inquiry, or AI partnership in mind? Fill out the form or reach out directly.
          </p>
        </div>

        {/* Floating Overlapping Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card contact-overlapping-card"
          style={{
            padding: '3.5rem 3rem',
            borderRadius: '24px',
            marginBottom: '-90px',
            position: 'relative',
            zIndex: 20,
            boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.45)',
            border: 'var(--glass-border)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '4rem',
              alignItems: 'start'
            }}
            className="contact-card-grid"
          >
            {/* Left Column: Direct Info Boxes & Clean Social Icons */}
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Direct Channels
              </h3>

              {/* Stacked Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                
                {/* Location Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    padding: '1.1rem 1.25rem',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: 'var(--glass-border)'
                  }}
                >
                  <MapPin size={20} style={{ color: 'var(--accent-electric-bright)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>Location:</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: '700', color: 'var(--text-primary)' }}>{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                {/* Email Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.1rem 1.25rem',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: 'var(--glass-border)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <Mail size={20} style={{ color: 'var(--accent-electric-bright)', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>My Email:</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        style={{
                          fontSize: 'clamp(0.78rem, 3.2vw, 0.98rem)',
                          fontWeight: '700',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          wordBreak: 'break-all',
                          overflowWrap: 'anywhere'
                        }}
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: copied ? '#10b981' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      padding: '0.4rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>

              </div>

              {/* Clean Standalone Social Links (No Box Containers) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 1,
                    transition: 'color 0.2s ease, transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-electric-bright)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <GithubIcon size={22} />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 1,
                    transition: 'color 0.2s ease, transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-electric-bright)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <LinkedinIcon size={22} />
                </a>
              </div>
            </div>

            {/* Right Column: Underline Form Fields */}
            <div>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}
              >
                Send a direct message detailing your project scope or security requirements.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '3rem 1rem' }}
                >
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(234, 179, 8, 0.15)', color: 'var(--accent-electric-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    Message Transmitted!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Thank you for connecting, Himanshu will respond shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  {/* Name Underline Input */}
                  <div className="underline-input-group">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name*"
                      className="underline-input"
                    />
                  </div>

                  {/* Email Underline Input */}
                  <div className="underline-input-group">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      className="underline-input"
                    />
                  </div>

                  {/* Subject Underline Input */}
                  <div className="underline-input-group">
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject*"
                      className="underline-input"
                    />
                  </div>

                  {/* Message Underline Input */}
                  <div className="underline-input-group">
                    <textarea
                      name="message"
                      rows="3"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message*"
                      className="underline-input"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  {/* SpecularButton Submit */}
                  <div style={{ paddingTop: '1rem' }}>
                    <SpecularButton
                      size="md"
                      radius={12}
                      followMouse={true}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Transmitting...' : <><Send size={16} /> Send Message</>}
                    </SpecularButton>
                  </div>
                </form>
              )}
            </div>

          </div>
        </motion.div>

      </div>

      <style>{`
        .contact-overlapping-card {
          padding: 3.5rem 3rem !important;
        }
        .underline-input-group {
          position: relative;
          width: 100%;
        }
        .underline-input {
          width: 100%;
          background: transparent !important;
          border: none !important;
          border-bottom: 1px solid var(--border-color) !important;
          border-radius: 0 !important;
          padding: 0.7rem 0 !important;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.96rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .underline-input::placeholder {
          color: var(--text-muted);
        }
        .underline-input:focus {
          border-bottom-color: var(--accent-electric-bright) !important;
        }

        /* Simple Browser Autofill Override */
        .underline-input:-webkit-autofill,
        .underline-input:-webkit-autofill:hover,
        .underline-input:-webkit-autofill:focus,
        .underline-input:-webkit-autofill:active {
          -webkit-text-fill-color: var(--text-primary) !important;
          -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
          transition: background-color 50000s ease-in-out 0s !important;
          background-color: transparent !important;
        }
        [data-theme='light'] .underline-input:-webkit-autofill,
        [data-theme='light'] .underline-input:-webkit-autofill:hover,
        [data-theme='light'] .underline-input:-webkit-autofill:focus {
          -webkit-text-fill-color: #0f172a !important;
          -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
          transition: background-color 50000s ease-in-out 0s !important;
          background-color: transparent !important;
        }
        @media (max-width: 900px) {
          .contact-overlapping-card {
            padding: 2rem 1.5rem !important;
            margin-bottom: -60px !important;
          }
          .contact-card-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .contact-overlapping-card {
            padding: 1.5rem 1rem !important;
            margin-bottom: -40px !important;
            border-radius: 18px !important;
          }
          .contact-card-grid {
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
