import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { site } from '../data/site.js';
import FadeSection from './FadeSection.jsx';
import { EmailIcon, LocationIcon, PhoneIcon } from './Icons.jsx';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [toast, setToast] = useState({ visible: false, hiding: false });

  useEffect(() => {
    if (!toast.visible) return undefined;

    const hideTimer = setTimeout(() => {
      setToast((current) => ({ ...current, hiding: true }));
    }, 3000);

    const removeTimer = setTimeout(() => {
      setToast({ visible: false, hiding: false });
    }, 3300);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [toast.visible]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', form);
    setForm(initialForm);
    setToast({ visible: true, hiding: false });
  };

  return (
    <>
      <FadeSection id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">I'm always open to discussing new projects and opportunities</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <EmailIcon />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>{site.email}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <PhoneIcon />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>{site.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <LocationIcon />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>{site.location}</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </FadeSection>
      {toast.visible &&
        createPortal(
          <div className={`toast ${toast.hiding ? 'hiding' : ''}`} role="status">
            Message sent successfully!
          </div>,
          document.body
        )}
    </>
  );
}

export default Contact;
