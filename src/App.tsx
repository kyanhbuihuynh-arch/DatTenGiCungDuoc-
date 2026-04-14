/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Shield, 
  Users, 
  ChevronRight,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Layers className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">Nexus</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
              <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
              <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Log in</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.50),white)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-6 border border-indigo-100">
                <Zap className="w-3 h-3" />
                New: Version 2.0 is live
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Connect your team <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  without the friction.
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
                Nexus is the unified platform for modern teams to build, collaborate, 
                and scale. Everything you need, all in one place.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 active:scale-95 flex items-center justify-center gap-2">
                  Start for free
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-full font-semibold border border-slate-200 hover:bg-slate-50 transition-all active:scale-95">
                  Book a demo
                </button>
              </div>
            </motion.div>

            {/* Mock UI Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-20 relative"
            >
              <div className="relative mx-auto max-w-[1000px] rounded-2xl border border-slate-200 bg-white/50 p-2 backdrop-blur shadow-2xl">
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden aspect-[16/10] flex flex-col">
                  <div className="h-10 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    </div>
                  </div>
                  <div className="flex-grow flex p-6 gap-6">
                    <div className="w-48 bg-slate-50 rounded-lg p-4 space-y-3">
                      <div className="h-3 w-3/4 bg-slate-200 rounded" />
                      <div className="h-3 w-1/2 bg-slate-200 rounded" />
                      <div className="h-3 w-2/3 bg-slate-200 rounded" />
                    </div>
                    <div className="flex-grow grid grid-cols-2 gap-6">
                      <div className="bg-indigo-50/50 rounded-xl border border-indigo-100 p-6 flex flex-col justify-between">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg" />
                        <div className="space-y-2">
                          <div className="h-4 w-1/2 bg-indigo-200 rounded" />
                          <div className="h-3 w-3/4 bg-indigo-100 rounded" />
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 flex flex-col justify-between">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg" />
                        <div className="space-y-2">
                          <div className="h-4 w-1/2 bg-slate-200 rounded" />
                          <div className="h-3 w-3/4 bg-slate-100 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-400/10 blur-3xl rounded-full -z-10" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-400/10 blur-3xl rounded-full -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for high-performance teams</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Nexus provides the tools you need to stay focused, organized, and ahead of the curve.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Zap className="w-6 h-6 text-indigo-600" />,
                  title: "Lightning Fast",
                  description: "Optimized for speed. No more waiting for dashboards to load or messages to sync."
                },
                {
                  icon: <Shield className="w-6 h-6 text-indigo-600" />,
                  title: "Secure by Design",
                  description: "Enterprise-grade security comes standard. Your data is encrypted and always yours."
                },
                {
                  icon: <Users className="w-6 h-6 text-indigo-600" />,
                  title: "Team Focused",
                  description: "Built with collaboration at its core. Share, comment, and build together in real-time."
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Trusted by 10,000+ companies worldwide</h2>
                <div className="space-y-4">
                  {[
                    "99.9% Uptime guarantee",
                    "24/7 Priority support",
                    "Custom onboarding for teams"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
                  <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Satisfaction</div>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">2.4x</div>
                  <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
              
              <h2 className="text-4xl font-bold mb-6">Ready to transform your workflow?</h2>
              <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
                Join thousands of teams who are already using Nexus to build the future.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all active:scale-95">
                  Get Started for Free
                </button>
                <button className="w-full sm:w-auto bg-indigo-500 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-400 transition-all active:scale-95 flex items-center justify-center gap-2">
                  Contact Sales
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Layers className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">Nexus</span>
              </div>
              <p className="text-slate-500 max-w-xs mb-6">
                The unified platform for modern teams to build, collaborate, and scale.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Nexus Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-indigo-600 transition-colors">Status</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
