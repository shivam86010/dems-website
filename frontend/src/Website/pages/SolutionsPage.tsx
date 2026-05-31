import React from "react";
import {
  Shield,
  Database,
  Users,
  FileCheck,
  Lock,
  Cloud,
  BarChart3,
  Settings,
} from "lucide-react";

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Shield,
      title: "E-Discovery",
      desc: "Streamline discovery with automated tagging, search, and production-ready exports.",
    },
    {
      icon: Database,
      title: "Evidence Management",
      desc: "Centralized repository with SHA-256 integrity verification for all evidence types.",
    },
    {
      icon: Users,
      title: "Internal Investigations",
      desc: "Secure workspace for HR and legal teams to conduct confidential investigations.",
    },
    {
      icon: FileCheck,
      title: "Contract Review",
      desc: "AI-assisted contract analysis with complete audit trail of all reviews and changes.",
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      desc: "Meet GDPR, HIPAA, FedRAMP, and SOC2 requirements with pre-built compliance packs.",
    },
    {
      icon: Cloud,
      title: "Cloud Forensics",
      desc: "Collect and preserve cloud-based evidence from major providers.",
    },
    {
      icon: BarChart3,
      title: "Legal Analytics",
      desc: "Data-driven insights to optimize case strategies and reduce litigation costs.",
    },
    {
      icon: Settings,
      title: "API Integration",
      desc: "Seamless integration with existing case management and document systems.",
    },
  ];

  return (
    <div className="py-16">
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Enterprise Solutions</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Comprehensive evidence management for every industry and use case
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-xl hover:shadow-lg transition-shadow"
              >
                <sol.icon size={32} className="text-indigo-600" />
                <h3 className="font-bold text-lg mt-3">{sol.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
