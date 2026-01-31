import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    to="home"
                    smooth={true}
                    className="text-2xl font-bold flex items-center gap-2 cursor-pointer text-slate-900"
                >
                    <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-sm">SC</div>
                    SRI CHARAN
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            offset={-100}
                            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-800 dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark shadow-lg py-8 flex flex-col items-center space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            offset={-100}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25"
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};
