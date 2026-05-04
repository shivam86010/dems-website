// components/SocialIcons.tsx
import React from 'react';

interface SocialIconProps {
  className?: string;
}

export const GoogleIcon: React.FC<SocialIconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const FacebookIcon: React.FC<SocialIconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.5V12h3V9.5c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 .9-2 1.8V12h3.4l-.5 2.9h-2.9v7A10 10 0 0 0 22 12z" fill="#1877F2"/>
    <path d="M15.9 14.9l.5-2.9h-3.4V9.5c0-.9.5-1.8 2-1.8h1.5V4.8s-1.3-.2-2.6-.2c-2.7 0-4.5 1.7-4.5 4.7V12h-3v2.9h3v7c.6.1 1.2.1 1.8.1s1.2 0 1.8-.1v-7h2.9z" fill="#ffffff"/>
  </svg>
);

export const TwitterIcon: React.FC<SocialIconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#ffffff"/>
  </svg>
);