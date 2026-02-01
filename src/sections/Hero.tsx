import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, PenTool, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-scroll';

export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-light pt-28 pb-12"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

                        {/* Availability Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 self-start"
                        >
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-wider">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                Open to Internships
                            </div>
                        </motion.div>

                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                                Hi, I’m <span className="text-accent">Sri Charan</span>
                                <br />
                                A full stack engineer building
                                <br />
                                AI-powered web systems<span className="text-slate-400">.</span>
                            </h1>
                        </motion.div>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 max-w-md leading-relaxed"
                        >
                            I design and develop scalable web applications with clean APIs,
                            real-time features, and applied GenAI — from idea to production.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link to="contact" smooth={true} offset={-50}>
                                <Button size="lg" className="rounded-full px-8 text-lg">
                                    Contact Me
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full">

                        {/* Profile Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200 border border-slate-100 flex flex-col justify-center"
                        >
                            <h3 className="text-xl font-bold text-slate-900">Sri Charan</h3>
                            <p className="text-slate-500 text-sm font-medium">B.Tech – ECE</p>
                            <p className="text-slate-400 text-xs mt-1">Amrita Vishwa Vidyapeetham</p>


                        </motion.div>

                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="row-span-2 relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 group"
                        >
                            <img
                                src="/profile-pic.jpg"
                                alt="Sri Charan"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-xs font-medium opacity-80">Based in</p>
                                <p className="text-sm font-bold">Coimbatore, India</p>
                            </div>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-slate-900 rounded-3xl p-6 shadow-xl flex flex-col justify-between text-white relative overflow-hidden"
                        >
                            <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-secondary/30 rounded-full blur-2xl"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-wider mb-2">
                                    <Star size={12} className="text-yellow-400" fill="currentColor" />
                                    Highlights
                                </div>

                                <span className="text-sm font-semibold text-white">
                                    AI VERSE Hackathon – Award Winner
                                </span>

                                <p className="text-xs text-white/50 mt-2 leading-snug">
                                    Built an AI-driven infant monitoring system with real-time anomaly detection.
                                </p>
                            </div>
                        </motion.div>

                        {/* Tech Stack + Socials */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="col-span-2 bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-5 flex items-center justify-between border border-slate-200"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-slate-700">
                                    <PenTool size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-900 uppercase">
                                        Tech Stack
                                    </span>
                                    <span className="text-xs text-slate-500">
                                        React • Node.js • MongoDB • PostgreSQL • GenAI
                                    </span>
                                </div>
                            </div>

                            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/SriCharan9876"
                                    target="_blank"
                                    className="p-2 bg-white rounded-full text-slate-600 hover:text-slate-900 hover:shadow-md transition-all"
                                >
                                    <Github size={18} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/sri-charan-a-281532286"
                                    target="_blank"
                                    className="p-2 bg-white rounded-full text-slate-600 hover:text-blue-700 hover:shadow-md transition-all"
                                >
                                    <Linkedin size={18} />
                                </a>
                                <a
                                    href="mailto:charan3407@gmail.com"
                                    className="p-2 bg-white rounded-full text-slate-600 hover:text-red-500 hover:shadow-md transition-all"
                                >
                                    <Mail size={18} />
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};
