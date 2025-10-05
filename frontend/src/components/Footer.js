import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ variant = 'default' }) => {
  if (variant === 'auth') {
    return (
      <footer className="w-full mt-auto py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-light dark:text-muted-dark text-sm">
          <p>Registered U/S 8, with Registrar of Companies, license no 113982. Dt 31/01/2019. CIN: U85300GJ2019NPL106818</p>
          <p>NGO Darpan / 2023 / 0365335</p>
          <p className="mt-2">© 2019. All Rights Reserved Earth Carbon Foundation</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-subtle-light dark:bg-subtle-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-sm text-foreground-light/70 dark:text-foreground-dark/70">
            © 2024 EcoRegistry. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/terms" 
              className="text-sm text-foreground-light/70 dark:text-foreground-dark/70 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="/privacy" 
              className="text-sm text-foreground-light/70 dark:text-foreground-dark/70 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-foreground-light/70 dark:text-foreground-dark/70 hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;