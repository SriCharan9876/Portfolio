import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
    {
        role: "API Development Intern",
        company: "Aarti JP IT Company",
        period: "May 2026",
        desc: [
            "Collaborated with a cross-functional team as a part of the backend team to develop the company's full-stack web application by implementing backend APIs for tracking clients' responses status.",
            "Automated role-specific job searching, web scraping and email extraction workflows using Python and Selenium; dynamic resume generation by using LLMs; rate limiting queries, reducing manual effort and improving data collection efficiency by 400%. "
        ],
        type: "Internship"
    },
    {
        role: "Technical Presentor - Anoha Tech Fair",
        company: "Anokha (Amrita University Techfest)",
        period: "Jan 2026 · 1 mo",
        location: "Coimbatore, Tamil Nadu, India · On-site",
        desc: [
            "Circuit Crafter was selected for presentation at Anokha 2026 Tech Fair and featured in the official Anokha newsletter for its innovative application of Generative AI in circuit design."
        ],
        type: "Full-time"
    },
    {
        role: "Core Team Engineer - AIOT & Full Stack Development",
        company: "Intel IoT Club",
        period: "Feb 2025 – Present",
        desc: [
            "Spearheaded the development of a Smart Bicycle Locker System utilizing MERN stack and Google Maps APIs, incorporating secure user authentication and real-time tracking functionalities for 75 active users.",
            "Mentored 50+ students through hands-on workshops on scalable web-based solutions and debugging practices, emphasizing clean architecture and scalable design patterns."
        ],
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
                                        {exp.location && (
                                            <div className="flex items-center gap-1 text-xs text-slate-400 mt-1 font-medium">
                                                <MapPin size={12} />
                                                <span>{exp.location}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium flex-shrink-0">
                                        <Briefcase size={14} />
                                        {exp.period}
                                    </div>
                                </div>
                                <ul className="list-disc pl-5 space-y-2 text-slate-600 leading-relaxed text-sm md:text-base">
                                    {exp.desc.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
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
