"use client"

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  Cloud,
  PenToolIcon as Tool,
  ExternalLink,
  Folder,
  Coffee,
  Zap,
  Target,
  Rocket,
  Brain,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Tech Logo Component
const TechLogo = ({ name, size = "sm" }: { name: string; size?: "sm" | "md" }) => {
  const sizeClass = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  
  const getLogo = (techName: string) => {
    const tech = techName.toLowerCase();
    
    // Programming Languages
    if (tech.includes('java')) return (
      <div className={`${sizeClass} bg-orange-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>J</span>
      </div>
    );
    if (tech.includes('python')) return (
      <div className={`${sizeClass} bg-blue-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>Py</span>
      </div>
    );
    if (tech.includes('javascript')) return (
      <div className={`${sizeClass} bg-yellow-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>JS</span>
      </div>
    );
    if (tech.includes('typescript')) return (
      <div className={`${sizeClass} bg-blue-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>TS</span>
      </div>
    );
    if (tech.includes('go')) return (
      <div className={`${sizeClass} bg-cyan-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>Go</span>
      </div>
    );
    if (tech.includes('rust')) return (
      <div className={`${sizeClass} bg-orange-600 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>R</span>
      </div>
    );
    if (tech.includes('react')) return (
      <div className={`${sizeClass} bg-cyan-400 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>⚛</span>
      </div>
    );
    
    // Databases
    if (tech.includes('mysql')) return (
      <div className={`${sizeClass} bg-orange-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>my</span>
      </div>
    );
    if (tech.includes('postgresql')) return (
      <div className={`${sizeClass} bg-blue-600 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>pg</span>
      </div>
    );
    if (tech.includes('mongodb')) return (
      <div className={`${sizeClass} bg-green-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>M</span>
      </div>
    );
    if (tech.includes('redis')) return (
      <div className={`${sizeClass} bg-red-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>R</span>
      </div>
    );
    if (tech.includes('kafka')) return (
      <div className={`${sizeClass} bg-orange-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>K</span>
      </div>
    );
    
    // Cloud & DevOps
    if (tech.includes('docker')) return (
      <div className={`${sizeClass} bg-blue-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>D</span>
      </div>
    );
    if (tech.includes('kubernetes')) return (
      <div className={`${sizeClass} bg-blue-600 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>k8s</span>
      </div>
    );
    if (tech.includes('aws')) return (
      <div className={`${sizeClass} bg-orange-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>AWS</span>
      </div>
    );
    if (tech.includes('gcp')) return (
      <div className={`${sizeClass} bg-blue-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>GCP</span>
      </div>
    );
    
    // AI/ML
    if (tech.includes('tensorflow')) return (
      <div className={`${sizeClass} bg-orange-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>TF</span>
      </div>
    );
    if (tech.includes('pytorch')) return (
      <div className={`${sizeClass} bg-orange-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>Py</span>
      </div>
    );
    if (tech.includes('langchain')) return (
      <div className={`${sizeClass} bg-blue-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>LC</span>
      </div>
    );
    if (tech.includes('openai')) return (
      <div className={`${sizeClass} bg-green-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>AI</span>
      </div>
    );
    
    // Default
    return (
      <div className={`${sizeClass} bg-gray-500 rounded flex items-center justify-center`}>
        <span className={`text-white font-bold ${textSize}`}>⚙</span>
      </div>
    );
  };
  
  return getLogo(name);
};

export default function Portfolio() {
  const skills = {
    "Programming Languages": [
      "Java",
      "Python",
      "C/C++",
      "Go",
      "Rust",
      "C#",
      "JavaScript",
      "TypeScript",
      "Ruby",
      "SQL",
      "Bash",
      "React",
      "R",
    ],
    "Databases and Messaging": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Cassandra",
      "Redis",
      "Memcached",
      "Kafka",
      "Pinecone",
    ],
    "Cloud and DevOps": [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
      "GCP",
      "AWS",
      "Terraform",
      "Helm",
      "Prometheus",
      "Grafana",
    ],
    "Data Engineering": [
      "Apache Spark",
      "Flink",
      "Hadoop",
      "Airflow",
      "Snowflake",
      "BigQuery",
    ],
    "AI and ML Frameworks": [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "LangChain",
      "MLflow",
      "pandas",
      "NumPy",
    ],
  }

  const experience = [
    {
      title: "Software Development Engineer 2",
      company: "Salesforce",
      period: "January 2024 – August 2025",
      achievements: [
        "Architected a milestone action system with distributed queuing and record-level locking, and built a Cron + Kafka pipeline to process 15M+ daily updates and 100K+ milestone runs with zero lag",
        "Streamlined Kafka pipelines, lowering latency by 40% and ensuring duplicate-free message delivery",
        "Migrated legacy UI into modern web components, enhancing load speed by 35% and cutting errors by 65%",
        "Designed extensible REST APIs with OpenAPI, accelerating onboarding of new features by 25%",
        "Built JUnit test suites with unit, functional and integration tests, improved coverage and reduced defects via Jenkins CI",
      ],
      techStack: ["Java", "Spring Boot", "MySQL", "Kafka", "Redis", "Docker", "Kubernetes", "REST APIs", "OpenAPI", "JUnit", "Git", "Jenkins"],
    },
    {
      title: "Software Development Engineer",
      company: "ShareChat",
      period: "January 2022 – June 2023",
      achievements: [
        "Increased the revenue for backend network ads by three times by optimizing the ads network flows and improving the impression to request ratio of the service",
        "Reduced infrastructure cost by 50%, cut latency from 250 ms to under 10 ms, and optimized resource usage by reducing pod count from 600 to 250",
        "Developed a real-time event processor using Kafka and Java to handle high-throughput publisher integrations",
        "Implemented a distributed Redis-based API rate limiter to guarantee system availability under peak traffic",
        "Set up centralized monitoring and alerting with Prometheus and Grafana, reducing incident resolution time by 60%",
      ],
      techStack: [
        "Go",
        "Java",
        "Python",
        "Node.js",
        "Kafka",
        "Redis",
        "MongoDB",
        "Cassandra",
        "Prometheus",
        "Grafana",
        "Docker",
        "Kubernetes",
        "GCP",
        "OpenAPI",
        "Swagger",
        "Memcached",
      ],
    },
  ]

  const projects = [
    {
      title: "City Scale Traffic Safety Risk Prediction",
      description:
        "Engineered a real-time streaming pipeline replaying millions of traffic frames and 1M+ crash records via Kafka into TimescaleDB, applied TensorFlow and XGBoost on YOLOv8 detections for congestion forecasting and safety risk scoring, and deployed a production-ready dashboard with FastAPI, Streamlit, Mapbox, and Docker on GCP Kubernetes.",
      techStack: ["TensorFlow", "XGBoost", "Computer Vision", "Kafka", "TimescaleDB", "Docker", "FastAPI", "Streamlit", "Mapbox", "GCP", "Kubernetes"],
      github: "https://github.com/soumyadipsarkar2/City-Traffic-Risk-Forecasting",
        image: "/trafficProject.png",
    },
    {
      title: "RAG based Insurance Policy Coverage Checker",
      description:
        "Developed a GenAI RAG application to analyze 50+ page insurance PDFs in under 10s with 90%+ accuracy; deployed with FastAPI and Streamlit, integrated hybrid retrieval via Pinecone, and containerized on Docker, cutting manual policy lookup from hours to seconds and improving support efficiency by 70%.",
      techStack: ["FastAPI", "Streamlit", "LangChain", "OpenAI", "Pinecone", "Docker"],
      github: "https://github.com/soumyadipsarkar2/AI-Medical-Insurance-Coverage-Checker",
      image: "/placeholder.jpg",
    },
    {
      title: "Meeting Setup AI Agent",
      description:
        "Developed an intelligent agent that monitors Gmail for CS/TAMU meeting invitations, extracts event details with GPT-4, sends real-time previews via Twilio WhatsApp for approval/skip, and on approval auto-schedules them in Google Calendar, reducing manual coordination and ensuring no events are missed.",
      techStack: ["FastAPI", "LangChain", "OpenAI", "Google APIs", "Twilio", "SQLite", "Docker"],
      github: "https://github.com/soumyadipsarkar2/Meeting-Setup-Agent",
      image: "/placeholder.jpg",
    },
  ]

  const achievements = [
    "Received the Game Changer Award at ShareChat for tripling ad network revenue",
    "Ranked 1st in Google Hash Code at NIT Warangal",
    "Secured 15th rank globally in March Long challenge globally in CodeChef",
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50 text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-stone-900 via-stone-800 to-amber-900/20 backdrop-blur-lg z-50 border-b border-amber-400/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Coffee className="w-4 h-4 text-stone-900" />
              </div>
              <h1 className="text-xl font-bold text-stone-100 tracking-tight">
                Soumyadip Sarkar
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-stone-300 hover:text-amber-400 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-stone-300 hover:text-amber-400 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-stone-300 hover:text-amber-400 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-stone-300 hover:text-amber-400 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-stone-300 hover:text-amber-400 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-stone-300 hover:text-amber-400 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-300/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left side - Asymmetrical text layout */}
            <div className="lg:col-span-7">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-gradient-to-r from-amber-400 to-orange-500 w-12"></div>
                  <span className="text-sm uppercase tracking-widest text-amber-600 font-medium">Software Engineer</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight tracking-tight mb-6">
                  Soumyadip Sarkar
                </h1>
                
                <div className="mb-8">
                  <p className="text-xl text-amber-600 font-semibold mb-2">
                    Masters in CS @ Texas A&M | Ex-Salesforce
                  </p>
                  <p className="text-lg text-stone-700 leading-relaxed mb-4">
                    Python, Java, Go, C++ | React, Next.js | FastAPI, Spring Boot | PostgreSQL, MongoDB | Redis, Kafka | AWS, GCP | Docker, Kubernetes | PyTorch, LangChain, GPT-4
                  </p>
                  
                  {/* Company Logos */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-stone-500 font-medium">Previous Companies:</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200/50 px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <img 
                          src="/salesforceLogo.png" 
                          alt="Salesforce" 
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-sm font-medium text-stone-700">Salesforce</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200/50 px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <img 
                          src="/sharechatLogo.png" 
                          alt="ShareChat" 
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-sm font-medium text-stone-700">ShareChat</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-8">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get in Touch
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-amber-400 text-amber-600 hover:bg-amber-50 px-8 py-4 text-base font-medium transition-all duration-300"
                  >
                    <a href="https://drive.google.com/file/d/1eTjElQ5srC8ZQKSfLlaYJD7i6rBdmSfl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      View Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Tech Stack and info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></span>
                  Core Technologies
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🐍</span>
                    <span className="text-sm font-medium">Python</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">☕</span>
                    <span className="text-sm font-medium">Java</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🐹</span>
                    <span className="text-sm font-medium">Go</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">⚡</span>
                    <span className="text-sm font-medium">C++</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">⚛️</span>
                    <span className="text-sm font-medium">React</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🟨</span>
                    <span className="text-sm font-medium">Next.js</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">⚡</span>
                    <span className="text-sm font-medium">FastAPI</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🍃</span>
                    <span className="text-sm font-medium">Spring Boot</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🐘</span>
                    <span className="text-sm font-medium">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🍃</span>
                    <span className="text-sm font-medium">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🔴</span>
                    <span className="text-sm font-medium">Redis</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🌊</span>
                    <span className="text-sm font-medium">Kafka</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">☁️</span>
                    <span className="text-sm font-medium">AWS</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">☁️</span>
                    <span className="text-sm font-medium">GCP</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🐳</span>
                    <span className="text-sm font-medium">Docker</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">☸️</span>
                    <span className="text-sm font-medium">Kubernetes</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🔥</span>
                    <span className="text-sm font-medium">PyTorch</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🔗</span>
                    <span className="text-sm font-medium">LangChain</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-colors">
                    <span className="text-lg">🤖</span>
                    <span className="text-sm font-medium">GPT-4</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-stone-600">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  <span className="text-sm">Texas A&M University</span>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <Mail className="h-4 w-4 text-amber-500" />
                  <a href="mailto:soumyadipsarkar35@gmail.com" className="text-sm hover:text-stone-900 transition-colors">
                    soumyadipsarkar35@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <a href="https://linkedin.com/in/soumyadip-sarkar2" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="https://github.com/soumyadipsarkar2" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href="tel:+19793445640"
                     className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <Brain className="h-6 w-6 text-amber-500" />
                  <span className="text-sm uppercase tracking-widest text-stone-600 font-medium">About</span>
                </div>
                <h2 className="text-4xl font-black text-stone-900 mb-8 leading-tight">
                  More Than Just
                  <br />
                  Code
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-stone-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">Problem Solver</h3>
                      <p className="text-stone-600 text-sm">I see complex systems as puzzles waiting to be optimized</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Rocket className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">Scale Enthusiast</h3>
                      <p className="text-stone-600 text-sm">Building for millions of users is my playground</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-5 w-5 text-stone-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">Impact Driven</h3>
                      <p className="text-stone-600 text-sm">Revenue growth and user experience matter equally</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">🎓</div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-3">Currently</h3>
                      <p className="text-stone-700 leading-relaxed mb-4">
                        Pursuing Master's in Computer Science at Texas A&M University, focusing on 
                        distributed systems, AI/ML, and scalable backend engineering.
                      </p>
                      <div className="text-sm text-amber-600 font-medium">Aug 2025 - May 2027</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">💼</div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-3">Experience</h3>
                      <p className="text-stone-700 leading-relaxed mb-4">
                        Software Engineer at Salesforce (Jan 2024 - Aug 2025) and ShareChat (Jan 2022 - Jun 2023), building 
                        high-performance systems that handle millions of users and process 
                        massive data streams in real-time.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full font-medium">Salesforce (2024-2025)</span>
                        <span className="text-xs bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full font-medium">ShareChat (2022-2023)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <Zap className="h-6 w-6 text-amber-500" />
              <span className="text-sm uppercase tracking-widest text-stone-600 font-medium">Experience</span>
            </div>
            
            <div className="space-y-16">
              {experience.map((job, index) => (
                <div key={index} className="relative bg-white/80 backdrop-blur-sm border border-amber-200/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Company & Timeline */}
                    <div className="lg:col-span-4">
                      <div className="sticky top-32">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                          <span className="text-sm text-stone-500 font-medium">{job.period}</span>
                        </div>
                        <h3 className="text-2xl font-black text-stone-900 mb-2">{job.company}</h3>
                        <p className="text-lg text-stone-600 font-medium">{job.title}</p>
                        
                        <div className="mt-6 p-4 bg-stone-50 rounded-lg">
                          <h4 className="text-sm font-bold text-stone-900 mb-3 uppercase tracking-wide">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs bg-white border border-stone-200 text-stone-700 px-2 py-1 rounded font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="lg:col-span-8">
                      <div className="space-y-6">
                        {job.achievements.map((achievement, i) => (
                          <div key={i} className="bg-stone-50 border border-stone-200 p-6 rounded-lg">
                            <div className="flex items-start gap-4">
                              <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-xs font-black text-stone-900">{i + 1}</span>
                              </div>
                              <p className="text-stone-700 leading-relaxed font-medium">{achievement}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-stone-100">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <Code className="h-6 w-6 text-amber-500" />
              <span className="text-sm uppercase tracking-widest text-stone-600 font-medium">Featured Projects</span>
            </div>

            <div className="space-y-16">
              {projects.map((project, index) => (
                <div key={index} className="w-full">
                  <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-end mb-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    
                    <h3 className="text-2xl font-black text-stone-900 mb-3 leading-tight">{project.title}</h3>
                    <p className="text-stone-700 leading-relaxed mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => {
                          const getTechEmoji = (techName: string) => {
                            const tech = techName.toLowerCase();
                            if (tech.includes('tensorflow') || tech.includes('pytorch')) return '🧠';
                            if (tech.includes('python')) return '🐍';
                            if (tech.includes('java')) return '☕';
                            if (tech.includes('javascript') || tech.includes('typescript')) return '🟨';
                            if (tech.includes('react')) return '⚛️';
                            if (tech.includes('docker')) return '🐳';
                            if (tech.includes('kubernetes')) return '☸️';
                            if (tech.includes('kafka')) return '🌊';
                            if (tech.includes('redis')) return '🔴';
                            if (tech.includes('mysql') || tech.includes('postgresql')) return '🗄️';
                            if (tech.includes('mongodb')) return '🍃';
                            if (tech.includes('aws') || tech.includes('gcp')) return '☁️';
                            if (tech.includes('fastapi')) return '⚡';
                            if (tech.includes('streamlit')) return '📊';
                            if (tech.includes('langchain')) return '🔗';
                            if (tech.includes('openai')) return '🤖';
                            if (tech.includes('pinecone')) return '🌲';
                            if (tech.includes('twilio')) return '📱';
                            if (tech.includes('google')) return '🔍';
                            if (tech.includes('sqlite')) return '💾';
                            if (tech.includes('computer vision') || tech.includes('xgboost')) return '👁️';
                            if (tech.includes('timescaledb')) return '⏰';
                            if (tech.includes('mapbox')) return '🗺️';
                            return '⚙️';
                          };

                          return (
                            <span
                              key={i}
                              className="text-xs bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 text-stone-700 px-3 py-1 rounded-full font-medium flex items-center gap-1 hover:from-amber-100 hover:to-orange-100 transition-all duration-300"
                            >
                              <span>{getTechEmoji(tech)}</span>
                              {tech}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <Tool className="h-6 w-6 text-amber-500" />
              <span className="text-sm uppercase tracking-widest text-stone-600 font-medium">Technical Skills</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {Object.entries(skills).map(([category, skillList], index) => {
                const icons = {
                  "Programming Languages": <Code className="h-5 w-5" />,
                  "Databases and Messaging": <Database className="h-5 w-5" />,
                  "Cloud and DevOps": <Cloud className="h-5 w-5" />,
                  "Data Engineering": <Tool className="h-5 w-5" />,
                  "AI and ML Frameworks": <Brain className="h-5 w-5" />,
                }

                return (
                  <div key={index} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-white">
                        {icons[category as keyof typeof icons]}
                      </div>
                      <h3 className="text-xl font-black text-stone-900">{category}</h3>
                    </div>
                    
                    <div className="pl-16">
                      <div className="grid grid-cols-1 gap-3">
                        {skillList.map((skill, i) => {
                          const getSkillEmoji = (skillName: string) => {
                            const skill = skillName.toLowerCase();
                            if (skill.includes('java')) return '☕';
                            if (skill.includes('python')) return '🐍';
                            if (skill.includes('c++') || skill.includes('c/c++')) return '⚡';
                            if (skill.includes('go')) return '🐹';
                            if (skill.includes('rust')) return '🦀';
                            if (skill.includes('c#')) return '🔷';
                            if (skill.includes('javascript')) return '🟨';
                            if (skill.includes('typescript')) return '🔷';
                            if (skill.includes('ruby')) return '💎';
                            if (skill.includes('sql')) return '🗄️';
                            if (skill.includes('bash')) return '💻';
                            if (skill.includes('react')) return '⚛️';
                            if (skill.includes('r')) return '📊';
                            if (skill.includes('mysql')) return '🐬';
                            if (skill.includes('postgresql')) return '🐘';
                            if (skill.includes('mongodb')) return '🍃';
                            if (skill.includes('cassandra')) return '🌊';
                            if (skill.includes('redis')) return '🔴';
                            if (skill.includes('memcached')) return '⚡';
                            if (skill.includes('kafka')) return '🌊';
                            if (skill.includes('pinecone')) return '🌲';
                            if (skill.includes('docker')) return '🐳';
                            if (skill.includes('kubernetes')) return '☸️';
                            if (skill.includes('jenkins')) return '🔧';
                            if (skill.includes('git')) return '📝';
                            if (skill.includes('gcp')) return '☁️';
                            if (skill.includes('aws')) return '☁️';
                            if (skill.includes('terraform')) return '🏗️';
                            if (skill.includes('helm')) return '⛵';
                            if (skill.includes('prometheus')) return '📈';
                            if (skill.includes('grafana')) return '📊';
                            if (skill.includes('spark')) return '⚡';
                            if (skill.includes('flink')) return '🌊';
                            if (skill.includes('hadoop')) return '🐘';
                            if (skill.includes('airflow')) return '🌪️';
                            if (skill.includes('snowflake')) return '❄️';
                            if (skill.includes('bigquery')) return '🔍';
                            if (skill.includes('pytorch')) return '🔥';
                            if (skill.includes('tensorflow')) return '🧠';
                            if (skill.includes('scikit')) return '🔬';
                            if (skill.includes('hugging face')) return '🤗';
                            if (skill.includes('langchain')) return '🔗';
                            if (skill.includes('mlflow')) return '📊';
                            if (skill.includes('pandas')) return '🐼';
                            if (skill.includes('numpy')) return '🔢';
                            return '⚙️';
                          };

                          return (
                            <div key={i} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
                              <span className="text-lg">{getSkillEmoji(skill)}</span>
                              <span className="text-stone-700 font-medium text-sm">{skill}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-stone-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <Award className="h-6 w-6 text-amber-500" />
              <span className="text-sm uppercase tracking-widest text-stone-600 font-medium">Education</span>
            </div>

            <div className="space-y-12">
              <div className="bg-white border border-stone-200 p-8 rounded-lg">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">🎓</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                      <span className="text-sm text-stone-500 font-medium">Aug 2025 – May 2027</span>
                    </div>
                    <h3 className="text-2xl font-black text-stone-900 mb-2">Master of Computer Science</h3>
                    <p className="text-lg text-stone-600 font-medium mb-4">Texas A&M University, College Station</p>
                    <p className="text-stone-700">Focusing on advanced system design, distributed computing, and machine learning applications in large-scale systems.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-stone-200 p-8 rounded-lg">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">🏛️</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-stone-900 rounded-full"></div>
                      <span className="text-sm text-stone-500 font-medium">Jul 2017 – May 2021</span>
                    </div>
                    <h3 className="text-2xl font-black text-stone-900 mb-2">Bachelor of Technology</h3>
                    <p className="text-lg text-stone-600 font-medium mb-4">Computer Science and Engineering, NIT Warangal</p>
                    <p className="text-stone-700">CGPA: 8.37. Foundation in algorithms, data structures, and software engineering. Active in competitive programming with global rankings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <Award className="h-6 w-6 text-amber-500" />
              <span className="text-sm uppercase tracking-widest text-stone-600 font-medium">Recognition</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative group">
                  <div className="bg-stone-50 border border-stone-200 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-black text-stone-900">{index + 1}</span>
                      </div>
                      <div className="h-px bg-stone-200 flex-1"></div>
                    </div>
                    <p className="text-stone-700 font-medium leading-relaxed">{achievement}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-stone-900 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-stone-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px bg-amber-400 w-12"></div>
                <span className="text-sm uppercase tracking-widest text-amber-400 font-medium">Let's Connect</span>
                <div className="h-px bg-amber-400 w-12"></div>
              </div>
              <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                Ready to Build
                <br />
                Something Amazing?
              </h2>
              <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
                Whether it's discussing new opportunities, collaborating on innovative projects, 
                or just connecting with fellow engineers—I'm always excited to explore possibilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-stone-800 border border-stone-700 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-stone-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Email</h3>
                    <p className="text-stone-400">Let's start a conversation</p>
                  </div>
                </div>
                <a 
                  href="mailto:soumyadipsarkar35@gmail.com"
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  soumyadipsarkar35@gmail.com
                </a>
              </div>

              <div className="bg-stone-800 border border-stone-700 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-stone-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Phone</h3>
                    <p className="text-stone-400">Available for calls</p>
                  </div>
                </div>
                <a 
                  href="tel:+19793445640"
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  +1 979 344 5640
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-stone-900 px-8 py-4 text-base font-bold"
              >
                <a href="mailto:soumyadipsarkar35@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-stone-600 text-white hover:bg-stone-800 px-8 py-4 text-base font-medium"
              >
                <a href="https://drive.google.com/file/d/1eTjElQ5srC8ZQKSfLlaYJD7i6rBdmSfl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  View Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-6 mt-12">
              <a href="https://linkedin.com/in/soumyadip-sarkar2" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-stone-900 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/soumyadipsarkar2" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-stone-900 transition-all duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-950 text-stone-300">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                  <Coffee className="w-4 h-4 text-stone-900" />
                </div>
                <span className="text-lg font-bold text-white">Soumyadip Sarkar</span>
              </div>
              
              <div className="flex items-center gap-6">
                <a
                  href="mailto:soumyadipsarkar35@gmail.com"
                  className="flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-medium">soumyadipsarkar35@gmail.com</span>
                </a>
                <a
                  href="tel:+19793445640"
                  className="flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors duration-300"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+1 979 344 5640</span>
                </a>
              </div>
            </div>
            
            <div className="border-t border-stone-800 pt-8 text-center">
              <p className="text-stone-400 font-medium">
                &copy; 2024 Soumyadip Sarkar. Crafted with precision and purpose.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
