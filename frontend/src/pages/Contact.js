import React, { useState } from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h2>
            <p className="mt-4 text-lg text-foreground-light/70 dark:text-foreground-dark/70">
              We'd love to hear from you. Get in touch with us for any inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-subtle-dark p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h4>
                  <p className="text-foreground-light/70 dark:text-foreground-dark/70">
                    Thank you for your message. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="name">
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        className="block w-full rounded-md border-subtle-light dark:border-subtle-dark/50 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary sm:text-sm"
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="email">
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        className="block w-full rounded-md border-subtle-light dark:border-subtle-dark/50 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary sm:text-sm"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="subject">
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        className="block w-full rounded-md border-subtle-light dark:border-subtle-dark/50 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary sm:text-sm"
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="message">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        className="block w-full rounded-md border-subtle-light dark:border-subtle-dark/50 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary sm:text-sm"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <div>
                    <button
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-foreground-light/70 dark:text-foreground-dark/70">
                      <a className="hover:text-primary transition-colors" href="mailto:contact@ecoregistry.org">
                        contact@ecoregistry.org
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p className="text-foreground-light/70 dark:text-foreground-dark/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Address</h4>
                    <p className="text-foreground-light/70 dark:text-foreground-dark/70">
                      123 Climate Action Avenue,<br/>
                      Green City, GC 54321, Earth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;