import { 
  Activity, 
  Shield, 
  Users, 
  FileText, 
  TrendingUp, 
  Clock,
  AlertTriangle,
  MoreHorizontal,
  Download,
  Eye
} from 'lucide-react';

const Dashboard = () => {
   const stats = [
    { title: 'Active Cases', value: '247', change: '+12%', icon: FileText, color: 'deep-blue', period: 'vs last month' },
    { title: 'Total Evidence', value: '1,892', change: '+8%', icon: Shield, color: 'success', period: 'vs last month' },
    { title: 'Officers Online', value: '156', change: '+5%', icon: Users, color: 'warning', period: 'vs last month' },
    { title: 'Pending Court', value: '43', change: '-2%', icon: Clock, color: 'error', period: 'vs last month' },
  ];

  const recentCases = [
    { id: 'CR-2024-001', title: 'Cyber Fraud Investigation', status: 'In Progress', priority: 'High', date: '2024-12-01', officer: 'Det. Smith' },
    { id: 'CR-2024-002', title: 'Evidence Tampering', status: 'Review', priority: 'Critical', date: '2024-12-02', officer: 'Det. Johnson' },
    { id: 'CR-2024-003', title: 'Missing Evidence Case', status: 'Pending Court', priority: 'Medium', date: '2024-12-03', officer: 'Det. Williams' },
    { id: 'CR-2024-004', title: 'CCTV Footage Analysis', status: 'In Progress', priority: 'High', date: '2024-12-04', officer: 'Det. Brown' },
  ];

  const activities = [
    { user: 'Det. Smith', action: 'Uploaded evidence', case: 'CR-2024-001', time: '5 min ago', type: 'evidence' },
    { user: 'Judge Martinez', action: 'Approved warrant', case: 'CR-2024-002', time: '1 hour ago', type: 'court' },
    { user: 'Investigator Lee', action: 'Updated case status', case: 'CR-2024-003', time: '3 hours ago', type: 'update' },
    { user: 'Officer Davis', action: 'Added new suspect', case: 'CR-2024-004', time: '5 hours ago', type: 'update' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Progress': return 'warning';
      case 'Review': return 'deep-blue';
      case 'Pending Court': return 'error';
      default: return 'slate';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'Critical': return 'error';
      case 'High': return 'warning';
      case 'Medium': return 'deep-blue';
      default: return 'slate';
    }
  };

  return (
    <main className="p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back, Commissioner. Here's what's happening with your cases today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-premium border border-slate-100 hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                stat.change.startsWith('+') ? 'bg-success-100 text-success-700' : 'bg-error-100 text-error-700'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
            <p className="text-sm text-slate-500 mt-1">{stat.title}</p>
            <p className="text-xs text-slate-400 mt-2">{stat.period}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Case Activity Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-premium border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-800">Case Activity</h3>
              <p className="text-xs text-slate-500 mt-1">Last 7 days</p>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <MoreHorizontal size={18} className="text-slate-400" />
            </button>
          </div>
          <div className="h-64 flex items-end gap-3">
            {[65, 45, 78, 52, 89, 71, 94].map((height, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-gradient-to-t from-deep-blue-500 to-deep-blue-400 rounded-lg transition-all duration-500 hover:scale-105 cursor-pointer"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-slate-500">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-premium border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-800">Evidence Distribution</h3>
              <p className="text-xs text-slate-500 mt-1">By type</p>
            </div>
            <button className="text-sm text-deep-blue-600 hover:text-deep-blue-700 font-medium">View Details</button>
          </div>
          <div className="space-y-4">
            {[
              { type: 'Images', count: 845, percentage: 45, color: 'deep-blue' },
              { type: 'Videos', count: 423, percentage: 22, color: 'success' },
              { type: 'Documents', count: 378, percentage: 20, color: 'warning' },
              { type: 'CCTV', count: 246, percentage: 13, color: 'slate' },
            ].map((item) => (
              <div key={item.type}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">{item.type}</span>
                  <span className="text-sm text-slate-500">{item.count} items</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-${item.color}-500 rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Cases */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">Recent Cases</h3>
                <p className="text-xs text-slate-500 mt-1">Updated in real-time</p>
              </div>
              <button className="text-sm text-deep-blue-600 hover:text-deep-blue-700 font-medium">View All</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Case ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Officer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentCases.map((caseItem) => (
                  <tr key={caseItem.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4 text-sm font-medium text-deep-blue-600">{caseItem.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-700">{caseItem.title}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full bg-${getStatusColor(caseItem.status)}-100 text-${getStatusColor(caseItem.status)}-700`}>
                        {caseItem.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium text-${getPriorityColor(caseItem.priority)}-600`}>
                        <AlertTriangle size={10} />
                        {caseItem.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{caseItem.officer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Showing 4 of 247 cases</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-slate-600 hover:bg-white rounded-lg transition-colors">Previous</button>
                <button className="px-3 py-1 bg-deep-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-1 text-slate-600 hover:bg-white rounded-lg transition-colors">2</button>
                <button className="px-3 py-1 text-slate-600 hover:bg-white rounded-lg transition-colors">3</button>
                <button className="px-3 py-1 text-slate-600 hover:bg-white rounded-lg transition-colors">Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">Recent Activity</h3>
                <p className="text-xs text-slate-500 mt-1">Live updates from the system</p>
              </div>
              <button className="text-sm text-deep-blue-600 hover:text-deep-blue-700 font-medium">Export Log</button>
            </div>
          </div>
          <div className="divide-y divide-slate-100 max-h-96 overflow-y-auto">
            {activities.map((activity, idx) => (
              <div key={idx} className="p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'evidence' ? 'bg-success-100' :
                    activity.type === 'court' ? 'bg-warning-100' : 'bg-deep-blue-100'
                  }`}>
                    <Activity size={14} className={
                      activity.type === 'evidence' ? 'text-success-600' :
                      activity.type === 'court' ? 'text-warning-600' : 'text-deep-blue-600'
                    } />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700">
                      <span className="font-medium">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="font-medium text-deep-blue-600">{activity.case}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <Eye size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <button className="w-full text-center text-sm text-deep-blue-600 hover:text-deep-blue-700 font-medium">
              View All Activity
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-premium text-white rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105">
          <FileText size={18} />
          <span className="text-sm font-medium">New Case</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300">
          <Download size={18} />
          <span className="text-sm font-medium">Export Report</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300">
          <TrendingUp size={18} />
          <span className="text-sm font-medium">Analytics</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300">
          <Shield size={18} />
          <span className="text-sm font-medium">Security</span>
        </button>
      </div>
    </main>
  );
}

export default Dashboard