export interface ProjectLinks {
    live?: string;
    github?: string;
    simulation?: string;
    demo?: string;
}

export interface Project {
    id: number;
    title: string;
    desc: string;
    fullDesc: string;
    tech: string[];
    image: string;
    images: string[];
    domain: string[];
    links: ProjectLinks;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Solar Panel Management System",
        desc: "IoT-based system for monitoring and managing solar panel performance.",
        fullDesc:
            "The Solar Panel Management System is an IoT-based solution designed to monitor and manage the operational performance of solar panels in real time. The system uses temperature and humidity sensors connected to an ESP32 microcontroller to collect environmental parameters that directly affect solar panel efficiency. The collected sensor data is transmitted to the Blynk IoT cloud platform, where users can visualize real-time readings, observe historical performance trends, and monitor overall system health. This system helps in identifying efficiency drops, enables proactive maintenance, and provides remote access for continuous monitoring through a cloud-connected dashboard.",
        tech: ["ESP32", "C++", "DHT22 Sensor", "Blynk IoT"],
        image: "bg-yellow-100",
        images: [],
        domain: ["IOT"],
        links: {
            github: "https://github.com/SriCharan9876/Solar-Panel-Management-System",
            simulation: "https://wokwi.com/projects/421426846140465153"
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
        images: [],
        domain: ["IOT"],
        links: {
            github: "https://github.com/SriCharan9876/Vibe-Lights",
            simulation: "https://wokwi.com/projects/420231754579421185"
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
        images: [],
        domain: ["IOT"],
        links: {
            github: "https://github.com/SriCharan9876/Motion-Activated-Smart-Study-Assistant",
            simulation: "https://wokwi.com/projects/421667198122618881"
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
        images: [],
        domain: ["IOT", "AI", "Full-Stack"],
        links: {
            live: "https://smartcradle.vercel.app",
            github: "https://github.com/SriCharan9876/SmartCradle",
            simulation: "https://wokwi.com/projects/451700128615889921",
            demo: "https://youtu.be/bhWFG4bw1xk"
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
        images: [],
        domain: ["Full-Stack"],
        links: {
            live: "https://wanderlust-vbrf.onrender.com/listings",
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
        images: [],
        domain: ["Gen AI", "AI", "Full-Stack"],
        links: {
            live: "https://circuit-crafter.vercel.app",
            github: "https://github.com/SriCharan9876/CircuitCrafter"
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
        images: [],
        domain: ["AI"],
        links: {
            github: "https://github.com/SriCharan9876/Movie-Recommendation-system"
        }
    },
    {
        id: 8,
        title: "Smart Bicycle Locker System",
        desc: "Secure, real-time bicycle rental and locker management system.",
        fullDesc:
            "The Smart Bicycle Locker System is designed to provide secure bicycle rental and storage with real-time ride tracking. The system includes secure authentication, automated ride management, and integration with mapping services for location tracking. Developed as part of a collaborative team project, it focuses on scalable web architecture, IoT integration, and improved user accessibility for urban mobility use cases.",
        tech: ["ESP32", "Node.js", "Maps API", "IoT Integration"],
        image: "bg-cyan-100",
        images: [],
        domain: ["IOT", "Full-Stack"],
        links: {
            live: "https://bicycle-locker.vercel.app",
            github: "https://github.com/Intel-IoT-Club/bicycle_stand_locker_backend"
        }
    },
    {
        id: 9,
        title: "HawkinsVerse",
        desc: "AI-powered character interaction platform.",
        fullDesc:
            "HawkinsVerse is a web-based application that enables users to engage in personality-driven AI conversations inspired by fictional characters. The system uses prompt-engineered Gemini models to generate contextual responses and maintains conversational continuity through session-based storage. The project explores prompt design, conversational AI behavior, and full-stack integration.",
        tech: ["React", "Node.js", "Gemini API", "OAuth"],
        image: "bg-red-100",
        images: [],
        domain: ["Gen AI", "Full-Stack"],
        links: {
            live: "https://hawkins-verse.vercel.app",
            github: "https://github.com/SriCharan9876/HawkinsVerse"
        }
    },
    {
        id: 11,
        title: "Smart Street AI",
        desc: "AI-powered vision system for intelligent street monitoring.",
        fullDesc:
            "Smart Street AI is a computer vision–based system designed to analyze street activity using deep learning models such as YOLO. The system processes visual input to detect and interpret real-world events and presents insights through a web-based interface. This project demonstrates the integration of computer vision, deep learning inference, and full-stack visualization for smart city monitoring applications.",
        tech: ["Python", "OpenCV", "YOLO", "React", "Node.js"],
        image: "bg-emerald-100",
        images: [],
        domain: ["AI", "Full-Stack"],
        links: {
            live: "#",
            github: "https://github.com/SriCharan9876/SmartStreetAI"
        }
    }
];
