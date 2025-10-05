import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useEmailValidation } from '../hooks/useFormValidation';

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { email, isValid, error, handleEmailChange } = useEmailValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isValid) {
      console.log('Invalid email');
      return;
    }

    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] p-4">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-background-light dark:bg-background-dark rounded-xl shadow-lg border border-primary/10 p-8 text-center">
            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-2">
                    Forgot Your Password?
                  </h2>
                  <p className="text-sm text-foreground-light/80 dark:text-foreground-dark/80">
                    Enter your email and we'll send you a link to reset your password.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="sr-only" htmlFor="email">Email Address</label>
                    <input
                      className={`w-full px-4 py-3 bg-background-light dark:bg-background-dark border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder-foreground-light/60 dark:placeholder-foreground-dark/60 ${
                        isValid === null 
                          ? 'border-primary/20' 
                          : isValid 
                            ? 'border-green-500' 
                            : 'border-red-500'
                      }`}
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      type="email"
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      required
                    />
                    {error && (
                      <p className="mt-2 text-xs text-red-500">{error}</p>
                    )}
                  </div>
                  
                  <button
                    className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark disabled:opacity-50"
                    type="submit"
                    disabled={!isValid}
                  >
                    Send Reset Link
                  </button>
                </form>
                
                <div className="mt-6 text-sm">
                  <Link 
                    to="/login" 
                    className="font-medium text-primary hover:underline"
                  >
                    Back to Login
                  </Link>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-2">
                  Check Your Email
                </h2>
                
                <p className="text-sm text-foreground-light/80 dark:text-foreground-dark/80 mb-6">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                
                <div className="space-y-3">
                  <Link 
                    to="/login" 
                    className="block w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Back to Login
                  </Link>
                  
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="block w-full text-primary hover:underline text-sm"
                  >
                    Try a different email
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;