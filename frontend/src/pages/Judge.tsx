import React, { useState } from "react";
import {
  Scale,
  Clock,
  Brain,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Shield,
  ArrowUpRight,
  BarChart3,
  LineChart,
  PieChart,
  TrendingDown,
  ChartLine,
  X,
  Send,
  Bell,
} from "lucide-react";
import {
  BarChart as ReBarChart,
  Bar,
  LineChart as ReLineChart,
  Line,
  PieChart as RePieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { useToast } from "../hooks/useToast";
import type {
  Stats,
  MonthlyData,
  PriorityData,
  JudgeLoadData,
  PendingAgeData,
  HearingData,
  EvidenceAdmissibilityData,
  DisposalRateData,
  DisposalVsFilingData,
  BacklogProjection,
  RecentCase,
  PendingAlert,
  CustomTooltipProps,
} from "../type/dashboard.types";

const Dashboard: React.FC = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleReviewCase = (caseItem: RecentCase): void => {
    navigate(`/case/${caseItem.id}`);
  };

  const [stats] = useState<Stats>({
    totalCases: 2847,
    pendingCases: 1243,
    aiSummarized: 892,
    evidenceVerified: 1567,
    priorityHigh: 43,
    backlogReduction: 28,
  });

  const [showEvidenceRequestModal, setShowEvidenceRequestModal] =
    useState<boolean>(false);
  const [showWitnessSummonModal, setShowWitnessSummonModal] =
    useState<boolean>(false);
  const [showVerifyModal, setShowVerifyModal] = useState<boolean>(false);
  const [selectedAlert, setSelectedAlert] = useState<PendingAlert | null>(null);
  const [requestMessage, setRequestMessage] = useState<string>("");
  const [witnessDate, setWitnessDate] = useState<string>("");
  const [verificationNotes, setVerificationNotes] = useState<string>("");

  // Monthly Case Data for Line Chart
  const monthlyData: MonthlyData[] = [
    {
      month: "Jan",
      newCases: 245,
      resolved: 210,
      pending: 890,
      aiProcessed: 180,
    },
    {
      month: "Feb",
      newCases: 267,
      resolved: 225,
      pending: 932,
      aiProcessed: 210,
    },
    {
      month: "Mar",
      newCases: 289,
      resolved: 240,
      pending: 981,
      aiProcessed: 245,
    },
    {
      month: "Apr",
      newCases: 312,
      resolved: 268,
      pending: 1025,
      aiProcessed: 278,
    },
    {
      month: "May",
      newCases: 298,
      resolved: 285,
      pending: 1038,
      aiProcessed: 290,
    },
    {
      month: "Jun",
      newCases: 324,
      resolved: 302,
      pending: 1060,
      aiProcessed: 310,
    },
    {
      month: "Jul",
      newCases: 345,
      resolved: 318,
      pending: 1087,
      aiProcessed: 335,
    },
    {
      month: "Aug",
      newCases: 367,
      resolved: 335,
      pending: 1119,
      aiProcessed: 358,
    },
    {
      month: "Sep",
      newCases: 389,
      resolved: 352,
      pending: 1156,
      aiProcessed: 375,
    },
    {
      month: "Oct",
      newCases: 378,
      resolved: 368,
      pending: 1166,
      aiProcessed: 390,
    },
    {
      month: "Nov",
      newCases: 402,
      resolved: 385,
      pending: 1183,
      aiProcessed: 410,
    },
    {
      month: "Dec",
      newCases: 421,
      resolved: 398,
      pending: 1206,
      aiProcessed: 435,
    },
  ];

  // Priority Distribution for Pie Chart
  const priorityData: PriorityData[] = [
    { name: "Critical", value: 43, color: "#DC2626" },
    { name: "High", value: 127, color: "#F59E0B" },
    { name: "Medium", value: 456, color: "#3B82F6" },
    { name: "Low", value: 617, color: "#10B981" },
  ];

  // Backlog Reduction Projection
  const backlogProjection: BacklogProjection[] = [
    { month: "Jan", actual: 1243, projected: 1243, target: 1200 },
    { month: "Feb", actual: 1208, projected: 1190, target: 1150 },
    { month: "Mar", actual: 1182, projected: 1140, target: 1100 },
    { month: "Apr", actual: null, projected: 1090, target: 1050 },
    { month: "May", actual: null, projected: 1040, target: 1000 },
    { month: "Jun", actual: null, projected: 990, target: 950 },
  ];

  // Judge Wise Case Load Distribution
  const judgeLoadData: JudgeLoadData[] = [
    {
      judge: "Justice Sharma",
      activeCases: 156,
      resolvedMonth: 28,
      pendingOver90: 12,
    },
    {
      judge: "Justice Verma",
      activeCases: 189,
      resolvedMonth: 34,
      pendingOver90: 18,
    },
    {
      judge: "Justice Patel",
      activeCases: 142,
      resolvedMonth: 31,
      pendingOver90: 8,
    },
    {
      judge: "Justice Kumar",
      activeCases: 203,
      resolvedMonth: 26,
      pendingOver90: 24,
    },
    {
      judge: "Justice Singh",
      activeCases: 167,
      resolvedMonth: 32,
      pendingOver90: 14,
    },
  ];

  // Pending Cases by Age
  const pendingAgeData: PendingAgeData[] = [
    { name: "< 30 days", value: 234, color: "#10B981" },
    { name: "30-90 days", value: 456, color: "#3B82F6" },
    { name: "90-180 days", value: 312, color: "#F59E0B" },
    { name: "180-365 days", value: 178, color: "#EC4899" },
    { name: "> 365 days", value: 63, color: "#DC2626" },
  ];

  // Hearing vs Adjournment Ratio
  const hearingData: HearingData[] = [
    {
      month: "Jan",
      scheduled: 245,
      conducted: 210,
      adjourned: 35,
      percentage: 85.7,
    },
    {
      month: "Feb",
      scheduled: 267,
      conducted: 235,
      adjourned: 32,
      percentage: 88.0,
    },
    {
      month: "Mar",
      scheduled: 289,
      conducted: 258,
      adjourned: 31,
      percentage: 89.3,
    },
    {
      month: "Apr",
      scheduled: 312,
      conducted: 276,
      adjourned: 36,
      percentage: 88.5,
    },
    {
      month: "May",
      scheduled: 298,
      conducted: 268,
      adjourned: 30,
      percentage: 89.9,
    },
    {
      month: "Jun",
      scheduled: 324,
      conducted: 290,
      adjourned: 34,
      percentage: 89.5,
    },
  ];

  // Evidence Admissibility Rate
  const evidenceAdmissibilityData: EvidenceAdmissibilityData[] = [
    { type: "CCTV Footage", submitted: 245, admitted: 238, rate: 97.1 },
    { type: "Documents", submitted: 567, admitted: 534, rate: 94.2 },
    { type: "Witness Statements", submitted: 345, admitted: 312, rate: 90.4 },
    { type: "Forensic Reports", submitted: 156, admitted: 149, rate: 95.5 },
    { type: "Audio Evidence", submitted: 89, admitted: 78, rate: 87.6 },
  ];

  // Disposal Rate by Case Type
  const disposalRateData: DisposalRateData[] = [
    { type: "Criminal", filed: 1243, disposed: 534, rate: 43.0 },
    { type: "Civil", filed: 892, disposed: 412, rate: 46.2 },
    { type: "Family", filed: 412, disposed: 189, rate: 45.9 },
    { type: "Corporate", filed: 189, disposed: 98, rate: 51.9 },
    { type: "Cyber", filed: 111, disposed: 45, rate: 40.5 },
  ];

  // Monthly Disposal vs Filing Gap
  const disposalVsFilingData: DisposalVsFilingData[] = [
    { month: "Jan", filed: 245, disposed: 210, gap: 35 },
    { month: "Feb", filed: 267, disposed: 235, gap: 32 },
    { month: "Mar", filed: 289, disposed: 258, gap: 31 },
    { month: "Apr", filed: 312, disposed: 276, gap: 36 },
    { month: "May", filed: 298, disposed: 268, gap: 30 },
    { month: "Jun", filed: 324, disposed: 290, gap: 34 },
  ];

  const recentCases: RecentCase[] = [
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

  const pendingAlerts: PendingAlert[] = [
    {
      id: 1,
      case: "State vs. Ramesh Gupta",
      caseId: "2023-089",
      pending: "450 days",
      issue: "Missing Evidence",
      action: "Request Evidence",
    },
    {
      id: 2,
      case: "State vs. Sonal Mehta",
      caseId: "2023-124",
      pending: "320 days",
      issue: "Witness Unavailable",
      action: "Summon Witness",
    },
    {
      id: 3,
      case: "State vs. Deepak Joshi",
      caseId: "2022-456",
      pending: "280 days",
      issue: "Document Verification",
      action: "Verify Now",
    },
  ];

  const handleRequestEvidence = (alert: PendingAlert): void => {
    setSelectedAlert(alert);
    setShowEvidenceRequestModal(true);
  };

  const handleSummonWitness = (alert: PendingAlert): void => {
    setSelectedAlert(alert);
    setShowWitnessSummonModal(true);
  };

  const handleVerifyNow = (alert: PendingAlert): void => {
    setSelectedAlert(alert);
    setShowVerifyModal(true);
  };

  const submitEvidenceRequest = (): void => {
    toast.success(`Evidence request sent for ${selectedAlert?.case}`);
    setShowEvidenceRequestModal(false);
    setRequestMessage("");
  };

  const submitWitnessSummon = (): void => {
    toast.success(
      `Witness summons sent for ${selectedAlert?.case} on ${witnessDate}`,
    );
    setShowWitnessSummonModal(false);
    setWitnessDate("");
  };

  const submitVerification = (): void => {
    toast.success(`Document verification initiated for ${selectedAlert?.case}`);
    setShowVerifyModal(false);
    setVerificationNotes("");
  };

  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-200">
          <p className="text-sm font-semibold text-slate-800">{label}</p>
          {payload.map((p, idx) => (
            <p
              key={idx}
              className="text-xs"
              style={{ color: p.color || p.fill }}
            >
              {p.name}: {p.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl p-5 shadow-premium border border-slate-100 hover:shadow-premium-lg transition-all group">
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
            <div className="w-12 h-12 bg-deep-blue/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Scale className="w-6 h-6 text-deep-blue" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-premium border border-slate-100 hover:shadow-premium-lg transition-all group">
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
            <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-warning" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-premium border border-slate-100 hover:shadow-premium-lg transition-all group">
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
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-success" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-premium border border-slate-100 hover:shadow-premium-lg transition-all group">
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
            <div className="w-12 h-12 bg-deep-blue/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-deep-blue" />
            </div>
          </div>
        </div>
      </div>

      {/* CHARTS SECTION - First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-5 hover:shadow-premium-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <LineChart className="w-5 h-5 text-deep-blue" />
                Monthly Case Trends
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                New cases vs Resolved cases (2024)
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-deep-blue rounded-full"></div>
                <span className="text-slate-600">New Cases</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-slate-600">Resolved</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ReLineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="newCases"
                stroke="#1E3A8A"
                strokeWidth={3}
                dot={{ fill: "#1E3A8A", r: 5 }}
                activeDot={{ r: 7 }}
              />
              <Line
                type="monotone"
                dataKey="resolved"
                stroke="#16A34A"
                strokeWidth={3}
                dot={{ fill: "#16A34A", r: 5 }}
              />
            </ReLineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-5 hover:shadow-premium-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-deep-blue" />
                Case Priority Distribution
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Current case breakdown by priority
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-slate-800">1,243</p>
              <p className="text-xs text-slate-500">Total Active Cases</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RePieChart>
              <Pie
                data={priorityData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                labelLine={{ stroke: "#94A3B8", strokeWidth: 1 }}
              >
                {priorityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </RePieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CHARTS SECTION - Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-5 hover:shadow-premium-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-deep-blue" />
                Judge Wise Case Load Distribution
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Active cases & disposal rates by judge
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ReBarChart
              data={judgeLoadData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="judge" tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="activeCases"
                fill="#1E3A8A"
                name="Active Cases"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="resolvedMonth"
                fill="#10B981"
                name="Resolved (Month)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="pendingOver90"
                fill="#F59E0B"
                name="Pending >90 days"
                radius={[4, 4, 0, 0]}
              />
            </ReBarChart>
          </ResponsiveContainer>
          <div className="mt-2 text-center text-xs text-slate-500">
            <span className="font-medium text-success">Highest Disposal:</span>{" "}
            Justice Patel (31 cases/month)
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-5 hover:shadow-premium-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-deep-blue" />
                Pending Cases by Age
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Distribution of pending case duration
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RePieChart>
              <Pie
                data={pendingAgeData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                labelLine={{ stroke: "#94A3B8", strokeWidth: 1 }}
              >
                {pendingAgeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </RePieChart>
          </ResponsiveContainer>
          <div className="mt-2 text-center text-xs text-slate-500">
            <span className="font-medium text-error">⚠ Alert:</span> 241 cases
            pending over 180 days
          </div>
        </div>
      </div>

      {/* CHARTS SECTION - Third Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-5 hover:shadow-premium-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <ChartLine className="w-5 h-5 text-deep-blue" />
                Hearing vs Adjournment Trend
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Conducted hearings percentage trend
              </p>
            </div>
            <div className="bg-success/10 px-2 py-1 rounded-lg">
              <span className="text-xs font-medium text-success">
                Avg: 88.5%
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={hearingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[80, 95]}
                tick={{ fontSize: 12 }}
                stroke="#16A34A"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="scheduled"
                fill="#1E3A8A"
                name="Scheduled Hearings"
                barSize={30}
              />
              <Bar
                yAxisId="left"
                dataKey="conducted"
                fill="#10B981"
                name="Conducted"
                barSize={30}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="percentage"
                stroke="#F59E0B"
                strokeWidth={2}
                name="Conducted %"
                dot={{ fill: "#F59E0B", r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="mt-2 text-center text-xs text-slate-500">
            <span className="font-medium text-success">↑ Improvement:</span>{" "}
            Hearing efficiency up by 3.8% this quarter
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-5 hover:shadow-premium-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-deep-blue" />
                Evidence Admissibility Rate
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Submitted vs Admitted evidence types
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ReBarChart
              data={evidenceAdmissibilityData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis
                dataKey="type"
                tick={{ fontSize: 11, angle: -45, textAnchor: "end" }}
                height={70}
                stroke="#94A3B8"
              />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[0, 100]}
                tick={{ fontSize: 12 }}
                stroke="#16A34A"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="submitted"
                fill="#1E3A8A"
                name="Submitted"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                yAxisId="left"
                dataKey="admitted"
                fill="#10B981"
                name="Admitted"
                radius={[4, 4, 0, 0]}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="rate"
                stroke="#F59E0B"
                strokeWidth={2}
                name="Admission Rate %"
              />
            </ReBarChart>
          </ResponsiveContainer>
          <div className="mt-2 text-center text-xs text-slate-500">
            <span className="font-medium text-success">Highest Rate:</span> CCTV
            Footage (97.1%)
          </div>
        </div>
      </div>

      {/* CHARTS SECTION - Fourth Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-5 hover:shadow-premium-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-deep-blue" />
                Disposal Rate by Case Type
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Filing vs Disposal comparison
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ReBarChart
              data={disposalRateData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="type" tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="filed"
                fill="#1E3A8A"
                name="Cases Filed"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="disposed"
                fill="#10B981"
                name="Cases Disposed"
                radius={[4, 4, 0, 0]}
              />
            </ReBarChart>
          </ResponsiveContainer>
          <div className="mt-2 text-center text-xs text-slate-500">
            <span className="font-medium text-deep-blue">Corporate cases</span>{" "}
            have highest disposal rate (51.9%)
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-5 hover:shadow-premium-lg transition-all">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-deep-blue" />
                Filing vs Disposal Gap Analysis
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Monthly gap between filing and disposal
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={disposalVsFilingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="filed"
                barSize={40}
                fill="#DC2626"
                name="Cases Filed"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="disposed"
                barSize={40}
                fill="#10B981"
                name="Cases Disposed"
                radius={[4, 4, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="gap"
                stroke="#F59E0B"
                strokeWidth={2}
                name="Gap (Filed - Disposed)"
                dot={{ fill: "#F59E0B", r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="mt-2 text-center text-xs text-slate-500">
            <span className="font-medium text-warning">Gap Analysis:</span> 194
            more cases filed than disposed in 6 months
          </div>
        </div>
      </div>

      {/* Backlog Reduction Projection - Full Width */}
      <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-5 hover:shadow-premium-lg transition-all">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-success" />
              Backlog Reduction Projection
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              AI-predicted backlog clearance with DEMS+ intervention
            </p>
          </div>
          <div className="bg-success/10 px-3 py-1 rounded-lg">
            <span className="text-xs font-medium text-success">
              Target: -25% by June
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={backlogProjection}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94A3B8" />
            <YAxis tick={{ fontSize: 12 }} stroke="#94A3B8" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              dataKey="actual"
              barSize={40}
              fill="#1E3A8A"
              radius={[4, 4, 0, 0]}
              name="Actual Backlog"
            />
            <Bar
              dataKey="projected"
              barSize={40}
              fill="#8B5CF6"
              radius={[4, 4, 0, 0]}
              name="AI Projected"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#16A34A"
              strokeWidth={3}
              strokeDasharray="5 5"
              name="Target Goal"
              dot={{ fill: "#16A34A", r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
        <div className="mt-3 bg-deep-blue/5 rounded-lg p-3">
          <p className="text-sm text-slate-700 flex items-center gap-2">
            <Brain className="w-4 h-4 text-deep-blue" />
            AI Insight: At current rate, backlog will reduce by{" "}
            <span className="font-bold text-success">312 cases (25.1%)</span> in
            6 months with DEMS+ features
          </p>
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
                className="p-4 hover:bg-slate-50 transition-colors cursor-pointer"
                onClick={() => handleReviewCase(caseItem)}
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
                  <button className="text-deep-blue text-sm flex items-center gap-1">
                    Review <ArrowUpRight className="w-3 h-3" />
                  </button>
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
                  <button
                    onClick={() => {
                      if (alert.action === "Request Evidence")
                        handleRequestEvidence(alert);
                      else if (alert.action === "Summon Witness")
                        handleSummonWitness(alert);
                      else if (alert.action === "Verify Now")
                        handleVerifyNow(alert);
                    }}
                    className="text-xs bg-deep-blue text-white px-3 py-1.5 rounded-lg hover:bg-deep-blue-dark transition-colors"
                  >
                    {alert.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REQUEST EVIDENCE MODAL */}
      {showEvidenceRequestModal && selectedAlert && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-premium-lg max-w-md w-full">
            <div className="p-5 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-800">
                Request Evidence
              </h3>
              <button
                onClick={() => setShowEvidenceRequestModal(false)}
                className="p-1 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">Case</p>
                <p className="font-medium text-slate-800">
                  {selectedAlert.case}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">
                  Missing Evidence Description
                </p>
                <textarea
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                  placeholder="Describe the evidence needed..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue min-h-[100px]"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowEvidenceRequestModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  onClick={submitEvidenceRequest}
                  className="flex-1 px-4 py-2 bg-deep-blue text-white rounded-lg hover:bg-deep-blue-dark flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUMMON WITNESS MODAL */}
      {showWitnessSummonModal && selectedAlert && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-premium-lg max-w-md w-full">
            <div className="p-5 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-800">
                Summon Witness
              </h3>
              <button
                onClick={() => setShowWitnessSummonModal(false)}
                className="p-1 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">Case</p>
                <p className="font-medium text-slate-800">
                  {selectedAlert.case}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">
                  Select Hearing Date
                </p>
                <input
                  type="date"
                  value={witnessDate}
                  onChange={(e) => setWitnessDate(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue"
                />
              </div>
              <div className="bg-yellow-50 rounded-lg p-3">
                <p className="text-xs text-warning">
                  ⚠️ Witness will receive summons via email and SMS
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowWitnessSummonModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  onClick={submitWitnessSummon}
                  className="flex-1 px-4 py-2 bg-deep-blue text-white rounded-lg hover:bg-deep-blue-dark flex items-center justify-center gap-2"
                >
                  <Bell className="w-4 h-4" /> Send Summons
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VERIFY DOCUMENT MODAL */}
      {showVerifyModal && selectedAlert && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-premium-lg max-w-md w-full">
            <div className="p-5 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-800">
                Document Verification
              </h3>
              <button
                onClick={() => setShowVerifyModal(false)}
                className="p-1 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">Case</p>
                <p className="font-medium text-slate-800">
                  {selectedAlert.case}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">
                  Verification Notes
                </p>
                <textarea
                  value={verificationNotes}
                  onChange={(e) => setVerificationNotes(e.target.value)}
                  placeholder="Add verification notes or requirements..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue min-h-[100px]"
                />
              </div>
              <div className="bg-deep-blue/5 rounded-lg p-3">
                <p className="text-xs text-deep-blue">
                  🔗 Blockchain verification will be performed on all documents
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowVerifyModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  onClick={submitVerification}
                  className="flex-1 px-4 py-2 bg-deep-blue text-white rounded-lg hover:bg-deep-blue-dark flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" /> Verify Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
