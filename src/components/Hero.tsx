import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-primary/10 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-wider uppercase mb-6 border border-brand-primary/20">
            Next Generation Trading
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
            Trade the future <br />
            <span className="text-zinc-500">with precision.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
            Experience institutional-grade tools, real-time analytics, and AI-driven insights designed for the modern trader.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all group">
              Start Trading Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-surface border border-border px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all">
              <Play className="w-4 h-4 fill-current" />
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-black/50 aspect-video max-w-5xl mx-auto">
            <div className="h-8 bg-zinc-900 flex items-center px-4 gap-1.5 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <div className="p-4 h-full bg-zinc-950/50 flex flex-col gap-4">
               <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="col-span-2 bg-surface/30 rounded-lg border border-border p-4 animate-pulse" />
                  <div className="bg-surface/30 rounded-lg border border-border p-4 animate-pulse" />
               </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-10 -right-10 hidden lg:block">
            <div className="glass p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
              <div className="text-xs text-zinc-500 uppercase font-bold mb-1">BTC/USD</div>
              <div className="text-xl font-mono text-brand-primary font-bold">$64,231.50</div>
              <div className="text-[10px] text-brand-primary">+4.2%</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
