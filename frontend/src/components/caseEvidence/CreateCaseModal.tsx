// components/CreateCaseModal.tsx
import React, { useState } from 'react';
import { X, Upload, User, Briefcase, AlertCircle, Calendar, Users, Tag, Shield, CheckCircle } from 'lucide-react';

interface CreateCaseModalProps {
  onClose: () => void;
}

const CreateCaseModal: React.FC<CreateCaseModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    caseNumber: '',
    title: '',
    clientName: '',
    caseType: 'criminal',
    description: '',
    priority: 'medium',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    assignedMembers: [] as string[],
    status: 'open'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const membersList = ['Det. Smith', 'Det. Johnson', 'Investigator Lee', 'Officer Davis', 'Det. Brown'];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.caseNumber.trim()) newErrors.caseNumber = 'Case number is required';
    if (!formData.title.trim()) newErrors.title = 'Case title is required';
    if (!formData.clientName.trim()) newErrors.clientName = 'Client name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (formData.assignedMembers.length === 0) newErrors.assignedMembers = 'At least one member must be assigned';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Creating case:', formData);
    alert('Case created successfully!');
    
    setIsSubmitting(false);
    onClose();
  };

  const handleMemberToggle = (member: string) => {
    setFormData(prev => ({
      ...prev,
      assignedMembers: prev.assignedMembers.includes(member)
        ? prev.assignedMembers.filter(m => m !== member)
        : [...prev.assignedMembers, member]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-premium-lg max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Create New Case</h2>
            <p className="text-sm text-slate-500 mt-1">Fill in the details to create a new criminal case</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[calc(90vh-120px)] p-6 space-y-5">
          {/* Case Number & Title Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Case Number / ID <span className="text-error-500">*</span>
              </label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={formData.caseNumber}
                  onChange={(e) => setFormData({ ...formData, caseNumber: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.caseNumber ? 'border-error-500 focus:ring-error-500/20' : 'border-slate-200 focus:border-deep-blue-400 focus:ring-deep-blue-400/20'
                  }`}
                  placeholder="CR-2024-001"
                />
              </div>
              {errors.caseNumber && <p className="text-xs text-error-500 mt-1">{errors.caseNumber}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Case Title <span className="text-error-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.title ? 'border-error-500 focus:ring-error-500/20' : 'border-slate-200 focus:border-deep-blue-400 focus:ring-deep-blue-400/20'
                }`}
                placeholder="Enter case title"
              />
              {errors.title && <p className="text-xs text-error-500 mt-1">{errors.title}</p>}
            </div>
          </div>

          {/* Client Name & Case Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Client Name <span className="text-error-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.clientName ? 'border-error-500 focus:ring-error-500/20' : 'border-slate-200 focus:border-deep-blue-400 focus:ring-deep-blue-400/20'
                  }`}
                  placeholder="Client or victim name"
                />
              </div>
              {errors.clientName && <p className="text-xs text-error-500 mt-1">{errors.clientName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Case Type</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  value={formData.caseType}
                  onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 focus:ring-2 focus:ring-deep-blue-400/20 appearance-none bg-white"
                >
                  <option value="civil">Civil</option>
                  <option value="criminal">Criminal</option>
                  <option value="corporate">Corporate</option>
                </select>
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

          {/* Priority & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Priority</label>
              <div className="flex gap-3">
                {['low', 'medium', 'high'].map(priority => (
                  <label key={priority} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value={priority}
                      checked={formData.priority === priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-4 h-4 text-deep-blue-600 focus:ring-deep-blue-500"
                    />
                    <span className={`text-sm capitalize ${
                      priority === 'high' ? 'text-error-600' : priority === 'medium' ? 'text-warning-600' : 'text-success-600'
                    }`}>
                      {priority}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 focus:ring-2 focus:ring-deep-blue-400/20 bg-white"
              >
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Start Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 focus:ring-2 focus:ring-deep-blue-400/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">End Date (Optional)</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 focus:ring-2 focus:ring-deep-blue-400/20"
                />
              </div>
            </div>
          </div>

          {/* Assign Members */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Assign Members <span className="text-error-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2 p-3 border border-slate-200 rounded-xl">
              {membersList.map(member => (
                <button
                  key={member}
                  type="button"
                  onClick={() => handleMemberToggle(member)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    formData.assignedMembers.includes(member)
                      ? 'bg-deep-blue-500 text-white shadow-glow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Users size={14} className="inline mr-1" />
                  {member}
                </button>
              ))}
            </div>
            {errors.assignedMembers && <p className="text-xs text-error-500 mt-1">{errors.assignedMembers}</p>}
          </div>

          {/* Audit Trail Note */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="flex items-start gap-3">
              <Shield size={18} className="text-deep-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-slate-700">Audit Trail</p>
                <p className="text-xs text-slate-500 mt-1">All case creations will be logged in the system audit trail for security compliance.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-gradient-premium hover:bg-gradient-premium-hover text-white rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Creating...</span>
                </>
              ) : (
                <>
                  <CheckCircle size={18} />
                  <span>Create Case</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCaseModal;