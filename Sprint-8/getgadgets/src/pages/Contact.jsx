import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to help! Reach out to us anytime.</p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent successfully!");
              e.target.reset();
            }}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Info</h2>
          <p><strong>Address:</strong> 123 Tech Street, Silicon City, CA</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> support@getgadgets.com</p>

          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>

          {/* Google Map */}
          <div className="map">
            <iframe
              title="GetGadgets Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019556734334!2d-122.40641748468157!3d37.78583497975757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a05555555%3A0x123456789abcdef!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1694745480000!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
