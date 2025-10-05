import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, variant = 'default' }) => {
  const getLayoutClasses = () => {
    if (variant === 'auth') {
      return "relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark";
    }
    return "flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark";
  };

  if (variant === 'auth') {
    return (
      <div className={getLayoutClasses()}>
        {/* Background image for auth pages */}
        <div className="absolute inset-0 bg-climate-action bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-background-light/80 dark:bg-background-dark/90 z-0"></div>
        
        <div className="relative z-10 flex flex-col flex-grow">
          <Header variant="auth" />
          <main className="flex-grow">
            {children}
          </main>
          <Footer variant="auth" />
        </div>
      </div>
    );
  }

  return (
    <div className={getLayoutClasses()}>
      <Header variant={variant} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer variant={variant} />
    </div>
  );
};

export default Layout;