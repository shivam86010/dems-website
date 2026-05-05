import React, { useState} from 'react';
import { 
  FileText, 
  Shield, 
  Users, 
  TrendingUp, 
  TrendingDown,
  Activity,
  CheckCircle,
  AlertTriangle,
  Eye,
  Download,
  Calendar,
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Summary Cards Data
  const summaryCards = [
    {
      title: 'Total Cases',
      value: '247',
      change: '+12.5%',
      trend: 'up',
      icon: FileText,
      color: 'deep-blue',
      period: 'vs last month'
    },
    {
      title: 'Active Cases',
      value: '189',
      change: '+8.2%',
      trend: 'up',
      icon: Activity,
      color: 'warning',
      period: 'vs last month'
    },
    {
      title: 'Evidence Items',
      value: '1,892',
      change: '+23.1%',
      trend: 'up',
      icon: Shield,
      color: 'success',
      period: 'vs last month'
    },
    {
      title: 'Closed Cases',
      value: '58',
      change: '-5.4%',
      trend: 'down',
      icon: CheckCircle,
      color: 'slate',
      period: 'vs last month'
    }
  ];

  // Case Status Data for Pie Chart
  const caseStatusData = [
    { status: 'Open', count: 89, color: 'success', percentage: 36 },
    { status: 'In Progress', count: 100, color: 'warning', percentage: 40 },
    { status: 'Under Review', count: 35, color: 'deep-blue', percentage: 14 },
    { status: 'Closed', count: 23, color: 'slate', percentage: 10 }
  ];

  // Evidence Activity Data (Last 7 days)
  const evidenceActivity = [
    { date: 'Mon', uploads: 45, views: 128, downloads: 34 },
    { date: 'Tue', uploads: 52, views: 142, downloads: 41 },
    { date: 'Wed', uploads: 38, views: 115, downloads: 29 },
    { date: 'Thu', uploads: 67, views: 189, downloads: 56 },
    { date: 'Fri', uploads: 73, views: 201, downloads: 68 },
    { date: 'Sat', uploads: 41, views: 98, downloads: 32 },
    { date: 'Sun', uploads: 35, views: 87, downloads: 28 }
  ];

  // Evidence Type Distribution
  const evidenceTypes = [
    { type: 'Documents', count: 845, percentage: 45, color: 'deep-blue', icon: FileText },
    { type: 'Images', count: 523, percentage: 28, color: 'success', icon: FileText },
    { type: 'Videos', count: 378, percentage: 20, color: 'warning', icon: FileText },
    { type: 'CCTV Footage', count: 146, percentage: 7, color: 'slate', icon: FileText }
  ];

  // Recent Cases
  const recentCases = [
    { id: 'CR-2024-001', title: 'Cyber Fraud Investigation', status: 'In Progress', priority: 'High', client: 'Tech Corp Ltd', updatedAt: '2 hours ago' },
    { id: 'CR-2024-002', title: 'Evidence Tampering Case', status: 'Under Review', priority: 'Critical', client: 'State vs Unknown', updatedAt: '5 hours ago' },
    { id: 'CR-2024-003', title: 'Corporate Espionage', status: 'In Progress', priority: 'High', client: 'Innovate Inc', updatedAt: '1 day ago' },
    { id: 'CR-2024-004', title: 'Money Laundering', status: 'Closed', priority: 'Medium', client: 'Federal Bank', updatedAt: '2 days ago' },
    { id: 'CR-2024-005', title: 'Digital Evidence Recovery', status: 'Open', priority: 'Low', client: 'Cyber Security Unit', updatedAt: '3 days ago' }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Progress': return 'warning';
      case 'Under Review': return 'deep-blue';
      case 'Closed': return 'slate';
      case 'Open': return 'success';
      default: return 'slate';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'Critical': return 'error';
      case 'High': return 'error';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'slate';
    }
  };

  // Calculate total for pie chart
  const totalCases = caseStatusData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
          <p className="text-slate-500 mt-1">Welcome back, Commissioner. Here's your case overview.</p>
        </div>
        <div className="flex gap-2">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 bg-white text-sm"
          >
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <Download size={18} className="text-slate-500" />
          </button>
        </div>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl shadow-premium border border-slate-100 p-4 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-3 rounded-xl bg-${card.color}-100`}>
                <card.icon className={`w-5 h-5 text-${card.color}-600`} />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                card.trend === 'up' ? 'bg-success-100 text-success-700' : 'bg-error-100 text-error-700'
              }`}>
                {card.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {card.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800">{card.value}</h3>
            <p className="text-sm text-slate-500 ">{card.title}</p>
            
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Case Status Pie Chart */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-800">Case Status Distribution</h3>
              <p className="text-xs text-slate-500 mt-1">Total Cases: {totalCases}</p>
            </div>
            <button className="text-sm text-deep-blue-600 hover:text-deep-blue-700 font-medium">
              View Details
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Pie Chart Visualization */}
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {caseStatusData.reduce((acc, item, index) => {
                  const percentage = (item.count / totalCases) * 100;
                  const startAngle = acc.offset;
                  const endAngle = startAngle + (percentage * 3.6);
                  
                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;
                  
                  const x1 = 50 + 40 * Math.cos(startRad);
                  const y1 = 50 + 40 * Math.sin(startRad);
                  const x2 = 50 + 40 * Math.cos(endRad);
                  const y2 = 50 + 40 * Math.sin(endRad);
                  
                  const largeArc = percentage > 50 ? 1 : 0;
                  
                  const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`;
                  
                  acc.paths.push(
                    <path
                      key={index}
                      d={pathData}
                      fill={`var(--color-${item.color}-500)`}
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      style={{ 
                        '--color-success-500': '#16A34A',
                        '--color-warning-500': '#F59E0B',
                        '--color-deep-blue-500': '#1E3A8A',
                        '--color-slate-500': '#334155'
                      } as React.CSSProperties}
                    />
                  );
                  
                  acc.offset = endAngle;
                  return acc;
                }, { paths: [] as JSX.Element[], offset: 0 }).paths}
                <circle cx="50" cy="50" r="25" fill="white" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">{totalCases}</div>
                  <div className="text-xs text-slate-500">Total</div>
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex-1 space-y-3">
              {caseStatusData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                    <span className="text-sm text-slate-600">{item.status}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-slate-800">{item.count}</span>
                    <span className="text-xs text-slate-500">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evidence Activity Line Chart */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-800">Evidence Activity</h3>
              <p className="text-xs text-slate-500 mt-1">Last 7 days</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-deep-blue-500"></div>
                <span className="text-xs text-slate-500">Uploads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success-500"></div>
                <span className="text-xs text-slate-500">Views</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-warning-500"></div>
                <span className="text-xs text-slate-500">Downloads</span>
              </div>
            </div>
          </div>
          
          <div className="h-64">
            <svg viewBox="0 0 600 200" className="w-full h-full">
              {/* Grid lines */}
              {[0, 50, 100, 150, 200].map(y => (
                <line
                  key={y}
                  x1="0"
                  y1={200 - y}
                  x2="600"
                  y2={200 - y}
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
              ))}
              
              {/* Uploads Line */}
              <polyline
                points={evidenceActivity.map((item, i) => `${i * 100},${200 - (item.uploads / 100) * 180}`).join(' ')}
                fill="none"
                stroke="#1E3A8A"
                strokeWidth="2"
                className="transition-all duration-500"
              />
              
              {/* Views Line */}
              <polyline
                points={evidenceActivity.map((item, i) => `${i * 100},${200 - (item.views / 250) * 180}`).join(' ')}
                fill="none"
                stroke="#16A34A"
                strokeWidth="2"
                className="transition-all duration-500"
              />
              
              {/* Downloads Line */}
              <polyline
                points={evidenceActivity.map((item, i) => `${i * 100},${200 - (item.downloads / 100) * 180}`).join(' ')}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2"
                className="transition-all duration-500"
              />
              
              {/* X-axis labels */}
              {evidenceActivity.map((item, i) => (
                <text
                  key={i}
                  x={i * 100}
                  y="190"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#64748B"
                >
                  {item.date}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Recent Activity and Recent Cases */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-slate-800">Evidence Distribution by Type</h3>
            <p className="text-xs text-slate-500 mt-1">Total evidence items: 1,892</p>
          </div>
          <button className="text-sm text-deep-blue-600 hover:text-deep-blue-700 font-medium">
            Export Report
          </button>
        </div>
        
        <div className="space-y-4">
          {evidenceTypes.map((type, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <type.icon size={14} className={`text-${type.color}-500`} />
                  <span className="text-sm font-medium text-slate-700">{type.type}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-600">{type.count} items</span>
                  <span className="text-xs text-slate-500">{type.percentage}%</span>
                </div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-${type.color}-500 rounded-full transition-all duration-700 group-hover:opacity-80`}
                  style={{ width: `${type.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Recent Cases Table */}
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">Recent Cases</h3>
                <p className="text-xs text-slate-500 mt-1">Updated in real-time</p>
              </div>
              <button className="text-sm text-deep-blue-600 hover:text-deep-blue-700 font-medium">
                View All
              </button>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Updated</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentCases.map((caseItem) => (
                  <tr key={caseItem.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4 text-sm font-mono font-medium text-deep-blue-600">
                      {caseItem.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {caseItem.title}
                    </td>
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
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {caseItem.updatedAt}
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-1 rounded-lg text-deep-blue-600 hover:bg-deep-blue-50 transition-colors">
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

      {/* Quick Actions Footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-premium text-white rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105">
          <FileText size={18} />
          <span className="text-sm font-medium">New Case</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300">
          <Shield size={18} />
          <span className="text-sm font-medium">Upload Evidence</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300">
          <Users size={18} />
          <span className="text-sm font-medium">Assign Officers</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300">
          <Calendar size={18} />
          <span className="text-sm font-medium">Schedule Hearing</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;