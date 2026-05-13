// pages/CaseDetails.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  Image, 
  Video, 
  Download, 
  Eye, 
  Clock, 
  User, 
  Shield, 
  Lock, 
  Calendar, 
  Briefcase,
  Plus,
  Edit2,
  Save,
  X,
  CheckCircle,
  AlertCircle,
  Activity,
  Share2,
  Copy,
  Hash
} from 'lucide-react';

const CaseDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'evidence' | 'timeline' | 'notes'>('overview');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [isEditingStatus, setIsEditingStatus] = useState(false);
  const [status, setStatus] = useState('Open');

  const caseData = {
    id: id || 'FR-2024-001',
    name: 'Financial Fraud Investigation',
    type: 'Fraud',
    status: 'Open',
    priority: 'High',
    assigned: ['John Doe', 'Sarah Smith'],
    createdBy: 'Michael Lee',
    createdDate: '2024-12-01',
    description: 'Investigation into suspected financial fraud involving multiple transactions. Initial review indicates potential money laundering activities.',
    department: 'Financial Crimes Unit',
    location: 'Mumbai, India'
  };

  const evidenceItems = [
    { id: '1', name: 'Financial_Statements.pdf', type: 'document', size: '2.3 MB', uploadedBy: 'John Doe', date: '2024-12-01', hash: '8f3a9c2e4b1d7f5a...' },
    { id: '2', name: 'Transaction_Logs.xlsx', type: 'document', size: '1.8 MB', uploadedBy: 'Sarah Smith', date: '2024-12-02', hash: 'a7c3e5g9i2k4m6o8...' },
    { id: '3', name: 'CCTV_Footage.mp4', type: 'video', size: '156 MB', uploadedBy: 'John Doe', date: '2024-12-03', hash: 'b8d4f6h0j2l4n6p9...' },
  ];

  const timeline = [
    { action: 'Case created', user: 'Michael Lee', timestamp: '2024-12-01T09:00:00', details: 'Initial case creation' },
    { action: 'Evidence uploaded', user: 'John Doe', timestamp: '2024-12-01T10:30:00', details: 'Financial statements added' },
    { action: 'Status updated', user: 'Sarah Smith', timestamp: '2024-12-02T11:00:00', details: 'Changed to In Progress' },
    { action: 'Evidence shared with auditor', user: 'John Doe', timestamp: '2024-12-03T14:20:00', details: 'Shared for external review' },
  ];

  const notes = [
    { id: '1', content: 'Initial review completed. Found suspicious transactions.', user: 'John Doe', timestamp: '2024-12-01T15:30:00' },
    { id: '2', content: 'Requested additional documents from finance department.', user: 'Sarah Smith', timestamp: '2024-12-02T09:15:00' },
  ];

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'document': return <FileText size={16} />;
      case 'image': return <Image size={16} />;
      case 'video': return <Video size={16} />;
      default: return <FileText size={16} />;
    }
  };

  const addNote = () => {
    if (newNote.trim()) {
      console.log('Adding note:', newNote);
      setNewNote('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/cases')}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-600" />
          </button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-800">{caseData.name}</h1>
              <span className={`px-2 py-1 text-xs font-medium rounded-full bg-success-100 text-success-700`}>
                {caseData.status}
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-error-100 text-error-700">
                {caseData.priority} Priority
              </span>
            </div>
            <p className="text-sm text-slate-500 font-mono mt-1">{caseData.id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50">
            <Edit2 size={16} />
            <span>Edit Case</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200">
        <div className="flex gap-6">
          {['overview', 'evidence', 'timeline', 'notes'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-2 py-3 font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab
                  ? 'text-deep-blue-600 border-deep-blue-600'
                  : 'text-slate-500 border-transparent hover:text-slate-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-800 mb-3">Case Description</h3>
              <p className="text-slate-600 leading-relaxed">{caseData.description}</p>
            </div>

            {/* Assigned Team */}
            <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-800 mb-3">Assigned Team</h3>
              <div className="flex flex-wrap gap-3">
                {caseData.assigned.map((member) => (
                  <div key={member} className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-gradient-premium flex items-center justify-center text-white text-xs font-medium">
                      {member.charAt(0)}
                    </div>
                    <span className="text-sm text-slate-700">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Case Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Created By</span>
                  <span className="text-sm font-medium text-slate-700">{caseData.createdBy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Created Date</span>
                  <span className="text-sm font-medium text-slate-700">{caseData.createdDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Department</span>
                  <span className="text-sm font-medium text-slate-700">{caseData.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Location</span>
                  <span className="text-sm font-medium text-slate-700">{caseData.location}</span>
                </div>
              </div>
            </div>

            {/* Status Update */}
            <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Update Status</h3>
              {isEditingStatus ? (
                <div className="space-y-3">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
                  >
                    <option value="Open">Open</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <div className="flex gap-2">
                    <button onClick={() => setIsEditingStatus(false)} className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-slate-700">
                      Cancel
                    </button>
                    <button className="flex-1 px-4 py-2 bg-gradient-premium text-white rounded-xl">
                      <Save size={16} className="inline mr-1" />
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditingStatus(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50"
                >
                  <Edit2 size={16} />
                  <span>Update Status</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'evidence' && (
        <div className="space-y-4">
          <button
            onClick={() => setShowUploadModal(true)}
            className="w-full p-6 border-2 border-dashed border-slate-300 rounded-2xl hover:border-deep-blue-400 hover:bg-deep-blue-50 transition-all bg-white"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 bg-deep-blue-100 rounded-full">
                <Plus size={24} className="text-deep-blue-600" />
              </div>
              <div>
                <p className="text-deep-blue-600 font-medium">Upload New Evidence</p>
                <p className="text-sm text-slate-500">Drag and drop or click to browse</p>
              </div>
            </div>
          </button>

          {evidenceItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-premium border border-slate-100 p-5 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-deep-blue-100">
                    {getTypeIcon(item.type)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                      <span>{item.size}</span>
                      <span>•</span>
                      <span>Uploaded by {item.uploadedBy}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <Hash size={12} className="text-slate-400" />
                      <code className="text-xs bg-slate-100 px-2 py-1 rounded font-mono text-slate-600">
                        {item.hash}
                      </code>
                      <button className="p-1 hover:bg-slate-200 rounded">
                        <Copy size={12} className="text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors" title="View">
                    <Eye size={16} className="text-slate-500" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors" title="Download">
                    <Download size={16} className="text-slate-500" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors" title="Share">
                    <Share2 size={16} className="text-slate-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'timeline' && (
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200"></div>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-deep-blue-500 flex items-center justify-center">
                    <Activity size={14} className="text-deep-blue-500" />
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <p className="font-semibold text-slate-800">{item.action}</p>
                      <p className="text-xs text-slate-400">{new Date(item.timestamp).toLocaleString()}</p>
                    </div>
                    <p className="text-sm text-slate-600">by <span className="font-medium">{item.user}</span></p>
                    <p className="text-xs text-slate-500 mt-2">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="space-y-6">
          {/* Add Note */}
          <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
            <h3 className="font-semibold text-slate-800 mb-4">Add Note</h3>
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 resize-none"
              placeholder="Write investigation notes here..."
            />
            <div className="flex justify-end mt-3">
              <button onClick={addNote} className="px-4 py-2 bg-gradient-premium text-white rounded-xl">
                Add Note
              </button>
            </div>
          </div>

          {/* Notes List */}
          <div className="space-y-3">
            {notes.map((note) => (
              <div key={note.id} className="bg-white rounded-2xl shadow-premium border border-slate-100 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-premium flex items-center justify-center text-white text-xs">
                      {note.user.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-slate-700">{note.user}</span>
                  </div>
                  <span className="text-xs text-slate-400">{new Date(note.timestamp).toLocaleString()}</span>
                </div>
                <p className="text-sm text-slate-600 ml-8">{note.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseDetails;