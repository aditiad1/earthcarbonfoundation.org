import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useEmailValidation, usePasswordValidation } from '../hooks/useFormValidation';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const { email, isValid: emailValid, error: emailError, handleEmailChange } = useEmailValidation();
  const {
    password,
    confirmPassword,
    strength,
    checks,
    passwordMatch,
    handlePasswordChange,
    handleConfirmPasswordChange
  } = usePasswordValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!emailValid || !agreeTerms || !recaptchaChecked || passwordMatch.matches !== true) {
      console.log('Form validation failed');
      return;
    }

    console.log('Registration attempt:', { email, password });
    setSuccessMessage(true);
    
    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
  };

  return (
    <Layout variant="auth">
      {successMessage && (
        <div className="fixed top-5 right-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg flex items-center gap-4 z-50" role="alert">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-bold">Registration complete!</p>
            <p className="text-sm">Please check your email to verify your account.</p>
          </div>
          <button 
            onClick={() => setSuccessMessage(false)}
            className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8"
          >
            <span className="sr-only">Dismiss</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8 space-y-6 bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-sm rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-foreground-light dark:text-foreground-dark">
              Create an Account
            </h2>
            <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
              Join the movement for a sustainable future.
            </p>
          </div>

          {/* Social Signup Buttons */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-border-light dark:border-border-dark rounded-lg text-foreground-light dark:text-foreground-dark hover:bg-input-light dark:hover:bg-input-dark transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z" fill="#4285F4"></path>
                  <path d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.92-2.26a5.4 5.4 0 0 1-8.08-2.5H3.96v2.34A9 9 0 0 0 12 21z" fill="#34A853"></path>
                  <path d="M6.96 14.06a5.26 5.26 0 0 1 0-4.12V7.6a9 9 0 0 0 0 8.8z" fill="#FBBC05"></path>
                  <path d="M12 6.58c1.32 0 2.5 .45 3.44 1.35l2.6-2.6A9 9 0 0 0 3.96 7.6l3 2.34a5.36 5.36 0 0 1 5.04-3.36z" fill="#EA4335"></path>
                </g>
              </svg>
              <span className="text-sm font-medium">Sign up with Google</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-border-light dark:border-border-dark rounded-lg text-foreground-light dark:text-foreground-dark hover:bg-input-light dark:hover:bg-input-dark transition-colors">
              <svg className="w-5 h-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 0 1 2.063-2.065 2.064 2.064 0 0 1 2.063 2.065c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.557V9h3.562v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
              </svg>
              <span className="text-sm font-medium">Sign up with LinkedIn</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
            <span className="flex-shrink mx-4 text-xs text-muted-light dark:text-muted-dark">OR</span>
            <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <div className="relative">
                <label className="sr-only" htmlFor="email">Email address</label>
                <input
                  className={`appearance-none rounded-lg relative block w-full px-4 py-3 border bg-input-light dark:bg-input-dark placeholder-muted-light dark:placeholder-muted-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 text-sm pr-10 ${
                    emailValid === null 
                      ? 'border-border-light dark:border-border-dark' 
                      : emailValid 
                        ? 'border-green-500 dark:border-green-400' 
                        : 'border-red-500 dark:border-red-400'
                  }`}
                  id="email"
                  name="email"
                  placeholder="Email address"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {emailValid === true && (
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {emailValid === false && (
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              </div>
              {emailError && (
                <p className="mt-2 text-xs text-red-500 dark:text-red-400">{emailError}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="relative">
                <label className="sr-only" htmlFor="password">Password</label>
                <input
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-border-light dark:border-border-dark bg-input-light dark:bg-input-dark placeholder-muted-light dark:placeholder-muted-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 text-sm pr-10"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <button
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-light dark:text-muted-dark hover:text-primary"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  )}
                </button>
              </div>
              
              {/* Password Strength */}
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-muted-light dark:text-muted-dark">
                    Password strength: {strength.text}
                  </p>
                </div>
                <div className="w-full bg-input-light dark:bg-input-dark rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${strength.color}`} 
                    style={{ width: strength.width }}
                  ></div>
                </div>
                <ul className="text-xs text-muted-light dark:text-muted-dark list-disc list-inside space-y-1 mt-2">
                  <li className={checks.length ? 'text-green-500 dark:text-green-400' : ''}>
                    At least 8 characters
                  </li>
                  <li className={checks.case ? 'text-green-500 dark:text-green-400' : ''}>
                    Uppercase & lowercase letters
                  </li>
                  <li className={checks.number ? 'text-green-500 dark:text-green-400' : ''}>
                    At least one number
                  </li>
                  <li className={checks.symbol ? 'text-green-500 dark:text-green-400' : ''}>
                    At least one symbol
                  </li>
                </ul>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <div className="relative">
                <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
                <input
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-border-light dark:border-border-dark bg-input-light dark:bg-input-dark placeholder-muted-light dark:placeholder-muted-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 text-sm pr-10"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {passwordMatch.matches === true && (
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {passwordMatch.matches === false && (
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              </div>
              <p className={passwordMatch.className}>
                {passwordMatch.message || ' '}
              </p>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  className="h-4 w-4 text-primary bg-input-light dark:bg-input-dark border-border-light dark:border-border-dark rounded focus:ring-primary"
                  id="terms"
                  name="terms"
                  required
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="text-muted-light dark:text-muted-dark" htmlFor="terms">
                  I agree to the{' '}
                  <Link to="/terms" className="font-medium text-primary hover:text-primary/90">
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="font-medium text-primary hover:text-primary/90">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="p-4 bg-input-light dark:bg-input-dark rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input
                  className="h-6 w-6 text-primary bg-card-light dark:bg-card-dark border-border-light dark:border-border-dark rounded focus:ring-primary"
                  id="recaptcha"
                  type="checkbox"
                  checked={recaptchaChecked}
                  onChange={(e) => setRecaptchaChecked(e.target.checked)}
                />
                <label className="text-sm text-foreground-light dark:text-foreground-dark" htmlFor="recaptcha">
                  I'm not a robot
                </label>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
                  reCAPTCHA
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                type="submit"
                disabled={!emailValid || !agreeTerms || !recaptchaChecked || passwordMatch.matches !== true}
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-light dark:text-muted-dark">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="font-medium text-primary hover:text-primary/90"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;