"use client";
import { useState } from 'react';
import AnimatedButton from './ui/AnimatedButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: ''
    });
    // Show success message
    alert('Thanks for reaching out! We\'ll get back to you shortly.');
  };

  return (
    <section id="contact" className="py-40 bg-gradient-to-b from-bgDark to-bgLight">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="max-w-4xl mx-auto bg-bgLight rounded-lg p-8">
          <h2 className="avalon-bold text-4xl text-center mb-4">Let's <span className="needle-underline primary-accent">brew</span> something awesome together</h2>
          <p className="avalon text-textMedium text-center max-w-2xl mx-auto mb-8">
            We're eager to learn about your vision. Share your project details below, and let's explore how we can collaborate to build something truly innovative.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-bgDark border border-white/10 text-white focus:outline-none focus:border-primaryAccent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-bgDark border border-white/10 text-white focus:outline-none focus:border-primaryAccent"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-bgDark border border-white/10 text-white focus:outline-none focus:border-primaryAccent"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-bgDark border border-white/10 text-white focus:outline-none focus:border-primaryAccent"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="ai-agent">AI Agent Development</option>
                  <option value="mvp">MVP Development</option>
                  <option value="consulting">AI Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-bgDark border border-white/10 text-white focus:outline-none focus:border-primaryAccent"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <AnimatedButton type="submit">
                Send Message
              </AnimatedButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
