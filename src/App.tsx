import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketTable } from './components/MarketTable';
import { TradingChart } from './components/TradingChart';
import { AIAssistant } from './components/AIAssistant';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-primary selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features Bento Grid */}
        <section id="features" className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Engineered for Performance</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Our platform is built on ultra-low latency infrastructure to ensure you never miss a trade.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass p-8 rounded-3xl flex flex-col justify-between group hover:border-brand-primary/50 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6">
                  <Zap className="text-brand-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Ultra-Fast Execution</h3>
                <p className="text-zinc-400 max-w-md">Execute orders in under 5ms with our proprietary matching engine. Direct market access for institutional performance.</p>
              </div>
              <div className="mt-8 flex gap-2">
                <div className="h-1 flex-1 bg-brand-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-primary w-3/4 animate-pulse" />
                </div>
                <div className="h-1 flex-1 bg-zinc-800 rounded-full" />
                <div className="h-1 flex-1 bg-zinc-800 rounded-full" />
              </div>
            </div>
            
            <div className="glass p-8 rounded-3xl hover:border-brand-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Shield className="text-indigo-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Military-Grade Security</h3>
              <p className="text-zinc-400">Multi-sig wallets, cold storage, and end-to-end encryption to keep your assets safe.</p>
            </div>
            
            <div className="glass p-8 rounded-3xl hover:border-brand-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6">
                <Globe className="text-amber-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Global Markets</h3>
              <p className="text-zinc-400">Access stocks, crypto, forex, and commodities from a single unified interface.</p>
            </div>
            
            <div className="md:col-span-2 glass p-8 rounded-3xl flex items-center gap-8 hover:border-brand-primary/50 transition-colors">
              <div className="hidden sm:flex w-24 h-24 rounded-full bg-emerald-500/10 items-center justify-center shrink-0">
                <Cpu className="text-emerald-400 w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Advanced Algorithmic Trading</h3>
                <p className="text-zinc-400">Build, test, and deploy custom trading bots using our robust API and visual strategy builder.</p>
              </div>
            </div>
          </div>
        </section>

        <MarketTable />
        <TradingChart />
        <AIAssistant />

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-brand-primary rounded-[3rem] p-12 md:p-20 text-center text-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to master <br /> the markets?</h2>
            <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto font-medium">Join 500,000+ traders who trust Nexus for their daily trading operations.</p>
            <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Create Free Account
            </button>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-brand-primary rounded flex items-center justify-center">
                <Zap className="text-black w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tighter">NEXUS</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The world's most advanced trading platform for retail and institutional investors.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-500">Platform</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white">Markets</a></li>
              <li><a href="#" className="hover:text-white">Trading Tools</a></li>
              <li><a href="#" className="hover:text-white">API Documentation</a></li>
              <li><a href="#" className="hover:text-white">Fee Schedule</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-500">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press Kit</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-500">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
          <p>© 2026 Nexus Trade Technologies Inc. All rights reserved.</p>
          <p>Trading involves significant risk. Past performance is not indicative of future results.</p>
        </div>
      </footer>
    </div>
  );
}

