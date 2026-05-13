// pages/EvidenceDetails.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Eye, 
  Share2, 
  Copy, 
  CheckCircle,
  Shield,
  Clock,
  User,
  Calendar,
  Hash,
  Lock,
  FileText,
  Video,
  Image,
  Tag,
  X,
} from 'lucide-react';

const EvidenceDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const evidenceData = {
    id: id || '1',
    name: 'Financial_Statements_Q4.pdf',
    type: 'document',
    size: '2.3 MB',
    hash: '8f3a9c2e4b1d7f5a9c2e4b1d7f5a9c2e',
    uploadedBy: 'John Doe',
    uploadedAt: '2024-12-01T10:30:00',
    caseId: 'FR-2024-001',
    caseName: 'Financial Fraud Investigation',
    confidential: true,
    description: 'Quarterly financial statements showing suspicious transactions',
    tags: ['financial', 'fraud', 'statements']
  };

  const chainOfCustody = [
    { action: 'Uploaded', user: 'John Doe', timestamp: '2024-12-01T10:30:00', details: 'Initial upload to case #FR-2024-001', location: 'Mumbai Office' },
    { action: 'Viewed', user: 'Sarah Smith', timestamp: '2024-12-01T11:15:00', details: 'Opened for review', location: 'Remote' },
    { action: 'Downloaded', user: 'Michael Lee', timestamp: '2024-12-02T09:00:00', details: 'Downloaded for analysis', location: 'Forensics Lab' },
    { action: 'Shared', user: 'John Doe', timestamp: '2024-12-03T14:20:00', details: 'Shared with external auditor', location: 'Mumbai Office' },
    { action: 'Viewed', user: 'External Auditor', timestamp: '2024-12-03T15:00:00', details: 'External review initiated', location: 'External' },
  ];

  const copyHash = () => {
    navigator.clipboard.writeText(evidenceData.hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTypeIcon = () => {
    switch(evidenceData.type) {
      case 'document': return <FileText size={48} className="text-deep-blue-500" />;
      case 'image': return <Image size={48} className="text-success-500" />;
      case 'video': return <Video size={48} className="text-warning-500" />;
      default: return <FileText size={48} className="text-slate-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/evidence')}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-600" />
          </button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-800">{evidenceData.name}</h1>
              {evidenceData.confidential && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-error-100 text-error-700 text-xs rounded-full">
                  <Lock size={10} />
                  Confidential
                </span>
              )}
            </div>
            <p className="text-sm text-slate-500 mt-1">Case: {evidenceData.caseName}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-premium text-white rounded-xl hover:shadow-glow transition-all">
            <Eye size={16} />
            <span>View</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50">
            <Download size={16} />
            <span>Download</span>
          </button>
          <button className="p-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50">
            <Share2 size={16} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - File Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* File Preview */}
          <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="mb-4">{getTypeIcon()}</div>
              <p className="text-sm text-slate-500 mb-2">{evidenceData.size}</p>
              <button 
                onClick={() => setShowPreview(true)}
                className="text-deep-blue-600 hover:text-deep-blue-700 text-sm font-medium"
              >
                Click to preview
              </button>
            </div>
          </div>

          {/* File Details */}
          <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
            <h3 className="font-semibold text-slate-800 mb-4">File Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500">File Name</p>
                <p className="text-sm font-medium text-slate-700 mt-1">{evidenceData.name}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">File Size</p>
                <p className="text-sm font-medium text-slate-700 mt-1">{evidenceData.size}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">File Type</p>
                <p className="text-sm font-medium text-slate-700 mt-1 capitalize">{evidenceData.type}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">SHA-256 Hash</p>
                <div className="flex items-center gap-2 mt-1">
                  <code className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-1 rounded">{evidenceData.hash}</code>
                  <button onClick={copyHash} className="p-1 hover:bg-slate-200 rounded transition-colors">
                    {copied ? <CheckCircle size={14} className="text-success-500" /> : <Copy size={14} className="text-slate-400" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Tags */}
          <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
            <h3 className="font-semibold text-slate-800 mb-4">Description</h3>
            <p className="text-sm text-slate-600 mb-4">{evidenceData.description}</p>
            <div className="flex flex-wrap gap-2">
              {evidenceData.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Chain of Custody */}
        <div className="space-y-6">
          {/* Metadata */}
          <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
            <h3 className="font-semibold text-slate-800 mb-4">Metadata</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <User size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">Uploaded By</p>
                  <p className="text-sm font-medium text-slate-700">{evidenceData.uploadedBy}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">Uploaded At</p>
                  <p className="text-sm font-medium text-slate-700">{new Date(evidenceData.uploadedAt).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Tag size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">Case ID</p>
                  <p className="text-sm font-medium text-deep-blue-600">{evidenceData.caseId}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chain of Custody Timeline */}
          <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-800">Chain of Custody</h3>
              <Shield size={16} className="text-deep-blue-500" />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200"></div>
              <div className="space-y-4">
                {chainOfCustody.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white border-2 border-deep-blue-500 flex items-center justify-center">
                      <Clock size={10} className="text-deep-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">{item.action}</p>
                      <p className="text-xs text-slate-500">by {item.user} • {new Date(item.timestamp).toLocaleString()}</p>
                      <p className="text-xs text-slate-400 mt-1">{item.details}</p>
                      <p className="text-xs text-slate-400">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Integrity Check */}
          <div className="bg-success-50 rounded-2xl border border-success-200 p-4">
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-success-600" />
              <div>
                <p className="text-sm font-medium text-success-800">Hash Verified</p>
                <p className="text-xs text-success-600">File integrity verified. No tampering detected.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-800">{evidenceData.name}</h3>
              <button onClick={() => setShowPreview(false)} className="p-2 hover:bg-slate-100 rounded-lg">
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            <div className="p-6 overflow-auto max-h-[calc(90vh-80px)]">
              <div className="flex items-center justify-center min-h-[400px] bg-slate-50 rounded-xl">
                <p className="text-slate-500">Preview not available for this file type</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvidenceDetails;