import React, { useState, useEffect } from "react";
import {
  Scale,
  Clock,
  FileText,
  Video,
  Brain,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Users,
  Calendar,
  Shield,
  Zap,
  ArrowUpRight,
  Activity,
  HardDrive,
} from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCases: 2847,
    pendingCases: 1243,
    aiSummarized: 892,
    evidenceVerified: 1567,
    priorityHigh: 43,
    backlogReduction: 28,
  });

  const recentCases = [
    {
      id: "2024-001",
      title: "State vs. Rajesh Kumar",
      crime: "Theft",
      priority: "high",
      date: "2024-03-15",
      aiSummary: true,
    },
    {
      id: "2024-002",
      title: "State vs. Priya Sharma",
      crime: "Cyber Fraud",
      priority: "critical",
      date: "2024-03-14",
      aiSummary: true,
    },
    {
      id: "2024-003",
      title: "State vs. Amit Verma",
      crime: "Assault",
      priority: "medium",
      date: "2024-03-14",
      aiSummary: false,
    },
    {
      id: "2024-004",
      title: "State vs. Neha Singh",
      crime: "Evidence Tampering",
      priority: "high",
      date: "2024-03-13",
      aiSummary: true,
    },
    {
      id: "2024-005",
      title: "State vs. Vikram Malhotra",
      crime: "Murder",
      priority: "critical",
      date: "2024-03-12",
      aiSummary: true,
    },
  ];

  const pendingAlerts = [
    {
      id: 1,
      case: "State vs. Ramesh Gupta",
      pending: "450 days",
      issue: "Missing Evidence",
      action: "Request Evidence",
    },
    {
      id: 2,
      case: "State vs. Sonal Mehta",
      pending: "320 days",
      issue: "Witness Unavailable",
      action: "Summon Witness",
    },
    {
      id: 3,
      case: "State vs. Deepak Joshi",
      pending: "280 days",
      issue: "Document Verification",
      action: "Verify Now",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl p-5 shadow-premium border border-slate-100 hover:shadow-premium-lg transition-all">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm">Total Cases</p>
              <p className="text-3xl font-bold text-slate-800 mt-1">
                {stats.totalCases.toLocaleString()}
              </p>
              <p className="text-success text-sm mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12% this month
              </p>
            </div>
            <div className="w-12 h-12 bg-deep-blue/10 rounded-xl flex items-center justify-center">
              <Scale className="w-6 h-6 text-deep-blue" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-premium border border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm">Pending Cases</p>
              <p className="text-3xl font-bold text-warning mt-1">
                {stats.pendingCases.toLocaleString()}
              </p>
              <p className="text-error text-sm mt-2 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> Backlog alert
              </p>
            </div>
            <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-warning" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-premium border border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm">AI Summarized</p>
              <p className="text-3xl font-bold text-success mt-1">
                {stats.aiSummarized.toLocaleString()}
              </p>
              <p className="text-slate-600 text-sm mt-2 flex items-center gap-1">
                <Brain className="w-3 h-3" /> 892 cases analyzed
              </p>
            </div>
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-success" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-premium border border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm">Evidence Verified</p>
              <p className="text-3xl font-bold text-deep-blue mt-1">
                {stats.evidenceVerified.toLocaleString()}
              </p>
              <p className="text-slate-600 text-sm mt-2 flex items-center gap-1">
                <Shield className="w-3 h-3" /> Blockchain secured
              </p>
            </div>
            <div className="w-12 h-12 bg-deep-blue/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-deep-blue" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights Banner */}
      <div className="bg-gradient-to-r from-deep-blue/10 to-success/10 rounded-xl p-5 border border-deep-blue/20">
        <div className="flex items-center gap-3 mb-3">
          <Brain className="w-6 h-6 text-deep-blue" />
          <h2 className="font-semibold text-slate-800">AI Judicial Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/50 rounded-lg p-3">
            <p className="text-sm text-slate-600">Priority Recommendation</p>
            <p className="font-medium text-slate-800">
              Case #2024-045 has 87% urgency score
            </p>
            <p className="text-xs text-deep-blue mt-1 flex items-center gap-1">
              Schedule immediately <ArrowUpRight className="w-3 h-3" />
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3">
            <p className="text-sm text-slate-600">Evidence Gap Detected</p>
            <p className="font-medium text-slate-800">
              Missing CCTV footage in 3 cases
            </p>
            <p className="text-xs text-warning mt-1">
              Action required from police
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3">
            <p className="text-sm text-slate-600">Similar Case Match</p>
            <p className="font-medium text-slate-800">
              Case #2024-012 matches precedent #2022-089
            </p>
            <p className="text-xs text-success mt-1">92% similarity score</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Cases */}
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-semibold text-slate-800">Recent Cases</h2>
            <button className="text-sm text-deep-blue hover:underline">
              View All
            </button>
          </div>
          <div className="divide-y divide-slate-100">
            {recentCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="p-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-slate-800">
                        {caseItem.title}
                      </p>
                      {caseItem.aiSummary && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-deep-blue/10 text-deep-blue">
                          AI Summary
                        </span>
                      )}
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          caseItem.priority === "critical"
                            ? "bg-error/10 text-error"
                            : caseItem.priority === "high"
                              ? "bg-warning/10 text-warning"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {caseItem.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">
                      FIR: {caseItem.crime}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Last hearing: {caseItem.date}
                    </p>
                  </div>
                  <button className="text-deep-blue text-sm">Review →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Alerts */}
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-semibold text-slate-800">
              ⚠️ Pending Case Alerts
            </h2>
            <AlertTriangle className="w-5 h-5 text-warning" />
          </div>
          <div className="divide-y divide-slate-100">
            {pendingAlerts.map((alert) => (
              <div
                key={alert.id}
                className="p-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-slate-800">{alert.case}</p>
                    <p className="text-sm text-error">
                      Pending for {alert.pending}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Issue: {alert.issue}
                    </p>
                  </div>
                  <button className="text-xs bg-deep-blue text-white px-3 py-1.5 rounded-lg hover:bg-deep-blue-dark transition-colors">
                    {alert.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-5">
        <h2 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5" /> System Status
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-slate-500">AI Engine</p>
            <p className="text-sm font-medium text-success flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Operational
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Blockchain Verification</p>
            <p className="text-sm font-medium text-success flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Active
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Real-time Sync</p>
            <p className="text-sm font-medium text-success flex items-center gap-1">
              <Zap className="w-3 h-3" /> Connected
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Storage Usage</p>
            <p className="text-sm font-medium text-slate-800">
              <HardDrive className="w-3 h-3 inline" /> 2.4TB / 5TB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
