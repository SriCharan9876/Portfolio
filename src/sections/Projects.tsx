import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { projects, Project } from '../data/projects';

const filters = ["All", "Full-Stack", "AI", "Gen AI", "IOT"];

export const Projects = () => {
    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState("All");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const filteredProjects = projects.filter(project =>
        activeFilter === "All" ? true : project.domain.includes(activeFilter)
    );

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">
                        Projects
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        A collection of projects spanning Full-Stack Development, AI, Generative AI, and IoT.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-slate-900 text-white shadow-lg scale-105'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => {
                                    setSelectedProject(project);
                                    setCurrentImageIndex(0);
                                }}
                                className="cursor-pointer group rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
                            >
                                <div className={`h-48 ${project.image} relative overflow-hidden flex items-center justify-center text-slate-400 shrink-0`}>
                                    {project.images && project.images.length > 0 ? (
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <span>Project Image</span>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-semibold px-2 py-1 bg-white border border-slate-200 rounded-md text-slate-600 uppercase tracking-wide"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                            />
                            <motion.div
                                layoutId={`project-${selectedProject.id}`}
                                className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-white/70 rounded-full hover:bg-white transition-colors z-20"
                                >
                                    <X size={20} />
                                </button>

                                {selectedProject.images && selectedProject.images.length > 0 ? (
                                    <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-900 group/carousel">
                                        <img
                                            src={selectedProject.images[currentImageIndex]}
                                            alt={`${selectedProject.title} preview ${currentImageIndex + 1}`}
                                            className="w-full h-full object-cover select-none"
                                        />
                                        {selectedProject.images.length > 1 && (
                                            <>
                                                {/* Left Arrow Button */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex((prev) => 
                                                            prev === 0 ? selectedProject.images.length - 1 : prev - 1
                                                        );
                                                    }}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 text-white rounded-full transition-colors z-10"
                                                >
                                                    <ChevronLeft size={24} />
                                                </button>
                                                {/* Right Arrow Button */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex((prev) => 
                                                            prev === selectedProject.images.length - 1 ? 0 : prev + 1
                                                        );
                                                    }}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 text-white rounded-full transition-colors z-10"
                                                >
                                                    <ChevronRight size={24} />
                                                </button>
                                                {/* Dots indicator at the bottom */}
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                                    {selectedProject.images.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setCurrentImageIndex(index);
                                                            }}
                                                            className={`w-2 h-2 rounded-full transition-all ${
                                                                currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ) : (
                                    <div className={`h-64 ${selectedProject.image} flex items-center justify-center text-slate-400`}>
                                        Project Preview
                                    </div>
                                )}

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4 gap-4">
                                        <h3 className="text-3xl font-bold text-slate-900">
                                            {selectedProject.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                        {selectedProject.fullDesc}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-sm font-bold uppercase mb-3 text-slate-400">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700 font-medium border border-slate-200"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {(selectedProject.links.live !== '#' || selectedProject.links.github !== '#') && (
                                        <div className="flex gap-4 pt-4 border-t border-slate-100">
                                            {selectedProject.links.live !== '#' && (
                                                <a
                                                    href={selectedProject.links.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1"
                                                >
                                                    <Button className="w-full gap-2" size="lg">
                                                        Live Demo <ExternalLink size={18} />
                                                    </Button>
                                                </a>
                                            )}
                                            {selectedProject.links.github !== '#' && (
                                                <a
                                                    href={selectedProject.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1"
                                                >
                                                    <Button variant="outline" className="w-full gap-2" size="lg">
                                                        Source Code <Github size={18} />
                                                    </Button>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
