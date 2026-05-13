// pages/UsersRoles.tsx
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  UserCheck, 
  UserX,
  Shield,
  Mail,
  Phone,
  Calendar,
  MoreVertical,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const UsersRoles: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const users = [
    { id: '1', name: 'John Doe', email: 'john.doe@investiguard.com', role: 'Investigator', status: 'active', lastActive: '2024-12-10', cases: 12 },
    { id: '2', name: 'Sarah Smith', email: 'sarah.smith@investiguard.com', role: 'Forensic Analyst', status: 'active', lastActive: '2024-12-09', cases: 8 },
    { id: '3', name: 'Michael Lee', email: 'michael.lee@investiguard.com', role: 'Legal Advisor', status: 'active', lastActive: '2024-12-08', cases: 5 },
    { id: '4', name: 'Anna Chen', email: 'anna.chen@investiguard.com', role: 'Compliance Officer', status: 'inactive', lastActive: '2024-11-30', cases: 3 },
    { id: '5', name: 'Robert Wilson', email: 'robert.wilson@investiguard.com', role: 'Admin', status: 'active', lastActive: '2024-12-10', cases: 0 },
  ];

  const roles = [
    { name: 'Admin', count: 1, color: 'error', permissions: ['Full Access', 'User Management', 'System Settings'] },
    { name: 'Investigator', count: 2, color: 'deep-blue', permissions: ['View Cases', 'Upload Evidence', 'Generate Reports'] },
    { name: 'Forensic Analyst', count: 1, color: 'warning', permissions: ['Analyze Evidence', 'View Cases', 'Export Data'] },
    { name: 'Legal Advisor', count: 1, color: 'success', permissions: ['Review Cases', 'Legal Documents', 'Audit Logs'] },
  ];

  const getRoleColor = (role: string) => {
    switch(role) {
      case 'Admin': return 'error';
      case 'Investigator': return 'deep-blue';
      case 'Forensic Analyst': return 'warning';
      case 'Legal Advisor': return 'success';
      case 'Compliance Officer': return 'slate';
      default: return 'slate';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Users & Roles</h1>
          <p className="text-slate-500 mt-1">Manage system users and access permissions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-premium text-white rounded-xl hover:shadow-glow transition-all">
          <Plus size={18} />
          <span>Add User</span>
        </button>
      </div>

      {/* Roles Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {roles.map((role) => (
          <div key={role.name} className="bg-white rounded-xl shadow-premium border border-slate-100 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className={`px-2 py-1 rounded-full bg-${role.color}-100`}>
                <Shield size={14} className={`text-${role.color}-600`} />
              </div>
              <span className="text-2xl font-bold text-slate-800">{role.count}</span>
            </div>
            <p className="font-semibold text-slate-800">{role.name}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {role.permissions.slice(0, 2).map(perm => (
                <span key={perm} className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{perm}</span>
              ))}
              {role.permissions.length > 2 && (
                <span className="text-[10px] text-slate-500">+{role.permissions.length - 2}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search users by name, email, or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 bg-white"
            >
              <option value="all">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Investigator">Investigator</option>
              <option value="Forensic Analyst">Forensic Analyst</option>
              <option value="Legal Advisor">Legal Advisor</option>
            </select>
            <button className="px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={18} className="text-slate-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Cases</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Last Active</th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-premium flex items-center justify-center text-white text-sm font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-800">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full bg-${getRoleColor(user.role)}-100 text-${getRoleColor(user.role)}-700`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 text-xs ${
                      user.status === 'active' ? 'text-success-600' : 'text-error-600'
                    }`}>
                      {user.status === 'active' ? <UserCheck size={12} /> : <UserX size={12} />}
                      {user.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{user.cases}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{user.lastActive}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1.5 rounded-lg text-deep-blue-600 hover:bg-deep-blue-50">
                        <Edit size={16} />
                      </button>
                      <button className="p-1.5 rounded-lg text-error-500 hover:bg-error-50">
                        <Trash2 size={16} />
                      </button>
                    </div>
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

export default UsersRoles;