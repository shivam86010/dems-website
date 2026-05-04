// components/SignupForm.tsx
import React, { useState, useCallback, useMemo } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Briefcase, Shield, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { GoogleIcon, FacebookIcon, TwitterIcon } from './SocialIcons';

interface SignupFormProps {
  onSuccess: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  department: string;
  badgeNumber: string;
}

interface ValidationErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  department?: string;
  badgeNumber?: string;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'police',
    department: '',
    badgeNumber: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const roles = useMemo(() => [
    { value: 'police', label: 'Police Officer', deptRequired: true, badgeRequired: true },
    { value: 'judge', label: 'Judge', deptRequired: false, badgeRequired: false },
    { value: 'investigator', label: 'Investigator', deptRequired: true, badgeRequired: true },
    { value: 'command', label: 'Command Center', deptRequired: false, badgeRequired: false },
  ], []);

  const currentRole = useMemo(() => 
    roles.find(r => r.value === formData.role), 
    [formData.role, roles]
  );

  const validateField = useCallback((field: keyof ValidationErrors, value: string): string => {
    switch (field) {
      case 'fullName':
        if (value.length < 2) return 'Full name must be at least 2 characters';
        if (value.length > 50) return 'Full name must be less than 50 characters';
        if (!/^[a-zA-Z\s\-']+$/.test(value)) return 'Name contains invalid characters';
        return '';
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'password':
        if (value.length < 8) return 'Password must be at least 8 characters';
        if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
        if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';
        if (!/[0-9]/.test(value)) return 'Password must contain at least one number';
        if (!/[^A-Za-z0-9]/.test(value)) return 'Password must contain at least one special character';
        return '';
      case 'confirmPassword':
        if (value !== formData.password) return 'Passwords do not match';
        return '';
      case 'department':
        if (currentRole?.deptRequired && value.length < 2) return 'Department is required';
        return '';
      case 'badgeNumber':
        if (currentRole?.badgeRequired && value.length < 3) return 'Valid badge number is required';
        return '';
      default:
        return '';
    }
  }, [formData.password, currentRole]);

  const calculatePasswordStrength = useCallback((pass: string): number => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/[0-9]/)) strength++;
    if (pass.match(/[^a-zA-Z0-9]/)) strength++;
    return strength;
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newPass = e.target.value;
    setFormData(prev => ({ ...prev, password: newPass }));
    setPasswordStrength(calculatePasswordStrength(newPass));
    setErrors(prev => ({ ...prev, password: validateField('password', newPass) }));
  }, [calculatePasswordStrength, validateField]);

  const handleFieldChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(prev => ({ ...prev, [field]: validateField(field as keyof ValidationErrors, value) }));
    }
  }, [touched, validateField]);

  const handleBlur = useCallback((field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const value = formData[field as keyof FormData] as string;
    setErrors(prev => ({ ...prev, [field]: validateField(field as keyof ValidationErrors, value) }));
  }, [formData, validateField]);

  const handleSocialLogin = useCallback(async (provider: 'google' | 'facebook' | 'twitter') => {
    setIsSocialLoading(provider);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(`${provider} login attempted`);
    alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} authentication would be integrated with OAuth 2.0`);
    setIsSocialLoading(null);
  }, []);

  const validateAllFields = useCallback((): boolean => {
    const newErrors: ValidationErrors = {};
    newErrors.fullName = validateField('fullName', formData.fullName);
    newErrors.email = validateField('email', formData.email);
    newErrors.password = validateField('password', formData.password);
    newErrors.confirmPassword = validateField('confirmPassword', formData.confirmPassword);
    if (currentRole?.deptRequired) newErrors.department = validateField('department', formData.department);
    if (currentRole?.badgeRequired) newErrors.badgeNumber = validateField('badgeNumber', formData.badgeNumber);
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  }, [formData, currentRole, validateField]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAllFields()) {
      const firstErrorField = Object.keys(errors).find(key => errors[key as keyof ValidationErrors]);
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        element?.focus();
      }
      return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Signup attempt:', { ...formData, password: '[REDACTED]', confirmPassword: '[REDACTED]' });
    alert('Account created successfully! Please login.');
    onSuccess();
    setIsLoading(false);
  }, [formData, validateAllFields, errors, onSuccess]);

  const getPasswordStrengthText = useCallback((): string => {
    if (passwordStrength === 0) return '';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    return 'Strong';
  }, [passwordStrength]);

  const getPasswordStrengthColor = useCallback((): string => {
    if (passwordStrength === 1) return 'bg-gradient-to-r from-error-500 to-error-400';
    if (passwordStrength === 2) return 'bg-gradient-to-r from-warning-500 to-warning-400';
    if (passwordStrength === 3) return 'bg-gradient-to-r from-deep-blue-500 to-deep-blue-400';
    if (passwordStrength === 4) return 'bg-gradient-to-r from-success-500 to-success-400';
    return 'bg-bg-card/10';
  }, [passwordStrength]);

  const getInputClassName = useCallback((field: keyof ValidationErrors): string => {
    const hasError = errors[field] && touched[field];
    return `w-full bg-bg-card/5 border rounded-xl py-2.5 pl-10 pr-4 text-bg-card placeholder:text-bg-card/30 focus:outline-none focus:ring-2 transition-all duration-200 ${
      hasError 
        ? 'border-error-500/50 focus:border-error-500 focus:ring-error-500/20' 
        : 'border-bg-card/10 focus:border-deep-blue-400 focus:ring-deep-blue-400/20 hover:border-bg-card/20'
    }`;
  }, [errors, touched]);

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
      {/* Social Media Login Options */}
      <div className="space-y-4">
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
              className="group relative flex items-center justify-center gap-2 py-2.5 rounded-xl bg-bg-card/5 border border-bg-card/10 hover:border-deep-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden hover:scale-105 active:scale-95"
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
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-bg-card/10"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-transparent text-bg-card/40 font-medium">Or continue with email</span>
          </div>
        </div>
      </div>

      {/* Full Name */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-bg-card/80 flex items-center gap-2">
          <User className="w-3.5 h-3.5 text-bg-card/50" />
          Full Name
        </label>
        <div className="relative">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => handleFieldChange('fullName', e.target.value)}
            onBlur={() => handleBlur('fullName')}
            className={getInputClassName('fullName')}
            placeholder="John Doe"
            required
          />
          {touched.fullName && !errors.fullName && formData.fullName && (
            <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success-500" />
          )}
        </div>
        {touched.fullName && errors.fullName && (
          <p className="text-xs text-error-500 flex items-center gap-1.5 mt-1 animate-fade-in">
            <AlertCircle className="w-3 h-3" />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-bg-card/80 flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-bg-card/50" />
          Email Address
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={getInputClassName('email')}
            placeholder="john@dems.com"
            required
          />
          {touched.email && !errors.email && formData.email && (
            <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success-500" />
          )}
        </div>
        {touched.email && errors.email && (
          <p className="text-xs text-error-500 flex items-center gap-1.5 mt-1 animate-fade-in">
            <AlertCircle className="w-3 h-3" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Role Selection */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-bg-card/80 flex items-center gap-2">
          <Briefcase className="w-3.5 h-3.5 text-bg-card/50" />
          Role
        </label>
        <div className="relative">
          <select
            value={formData.role}
            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
            className="w-full bg-bg-card/5 border border-bg-card/10 rounded-xl py-2.5 px-4 text-bg-card appearance-none focus:outline-none focus:border-deep-blue-400 focus:ring-2 focus:ring-deep-blue-400/20 transition-all cursor-pointer hover:border-bg-card/20"
          >
            {roles.map(role => (
              <option key={role.value} value={role.value} className="bg-navy-900">
                {role.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-bg-card/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Conditional Fields */}
      {currentRole?.deptRequired && (
        <div className="space-y-1.5 animate-fade-in">
          <label className="text-sm font-medium text-bg-card/80">Department</label>
          <div className="relative">
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={(e) => handleFieldChange('department', e.target.value)}
              onBlur={() => handleBlur('department')}
              className={getInputClassName('department')}
              placeholder="e.g., Cyber Crime Unit"
              required
            />
          </div>
          {touched.department && errors.department && (
            <p className="text-xs text-error-500 flex items-center gap-1.5 mt-1 animate-fade-in">
              <AlertCircle className="w-3 h-3" />
              {errors.department}
            </p>
          )}
        </div>
      )}

      {currentRole?.badgeRequired && (
        <div className="space-y-1.5 animate-fade-in">
          <label className="text-sm font-medium text-bg-card/80 flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-bg-card/50" />
            Badge / ID Number
          </label>
          <div className="relative">
            <input
              type="text"
              name="badgeNumber"
              value={formData.badgeNumber}
              onChange={(e) => handleFieldChange('badgeNumber', e.target.value)}
              onBlur={() => handleBlur('badgeNumber')}
              className={getInputClassName('badgeNumber')}
              placeholder="Enter your badge number"
              required
            />
          </div>
          {touched.badgeNumber && errors.badgeNumber && (
            <p className="text-xs text-error-500 flex items-center gap-1.5 mt-1 animate-fade-in">
              <AlertCircle className="w-3 h-3" />
              {errors.badgeNumber}
            </p>
          )}
        </div>
      )}

      {/* Password */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-bg-card/80 flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-bg-card/50" />
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handlePasswordChange}
            onBlur={() => handleBlur('password')}
            className={getInputClassName('password')}
            placeholder="Create a strong password"
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
        {formData.password && (
          <div className="space-y-2">
            <div className="flex gap-1.5 h-1.5">
              {[1, 2, 3, 4].map(level => (
                <div
                  key={level}
                  className={`flex-1 rounded-full transition-all duration-300 ${
                    level <= passwordStrength ? getPasswordStrengthColor() : 'bg-bg-card/10'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-bg-card/40">Password strength:</span>
              <span className={`font-medium ${
                passwordStrength === 1 ? 'text-error-500' :
                passwordStrength === 2 ? 'text-warning-500' :
                passwordStrength === 3 ? 'text-deep-blue-400' :
                passwordStrength === 4 ? 'text-success-500' :
                'text-bg-card/40'
              }`}>
                {getPasswordStrengthText()}
              </span>
            </div>
          </div>
        )}
        {touched.password && errors.password && (
          <p className="text-xs text-error-500 flex items-center gap-1.5 mt-1 animate-fade-in">
            <AlertCircle className="w-3 h-3" />
            {errors.password}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-bg-card/80">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
            onBlur={() => handleBlur('confirmPassword')}
            className={getInputClassName('confirmPassword')}
            placeholder="Confirm your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-bg-card/40 hover:text-bg-card/60 transition-colors"
          >
            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="text-xs text-error-500 flex items-center gap-1.5 mt-1 animate-fade-in">
            <AlertCircle className="w-3 h-3" />
            {errors.confirmPassword}
          </p>
        )}
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-start gap-2.5 pt-2">
        <input
          type="checkbox"
          required
          className="mt-0.5 w-4 h-4 rounded border-bg-card/20 bg-bg-card/5 checked:bg-deep-blue-500 checked:border-deep-blue-500 focus:ring-deep-blue-400 focus:ring-offset-0 transition-colors cursor-pointer"
        />
        <label className="text-xs text-bg-card/50 leading-relaxed">
          I agree to the <button type="button" className="text-deep-blue-400 hover:text-deep-blue-300 transition-colors font-medium">Terms of Service</button> and{' '}
          <button type="button" className="text-deep-blue-400 hover:text-deep-blue-300 transition-colors font-medium">Privacy Policy</button>, including data processing under law enforcement regulations.
        </label>
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
            <span>Creating account...</span>
          </>
        ) : (
          <>
            <Shield className="w-5 h-5" />
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </>
        )}
      </button>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </form>
  );
};