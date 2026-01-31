import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="font-bold text-white text-2xl tracking-tight mb-2">SRI CHARAN</p>
                    <p className="text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/SriCharan9876" target="_blank" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/sri-charan-a-281532286" target="_blank" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all"><Linkedin size={20} /></a>
                    <a href="mailto:charan3407@gmail.com" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};
