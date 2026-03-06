import React from 'react';
import { TrendingUp, Shield, Zap, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-background/80 backdrop-blur-md border-border py-3" : "bg-transparent border-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="text-black w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter">NEXUS</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#markets">Markets</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#ai">AI Assistant</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:text-brand-primary transition-colors">Log In</button>
          <button className="bg-brand-primary text-black px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
    {children}
  </a>
);
