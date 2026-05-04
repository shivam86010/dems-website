// components/LoginForm.tsx
import React, { useState, useCallback } from 'react';
import { Eye, EyeOff, Mail, Lock, LogIn, Fingerprint, Shield, ArrowRight } from 'lucide-react';
import { GoogleIcon, FacebookIcon, TwitterIcon } from './SocialIcons';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = useCallback((emailValue: string): boolean => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setEmailError(isValid ? '' : 'Please enter a valid email address');
    return isValid;
  }, []);

  const validatePassword = useCallback((passwordValue: string): boolean => {
    const isValid = passwordValue.length >= 6;
    setPasswordError(isValid ? '' : 'Password must be at least 6 characters');
    return isValid;
  }, []);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail) validateEmail(newEmail);
    else setEmailError('');
  }, [validateEmail]);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword) validatePassword(newPassword);
    else setPasswordError('');
  }, [validatePassword]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    if (!isEmailValid || !isPasswordValid) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Login attempt:', { email, password, rememberMe });
    alert('Login successful! (Demo)');
    setIsLoading(false);
  }, [email, password, rememberMe, validateEmail, validatePassword]);

  const handleSocialLogin = useCallback(async (provider: 'google' | 'facebook' | 'twitter') => {
    setIsSocialLoading(provider);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(`${provider} login attempted`);
    alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} authentication would be integrated with OAuth 2.0`);
    setIsSocialLoading(null);
  }, []);

  const handleBiometricAuth = useCallback(() => {
    alert('Biometric authentication would be triggered using WebAuthn API');
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
    
      

      {/* Email Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-bg-card/80 block">Email Address</label>
        <div className="relative group">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bg-card/40 group-focus-within:text-deep-blue-light transition-colors" />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={`w-full bg-bg-card/5 border rounded-xl py-3 pl-10 pr-4 text-bg-card placeholder:text-bg-card/30 focus:outline-none focus:ring-2 transition-all duration-200 ${
              emailError && email
                ? 'border-error/50 focus:border-error focus:ring-error/20'
                : 'border-bg-card/10 focus:border-deep-blue-light focus:ring-deep-blue-light/20 hover:border-bg-card/20'
            }`}
            placeholder="Enter your email"
            required
          />
        </div>
        {emailError && email && (
          <p className="text-xs text-error flex items-center gap-1.5 animate-fade-in">
            <span className="inline-block w-1 h-1 rounded-full bg-error" />
            {emailError}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-bg-card/80 block">Password</label>
          <button type="button" className="text-xs text-deep-blue-light hover:text-deep-blue transition-colors font-medium">
            Forgot password?
          </button>
        </div>
        <div className="relative group">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bg-card/40 group-focus-within:text-deep-blue-light transition-colors" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            className={`w-full bg-bg-card/5 border rounded-xl py-3 pl-10 pr-12 text-bg-card placeholder:text-bg-card/30 focus:outline-none focus:ring-2 transition-all duration-200 ${
              passwordError && password
                ? 'border-error/50 focus:border-error focus:ring-error/20'
                : 'border-bg-card/10 focus:border-deep-blue-light focus:ring-deep-blue-light/20 hover:border-bg-card/20'
            }`}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-bg-card/40 hover:text-bg-card/60 transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {passwordError && password && (
          <p className="text-xs text-error flex items-center gap-1.5 animate-fade-in">
            <span className="inline-block w-1 h-1 rounded-full bg-error" />
            {passwordError}
          </p>
        )}
      </div>

      {/* Remember Me & Biometric */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-bg-card/20 bg-bg-card/5 checked:bg-deep-blue checked:border-deep-blue focus:ring-deep-blue focus:ring-offset-0 transition-colors cursor-pointer"
          />
          <span className="text-sm text-bg-card/60 group-hover:text-bg-card/80 transition-colors">Remember me</span>
        </label>
        <button
          type="button"
          onClick={handleBiometricAuth}
          className="flex items-center gap-1.5 text-sm text-bg-card/60 hover:text-bg-card transition-colors group"
        >
          <Fingerprint className="w-4 h-4 group-hover:scale-105 transition-transform" />
          <span>Biometric Login</span>
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="group relative w-full bg-gradient-premium hover:bg-gradient-premium-hover text-bg-card font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bg-card/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-bg-card/30 border-t-bg-card rounded-full animate-spin" />
            <span>Authenticating...</span>
          </>
        ) : (
          <>
            <LogIn className="w-5 h-5" />
            <span>Login to DEMS+</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </>
        )}
      </button>


      {/* Social Media Login Options */}
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-bg-card/10"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-transparent text-bg-card/40 font-medium">Or continue with email</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { provider: 'google', Icon: GoogleIcon, label: 'Google' },
            { provider: 'facebook', Icon: FacebookIcon, label: 'Facebook' },
            { provider: 'twitter', Icon: TwitterIcon, label: 'X' },
          ].map(({ provider, Icon, label }) => (
            <button
              key={provider}
              type="button"
              onClick={() => handleSocialLogin(provider as any)}
              disabled={isSocialLoading !== null}
              className="group relative flex items-center justify-center gap-2 py-2.5 rounded-xl bg-bg-card/5 border border-bg-card/10 hover:border-deep-blue/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bg-card/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {isSocialLoading === provider ? (
                <div className="w-4 h-4 border-2 border-bg-card/30 border-t-bg-card rounded-full animate-spin" />
              ) : (
                <>
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium text-bg-card/70 group-hover:text-bg-card">{label}</span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      
      

     
     
    </form>
  );
};