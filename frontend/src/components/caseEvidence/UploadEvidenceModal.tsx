// components/UploadEvidenceModal.tsx
import React, { useState, useCallback } from 'react';
import { X, Upload, FileText, Image, Video, Lock, Unlock, Tag, AlertCircle, CheckCircle, Shield, Hash } from 'lucide-react';

interface UploadEvidenceModalProps {
  caseId: string;
  caseTitle: string;
  onClose: () => void;
  onSuccess: () => void;
}

const UploadEvidenceModal: React.FC<UploadEvidenceModalProps> = ({ caseId, caseTitle, onClose, onSuccess }) => {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    evidenceType: 'document',
    tags: '',
    confidential: false
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileHash, setFileHash] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const generateFileHash = async (file: File): Promise<string> => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  const validateFile = (file: File): boolean => {
    const maxSize = 100 * 1024 * 1024; // 100MB
    const allowedTypes = {
      document: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'],
      image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
      video: ['video/mp4', 'video/mpeg', 'video/quicktime']
    };

    if (file.size > maxSize) {
      setErrors(prev => ({ ...prev, file: 'File size must be less than 100MB' }));
      return false;
    }

    const currentType = formData.evidenceType as keyof typeof allowedTypes;
    if (!allowedTypes[currentType].includes(file.type)) {
      setErrors(prev => ({ ...prev, file: `Invalid file type for ${currentType}` }));
      return false;
    }

    setErrors(prev => ({ ...prev, file: '' }));
    return true;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
        const hash = await generateFileHash(selectedFile);
        setFileHash(hash);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setErrors(prev => ({ ...prev, file: 'Please select a file' }));
      return;
    }

    if (!formData.title.trim()) {
      setErrors(prev => ({ ...prev, title: 'Title is required' }));
      return;
    }

    setIsUploading(true);
    
    // Simulate upload with progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 100));
      setUploadProgress(i);
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Uploading evidence:', {
      caseId,
      file: {
        name: file.name,
        size: file.size,
        type: file.type,
        hash: fileHash
      },
      metadata: formData
    });
    
    alert('Evidence uploaded successfully!');
    onSuccess();
    onClose();
    
    setIsUploading(false);
  };

  const getFileIcon = () => {
    switch(formData.evidenceType) {
      case 'document': return <FileText size={48} className="text-deep-blue-500" />;
      case 'image': return <Image size={48} className="text-success-500" />;
      case 'video': return <Video size={48} className="text-warning-500" />;
      default: return <FileText size={48} className="text-slate-500" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-premium-lg max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Upload Evidence</h2>
            <p className="text-sm text-slate-500 mt-1">Case: {caseTitle}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6 space-y-5">
          {/* File Upload Area */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Upload File <span className="text-error-500">*</span>
            </label>
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                file ? 'border-success-500 bg-success-50' : 'border-slate-200 hover:border-deep-blue-400 hover:bg-slate-50'
              }`}
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept={
                  formData.evidenceType === 'document' ? '.pdf,.doc,.docx,.txt' :
                  formData.evidenceType === 'image' ? '.jpg,.jpeg,.png,.gif,.webp' :
                  '.mp4,.mpeg,.mov'
                }
              />
              {file ? (
                <div className="space-y-3">
                  {getFileIcon()}
                  <div>
                    <p className="font-medium text-slate-800">{file.name}</p>
                    <p className="text-sm text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    {fileHash && (
                      <div className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
                        <Hash size={12} />
                        <span className="font-mono">SHA-256: {fileHash.substring(0, 16)}...</span>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                      setFileHash('');
                    }}
                    className="text-sm text-error-600 hover:text-error-700"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Upload size={48} className="mx-auto text-slate-400" />
                  <div>
                    <p className="text-slate-600">Click to browse or drag and drop</p>
                    <p className="text-sm text-slate-400 mt-1">
                      Maximum file size: 100MB
                    </p>
                  </div>
                </div>
              )}
            </div>
            {errors.file && <p className="text-xs text-error-500 mt-1">{errors.file}</p>}
          </div>

          {/* Evidence Type */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Evidence Type</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'document', label: 'Document', icon: FileText },
                { value: 'image', label: 'Image', icon: Image },
                { value: 'video', label: 'Video', icon: Video }
              ].map(type => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, evidenceType: type.value });
                    setFile(null);
                    setFileHash('');
                  }}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                    formData.evidenceType === type.value
                      ? 'border-deep-blue-500 bg-deep-blue-50 text-deep-blue-700'
                      : 'border-slate-200 hover:border-deep-blue-300 text-slate-600'
                  }`}
                >
                  <type.icon size={20} />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Title / Label <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                errors.title ? 'border-error-500 focus:ring-error-500/20' : 'border-slate-200 focus:border-deep-blue-400 focus:ring-deep-blue-400/20'
              }`}
              placeholder="Enter evidence title"
            />
            {errors.title && <p className="text-xs text-error-500 mt-1">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 focus:ring-2 focus:ring-deep-blue-400/20 transition-all resize-none"
              placeholder="Describe the evidence and its relevance to the case..."
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Tags (Optional)</label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 focus:ring-2 focus:ring-deep-blue-400/20"
                placeholder="Enter tags separated by commas (e.g., cctv, suspect, weapon)"
              />
            </div>
          </div>

          {/* Confidentiality */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Confidentiality</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={!formData.confidential}
                  onChange={() => setFormData({ ...formData, confidential: false })}
                  className="w-4 h-4 text-deep-blue-600"
                />
                <Unlock size={14} className="text-success-500" />
                <span className="text-sm">Public</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={formData.confidential}
                  onChange={() => setFormData({ ...formData, confidential: true })}
                  className="w-4 h-4 text-deep-blue-600"
                />
                <Lock size={14} className="text-error-500" />
                <span className="text-sm">Confidential</span>
              </label>
            </div>
          </div>

          {/* Security Note */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="flex items-start gap-3">
              <Shield size={18} className="text-deep-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-slate-700">Security & Compliance</p>
                <p className="text-xs text-slate-500 mt-1">
                  File will be encrypted using AES-256. SHA-256 hash will be generated for tamper-proof verification.
                  All uploads are logged in the audit trail.
                </p>
              </div>
            </div>
          </div>

          {/* Upload Progress */}
          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Uploading...</span>
                <span className="text-slate-500">{uploadProgress}%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-deep-blue-500 to-deep-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleUpload}
            disabled={isUploading || !file}
            className="flex-1 px-4 py-2 bg-gradient-premium hover:bg-gradient-premium-hover text-white rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isUploading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Upload size={18} />
                <span>Upload Evidence</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadEvidenceModal;