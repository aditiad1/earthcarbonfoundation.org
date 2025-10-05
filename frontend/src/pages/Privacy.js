import React from 'react';
import Layout from '../components/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Privacy Policy</h2>
            <p className="mt-4 text-lg text-center text-foreground-light/70 dark:text-foreground-dark/70">
              Last updated: July 26, 2024
            </p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none prose-h3:font-semibold prose-h3:text-foreground-light dark:prose-h3:text-foreground-dark prose-headings:font-display prose-p:text-foreground-light/90 dark:prose-p:text-foreground-dark/90 prose-a:text-primary hover:prose-a:underline">
            <p>
              This Privacy Policy describes how Earth Carbon Registry ("we", "us", or "our") collects, uses, and discloses your personal information when you use our platform and services. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
            </p>
            
            <h3>1. Information We Collect</h3>
            <p>We may collect several types of information from and about users of our platform, including:</p>
            <ul>
              <li><strong>Personal Information:</strong> Information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.</li>
              <li><strong>Usage Details:</strong> Information about your internet connection, the equipment you use to access our platform, and usage details.</li>
              <li><strong>Project Information:</strong> Data related to the low carbon actions you register, including location, type of action, and supporting documentation.</li>
            </ul>
            
            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>To present our platform and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To process your registration of low carbon actions and applications for carbon credits and Atmanirbhar certificates.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our platform or any products or services we offer or provide through it.</li>
            </ul>
            
            <h3>3. Disclosure of Your Information</h3>
            <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
            <ul>
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Earth Carbon Registry's assets.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>With your consent.</li>
            </ul>
            
            <h3>4. Data Security</h3>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our platform, you are responsible for keeping this password confidential.
            </p>
            
            <h3>5. Your Rights and Choices</h3>
            <p>
              You may send us an e-mail at <a href="mailto:support@earthcarbonfoundation.org">support@earthcarbonfoundation.org</a> to request access to, correct or delete any personal information that you have provided to us. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.
            </p>
            
            <h3>6. Children's Privacy</h3>
            <p>
              Our platform is not intended for children under 13 years of age. No one under age 13 may provide any personal information to or on the platform. We do not knowingly collect personal information from children under 13.
            </p>
            
            <h3>7. Changes to Our Privacy Policy</h3>
            <p>
              It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the platform home page.
            </p>
            
            <h3>8. Contact Information</h3>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:support@earthcarbonfoundation.org">support@earthcarbonfoundation.org</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;