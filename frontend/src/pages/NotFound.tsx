import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Home, ArrowLeft, AlertTriangle, Compass } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-deep-blue-800 to-navy-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-deep-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-500/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-deep-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full mx-auto text-center">
        {/* Animated 404 Text */}
        <div className="relative ">
          <div className="text-[150px] sm:text-[200px] font-bold leading-none tracking-tighter animate-slide-in-left">
            <span className="bg-gradient-to-r from-deep-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              4
            </span>
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-deep-blue-400 bg-clip-text text-transparent animate-pulse">
              0
            </span>
            <span className="bg-gradient-to-r from-deep-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              4
            </span>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-deep-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full"></div>
        </div>

        {/* Error Icon */}
        <div className="flex justify-center mb-2 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-error-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative bg-error-500/10 backdrop-blur-sm rounded-full p-5 border border-error-500/30">
              <AlertTriangle className="w-12 h-12 text-error-500 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Page Not Found</h1>
          <p className="text-lg text-white/60 max-w-md mx-auto">
            Oops! The page you're looking for seems to have vanished into thin air. 
            It might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
          
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-premium hover:bg-gradient-premium-hover text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow group"
          >
            <Home size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-5 pt-2 border-t border-white/10 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="flex items-center justify-center gap-2 text-sm text-white/40">
            <Shield size={14} />
            <span>Need assistance? Contact your system administrator</span>
          </div>
          <div className="flex items-center justify-center gap-4 mt-3">
            <button className="text-xs text-deep-blue-400 hover:text-deep-blue-300 transition-colors">
              Report Issue
            </button>
            <span className="text-white/20">•</span>
            <button className="text-xs text-deep-blue-400 hover:text-deep-blue-300 transition-colors">
              Help Center
            </button>
            <span className="text-white/20">•</span>
            <button className="text-xs text-deep-blue-400 hover:text-deep-blue-300 transition-colors">
              System Status
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default NotFound;