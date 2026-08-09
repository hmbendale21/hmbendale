// Portfolio Data for Himanshu Bendale

export const PERSONAL_INFO = {
  name: "Himanshu Bendale",
  handle: "hmbendale21",
  title: "Cybersecurity Researcher | AI & Data Science Engineer",
  taglines: [
    "Cybersecurity Researcher",
    "Security & Threat Analyst",
    "AI & Computer Vision Developer",
    "Full-Stack Web Developer"
  ],
  bio: "Passionate cybersecurity researcher and software engineer crafting automated threat detection suites, secure systems architecture, and intelligent machine learning vision models.",
  location: "India",
  availability: "Available for Roles & Collaborations",
  email: "himanshubendale88@gmail.com",
  github: "https://github.com/hmbendale21",
  linkedin: "https://www.linkedin.com/in/himanshu-bendale-206973283"
};

export const FOCUS_AREAS = [
  {
    id: 1,
    num: "01",
    title: "Cybersecurity & Systems Hardening",
    description: "Network security analysis, endpoint threat detection, security audit scripts, packet evaluation, and Linux server hardening.",
    icon: "NetworkSecurity",
    tags: ["Linux", "Wireshark", "Threat Audit", "Hardening", "SecureSphere"],
    featured: true
  },
  {
    id: 2,
    num: "02",
    title: "Machine Learning & Computer Vision",
    description: "Developing custom object detection models (YOLO / OpenCV) for real-world automated tracking and vision inference.",
    icon: "Python",
    tags: ["YOLOv8", "OpenCV", "Object Detection", "Neural Networks"],
    featured: false
  },
  {
    id: 3,
    num: "03",
    title: "Python Automation & Analytics",
    description: "Building automated ETL data pipelines, statistical exploratory notebooks, and modular utility scripts.",
    icon: "Pandas",
    tags: ["Pandas", "NumPy", "Data Cleaning", "Automation"],
    featured: false
  },
  {
    id: 4,
    num: "04",
    title: "Modern Web Engineering",
    description: "Designing responsive, high-performance web applications using React, JavaScript, and CSS design systems.",
    icon: "React",
    tags: ["React.js", "JavaScript ES6+", "Framer Motion", "UI Systems"],
    featured: false
  }
];

export const STATS = [
  { label: "Public Repositories", value: "14+", icon: "Git" },
  { label: "Completed Security Labs", value: "45+", icon: "SecurityResearch" },
  { label: "Python & Data Scripts", value: "500+", icon: "Python" },
  { label: "Machine Learning Models", value: "10+", icon: "OpenCV" }
];

export const SKILLS = [
  { name: "HTML", logo: "HTML5" },
  { name: "CSS", logo: "CSS3" },
  { name: "SASS", logo: "Sass" },
  { name: "JAVASCRIPT", logo: "JavaScript" },
  { name: "REACT JS", logo: "React" },
  { name: "GITHUB", logo: "GitHub" },
  { name: "NODE JS", logo: "NodeJS" },
  { name: "FIREBASE", logo: "Firebase" },
  { name: "MONGODB", logo: "MongoDB" },
  { name: "DOCKERS", logo: "Docker" },
  { name: "PYTHON", logo: "Python" },
  { name: "OPENCV", logo: "OpenCV" }
];

export const PROJECTS = [
  {
    id: "securesphere",
    title: "SecureSphere Threat Detection Suite",
    category: "security",
    featured: true,
    description: "Automated cybersecurity threat detection suite focusing on real-time endpoint system audit logs, threat mitigation algorithms, and network security hardening.",
    tech: ["Python", "Linux Hardening", "Threat Analysis", "Network Security"],
    github: "https://github.com/hmbendale21/SecureSphere",
    badge: "Cyber Security",
    highlights: [
      "Real-time log evaluation routines",
      "Endpoint rule verification algorithms",
      "System security audit scripts",
      "Modular dashboard architecture"
    ]
  },
  {
    id: "leopard-detection",
    title: "Leopard Wildlife Detection AI Model",
    category: "ai-ml",
    featured: true,
    description: "Deep learning computer vision system designed for real-time wildlife tracking and object detection using custom-trained bounding box algorithms.",
    tech: ["Python", "OpenCV", "YOLO", "NumPy", "Deep Learning"],
    github: "https://github.com/hmbendale21/leopard-detection-model",
    badge: "Computer Vision",
    highlights: [
      "Custom trained object detection bounding box model",
      "Optimized inference pipeline for real-time video feed streams",
      "Preprocessing and dataset augmentation with OpenCV",
      "Precision & Recall evaluation metrics"
    ]
  },
  {
    id: "css-web-craft",
    title: "Advanced CSS & Modern Web UI Suite",
    category: "programming",
    featured: true,
    description: "Collection of clean, responsive user interface components, flexbox/grid layout systems, glassmorphism design systems, and smooth transition animations.",
    tech: ["HTML5", "Modern CSS3", "Flexbox/Grid", "Animations"],
    github: "https://github.com/hmbendale21/CSS",
    badge: "Web Design",
    highlights: [
      "Responsive layout engineering without heavy dependencies",
      "Clean micro-interactions and smooth transitions",
      "Accessible dark/light color themes"
    ]
  }
];
