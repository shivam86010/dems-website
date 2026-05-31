import React from 'react';
import { Mail, Phone, Building, Lock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold">Request Enterprise Demo</h3>
            <form className="mt-5 space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl" />
              <input type="email" placeholder="Work Email" className="w-full p-3 border rounded-xl" />
              <input type="text" placeholder="Organization" className="w-full p-3 border rounded-xl" />
              <textarea rows={3} placeholder="Evidence management needs..." className="w-full p-3 border rounded-xl"></textarea>
              <button className="w-full bg-indigo-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                <Lock size={18} /> Submit & Get Whitepaper
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Contact Enterprise Sales</h3>
            <div className="mt-6 space-y-4">
              <div className="flex gap-3"><Mail size={24} className="text-indigo-700" /><div><div className="font-bold">sales@demsplus.com</div><div className="text-sm text-gray-500">24/7 security response</div></div></div>
              <div className="flex gap-3"><Phone size={24} className="text-indigo-700" /><div><div className="font-bold">+1 (888) 421-DEMS</div><div className="text-sm text-gray-500">Chain-of-custody support</div></div></div>
              <div className="flex gap-3"><Building size={24} className="text-indigo-700" /><div><div className="font-bold">Global HQ</div><div className="text-sm text-gray-500">1200 Forensic Ave, Wilmington, DE 19801</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;