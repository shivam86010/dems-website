// pages/CreateCase.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save, 
  X, 
  UserPlus, 
  Calendar, 
  Briefcase, 
  AlertCircle,
  CheckCircle,
  Users,
  Tag,
  FileText,
  Shield
} from 'lucide-react';

const CreateCase: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    caseName: '',
    caseType: 'fraud',
    description: '',
    priority: 'medium',
    assignedUsers: [] as string[],
    startDate: new Date().toISOString().split('T')[0],
    department: '',
    location: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const caseTypes = [
    { value: 'fraud', label: 'Financial Fraud' },
    { value: 'hr', label: 'HR/Employee Misconduct' },
    { value: 'corporate', label: 'Corporate Espionage' },
    { value: 'cyber', label: 'Cyber Crime' },
    { value: 'compliance', label: 'Regulatory Compliance' }
  ];

  const users = [
    { id: '1', name: 'John Doe', role: 'Lead Investigator' },
    { id: '2', name: 'Sarah Smith', role: 'Forensic Analyst' },
    { id: '3', name: 'Michael Lee', role: 'Legal Advisor' },
    { id: '4', name: 'Anna Chen', role: 'Data Analyst' }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.caseName.trim()) newErrors.caseName = 'Case name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (formData.assignedUsers.length === 0) newErrors.assignedUsers = 'At least one user must be assigned';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Creating case:', formData);
    alert('Case created successfully!');
    setIsSubmitting(false);
    navigate('/cases');
  };

  const toggleUser = (userId: string) => {
    setFormData(prev => ({
      ...prev,
      assignedUsers: prev.assignedUsers.includes(userId)
        ? prev.assignedUsers.filter(id => id !== userId)
        : [...prev.assignedUsers, userId]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/cases')}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft size={20} className="text-slate-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Create New Case</h1>
          <p className="text-slate-500 mt-1">Fill in the details to start a new investigation</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6 space-y-6">
        {/* Case Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Case Name <span className="text-error-500">*</span>
          </label>
          <input
            type="text"
            value={formData.caseName}
            onChange={(e) => setFormData({ ...formData, caseName: e.target.value })}
            className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
              errors.caseName ? 'border-error-500 focus:ring-error-500/20' : 'border-slate-200 focus:border-deep-blue-400 focus:ring-deep-blue-400/20'
            }`}
            placeholder="Enter case name"
          />
          {errors.caseName && <p className="text-xs text-error-500 mt-1">{errors.caseName}</p>}
        </div>

        {/* Case Type & Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Case Type</label>
            <select
              value={formData.caseType}
              onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 bg-white"
            >
              {caseTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Priority</label>
            <div className="flex gap-3">
              {['low', 'medium', 'high', 'critical'].map(priority => (
                <label key={priority} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={priority}
                    checked={formData.priority === priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-4 h-4 text-deep-blue-600"
                  />
                  <span className={`text-sm capitalize ${
                    priority === 'critical' ? 'text-error-600' :
                    priority === 'high' ? 'text-error-500' :
                    priority === 'medium' ? 'text-warning-600' : 'text-success-600'
                  }`}>
                    {priority}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Description <span className="text-error-500">*</span>
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${
              errors.description ? 'border-error-500 focus:ring-error-500/20' : 'border-slate-200 focus:border-deep-blue-400 focus:ring-deep-blue-400/20'
            }`}
            placeholder="Provide detailed description of the case..."
          />
          {errors.description && <p className="text-xs text-error-500 mt-1">{errors.description}</p>}
        </div>

        {/* Department & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Department <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                errors.department ? 'border-error-500 focus:ring-error-500/20' : 'border-slate-200 focus:border-deep-blue-400 focus:ring-deep-blue-400/20'
              }`}
              placeholder="e.g., Financial Crimes Unit"
            />
            {errors.department && <p className="text-xs text-error-500 mt-1">{errors.department}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
              placeholder="City, State"
            />
          </div>
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Start Date</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
          />
        </div>

        {/* Assign Users */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Assign Team Members <span className="text-error-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl">
            {users.map(user => (
              <label key={user.id} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-white transition-colors">
                <input
                  type="checkbox"
                  checked={formData.assignedUsers.includes(user.id)}
                  onChange={() => toggleUser(user.id)}
                  className="w-4 h-4 rounded border-slate-300 text-deep-blue-600 focus:ring-deep-blue-500"
                />
                <div>
                  <p className="text-sm font-medium text-slate-700">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.role}</p>
                </div>
              </label>
            ))}
          </div>
          {errors.assignedUsers && <p className="text-xs text-error-500 mt-1">{errors.assignedUsers}</p>}
        </div>

        {/* Security Note */}
        <div className="bg-deep-blue-50 rounded-xl p-4 border border-deep-blue-100">
          <div className="flex items-start gap-3">
            <Shield size={18} className="text-deep-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-deep-blue-800">Chain of Custody</p>
              <p className="text-xs text-deep-blue-600 mt-1">All case actions, evidence uploads, and access will be logged in the audit trail for compliance purposes.</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={() => navigate('/cases')}
            className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-4 py-2 bg-gradient-premium hover:bg-gradient-premium-hover text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Creating...</span>
              </>
            ) : (
              <>
                <Save size={16} />
                <span>Create Case</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCase;