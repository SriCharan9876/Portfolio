import { motion } from 'framer-motion';
import { Database, Layout, Server, Cpu, Terminal, Globe } from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend",
        icon: <Layout className="text-primary" size={24} />,
        skills: ["React.js", "Tailwind CSS", "HTML/CSS", "JavaScript", "Bootstrap"]
    },
    {
        title: "Backend & APIs",
        icon: <Server className="text-secondary" size={24} />,
        skills: ["Node.js", "Express.js", "RESTful APIs", "Firebase", "Google OAuth", "JWT"]
    },
    {
        title: "Databases",
        icon: <Database className="text-accent" size={24} />,
        skills: ["MongoDB (Mongoose)", "PostgreSQL", "SQL", "Vector Search"]
    },
    {
        title: "AI / ML & GenAI",
        icon: <Cpu className="text-orange-500" size={24} />,
        skills: ["TensorFlow", "Scikit-learn", "OpenCV", "Gemini SDK", "RAG", "N8N"]
    },
    {
        title: "DevOps & Tools",
        icon: <Terminal className="text-slate-600" size={24} />,
        skills: ["Git/GitHub", "Docker", "Kubernetes", "Redis", "GCP", "CI/CD"]
    },
    {
        title: "Languages",
        icon: <Globe className="text-blue-500" size={24} />,
        skills: ["JavaScript", "Python", "Java", "C"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">Technical Skills</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">A comprehensive toolkit for building modern, scalable digital solutions.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-slate-50 rounded-xl">{category.icon}</div>
                                <h3 className="font-bold text-xl text-slate-900">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-full border border-slate-100"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
