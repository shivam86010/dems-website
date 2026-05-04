import  { useState } from 'react';
import { LoginForm } from '../components/LoginForm';
import { SignupForm } from '../components/SignupForm';
import { Zap, Fingerprint, Database, ShieldCheck, Building2, Users, Gavel, Microscope } from 'lucide-react';

const Login = () => {
     const [mode, setMode] = useState<'login' | 'signup'>('login');
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-deep-blue-800 to-navy-900 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-deep-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-500/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-deep-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center z-10">
        {/* Left Side - Branding & Features */}
        <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 px-4 lg:px-0">
          
          
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bg-card tracking-tight animate-slide-in-left" style={{ animationDelay: '100ms' }}>
            Distributed Evidence
            <br />
            <span className="bg-gradient-to-r from-deep-blue-300 via-deep-blue-400 to-slate-400 bg-clip-text text-transparent">
              & Case Management
            </span>
          </h1>
          
          <p className="text-lg text-bg-card/60 max-w-md mx-auto lg:mx-0 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
            Secure, real-time platform connecting police, courts, and investigators with tamper-proof evidence tracking.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-lg mx-auto lg:mx-0">
            {[
              { icon: Zap, label: 'Real-time Updates', color: 'deep-blue' },
              { icon: ShieldCheck, label: 'Tamper-proof Evidence', color: 'success' },
              { icon: Fingerprint, label: 'Secure Access Control', color: 'warning' },
              { icon: Database, label: 'CCTV Integration', color: 'slate' },
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 bg-bg-card/5 rounded-xl p-3 backdrop-blur-sm border border-bg-card/10 hover:bg-bg-card/10 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${300 + idx * 100}ms` }}
              >
                <div className={`p-1.5 bg-${feature.color}-500/20 rounded-lg`}>
                  <feature.icon className={`w-4 h-4 text-${feature.color}-400`} />
                </div>
                <span className="text-sm text-bg-card/80">{feature.label}</span>
              </div>
            ))}
          </div>

         
         

          {/* Role Icons */}
          <div className="flex gap-6 justify-center lg:justify-start pt-6">
            {[
              { icon: Users, label: 'Police', color: 'deep-blue' },
              { icon: Gavel, label: 'Judges', color: 'success' },
              { icon: Microscope, label: 'Investigators', color: 'warning' },
              { icon: Building2, label: 'Command', color: 'slate' },
            ].map((role, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-2 bg-bg-card/5 rounded-full border border-bg-card/10 group-hover:bg-bg-card/10 group-hover:scale-110 transition-all duration-300">
                  <role.icon className={`w-5 h-5 text-${role.color}-400`} />
                </div>
                <span className="text-xs text-bg-card/60 group-hover:text-bg-card/80">{role.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Auth Forms */}
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
          <div className="bg-bg-card/10 backdrop-blur-xl rounded-2xl border border-bg-card/20 shadow-premium-lg p-6 sm:p-8 transition-all duration-500 hover:shadow-glow">
            {/* Toggle Buttons */}
            <div className="flex gap-2 p-1 bg-navy-800/30 rounded-xl mb-8">
              <button
                onClick={() => setMode('login')}
                className={`flex-1 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  mode === 'login'
                    ? 'bg-gradient-premium text-bg-card shadow-md'
                    : 'text-bg-card/60 hover:text-bg-card'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setMode('signup')}
                className={`flex-1 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  mode === 'signup'
                    ? 'bg-gradient-premium text-bg-card shadow-md'
                    : 'text-bg-card/60 hover:text-bg-card'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form Renderer */}
            <div className="transition-all duration-300">
              {mode === 'login' ? <LoginForm /> : <SignupForm onSuccess={() => setMode('login')} />}
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
  )
}

export default Login