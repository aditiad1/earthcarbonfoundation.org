import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useEmailValidation } from '../hooks/useFormValidation';

const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { email, isValid, error, handleEmailChange } = useEmailValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
    // Add actual login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout variant="auth">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8 space-y-6 bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-sm rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-foreground-light dark:text-foreground-dark">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
              Sign in to your account to continue your climate action journey.
            </p>
          </div>

          {/* Social Login Buttons */}
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
              <span className="text-sm font-medium">Continue with Google</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-border-light dark:border-border-dark rounded-lg text-foreground-light dark:text-foreground-dark hover:bg-input-light dark:hover:bg-input-dark transition-colors">
              <svg className="w-5 h-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 0 1 2.063-2.065 2.064 2.064 0 0 1 2.063 2.065c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.557V9h3.562v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
              </svg>
              <span className="text-sm font-medium">Continue with LinkedIn</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
            <span className="flex-shrink mx-4 text-xs text-muted-light dark:text-muted-dark">OR</span>
            <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <label className="sr-only" htmlFor="email">Email address</label>
                <input
                  className={`appearance-none rounded-lg relative block w-full px-4 py-3 border bg-input-light dark:bg-input-dark placeholder-muted-light dark:placeholder-muted-dark text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 text-sm pr-10 ${
                    isValid === null 
                      ? 'border-border-light dark:border-border-dark' 
                      : isValid 
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
                  {isValid === true && (
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {isValid === false && (
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              </div>
              {error && (
                <p className="mt-2 text-xs text-red-500 dark:text-red-400">{error}</p>
              )}
            </div>

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
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-light dark:text-muted-dark hover:text-primary"
                  onClick={togglePasswordVisibility}
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
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 text-primary bg-input-light dark:bg-input-dark border-border-light dark:border-border-dark rounded focus:ring-primary"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-light dark:text-muted-dark">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link 
                  to="/forgot-password" 
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-light dark:text-muted-dark">
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                className="font-medium text-primary hover:text-primary/90"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;