import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';

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
                    <p className="text-slate-500 text-lg">Let's collaborate on your next project.</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-slate-900">Contact Information</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            I'm open to internship opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-slate-50 rounded-full text-slate-900 border border-slate-200"><Mail size={24} /></div>
                                <span className="text-slate-600 text-lg">charan3407@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-slate-50 rounded-full text-slate-900 border border-slate-200"><Phone size={24} /></div>
                                <span className="text-slate-600 text-lg">+91 9014379935</span>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-slate-50 rounded-full text-slate-900 border border-slate-200"><Linkedin size={24} /></div>
                                <a href="https://linkedin.com/in/sri-charan-a-281532286" target="_blank" rel="noopener noreferrer" className="text-slate-600 text-lg hover:text-blue-600 transition-colors">linkedin.com/in/sri-charan...</a>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-slate-50 rounded-full text-slate-900 border border-slate-200"><Github size={24} /></div>
                                <a href="https://github.com/SriCharan9876" target="_blank" rel="noopener noreferrer" className="text-slate-600 text-lg hover:text-slate-900 transition-colors">github.com/SriCharan9876</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400" placeholder="Project Inquiry" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <Button className="w-full flex items-center justify-center gap-2 py-4 text-lg">
                                Send Message <Send size={18} />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
