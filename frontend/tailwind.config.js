// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'navy': {
          DEFAULT: '#0B1F3A',
          dark: '#071528',
          light: '#132A4D',
          50: '#E8EBF0',
          100: '#C5CBD6',
          200: '#9EA8B9',
          300: '#77859C',
          400: '#556580',
          500: '#334155',
          600: '#2A3547',
          700: '#212A38',
          800: '#181F2A',
          900: '#0F141C',
        },
        'deep-blue': {
          DEFAULT: '#1E3A8A',
          light: '#2B4AB0',
          dark: '#152C6B',
          50: '#E8EEF9',
          100: '#C5D3F0',
          200: '#9EB5E5',
          300: '#7797DA',
          400: '#5580D0',
          500: '#1E3A8A',
          600: '#18307A',
          700: '#122660',
          800: '#0C1C48',
          900: '#061230',
        },
        'slate': {
          DEFAULT: '#334155',
          light: '#475569',
          dark: '#1E293B',
          50: '#F1F5F9',
          100: '#E2E8F0',
          200: '#CBD5E1',
          300: '#94A3B8',
          400: '#64748B',
          500: '#334155',
          600: '#2C3A4D',
          700: '#22303F',
          800: '#192632',
          900: '#101C25',
        },
        // Background
        'bg': {
          DEFAULT: '#F8FAFC',
          dark: '#E2E8F0',
          card: '#FFFFFF',
        },
        // Accent Colors
        'success': {
          DEFAULT: '#16A34A',
          light: '#22C55E',
          dark: '#15803D',
        },
        'error': {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          dark: '#B91C1C',
        },
        'warning': {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          from: { transform: 'scale(0.95)' },
          to: { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'premium': '0 20px 35px -10px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'premium-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 15px rgba(30, 58, 138, 0.5)',
        'glow-success': '0 0 15px rgba(22, 163, 74, 0.3)',
      },
    },
  },
  plugins: [],
}