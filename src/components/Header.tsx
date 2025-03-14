
import React, { useState, useEffect } from 'react';
import { Book, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <Book className="h-6 w-6 text-primary" />
          <span>BookishEnglish</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#levels" className="text-sm font-medium hover:text-primary transition-colors">Course Levels</a>
            <a href="#weekly" className="text-sm font-medium hover:text-primary transition-colors">Weekly Content</a>
            <a href="#who" className="text-sm font-medium hover:text-primary transition-colors">Who It's For</a>
          </nav>
          <button className="px-5 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors">
            Enroll Now
          </button>
        </div>
        
        <button onClick={toggleMenu} className="md:hidden text-foreground">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md">
          <nav className="flex flex-col p-6">
            <a href="#" className="py-3 text-foreground font-medium" onClick={toggleMenu}>Home</a>
            <a href="#levels" className="py-3 text-foreground font-medium" onClick={toggleMenu}>Course Levels</a>
            <a href="#weekly" className="py-3 text-foreground font-medium" onClick={toggleMenu}>Weekly Content</a> 
            <a href="#who" className="py-3 text-foreground font-medium" onClick={toggleMenu}>Who It's For</a>
            <button className="mt-4 px-5 py-2.5 rounded-full bg-primary text-white font-medium text-sm">
              Enroll Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
