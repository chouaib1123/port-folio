import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:chouaibmonsif123@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${formData.name}%0AEmail:%20${formData.email}%0AMessage:%20${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="Section" id="section4">
      <div className="contact-card">
        <div className="Heading-div-title text-color ff-primary fs-secondary-heading fw-bold">
          <span className="glow">CONTACT ME</span>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
