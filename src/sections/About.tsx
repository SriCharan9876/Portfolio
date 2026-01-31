import { motion } from 'framer-motion';
import { GraduationCap, Code2, Users } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">About Me</h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-lg text-slate-600 leading-relaxed"
                    >
                        <p>
                            Full-Stack Developer with hands-on experience in building <span className="font-bold text-slate-900">scalable web applications</span>, real-time services, and cloud-integrated platforms.
                        </p>
                        <p>
                            I have led and contributed to multiple <span className="font-bold text-slate-900">MERN-stack projects</span> involving secure authentication flows, API-driven features, and user-focused design.
                        </p>
                        <p>
                            I enjoy approaching real-world problems with <span className="font-bold text-slate-900">clean architecture</span>, collaboration, and continuous learning, while exploring emerging areas such as <span className="font-bold text-slate-900">AI/ML and GenAI</span> to expand my technical capabilities.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <Code2 className="text-secondary mb-2" size={24} />
                                <h4 className="font-bold text-slate-900">MERN Stack</h4>
                                <p className="text-sm text-slate-500">Core Expertise</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <Users className="text-accent mb-2" size={24} />
                                <h4 className="font-bold text-slate-900">Collaboration</h4>
                                <p className="text-sm text-slate-500">Team Leadership</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-white rounded-full border border-slate-200 text-primary">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Education</h3>
                        </div>

                        <div className="relative border-l-2 border-slate-200 pl-8 ml-3 space-y-8">
                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary"></span>
                                <h4 className="text-lg font-bold text-slate-900">B.Tech in Electronics & Communication</h4>
                                <p className="text-slate-500 mb-1">Amrita Vishwa Vidyapeetham, Coimbatore</p>
                                <p className="text-sm font-medium text-slate-400">2023 - 2027</p>
                                <div className="mt-2 inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary border border-slate-100">
                                    CGPA: 8.55/10
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
