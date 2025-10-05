import React from 'react';
import Layout from '../components/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Terms & Conditions</h2>
            <p className="mt-4 text-lg text-center text-foreground-light/70 dark:text-foreground-dark/70">
              Last updated: July 26, 2024
            </p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none prose-h3:font-semibold prose-h3:text-foreground-light dark:prose-h3:text-foreground-dark prose-headings:font-display prose-p:text-foreground-light/90 dark:prose-p:text-foreground-dark/90 prose-a:text-primary hover:prose-a:underline">
            <p>
              Welcome to EcoRegistry, a platform dedicated to fostering environmental sustainability and recognizing contributions to a greener future. By accessing or using our services, including registering low carbon actions, converting them into carbon credits, and obtaining Atmanirbhar certificates, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our platform. If you do not agree with any part of these terms, you should not access or use our services.
            </p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>
              By using Earth Carbon Registry, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as our Privacy Policy. These terms may be updated or modified from time to time without prior notice, and your continued use of the platform constitutes your acceptance of any changes.
            </p>
            
            <h3>2. Description of Services</h3>
            <p>
              Earth Carbon Registry provides a platform for individuals and organizations to register low carbon actions, which may be converted into carbon credits. We also issue Atmanirbhar certificates to recognize significant contributions to environmental sustainability. Our services are designed to simplify the carbon credit application process and provide insights into certification rates, credit retirement, and other relevant data.
            </p>
            
            <h3>3. User Registration and Accounts</h3>
            <p>
              To access certain features of Earth Carbon Registry, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
            </p>
            
            <h3>4. User Conduct</h3>
            <p>
              You agree to use Earth Carbon Registry only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the platform. Prohibited conduct includes, but is not limited to, transmitting any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable content.
            </p>
            
            <h3>5. Intellectual Property</h3>
            <p>
              The content, features, and functionality of Earth Carbon Registry, including but not limited to text, graphics, logos, images, and software, are the exclusive property of Earth Carbon Registry and its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our platform, except as necessary for your own personal, non-commercial use.
            </p>
            
            <h3>6. Carbon Credits and Atmanirbhar Certificates</h3>
            <p>
              Carbon credits and Atmanirbhar certificates issued by Earth Carbon Registry are subject to specific terms and conditions, which will be provided upon issuance. We reserve the right to verify the accuracy of information provided by users and to revoke or modify any credits or certificates if necessary.
            </p>
            
            <h3>7. Disclaimer of Warranties</h3>
            <p>
              Earth Carbon Registry is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the platform will be uninterrupted or error-free, that defects will be corrected, or that the platform or the server that makes it available are free of viruses or other harmful components.
            </p>
            
            <h3>8. Limitation of Liability</h3>
            <p>
              In no event shall Earth Carbon Registry, its affiliates, or their respective officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use Earth Carbon Registry; (ii) any conduct or content of any third party on the platform; (iii) any content obtained from the platform; or (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
            
            <h3>9. Governing Law</h3>
            <p>
              These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Earth Carbon Registry is based, without regard to its conflict of law provisions.
            </p>
            
            <h3>10. Contact Information</h3>
            <p>
              If you have any questions about these terms and conditions, please contact us at <a href="mailto:support@earthcarbonfoundation.org">support@earthcarbonfoundation.org</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;