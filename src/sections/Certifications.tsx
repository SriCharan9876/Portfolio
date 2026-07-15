import { motion } from 'framer-motion';
import { Award, Calendar, FileText, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">
                        Certifications
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Professional credentials and courses completed in Computer Science, Software Engineering, and AI/ML.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all h-full relative overflow-hidden group"
                        >
                            {/* Decorative Top Gradient Border */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-slate-800 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div>
                                {/* Header: Icon & Issuer */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-slate-100 group-hover:bg-slate-900 group-hover:text-white p-4 rounded-2xl text-slate-700 transition-colors">
                                        <Award size={28} />
                                    </div>
                                    <span className="text-xs font-bold px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full tracking-wide uppercase">
                                        {cert.issuer}
                                    </span>
                                </div>

                                {/* Certification Title */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {cert.title}
                                </h3>

                                {/* Period */}
                                <div className="flex items-center gap-2 text-slate-500 text-sm mb-8 font-medium">
                                    <Calendar size={15} />
                                    <span>{cert.period}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            {cert.pdfUrl && (
                                <div className="pt-4 border-t border-slate-100">
                                    <a
                                        href={cert.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-slate-800 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all hover:bg-slate-50"
                                    >
                                        <FileText size={16} />
                                        <span>View PDF Certificate</span>
                                        <ExternalLink size={14} className="opacity-60" />
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
