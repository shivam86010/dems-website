// pages/Dashboard.tsx
import React from 'react';
import { 
  FileText, 
  Shield, 
  Users, 
  Clock, 
  TrendingUp, 
  TrendingDown,
  Activity,
  CheckCircle,
  AlertTriangle,
  Eye,
  Download,
  MoreHorizontal
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Open Cases', value: '24', change: '+12%', icon: FileText, color: 'deep-blue' },
    { title: 'Closed Cases', value: '156', change: '+8%', icon: CheckCircle, color: 'success' },
    { title: 'Evidence Items', value: '1,892', change: '+23%', icon: Shield, color: 'warning' },
    { title: 'Active Users', value: '18', change: '+2%', icon: Users, color: 'slate' },
  ];

  const activities = [
    { id: 1, action: 'Case #FR-2024-001 updated', user: 'John Doe', time: '5 min ago', type: 'update' },
    { id: 2, action: 'New evidence uploaded', user: 'Sarah Smith', time: '1 hour ago', type: 'upload' },
    { id: 3, action: 'Audit log generated', user: 'System', time: '3 hours ago', type: 'audit' },
    { id: 4, action: 'Case #HR-2024-002 closed', user: 'Michael Lee', time: '5 hours ago', type: 'close' },
  ];

  const alerts = [
    { id: 1, message: 'Suspicious download activity detected', severity: 'high', time: '10 min ago' },
    { id: 2, message: 'Multiple failed login attempts', severity: 'medium', time: '30 min ago' },
    { id: 3, message: 'Evidence integrity check passed', severity: 'low', time: '1 hour ago' },
  ];

  const recentCases = [
    { id: 'FR-2024-001', title: 'Financial Fraud Investigation', type: 'Fraud', status: 'Open', assigned: 'John Doe' },
    { id: 'HR-2024-002', title: 'Employee Misconduct', type: 'HR', status: 'Under Review', assigned: 'Sarah Smith' },
    { id: 'CP-2024-003', title: 'Trade Secret Theft', type: 'Corporate', status: 'Open', assigned: 'Michael Lee' },
  ];

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      default: return 'success';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back, John. Here's your investigation overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-success-700 bg-success-100 px-2 py-1 rounded-full">
                <TrendingUp size={12} />
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
            <p className="text-sm text-slate-500 mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Activity Timeline & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Timeline */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800">Activity Timeline</h3>
            <Activity size={18} className="text-slate-400" />
          </div>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0">
                <div className="w-8 h-8 rounded-full bg-deep-blue-100 flex items-center justify-center">
                  <Clock size={14} className="text-deep-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">{activity.action}</p>
                  <p className="text-xs text-slate-500">by {activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Alerts */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800">Risk Alerts</h3>
            <AlertTriangle size={18} className="text-warning-500" />
          </div>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className={`p-3 rounded-xl border-l-4 border-${getSeverityColor(alert.severity)}-500 bg-${getSeverityColor(alert.severity)}-50`}>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-800">{alert.message}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full bg-${getSeverityColor(alert.severity)}-200 text-${getSeverityColor(alert.severity)}-700 capitalize`}>
                    {alert.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Cases Table */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-semibold text-slate-800">Recent Cases</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Case ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Assigned To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentCases.map((caseItem) => (
                <tr key={caseItem.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 text-sm font-mono font-medium text-deep-blue-600">{caseItem.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{caseItem.title}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{caseItem.type}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      caseItem.status === 'Open' ? 'bg-success-100 text-success-700' : 'bg-warning-100 text-warning-700'
                    }`}>
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{caseItem.assigned}</td>
                  <td className="px-6 py-4">
                    <button className="p-1 rounded-lg text-deep-blue-600 hover:bg-deep-blue-50">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;