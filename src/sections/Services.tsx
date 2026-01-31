import { motion } from 'framer-motion';
import { Layout, Brain, MessageSquare, ShieldCheck, Activity } from 'lucide-react';

const services = [
    { title: "Full-Stack Web Apps", icon: <Layout size={24} />, desc: "Scalable, responsive web applications using MERN stack." },
    { title: "AI/ML Integrated Systems", icon: <Brain size={24} />, desc: "Smart applications with predictive models and data analysis." },
    { title: "GenAI Chatbots & RAG", icon: <MessageSquare size={24} />, desc: "Context-aware chatbots using Gemini/OpenAI integration." },
    { title: "Secure Backend APIs", icon: <ShieldCheck size={24} />, desc: "Robust RESTful APIs with JWT auth and optimized DB queries." },
    { title: "IoT Dashboards", icon: <Activity size={24} />, desc: "Real-time monitoring interfaces for connected devices." }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">What I Can Build</h2>
                    <p className="text-slate-500">Transforming ideas into robust digital solutions.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all group"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors text-slate-900">
                                {service.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
