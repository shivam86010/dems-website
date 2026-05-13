// pages/Cases.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Eye, Edit, Trash2, FileText, Shield, Clock, User, ChevronLeft, ChevronRight, Download, Printer } from 'lucide-react';

const Cases = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const cases = [
    { id: 'FR-2024-001', name: 'Financial Fraud Investigation', type: 'Fraud', status: 'Open', assigned: 'John Doe', date: '2024-12-01', priority: 'high' },
    { id: 'HR-2024-002', name: 'Employee Misconduct', type: 'HR', status: 'Under Review', assigned: 'Sarah Smith', date: '2024-12-02', priority: 'medium' },
    { id: 'CP-2024-003', name: 'Trade Secret Theft', type: 'Corporate', status: 'Open', assigned: 'Michael Lee', date: '2024-12-03', priority: 'high' },
    { id: 'CP-2024-004', name: 'Data Breach Investigation', type: 'Cyber', status: 'Closed', assigned: 'Anna Chen', date: '2024-11-28', priority: 'critical' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Open': return 'success';
      case 'Under Review': return 'warning';
      case 'Closed': return 'slate';
      default: return 'slate';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'critical': return 'error';
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'slate';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Cases</h1>
          <p className="text-slate-500 mt-1">Manage and track all investigation cases</p>
        </div>
        <button
          onClick={() => navigate('/dashboard/cos-create-case')}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-premium text-white rounded-xl hover:shadow-glow transition-all"
        >
          <Plus size={18} />
          <span>Create Case</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search cases by ID, name, or assignee..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 bg-white"
            >
              <option value="all">All Status</option>
              <option value="Open">Open</option>
              <option value="Under Review">Under Review</option>
              <option value="Closed">Closed</option>
            </select>
            <button className="px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={18} className="text-slate-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Cases Table */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Case ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Case Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Priority</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Assigned To</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Date</th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {cases.map((caseItem) => (
                <tr key={caseItem.id} className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => navigate(`/dashboard/cos-case-details/${caseItem.id}`)}>
                  <td className="px-6 py-4 text-sm font-mono font-medium text-deep-blue-600">{caseItem.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{caseItem.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{caseItem.type}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full bg-${getStatusColor(caseItem.status)}-100 text-${getStatusColor(caseItem.status)}-700`}>
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-${getPriorityColor(caseItem.priority)}-100 text-${getPriorityColor(caseItem.priority)}-700`}>
                      {caseItem.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{caseItem.assigned}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{caseItem.date}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1.5 rounded-lg text-deep-blue-600 hover:bg-deep-blue-50">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100">
                        <Edit size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Showing 1 to 4 of 4 cases</p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white">
                <ChevronLeft size={16} />
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-gradient-premium text-white">1</button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;