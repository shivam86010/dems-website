import { useState } from 'react';
import { Shield, Copy, CheckCheck, Video, Download, ExternalLink, Scan, Car, Package, Sparkles, Brain, Fingerprint, Calendar, User, Camera, Clock, Hash } from 'lucide-react';

const analysisData = {
  id: 'evd-4441',
  label: 'EVD-4441',
  filename: 'CCTV_Rohini_Cam04_2026-05-05.mp4',
  type: 'video',
  hash: 'a3f9e2c1d8b047c6f5e4d3b2a1908765fedc4321ba987654',
  blockchainTxId: 'NXF-BC-0x7f3a9d2c1e8b4f',
  status: 'blockchain-sealed',
  uploadedAt: '05 May 2026, 22:14 IST',
  uploadedBy: 'Rajan Verma · Badge ID: DL-CID-2847',
  duration: '00:47:23',
  camera: 'CCTV Cam 04 — Rohini Sector 3, Gate B',
  aiProcessedAt: '05 May 2026, 23:02 IST',
  aiModel: 'YOLOv8-L + FaceNet v3.1',
  faces: [
    { id: 'face-001', label: 'Face #1', confidence: 94, match: 'Arvind Mehta · CRN-DL-4821', timestamp: '00:01:32', status: 'matched' },
    { id: 'face-002', label: 'Face #2', confidence: 71, match: 'Unknown — Added to suspect DB', timestamp: '00:03:17', status: 'unmatched' },
  ],
  plates: [
    { id: 'plate-001', value: 'DL 3C AB 7823', confidence: 88, timestamp: '00:02:54', status: 'wanted', make: 'Maruti Suzuki Swift · White' },
  ],
  objects: [
    { id: 'obj-001', label: 'Knife', confidence: 79, timestamp: '00:03:41', bbox: '(412, 288, 89, 112)' },
    { id: 'obj-002', label: 'Backpack', confidence: 92, timestamp: '00:01:28', bbox: '(201, 190, 120, 160)' },
    { id: 'obj-003', label: 'Mobile phone', confidence: 85, timestamp: '00:04:11', bbox: '(334, 301, 42, 78)' },
  ],
  ocrText: null,
  transcript: null,
  summary: 'CCTV footage from Rohini Sector 3 Gate B camera captures two individuals entering the premises at 08:31 PM. Face #1 matched to known suspect Arvind Mehta (CRN-DL-4821) with 94% confidence. A white Maruti Swift (DL 3C AB 7823) is detected at 08:32 PM. Suspect #1 is observed carrying a knife-like object at 08:33 PM. Both individuals exit frame at 08:41 PM. Movement path extracted across 4 zones.',
};

const tabs = ['AI Detections', 'Summary', 'Raw Metadata'];

export default function EvidenceAnalysisPanel() {
  const [activeTab, setActiveTab] = useState('AI Detections');
  const [copied, setCopied] = useState(false);

  const copyHash = () => {
    navigator.clipboard?.writeText(analysisData?.hash)?.catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden animate-fade-in">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-glow">
                <Video size={14} className="text-white" />
              </div>
              <span className="font-mono text-sm font-bold text-deep-blue-700">{analysisData?.label}</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 border border-cyan-200 uppercase flex items-center gap-1">
                <Shield size={10} />
                Blockchain Sealed
              </span>
            </div>
            <p className="text-sm font-medium text-slate-700">{analysisData?.filename}</p>
            <div className="flex items-center gap-3 mt-1.5">
              <div className="flex items-center gap-1.5">
                <Camera size={11} className="text-slate-400" />
                <span className="text-xs text-slate-500">{analysisData?.camera}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <Clock size={11} className="text-slate-400" />
                <span className="text-xs text-slate-500">{analysisData?.duration}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <button className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-medium transition-all duration-200 hover:bg-slate-200 hover:text-slate-900">
              <Download size={12} className="group-hover:-translate-y-0.5 transition-transform" />
              Export
            </button>
            <button className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-medium transition-all duration-200 hover:bg-slate-200 hover:text-slate-900">
              <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
              Open
            </button>
          </div>
        </div>

        {/* Hash block */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100/50 border border-slate-200 mb-5">
          <div className="p-1.5 rounded-lg bg-deep-blue-100">
            <Hash size={14} className="text-deep-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">SHA-256 Hash</p>
            <p className="font-mono text-xs text-slate-600 truncate">{analysisData?.hash}</p>
          </div>
          <button
            onClick={copyHash}
            className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-all"
            title="Copy hash"
          >
            {copied ? <CheckCheck size={14} className="text-emerald-500" /> : <Copy size={14} />}
          </button>
        </div>

        {/* AI Model badge */}
        <div className="flex items-center gap-2 mb-5 p-2 rounded-xl bg-gradient-to-r from-violet-50 to-transparent">
          <div className="p-1.5 rounded-lg bg-violet-100">
            <Brain size={12} className="text-violet-600" />
          </div>
          <span className="text-xs text-slate-500">Analyzed by</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full">{analysisData?.aiModel}</span>
          <div className="flex items-center gap-1 ml-auto">
            <Calendar size={10} className="text-slate-400" />
            <span className="text-[11px] text-slate-400">{analysisData?.aiProcessedAt}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-5 border-b border-slate-200 pb-0">
          {tabs?.map((tab) => (
            <button
              key={`evd-tab-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-semibold transition-all border-b-2 -mb-px ${
                activeTab === tab
                  ? 'border-deep-blue-500 text-deep-blue-700 bg-deep-blue-50/30 rounded-t-lg' 
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'AI Detections' && (
          <div className="space-y-5 animate-fade-in">
            {/* Face Detections */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-violet-100">
                  <Scan size={12} className="text-violet-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Face Detections ({analysisData?.faces?.length})</span>
                <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">AI Verified</span>
              </div>
              <div className="space-y-2.5">
                {analysisData?.faces?.map((face) => (
                  <div key={face?.id} className={`p-3 rounded-xl border transition-all ${
                    face?.status === 'matched' 
                      ? 'border-rose-200 bg-gradient-to-r from-rose-50/80 to-transparent' 
                      : 'border-slate-200 bg-slate-50/50'
                  }`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-slate-700">{face?.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-slate-400">@{face?.timestamp}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          face?.confidence >= 90 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : face?.confidence >= 75 
                            ? 'bg-amber-100 text-amber-700' 
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                          {face?.confidence}%
                        </span>
                      </div>
                    </div>
                    <p className={`text-xs ${face?.status === 'matched' ? 'text-rose-700 font-semibold' : 'text-slate-600'}`}>
                      {face?.match}
                    </p>
                    {face?.status === 'matched' && (
                      <div className="mt-2 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        <span className="text-[10px] font-semibold text-rose-600">MATCHED TO KNOWN SUSPECT</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* License Plates */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-amber-100">
                  <Car size={12} className="text-amber-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">License Plates ({analysisData?.plates?.length})</span>
              </div>
              {analysisData?.plates?.map((plate) => (
                <div key={plate?.id} className="p-3 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50/80 to-transparent">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-base font-bold text-amber-700 tracking-wider">{plate?.value}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-slate-400">@{plate?.timestamp}</span>
                      <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{plate?.confidence}%</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">{plate?.make}</p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-rose-600 uppercase">⚠ WANTED VEHICLE</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Objects */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-cyan-100">
                  <Package size={12} className="text-cyan-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Object Detections ({analysisData?.objects?.length})</span>
              </div>
              <div className="space-y-2">
                {analysisData?.objects?.map((obj) => (
                  <div key={obj?.id} className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100/50 transition-all">
                    <span className={`text-sm font-semibold ${obj?.label === 'Knife' ? 'text-rose-600' : 'text-slate-700'}`}>
                      {obj?.label === 'Knife' && '⚠ '}{obj?.label}
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="font-mono text-[11px] text-slate-400">@{obj?.timestamp}</span>
                      <span className="text-xs font-bold text-cyan-600 bg-cyan-100 px-2 py-0.5 rounded-full">{obj?.confidence}%</span>
                      <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">{obj?.bbox}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Summary' && (
          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-violet-100">
                <Sparkles size={12} className="text-violet-600" />
              </div>
              <span className="text-sm font-semibold text-slate-700">AI-Generated Case Summary</span>
              <span className="text-[10px] text-slate-400 ml-auto">Generated by LLM v2.1</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{analysisData?.summary}</p>
          </div>
        )}

        {activeTab === 'Raw Metadata' && (
          <div className="space-y-3 animate-fade-in">
            {[
              { icon: Video, label: 'File Type', value: 'video/mp4' },
              { icon: Clock, label: 'Duration', value: analysisData?.duration },
              { icon: Camera, label: 'Camera Source', value: analysisData?.camera },
              { icon: User, label: 'Uploaded By', value: analysisData?.uploadedBy },
              { icon: Calendar, label: 'Upload Time', value: analysisData?.uploadedAt },
              { icon: Brain, label: 'AI Processed', value: analysisData?.aiProcessedAt },
              { icon: Fingerprint, label: 'Blockchain TX', value: analysisData?.blockchainTxId },
              { icon: Shield, label: 'Chain Sync', value: 'Verified · 14 May 2026, 07:20 IST' },
            ]?.map((row) => (
              <div key={`meta-${row?.label}`} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                <div className="flex items-center gap-2">
                  <row.icon size={12} className="text-slate-400" />
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{row?.label}</span>
                </div>
                <span className="font-mono text-xs text-slate-600 text-right">{row?.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}