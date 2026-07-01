import React from "react";
import {
  Target,
  Shield,
  Users,
  Award,
  Eye,
  Heart,
  Globe,
} from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About DEMS+</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            We're on a mission to restore trust in digital evidence through
            cryptographic integrity and transparent chain-of-custody.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020 by a team of forensic experts, cybersecurity
                engineers, and legal professionals, DEMS+ emerged from a
                critical gap in the market: the lack of a secure, verifiable
                platform for managing digital evidence throughout its entire
                lifecycle.
              </p>
              <p className="text-gray-600">
                Today, DEMS+ serves government agencies, law firms, and
                enterprises worldwide, processing millions of evidence files
                with absolute integrity and chain-of-custody assurance.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <Target size={48} className="text-indigo-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-indigo-600">100%</div>
              <div className="text-gray-600">Tamper Detection Rate</div>
              <div className="mt-4 text-4xl font-bold text-indigo-600">
                99.999%
              </div>
              <div className="text-gray-600">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <p className="text-gray-500 mt-3">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Shield size={40} className="text-indigo-600 mx-auto" />
              <h3 className="font-bold text-xl mt-3">Integrity First</h3>
              <p className="text-gray-500 mt-2">
                Cryptographic proof, not promises. Every action is verifiable
                and immutable.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Users size={40} className="text-indigo-600 mx-auto" />
              <h3 className="font-bold text-xl mt-3">
                Trust Through Transparency
              </h3>
              <p className="text-gray-500 mt-2">
                Complete visibility into evidence handling and system
                operations.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Award size={40} className="text-indigo-600 mx-auto" />
              <h3 className="font-bold text-xl mt-3">Excellence in Security</h3>
              <p className="text-gray-500 mt-2">
                Zero-trust architecture with continuous compliance and
                improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Leadership Team</h2>
            <p className="text-gray-500 mt-3">
              Experts in forensic science, cybersecurity, and legal technology
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Founder",
                bg: "forensics",
              },
              { name: "Michael Rodriguez", role: "CTO", bg: "security" },
              { name: "Jennifer Walsh", role: "Head of Legal", bg: "law" },
              { name: "David Kim", role: "VP Engineering", bg: "tech" },
            ].map((leader, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full mx-auto flex items-center justify-center">
                  <Users size={48} className="text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg mt-3">{leader.name}</h3>
                <p className="text-indigo-600 text-sm">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div>Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold">2M+</div>
              <div>Evidence Files Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100+</div>
              <div>Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold">24/7</div>
              <div>Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
