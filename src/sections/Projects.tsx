import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '../components/ui/Button';

// All Projects (from Notion)
// All Projects (from Notion table – unshortened)
const projects = [
    {
        id: 1,
        title: "Solar Panel Management System",
        desc: "IoT-based system for monitoring and managing solar panel performance.",
        fullDesc:
            "The Solar Panel Management System is an IoT-based solution designed to monitor and manage the operational performance of solar panels in real time. The system uses temperature and humidity sensors connected to an ESP32 microcontroller to collect environmental parameters that directly affect solar panel efficiency. The collected sensor data is transmitted to the Blynk IoT cloud platform, where users can visualize real-time readings, observe historical performance trends, and monitor overall system health. This system helps in identifying efficiency drops, enables proactive maintenance, and provides remote access for continuous monitoring through a cloud-connected dashboard.",
        tech: ["ESP32", "C++", "DHT22 Sensor", "Blynk IoT"],
        image: "bg-yellow-100",
        domain: ["IoT"],
        links: {
            live: "#",
            github: "https://github.com/SriCharan9876/Solar-Panel-Management-System",
            simulation:"https://wokwi.com/projects/421426846140465153"
        }
    },
    {
        id: 2,
        title: "Vibe Lights",
        desc: "Customizable RGB lighting system using microcontrollers.",
        fullDesc:
            "Vibe Lights is a hardware-based RGB lighting system developed using an Arduino microcontroller. The system allows users to dynamically control RGB LED color combinations, brightness levels, and lighting patterns using physical input components such as potentiometers. By mapping analog input values to RGB outputs, the system provides real-time lighting feedback. This project demonstrates embedded C++ programming, analog-to-digital signal processing, and real-time hardware control, showcasing how microcontrollers can be used to create interactive and visually engaging electronic systems.",
        tech: ["Arduino", "C++", "RGB LED", "Potentiometer"],
        image: "bg-pink-100",
        domain: ["IoT"],
        links: {
            live: "#",
            github: "https://github.com/SriCharan9876/Vibe-Lights",
            simulation:"https://wokwi.com/projects/420231754579421185"
        }
    },
    {
        id: 3,
        title: "Smart Study Assistant",
        desc: "Motion-activated IoT assistant for focused study environments.",
        fullDesc:
            "The Smart Study Assistant is an IoT-based system designed to improve focus and productivity in study environments. It uses a PIR motion sensor connected to a Raspberry Pi Pico to detect user presence and movement. Based on motion detection, the system triggers predefined automation logic and sends activity data to the Adafruit IO cloud platform for monitoring and visualization. This project emphasizes sensor integration, cloud-based data streaming, and automation workflows, demonstrating how IoT solutions can be applied to reduce distractions and enhance productivity in everyday scenarios.",
        tech: ["Raspberry Pi Pico", "MicroPython", "PIR Sensor", "Adafruit IO"],
        image: "bg-indigo-100",
        domain: ["IoT"],
        links: {
            live: "#",
            github: "https://github.com/SriCharan9876/Motion-Activated-Smart-Study-Assistant"
        }
    },
    {
        id: 4,
        title: "Smart Cradle Monitoring System",
        desc: "AI-driven infant safety system with real-time anomaly detection.",
        fullDesc:
            "The Smart Cradle Monitoring System is an AI-driven infant safety solution developed to detect unsafe cradle motion and prevent potential accidents. Deep learning models were trained using Edge Impulse to identify abnormal motion patterns from sensor data. Fall detection logic was deployed on an ESP32 microcontroller for real-time inference at the edge. Sensor data is continuously streamed to a web-based dashboard for live monitoring. Automated alerts are generated via Telegram and email using N8N workflows whenever anomalies or unsafe conditions are detected, allowing caregivers to respond immediately. This project integrates AI, IoT, real-time monitoring, and automation into a single safety-critical system.",
        tech: ["ESP32", "Edge Impulse", "Node.js", "PostgreSQL", "N8N"],
        image: "bg-blue-100",
        domain: ["IoT", "AI", "Full-Stack"],
        links: {
            live: "#",
            github: "https://github.com/navaneethgold/smart-cradle-monitor"
        }
    },
    {
        id: 5,
        title: "WanderLust",
        desc: "Vacation rental platform inspired by Airbnb.",
        fullDesc:
            "WanderLust is a full-stack vacation rental web application inspired by Airbnb. The platform allows users to create, view, review, and manage vacation property listings. It supports secure user authentication, image uploads using Cloudinary, and interactive map-based location rendering using the LocationIQ API. Users can browse listings, manage their own properties, and submit reviews through a structured workflow. The project focuses on building end-to-end web application functionality, handling media uploads, managing persistent data, and delivering a user-friendly interface.",
        tech: ["Node.js", "Express", "MongoDB", "Cloudinary", "LocationIQ"],
        image: "bg-orange-100",
        domain: ["Full-Stack"],
        links: {
            live: "#",
            github: "https://github.com/SriCharan9876/Wanderlust"
        }
    },
    {
        id: 6,
        title: "Circuit Crafter",
        desc: "GenAI-powered platform for designing and validating electronic circuits.",
        fullDesc:
            "Circuit Crafter is a community-powered web platform that enables users to design, publish, and validate electronic circuit models. The platform integrates circuit image analysis to generate formula recommendations using Gemini-based generative AI. Additionally, a Retrieval-Augmented Generation (RAG) chatbot was implemented using vector embeddings to provide contextual assistance across the platform. The project demonstrates the integration of GenAI, semantic retrieval, real-time communication, and full-stack web technologies to support collaborative learning and electronics design.",
        tech: ["React", "Node.js", "WebSockets", "MongoDB (Vector Search)", "Gemini API", "RAG"],
        image: "bg-purple-100",
        domain: ["GenAI", "AI", "Full-Stack"],
        links: {
            live: "#",
            github: "https://github.com/SriCharan9876/CircuitCrafter/tree/main"
        }
    },
    {
        id: 7,
        title: "Movie Recommendation System",
        desc: "Personalized movie recommendations using sentiment analysis.",
        fullDesc:
            "This project implements a movie recommendation system that combines sentiment analysis with both user-based and item-based collaborative filtering techniques. User reviews are processed to determine sentiment polarity, which is then incorporated into the recommendation logic. Multiple machine learning models, including LSTM, Naive Bayes, KNN, and Random Forest, were trained and evaluated to improve recommendation accuracy. The system demonstrates practical applications of natural language processing, recommendation algorithms, and model evaluation techniques.",
        tech: ["Python", "LSTM", "Naive Bayes", "KNN", "Random Forest", "Scikit-learn"],
        image: "bg-green-100",
        domain: ["AI"],
        links: {
            live: "#",
            github: "#"
        }
    },
    {
        id: 8,
        title: "Audio Equalizer",
        desc: "Digital audio equalizer using signal processing techniques.",
        fullDesc:
            "The Audio Equalizer project applies digital signal processing techniques to manipulate audio signals across different frequency bands. Filtering techniques are used to enhance, suppress, and balance specific frequencies, allowing fine-grained control over audio output. This project demonstrates frequency-domain analysis, numerical computation, and practical signal processing concepts implemented using Python.",
        tech: ["Python", "Signal Processing", "NumPy"],
        image: "bg-slate-100",
        domain: ["AI"],
        links: {
            live: "#",
            github: "#"
        }
    },
    {
        id: 9,
        title: "UART Based LED Control",
        desc: "Serial communication-based LED control system.",
        fullDesc:
            "This project implements an LED control system using UART-based serial communication. Designed using Verilog, the system enables data transmission between modules to control LED states. The project focuses on digital logic design, UART communication protocols, and hardware-level control concepts using VLSI principles.",
        tech: ["Verilog", "UART", "VLSI"],
        image: "bg-gray-100",
        domain: ["IoT"],
        links: {
            live: "#",
            github: "#"
        }
    },
    {
        id: 10,
        title: "Smart Bicycle Locker System",
        desc: "Secure, real-time bicycle rental and locker management system.",
        fullDesc:
            "The Smart Bicycle Locker System is designed to provide secure bicycle rental and storage with real-time ride tracking. The system includes secure authentication, automated ride management, and integration with mapping services for location tracking. Developed as part of a collaborative team project, it focuses on scalable web architecture, IoT integration, and improved user accessibility for urban mobility use cases.",
        tech: ["ESP32", "Node.js", "Maps API", "IoT Integration"],
        image: "bg-cyan-100",
        domain: ["IoT", "Full-Stack"],
        links: {
            live: "#",
            github: "https://github.com/Intel-IoT-Club/bicycle_stand_locker_backend"
        }
    },
    {
        id: 11,
        title: "Image Denoising and Sharpening",
        desc: "Image enhancement using spatial and frequency domain filters.",
        fullDesc:
            "This project focuses on improving image quality using denoising and sharpening techniques implemented in both spatial and frequency domains. Multiple filtering approaches were applied to remove noise while preserving important features. The project demonstrates hands-on application of image processing concepts using OpenCV.",
        tech: ["Python", "OpenCV", "Image Processing"],
        image: "bg-teal-100",
        domain: ["AI"],
        links: {
            live: "#",
            github: "#"
        }
    },
    {
        id: 12,
        title: "HawkinsVerse",
        desc: "AI-powered character interaction platform.",
        fullDesc:
            "HawkinsVerse is a web-based application that enables users to engage in personality-driven AI conversations inspired by fictional characters. The system uses prompt-engineered Gemini models to generate contextual responses and maintains conversational continuity through session-based storage. The project explores prompt design, conversational AI behavior, and full-stack integration.",
        tech: ["React", "Node.js", "Gemini API", "OAuth"],
        image: "bg-red-100",
        domain: ["GenAI", "Full-Stack"],
        links: {
            live: "#",
            github: "https://github.com/SriCharan9876/HawkinsVerse"
        }
    },
    {
        id: 13,
        title: "Smart Street AI",
        desc: "AI-powered vision system for intelligent street monitoring.",
        fullDesc:
            "Smart Street AI is a computer vision–based system designed to analyze street activity using deep learning models such as YOLO. The system processes visual input to detect and interpret real-world events and presents insights through a web-based interface. This project demonstrates the integration of computer vision, deep learning inference, and full-stack visualization for smart city monitoring applications.",
        tech: ["Python", "OpenCV", "YOLO", "React", "Node.js"],
        image: "bg-emerald-100",
        domain: ["AI", "Full-Stack"],
        links: {
            live: "#",
            github: "https://github.com/SriCharan9876/SmartStreetAI"
        }
    }
];


const filters = ["All", "Full-Stack", "AI", "Gen AI", "IOT"];

export const Projects = () => {
    const [selectedProject, setSelectedProject] =
        useState<typeof projects[0] | null>(null);
    const [activeFilter, setActiveFilter] = useState("All");

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
                                onClick={() => setSelectedProject(project)}
                                className="cursor-pointer group rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
                            >
                                <div className={`h-48 ${project.image} flex items-center justify-center text-slate-400 shrink-0`}>
                                    Project Image
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

                                <div className={`h-64 ${selectedProject.image} flex items-center justify-center text-slate-400`}>
                                    Project Preview
                                </div>

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
