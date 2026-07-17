import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">Get In Touch</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        I'm open to internship opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {/* Email Card */}
                    <motion.a
                        href="mailto:charan3407@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 cursor-pointer"
                    >
                        <div className="p-4 bg-white rounded-full text-slate-900 border border-slate-200 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800 transition-colors duration-300 mb-4 shadow-sm">
                            <Mail size={28} />
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-white transition-colors duration-300 text-lg mb-1">
                            Email
                        </h4>
                        <p className="text-slate-500 group-hover:text-slate-300 transition-colors duration-300 text-sm break-all font-medium">
                            charan3407@gmail.com
                        </p>
                    </motion.a>

                    {/* Phone Card */}
                    <motion.a
                        href="tel:+919014379935"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 cursor-pointer"
                    >
                        <div className="p-4 bg-white rounded-full text-slate-900 border border-slate-200 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800 transition-colors duration-300 mb-4 shadow-sm">
                            <Phone size={28} />
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-white transition-colors duration-300 text-lg mb-1">
                            Phone
                        </h4>
                        <p className="text-slate-500 group-hover:text-slate-300 transition-colors duration-300 text-sm font-medium">
                            +91 9014379935
                        </p>
                    </motion.a>

                    {/* LinkedIn Card */}
                    <motion.a
                        href="https://linkedin.com/in/sri-charan-a-281532286"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 cursor-pointer"
                    >
                        <div className="p-4 bg-white rounded-full text-slate-900 border border-slate-200 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800 transition-colors duration-300 mb-4 shadow-sm">
                            <Linkedin size={28} />
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-white transition-colors duration-300 text-lg mb-1">
                            LinkedIn
                        </h4>
                        <p className="text-slate-500 group-hover:text-slate-300 transition-colors duration-300 text-sm font-medium">
                            Connect with me
                        </p>
                    </motion.a>

                    {/* GitHub Card */}
                    <motion.a
                        href="https://github.com/SriCharan9876"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 cursor-pointer"
                    >
                        <div className="p-4 bg-white rounded-full text-slate-900 border border-slate-200 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800 transition-colors duration-300 mb-4 shadow-sm">
                            <Github size={28} />
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-white transition-colors duration-300 text-lg mb-1">
                            GitHub
                        </h4>
                        <p className="text-slate-500 group-hover:text-slate-300 transition-colors duration-300 text-sm font-medium">
                            Follow my code
                        </p>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};
