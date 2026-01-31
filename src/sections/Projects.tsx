import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Mock Data
const projects = [
    {
        id: 1,
        title: "Circuit Crafter",
        desc: "Community-powered circuit generation platform with GenAI.",
        fullDesc: "Built a community-powered circuit-generation platform enabling users to design, publish, and validate circuit models. Enhanced with Gemini-based formula recommendations from circuit image analysis and a RAG-powered chatbot for contextual website assistance using vector embeddings and semantic retrieval.",
        tech: ["MERN", "Web Sockets", "Google GenAI", "Mongoose Vector DB"],
        image: "bg-purple-100",
        links: { live: "#", github: "#" }
    },
    {
        id: 2,
        title: "Smart Cradle Monitoring",
        desc: "AI-driven infant safety solution with real-time anomaly detection.",
        fullDesc: "Developed an infant monitoring system with deep learning–based cradle motion anomaly detection (Edge Impulse), including fall detection. Features real-time monitoring via React web app, PostgreSQL-backed Express API, and automated alerts via N8N (Telegram/Email).",
        tech: ["React.js", "N8N", "PostgreSQL", "Edge Impulse", "Node.js"],
        image: "bg-blue-100",
        links: { live: "#", github: "#" }
    },
    {
        id: 3,
        title: "HawkinsVerse",
        desc: "Stranger Things–inspired immersive AI chat experience.",
        fullDesc: "Built a full-stack web application enabling users to authenticate, explore character profiles, and engage in AI-powered, personality-driven conversations using prompt-engineered Gemini responses with session-based chat storage.",
        tech: ["MERN Stack", "Gemini API", "Google OAuth", "Tailwind CSS"],
        image: "bg-red-100",
        links: { live: "#", github: "#" }
    }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <h2 className="text-4xl font-bold mb-2 text-slate-900">Featured Projects</h2>
                        <p className="text-slate-500">A selection of my recent work.</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer group rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-48 w-full ${project.image} flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500`}>
                                <span className="font-medium">Project Image</span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-500 text-sm line-clamp-2 mb-4">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span key={i} className="text-xs font-semibold px-2 py-1 bg-white border border-slate-200 rounded-md text-slate-600 uppercase tracking-wide">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 px-6">
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                            />
                            <motion.div
                                layoutId={`project-${selectedProject.id}`}
                                className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                    className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-20"
                                >
                                    <X size={20} className="text-slate-900" />
                                </button>

                                <div className={`h-64 w-full ${selectedProject.image} flex items-center justify-center text-slate-400`}>
                                    <span className="font-medium">Project Image Preview</span>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedProject.title}</h3>
                                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">{selectedProject.fullDesc}</p>

                                    <div className="mb-8">
                                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg font-medium">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Button className="flex-1 gap-2" size="lg">
                                            Live Demo <ExternalLink size={18} />
                                        </Button>
                                        <Button variant="outline" className="flex-1 gap-2" size="lg">
                                            Source Code <Github size={18} />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
