import React, { useState } from "react";
import {
  Check,
  X,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Shield,
  Zap,
  Building2,
  Users,
  Database,
  ShieldCheck,
  Lock,
  Fingerprint,
  Server,
  Puzzle,
  Star,
  Clock,
  Award,
  Globe,
  Mail,
  Phone,
  MessageCircle,
  Plus,
  Minus,
  Sparkles,
  BarChart3,
  FileCheck,
  Layers,
  Cloud,
  Headphones,
  Quote,
  BookOpen,
  GraduationCap,
  Heart,
  ThumbsUp,
  Brain,
  Target,
  Rocket,
} from "lucide-react";

export const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // --- DATA OBJECTS ---
  const plans = [
    {
      name: "Starter",
      description: "Essential tools for small investigation teams.",
      monthlyPrice: 49,
      annualPrice: 39,
      popular: false,
      icon: Users,
      features: [
        "Up to 5 team members",
        "100GB Secure Storage",
        "Basic Case Management",
        "Standard Audit Trails",
        "Email Support",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      description: "Advanced capabilities for growing departments.",
      monthlyPrice: 99,
      annualPrice: 79,
      popular: true,
      icon: Zap,
      features: [
        "Up to 25 team members",
        "1TB Secure Storage",
        "Advanced Analytics & AI",
        "Chain of Custody Tracking",
        "Role-based Access Control",
        "Priority 24/7 Support",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      description: "Maximum security and control for large organizations.",
      monthlyPrice: 249,
      annualPrice: 199,
      popular: false,
      icon: Building2,
      features: [
        "Unlimited team members",
        "Unlimited Storage",
        "Custom Integration APIs",
        "On-premise Deployment Option",
        "Dedicated Success Manager",
        "Custom Compliance Reporting",
      ],
      cta: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "What happens if we exceed our storage limit?",
      answer:
        "We will never lock you out of your evidence. If you approach your limit, your account manager will reach out to discuss upgrading your storage capacity or moving to a higher tier.",
    },
    {
      question: "Is DEMS+ compliant with CJIS and GDPR?",
      answer:
        "Yes, DEMS+ is built from the ground up for compliance. Our Enterprise tier includes full CJIS, HIPAA, and GDPR compliance certifications with complete audit logs.",
    },
    {
      question: "Can we switch billing cycles later?",
      answer:
        "Absolutely. You can switch from monthly to annual billing at any time to take advantage of the 20% discount. Prorated credits will be applied to your account.",
    },
    {
      question: "Do you offer on-premise deployments?",
      answer:
        "Yes, our Enterprise plan offers fully air-gapped, on-premise deployment options for organizations with strict data sovereignty requirements.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support for Starter, priority 24/7 support for Professional, and a dedicated success manager with 24/7 phone support for Enterprise customers.",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Core Features",
      items: [
        {
          name: "Team Members",
          starter: "Up to 5",
          pro: "Up to 25",
          enterprise: "Unlimited",
        },
        {
          name: "Storage",
          starter: "100 GB",
          pro: "1 TB",
          enterprise: "Unlimited",
        },
        { name: "Case Management", starter: true, pro: true, enterprise: true },
        { name: "Global Search", starter: true, pro: true, enterprise: true },
      ],
    },
    {
      category: "Security & Compliance",
      items: [
        {
          name: "Audit Logs",
          starter: "30 Days",
          pro: "1 Year",
          enterprise: "Indefinite",
        },
        {
          name: "Chain of Custody",
          starter: false,
          pro: true,
          enterprise: true,
        },
        {
          name: "Role-Based Access",
          starter: false,
          pro: true,
          enterprise: true,
        },
        {
          name: "SSO (SAML/Okta)",
          starter: false,
          pro: false,
          enterprise: true,
        },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Director of Digital Forensics",
      company: "SecureLex Corp",
      quote:
        "DEMS+ has revolutionized how we handle evidence. The chain of custody tracking alone has saved us countless hours in court preparation.",
      rating: 5,
      avatar: "SM",
    },
    {
      name: "James Rodriguez",
      role: "Chief Technology Officer",
      company: "GovTrust Solutions",
      quote:
        "The enterprise-grade security and compliance features give us complete confidence. We've never had a smoother deployment.",
      rating: 5,
      avatar: "JR",
    },
    {
      name: "Dr. Emily Chen",
      role: "Head of Cybersecurity",
      company: "Defender Global",
      quote:
        "The AI-powered analytics have uncovered patterns we would have never found manually. A game-changer for our investigation teams.",
      rating: 5,
      avatar: "EC",
    },
  ];

  // New section data
  const features = [
    {
      icon: Clock,
      title: "Real-time Collaboration",
      description:
        "Work seamlessly with your team members in real-time, sharing evidence and insights instantly.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Leverage AI-powered analytics to uncover hidden patterns and accelerate your investigations.",
    },
    {
      icon: FileCheck,
      title: "Automated Workflows",
      description:
        "Automate repetitive tasks and focus on what matters most - solving cases efficiently.",
    },
    {
      icon: Layers,
      title: "Scalable Infrastructure",
      description:
        "Built on cloud-native architecture that scales with your team's growing needs.",
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      description:
        "Your evidence is protected with the same security standards used by leading financial institutions.",
    },
    {
      icon: Rocket,
      title: "Lightning Fast",
      description:
        "Search through millions of evidence items in milliseconds with our optimized search engine.",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Get intelligent recommendations and pattern detection to speed up your investigations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      {/* SECTION 1: REDESIGNED HERO WITH GRID BACKGROUND */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-white">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef1f6_1px,transparent_1px),linear-gradient(to_bottom,#eef1f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-6 border border-indigo-100">
            <Sparkles className="w-4 h-4 text-[#4F46E5]" />
            <span className="text-[#4F46E5] text-sm font-medium">
              Trusted by 500+ teams worldwide
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Simple pricing for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]">
              modern investigations
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            No hidden fees. No surprise charges. Choose the plan that best fits
            your investigation team's needs and scale as you grow.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Check className="w-5 h-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Check className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Check className="w-5 h-5 text-green-500" />
              <span>14-day free trial</span>
            </div>
          </div>

          {/* Billing Toggle - Redesigned */}
          <div className="flex items-center justify-center space-x-4 mt-6 bg-gray-50 p-3 rounded-2xl inline-flex border border-gray-200">
            <span
              className={`text-sm font-medium transition-colors ${
                !isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-[#4F46E5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#818CF8] focus:ring-offset-2"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow-md ${
                  isAnnual ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`flex items-center space-x-2 text-sm font-medium ${
                isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              <span>Annually</span>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-bold text-green-700 uppercase tracking-wider">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUSTED BY - IMPROVED */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
            Trusted by top law enforcement & enterprise teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-black flex items-center gap-2 text-gray-800">
              <Shield className="w-7 h-7 text-[#4F46E5]" /> DEFENDER
            </div>
            <div className="text-xl font-black flex items-center gap-2 text-gray-800">
              <Database className="w-7 h-7 text-[#4F46E5]" /> DATACORP
            </div>
            <div className="text-xl font-black flex items-center gap-2 text-gray-800">
              <Building2 className="w-7 h-7 text-[#4F46E5]" /> GOVTRUST
            </div>
            <div className="text-xl font-black flex items-center gap-2 text-gray-800">
              <ShieldCheck className="w-7 h-7 text-[#4F46E5]" /> SECURELEX
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY FEATURES */}
      <section className="max-w-7xl mx-auto px-4 mb-24 mt-16">
        <div className="text-center mb-12">
          <span className="inline-block text-[#4F46E5] font-bold tracking-wider uppercase text-sm mb-2">
            Why Choose DEMS+
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for modern investigators
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every feature is designed to streamline your workflow and maintain
            the highest standards of security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
              <Lock className="w-7 h-7 text-[#4F46E5]" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              End-to-End Encryption
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              All evidence is encrypted at rest (AES-256) and in transit (TLS
              1.3), ensuring your sensitive data remains uncompromised.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
              <Fingerprint className="w-7 h-7 text-[#4F46E5]" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Immutable Audit Trails
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every view, download, and transfer is permanently logged to
              maintain a court-admissible chain of custody.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
              <Server className="w-7 h-7 text-[#4F46E5]" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              99.99% Uptime SLA
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Enterprise-grade infrastructure distributed across multiple secure
              zones guarantees your evidence is always accessible.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRICING CARDS */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? "ring-2 ring-[#4F46E5] shadow-2xl shadow-indigo-100 scale-105 z-10"
                  : "border border-gray-200 shadow-lg shadow-gray-100/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#4F46E5] text-white text-[12px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-[#4F46E5]">
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-black text-gray-900">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-500 font-medium">/user/mo</span>
                {isAnnual && (
                  <p className="text-sm text-green-600 font-medium mt-2">
                    Billed ${plan.annualPrice * 12} annually
                  </p>
                )}
              </div>

              <button
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-[15px] transition-all mb-8 ${
                  plan.popular
                    ? "bg-[#4F46E5] text-white hover:bg-[#4338CA] shadow-md"
                    : "bg-indigo-50 text-[#4F46E5] hover:bg-indigo-100"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4 flex-1">
                <p className="text-[13px] font-bold tracking-wider text-gray-900 uppercase">
                  What's included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <Check className="w-5 h-5 text-[#4F46E5] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: NEW SECTION - FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <span className="inline-block text-[#4F46E5] font-bold tracking-wider uppercase text-sm mb-2">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive suite of tools designed to empower your
            investigation team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#4F46E5] transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-[#4F46E5]" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: REDESIGNED TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <span className="inline-block text-[#4F46E5] font-bold tracking-wider uppercase text-sm mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our customers say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from teams that transformed
            their investigations with DEMS+.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-white to-indigo-50/30 p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-[#4F46E5]" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 text-lg italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-b-3xl"></div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: NEW SECTION - BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-3xl p-12 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F46E5] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7C3AED] rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block text-[#818CF8] font-bold tracking-wider uppercase text-sm mb-2">
                Why DEMS+
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Built for the future of investigations
              </h2>
              <p className="text-indigo-200 max-w-2xl mx-auto">
                We combine cutting-edge technology with enterprise-grade
                security to deliver unparalleled results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#4F46E5]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4F46E5]/30 transition-colors">
                    <benefit.icon className="w-6 h-6 text-[#818CF8]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-indigo-200 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: STATS - NEW */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-3xl p-12 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
              500+
            </div>
            <p className="text-indigo-300 text-sm font-medium">
              Teams Trust Us
            </p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
              99.99%
            </div>
            <p className="text-indigo-300 text-sm font-medium">
              Uptime Guarantee
            </p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
              10M+
            </div>
            <p className="text-indigo-300 text-sm font-medium">
              Evidence Items Secured
            </p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
              50+
            </div>
            <p className="text-indigo-300 text-sm font-medium">
              Integrations Available
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: INTEGRATIONS - IMPROVED */}
      <section className="max-w-7xl mx-auto px-4 mb-24 text-center">
        <span className="inline-block text-[#4F46E5] font-bold tracking-wider uppercase text-sm mb-2">
          Integrations
        </span>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          Connects with your existing stack
        </h3>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          DEMS+ integrates seamlessly with leading forensic tools and identity
          providers to fit into your workflow.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Active Directory",
            "Okta",
            "Azure AD",
            "Cellebrite",
            "Magnet Forensics",
            "AWS S3",
            "Splunk",
            "Salesforce",
            "Slack",
          ].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow hover:border-[#4F46E5] cursor-default"
            >
              <Puzzle className="w-4 h-4 text-[#4F46E5]" />
              <span className="text-sm font-semibold text-gray-700">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: ENTERPRISE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-[#1E1B4B] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

          <div className="max-w-2xl relative z-10 mb-8 md:mb-0">
            <span className="inline-block text-[#818CF8] font-bold tracking-wider uppercase text-sm mb-2">
              Need more power?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Custom Enterprise Solutions
            </h2>
            <p className="text-indigo-200 text-lg">
              For large law enforcement agencies and Fortune 500 companies
              requiring advanced integrations, custom MSAs, and dedicated
              infrastructure.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-auto">
            <button className="w-full md:w-auto px-8 py-4 bg-white text-[#1E1B4B] rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
              <span>Contact our Sales Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 11: FEATURE COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 mb-24 hidden md:block">
        <div className="text-center mb-12">
          <span className="inline-block text-[#4F46E5] font-bold tracking-wider uppercase text-sm mb-2">
            Comparison
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Compare plans in detail
          </h2>
          <p className="text-gray-600">
            Find the perfect blend of features for your team.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 w-1/3 bg-gray-50 border-b border-gray-200"></th>
                  <th className="p-6 w-[22%] bg-gray-50 border-b border-gray-200 text-center font-bold text-lg text-gray-900">
                    Starter
                  </th>
                  <th className="p-6 w-[22%] bg-indigo-50 border-b border-indigo-100 text-center font-bold text-lg text-[#4F46E5] relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#4F46E5]"></div>
                    Professional
                  </th>
                  <th className="p-6 w-[22%] bg-gray-50 border-b border-gray-200 text-center font-bold text-lg text-gray-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonFeatures.map((section, idx) => (
                  <React.Fragment key={idx}>
                    <tr>
                      <td
                        colSpan={4}
                        className="bg-gray-50 py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.items.map((item, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="p-6 text-sm font-medium text-gray-700 flex items-center">
                          {item.name}
                          <HelpCircle className="w-4 h-4 text-gray-400 ml-2 cursor-pointer" />
                        </td>
                        <td className="p-6 text-center text-sm text-gray-600">
                          {typeof item.starter === "boolean" ? (
                            item.starter ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            item.starter
                          )}
                        </td>
                        <td className="p-6 text-center text-sm font-medium text-[#4F46E5] bg-indigo-50/30">
                          {typeof item.pro === "boolean" ? (
                            item.pro ? (
                              <Check className="w-5 h-5 text-[#4F46E5] mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            item.pro
                          )}
                        </td>
                        <td className="p-6 text-center text-sm text-gray-600">
                          {typeof item.enterprise === "boolean" ? (
                            item.enterprise ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            item.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 12: REDESIGNED FAQ */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-10">
          <span className="inline-block text-[#4F46E5] font-bold tracking-wider uppercase text-sm mb-2">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about DEMS+ pricing and features.
          </p>
        </div>
        <div className="max-w-7xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openFaq === index
                  ? "border-[#4F46E5] bg-white shadow-lg shadow-indigo-100/50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 focus:outline-none"
              >
                <span
                  className={`font-semibold transition-colors ${
                    openFaq === index ? "text-[#4F46E5]" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    openFaq === index
                      ? "bg-[#4F46E5] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {openFaq === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 13: FINAL CTA - FULL WIDTH */}
      <section className="w-full bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4F46E5] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">
              Start your free trial today
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to secure your evidence?
          </h2>
          <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of investigators who trust DEMS+ to manage their
            digital evidence and streamline their workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#1E1B4B] rounded-xl font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#4F46E5] text-white border border-white/20 rounded-xl font-bold hover:bg-[#4338CA] transition-all flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Talk to Sales</span>
            </button>
          </div>

          <p className="text-indigo-300 text-sm mt-6 flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};
