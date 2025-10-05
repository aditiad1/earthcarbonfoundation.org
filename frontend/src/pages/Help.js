import React, { useState } from 'react';
import Layout from '../components/Layout';

const Help = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Help form submitted:', contactForm);
    // Add submission logic here
  };

  const faqs = [
    {
      question: "How do I register a low carbon action?",
      answer: "To register a low carbon action, navigate to the 'Projects' section from your dashboard. Click on 'Create New Project' and follow the on-screen instructions to provide details about your action, including methodology, location, and expected carbon reduction. Our team will then review your submission."
    },
    {
      question: "What is the process for converting actions to carbon credits?",
      answer: "Once your project is registered and verified, the measured carbon reduction is converted into carbon credits. This process involves third-party verification to ensure accuracy and integrity. The resulting credits are then issued to your account and can be managed through the 'Credits' section of the platform."
    },
    {
      question: "How can I obtain an Atmanirbhar certificate?",
      answer: "Atmanirbhar certificates are issued to projects that demonstrate self-reliance and contribute to local community development in addition to their carbon reduction efforts. These certificates are awarded after a special review process. You can apply for one via the 'Certificates' tab in your project details page."
    }
  ];

  const creditFaqs = [
    {
      question: "What are the eligibility criteria for a carbon credit application?",
      answer: "To be eligible, your project must result in measurable, reportable, and verifiable greenhouse gas emission reductions. It must also demonstrate additionality, meaning the reductions would not have occurred without the project. Specific criteria can vary by methodology, so please consult the relevant documentation on our 'Methodologies' page."
    },
    {
      question: "How long does the verification process take?",
      answer: "The verification timeline can vary depending on the complexity and scale of your project. On average, it takes between 3 to 6 months from the submission of your monitoring report to the completion of third-party verification. We strive to make this process as efficient as possible and will keep you updated on the status of your application."
    },
    {
      question: "When are carbon credits issued after successful verification?",
      answer: "Once your project's emission reductions have been successfully verified by an accredited third-party verifier, carbon credits are typically issued to your registry account within 10-15 business days. You will receive a notification once the credits are available in your account."
    },
    {
      question: "What documents are required for the application?",
      answer: "The primary documents required are the Project Design Document (PDD), monitoring reports, and supporting evidence for your emission reduction claims. Depending on the project type, you may also need to provide stakeholder consultation feedback and environmental impact assessments. A detailed checklist is available in the 'Resources' section of our website."
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground-light dark:text-foreground-dark">
            Help & Support
          </h2>
          <p className="mt-4 text-lg text-foreground-light/70 dark:text-foreground-dark/70">
            Your guide to the Climate Registry. We're here to help.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-foreground-light dark:text-foreground-dark">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg shadow-sm transition-all duration-300 hover:border-primary/50"
                open={openFaq === index}
                onToggle={() => toggleFaq(index)}
              >
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                  <span className="font-medium text-foreground-light dark:text-foreground-dark">
                    {faq.question}
                  </span>
                  <span className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-foreground-light/80 dark:text-foreground-dark/80">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Carbon Credit Application FAQs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground-light dark:text-foreground-dark">
            Carbon Credit Application FAQs
          </h3>
          <div className="space-y-4">
            {creditFaqs.map((faq, index) => (
              <details 
                key={index + faqs.length}
                className="group bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg shadow-sm transition-all duration-300 hover:border-primary/50"
                open={openFaq === index + faqs.length}
                onToggle={() => toggleFaq(index + faqs.length)}
              >
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                  <span className="font-medium text-foreground-light dark:text-foreground-dark">
                    {faq.question}
                  </span>
                  <span className={`transition-transform duration-300 ${openFaq === index + faqs.length ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-foreground-light/80 dark:text-foreground-dark/80">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-subtle-dark p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark">
          <h3 className="text-2xl font-bold mb-1 text-foreground-light dark:text-foreground-dark">
            Contact Us
          </h3>
          <p className="text-foreground-light/70 dark:text-foreground-dark/70 mb-6">
            Have a question or feedback? Fill out the form below to get in touch with us.
          </p>
          
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark" htmlFor="name">
                Name
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary dark:bg-background-dark dark:text-foreground-dark sm:text-sm"
                  id="name"
                  name="name"
                  type="text"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark" htmlFor="email">
                Email
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary dark:bg-background-dark dark:text-foreground-dark sm:text-sm"
                  id="email"
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark" htmlFor="subject">
                Subject
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary dark:bg-background-dark dark:text-foreground-dark sm:text-sm"
                  id="subject"
                  name="subject"
                  type="text"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark" htmlFor="message">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  className="block w-full rounded-md border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary dark:bg-background-dark dark:text-foreground-dark sm:text-sm"
                  id="message"
                  name="message"
                  rows="4"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  required
                ></textarea>
              </div>
            </div>
            
            <div>
              <button
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Help;