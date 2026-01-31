import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

export const Achievements = () => {
    return (
        <section id="achievements" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">Achievements</h2>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {/* Achievement 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 min-w-[300px] max-w-md"
                    >
                        <div className="bg-yellow-50 p-4 rounded-full text-yellow-600 border border-yellow-100 flex-shrink-0">
                            <Trophy size={28} />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold text-xl text-slate-900">2nd Prize</h3>
                            <p className="text-slate-500 font-medium">AI VERSE Hackathon 2026</p>
                            <p className="text-xs text-slate-400 mt-1">Smart Cradle Monitoring System</p>
                        </div>
                    </motion.div>

                    {/* Achievement 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 min-w-[300px] max-w-md"
                    >
                        <div className="bg-blue-50 p-4 rounded-full text-blue-600 border border-blue-100 flex-shrink-0">
                            <Star size={28} />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold text-xl text-slate-900">Project Recognition</h3>
                            <p className="text-slate-500 font-medium">Anokha 2026 Tech Fair</p>
                            <p className="text-xs text-slate-400 mt-1">Circuit Crafter Presentation</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
