
import React, { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

const NavLink: React.FC<{ page: string; onNavigate: (page: string) => void; children: React.ReactNode }> = ({ page, onNavigate, children }) => (
  <button onClick={() => onNavigate(page)} className="text-white hover:text-blue-200 transition-colors duration-300 py-2 text-lg">
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-slate-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <i className="fas fa-briefcase-medical text-white text-3xl"></i>
            <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => onNavigate('home')}>MedRep أكاديمي</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <NavLink page="home" onNavigate={handleNav}>الرئيسية</NavLink>
          <NavLink page="courses" onNavigate={handleNav}>الكورسات</NavLink>
          <NavLink page="about" onNavigate={handleNav}>من نحن</NavLink>
          <NavLink page="contact" onNavigate={handleNav}>تواصل معنا</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-700">
          <nav className="flex flex-col items-center px-4 pt-2 pb-4 space-y-2">
            <NavLink page="home" onNavigate={handleNav}>الرئيسية</NavLink>
            <NavLink page="courses" onNavigate={handleNav}>الكورسات</NavLink>
            <NavLink page="about" onNavigate={handleNav}>من نحن</NavLink>
            <NavLink page="contact" onNavigate={handleNav}>تواصل معنا</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
