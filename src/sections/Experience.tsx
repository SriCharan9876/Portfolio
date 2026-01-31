import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Core Team Engineer - AIOT & Web Dev",
        company: "Intel IoT Club",
        period: "Feb 2025 – Present",
        desc: "Collaborated with cross-functional teams to build full-stack & AIoT projects. Led teams in hackathons and conducted workshops on AI/ML and IoT. Key contribution: Developed 'Smart Bicycle Locker System' with MERN stack, Google Maps API, and real-time tracking.",
        type: "Club Activity"
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">Experience</h2>
                    <p className="text-slate-500">My professional journey so far.</p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-10 border-l-2 border-slate-200"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white border-4 border-slate-900"></div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                                        <p className="text-primary font-semibold">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                                        <Briefcase size={14} />
                                        {exp.period}
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {exp.desc}
                                </p>
                                <span className="inline-block mt-4 text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                                    {exp.type}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
