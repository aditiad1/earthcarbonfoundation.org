import { useState, useCallback } from 'react';

export const useEmailValidation = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState('');

  const validateEmail = useCallback((value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (value === '') {
      setIsValid(null);
      setError('');
      return null;
    }
    
    const valid = emailRegex.test(value);
    setIsValid(valid);
    setError(valid ? '' : 'Please enter a valid email address.');
    return valid;
  }, []);

  const handleEmailChange = useCallback((value) => {
    setEmail(value);
    validateEmail(value);
  }, [validateEmail]);

  return {
    email,
    isValid,
    error,
    handleEmailChange,
    validateEmail
  };
};

export const usePasswordValidation = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [strength, setStrength] = useState({
    score: 0,
    text: 'Weak',
    color: 'bg-red-500',
    width: '25%'
  });
  const [checks, setChecks] = useState({
    length: false,
    case: false,
    number: false,
    symbol: false
  });
  const [passwordMatch, setPasswordMatch] = useState({
    matches: null,
    message: '',
    className: 'mt-2 text-xs text-muted-light dark:text-muted-dark'
  });

  const validatePassword = useCallback((value) => {
    const newChecks = {
      length: value.length >= 8,
      case: /(?=.*[a-z])(?=.*[A-Z])/.test(value),
      number: /\d/.test(value),
      symbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)
    };

    let score = 0;
    Object.values(newChecks).forEach(check => {
      if (check) score++;
    });

    let strengthData = {
      score,
      text: 'Weak',
      color: 'bg-red-500',
      width: '25%'
    };

    switch (score) {
      case 1:
        strengthData = { score, text: 'Weak', color: 'bg-red-500', width: '25%' };
        break;
      case 2:
        strengthData = { score, text: 'Medium', color: 'bg-yellow-500', width: '50%' };
        break;
      case 3:
        strengthData = { score, text: 'Strong', color: 'bg-blue-500', width: '75%' };
        break;
      case 4:
        strengthData = { score, text: 'Very Strong', color: 'bg-green-500', width: '100%' };
        break;
      default:
        strengthData = { score, text: 'Weak', color: 'bg-red-500', width: '0%' };
    }

    if (value.length === 0) {
      strengthData.width = '25%';
    }

    setChecks(newChecks);
    setStrength(strengthData);
    
    return { score, checks: newChecks, strength: strengthData };
  }, []);

  const checkPasswordMatch = useCallback((pass, confirmPass) => {
    if (confirmPass.length > 0) {
      if (pass === confirmPass) {
        setPasswordMatch({
          matches: true,
          message: 'Passwords match.',
          className: 'mt-2 text-xs text-green-500 dark:text-green-400'
        });
        return true;
      } else {
        setPasswordMatch({
          matches: false,
          message: 'Passwords do not match.',
          className: 'mt-2 text-xs text-red-500 dark:text-red-400'
        });
        return false;
      }
    } else {
      setPasswordMatch({
        matches: null,
        message: '',
        className: 'mt-2 text-xs text-muted-light dark:text-muted-dark'
      });
      return null;
    }
  }, []);

  const handlePasswordChange = useCallback((value) => {
    setPassword(value);
    validatePassword(value);
    if (confirmPassword) {
      checkPasswordMatch(value, confirmPassword);
    }
  }, [validatePassword, checkPasswordMatch, confirmPassword]);

  const handleConfirmPasswordChange = useCallback((value) => {
    setConfirmPassword(value);
    checkPasswordMatch(password, value);
  }, [checkPasswordMatch, password]);

  return {
    password,
    confirmPassword,
    strength,
    checks,
    passwordMatch,
    handlePasswordChange,
    handleConfirmPasswordChange,
    validatePassword,
    checkPasswordMatch
  };
};

export default {
  useEmailValidation,
  usePasswordValidation
};