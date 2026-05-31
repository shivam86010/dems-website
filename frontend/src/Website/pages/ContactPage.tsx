import React from "react";
import {
  Mail,
  Phone,
  Building,
  Lock,
  Clock,
  Globe,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage: React.FC = () => {
  return (
    <div className="py-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Ready to transform your evidence management? Our team is here to
            help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-bold">Request Enterprise Demo</h3>
              <p className="text-gray-500 mt-2">
                Get a personalized walkthrough of DEMS+
              </p>
              <form className="mt-5 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 border rounded-xl"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 border rounded-xl"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full p-3 border rounded-xl"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full p-3 border rounded-xl"
                />
                <select className="w-full p-3 border rounded-xl bg-white">
                  <option>Number of Employees</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-1000</option>
                  <option>1000+</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell us about your evidence management needs..."
                  className="w-full p-3 border rounded-xl"
                ></textarea>
                <button className="w-full bg-indigo-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-800 transition-colors">
                  <Lock size={18} /> Submit Request
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-gray-500 mt-2">
                Our enterprise sales team is available 24/7 for
                security-critical inquiries.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3 items-start p-4 bg-white rounded-xl shadow-sm">
                  <Mail size={24} className="text-indigo-700 flex-shrink-0" />
                  <div>
                    <div className="font-bold">Email Us</div>
                    <div className="text-gray-600">sales@demsplus.com</div>
                    <div className="text-sm text-gray-400">
                      support@demsplus.com
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-4 bg-white rounded-xl shadow-sm">
                  <Phone size={24} className="text-indigo-700 flex-shrink-0" />
                  <div>
                    <div className="font-bold">Call Us</div>
                    <div className="text-gray-600">+1 (888) 421-DEMS</div>
                    <div className="text-sm text-gray-400">
                      Available 24/7 for security incidents
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-4 bg-white rounded-xl shadow-sm">
                  <Building
                    size={24}
                    className="text-indigo-700 flex-shrink-0"
                  />
                  <div>
                    <div className="font-bold">Global Headquarters</div>
                    <div className="text-gray-600">
                      1200 Forensic Avenue, Suite 400
                    </div>
                    <div className="text-gray-600">Wilmington, DE 19801</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-4 bg-white rounded-xl shadow-sm">
                  <Clock size={24} className="text-indigo-700 flex-shrink-0" />
                  <div>
                    <div className="font-bold">Support Hours</div>
                    <div className="text-gray-600">
                      24/7/365 - Global Security Operations Center
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to secure your evidence chain?
          </h2>
          <p className="text-indigo-200 mb-6">
            Join hundreds of organizations that trust DEMS+ for court-ready
            evidence management.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
