export interface Certification {
    id: number;
    title: string;
    issuer: string;
    period: string;
    pdfUrl?: string;
}

export const certifications: Certification[] = [
    {
        id: 1,
        title: "Data Base Management System",
        issuer: "NPTEL",
        period: "January 2026 – March 2026",
        pdfUrl: ""
    },
    {
        id: 2,
        title: "Full Stack Development, Data Structures and Algorithms",
        issuer: "Apna College",
        period: "April 2025 – April 2025",
        pdfUrl: ""
    },
    {
        id: 3,
        title: "Training and Deployment of ML, DL models using Python, AWS",
        issuer: "UDEMY",
        period: "January 2025 – March 2025",
        pdfUrl: ""
    }
];
