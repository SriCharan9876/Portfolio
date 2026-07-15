import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

export const Achievements = () => {
    return (
        <section id="achievements" className="py-32 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">Achievements</h2>
                    <p className="text-slate-500 text-lg">Milestones and recognitions from my journey.</p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
                    {/* Achievement 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex items-center gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex-1 min-w-[320px] max-w-xl text-left"
                    >
                        <div className="bg-yellow-50 p-5 rounded-2xl text-yellow-600 border border-yellow-100 flex-shrink-0">
                            <Trophy size={36} />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-slate-900">2nd Prize</h3>
                            <p className="text-slate-600 font-semibold text-lg mt-1">AI VERSE Hackathon 2026</p>
                            <p className="text-sm text-slate-500 mt-1.5">Smart Cradle Monitoring System</p>
                        </div>
                    </motion.div>

                    {/* Achievement 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="flex items-center gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex-1 min-w-[320px] max-w-xl text-left"
                    >
                        <div className="bg-blue-50 p-5 rounded-2xl text-blue-600 border border-blue-100 flex-shrink-0">
                            <Star size={36} />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-slate-900">Project Recognition</h3>
                            <p className="text-slate-600 font-semibold text-lg mt-1">Anokha 2026 Tech Fair</p>
                            <p className="text-sm text-slate-500 mt-1.5">Circuit Crafter Presentation</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
