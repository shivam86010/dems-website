// components/PoliceDashboardStats.tsx
import { Users, FileText, CheckCircle, AlertTriangle, Shield, Clock, TrendingUp, Building } from 'lucide-react';

const stats = [
  { label: 'Active Cases', value: '247', change: '+12%', icon: FileText, color: 'from-deep-blue-500 to-deep-blue-600', bg: 'bg-deep-blue-50', text: 'text-deep-blue-600' },
  { label: 'Officers Deployed', value: '1,284', change: '+5%', icon: Users, color: 'from-cyan-500 to-cyan-600', bg: 'bg-cyan-50', text: 'text-cyan-600' },
  { label: 'Resolution Rate', value: '68%', change: '+8%', icon: CheckCircle, color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-600' },
  { label: 'Critical Cases', value: '18', change: '+3', icon: AlertTriangle, color: 'from-rose-500 to-rose-600', bg: 'bg-rose-50', text: 'text-rose-600' },
  { label: 'Evidence Items', value: '2,451', change: '+156', icon: Shield, color: 'from-violet-500 to-violet-600', bg: 'bg-violet-50', text: 'text-violet-600' },
  { label: 'Avg Response Time', value: '4.2m', change: '-0.8m', icon: Clock, color: 'from-amber-500 to-amber-600', bg: 'bg-amber-50', text: 'text-amber-600' },
];

export default function PoliceDashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        const isPositive = stat.change.startsWith('+') || stat.change === '-0.8m';
        return (
          <div key={idx} className="relative rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium p-4 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
            <div className="relative">
              <div className={`w-8 h-8 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                <Icon size={16} className={stat.text} />
              </div>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{stat.label}</p>
              <div className={`flex items-center gap-1 mt-2 text-[10px] font-semibold ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                <TrendingUp size={10} className={!isPositive ? 'rotate-180' : ''} />
                <span>{stat.change}</span>
                <span className="text-slate-400 font-normal ml-1">vs last week</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}