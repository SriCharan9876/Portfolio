import { motion } from 'framer-motion';
import { GraduationCap, Code2 } from 'lucide-react';

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6 text-lg text-slate-600 leading-relaxed h-full flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-3 bg-white rounded-full border border-slate-200 text-primary">
                                <Code2 size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Profile</h3>
                        </div>

                        <p>
                            <span className="font-semibold text-slate-900">Software Development Engineer</span> specializing in designing and implementing reliable, maintainable <span className="font-semibold text-slate-900">AI-powered full-stack applications</span> that solve real-world challenges across multiple industries and use cases.
                        </p>

                        <p>
                            Strong foundation in core computer science principles, <span className="font-semibold text-slate-900">Agile software development practices</span>, and <span className="font-semibold text-slate-900">cloud-native application development</span>, with a focus on <span className="font-semibold text-slate-900">scalable architectures</span>, clean code, and user-centered software design.
                        </p>
                    </motion.div>

                    {/* Education */}
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
                                <h4 className="text-lg font-bold text-slate-900">
                                    B.Tech in Electronics & Communication Engineering
                                </h4>
                                <p className="text-slate-500 mb-1">
                                    Amrita Vishwa Vidyapeetham, Coimbatore
                                </p>
                                <p className="text-sm font-medium text-slate-400">
                                    2023 – 2027
                                </p>
                                <div className="mt-2 inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary border border-slate-100">
                                    CGPA: 8.55 / 10
                                </div>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary"></span>
                                <h4 className="text-lg font-bold text-slate-900">
                                    Higher secondary education - BIE AP, MPC
                                </h4>
                                <p className="text-slate-500 mb-1">
                                    Bhashyam Junior College, Guntur
                                </p>
                                <p className="text-sm font-medium text-slate-400">
                                    2021 – 2023
                                </p>
                                <div className="mt-2 inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary border border-slate-100">
                                    Grade: 946 / 1000
                                </div>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary"></span>
                                <h4 className="text-lg font-bold text-slate-900">
                                    Primary education - SSC AP, MPC
                                </h4>
                                <p className="text-slate-500 mb-1">
                                    Bhashyam high school
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
