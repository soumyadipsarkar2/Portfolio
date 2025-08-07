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

export default function Portfolio() {
  const skills = {
    "Programming Languages": [
      "Java",
      "Python",
      "C/C++",
      "JavaScript",
      "TypeScript",
      "Go",
      "Rust",
      "React.js",
      "Node.js",
    ],
    "Cloud & Infrastructure": ["AWS", "Google Cloud Platform", "Docker", "Kubernetes", "Git", "Linux/Unix", "Jenkins"],
    "Databases & Queueing": ["SQL", "PostgreSQL", "MongoDB", "Redis", "NoSQL", "Apache Kafka", "RabbitMQ", "Grafana"],
    "Core Concepts": ["Data Structures and Algorithms", "Object-Oriented Design", "System Design"],
  }

  const experience = [
    {
      title: "Software Development Engineer 2",
      company: "Salesforce",
      period: "January 2024 – August 2025",
      achievements: [
        "Redesigned milestone action execution using a cron and Kafka pipeline, enabling real-time processing of 100K+ actions per day with zero lag and significantly improved system responsiveness",
        "Migrated front end modules to a web component framework, improving page load speed by 35% and reducing JavaScript error rates by 65%",
      ],
      techStack: ["Java", "Spring Boot", "MySQL", "Kafka"],
    },
    {
      title: "Software Development Engineer 2",
      company: "Flipkart Health Plus",
      period: "June 2023 – December 2023",
      achievements: [
        "Integrated with Juspay Callback and Juspay Webhooks concurrently with the use of Pessimistic Locks",
        "Developed CDC pipeline for offer service which interacts with AWS SQS for events for every change in order data",
      ],
      techStack: ["Java", "Spring Boot", "MySQL", "GCP", "Redis", "MSSQL", "Kafka"],
    },
    {
      title: "Software Development Engineer",
      company: "ShareChat",
      period: "January 2022 – June 2023",
      achievements: [
        "Designed and built a high-performance Ads Network Service handling 30,000+ requests/second for 600 million daily active users, achieving 3x revenue increase through flow optimization, 50% cost reduction, and 96% latency improvement (250ms to 10ms) while scaling down infrastructure from 600 to 250 pods",
        "Built a Kafka-based async event-processing job in Java, streamlining user behavior analytics and reducing event lag by 80% supporting real-time recommendation systems",
      ],
      techStack: [
        "GoLang",
        "Node.js",
        "Java",
        "MongoDB",
        "Cassandra",
        "Kafka",
        "Prometheus",
        "Grafana",
        "Docker",
        "Kubernetes",
        "GCP",
      ],
    },
    {
      title: "Software Engineer",
      company: "Myntra",
      period: "May 2021 – January 2022",
      achievements: [
        "Developed a web application which includes server code in NodeJs and app code in React",
        "Designed and developed the entire standalone redis to cluster redis with sharding and replication techniques to improve performance while reading and writing data",
      ],
      techStack: ["Java", "NodeJs", "JavaScript", "Scala", "React", "MongoDB", "MySQL", "Redis", "Kafka"],
    },
  ]

  const projects = [
    {
      title: "Collaborative Document Editor",
      description:
        "Built a real-time document editing platform with operational transform for conflict resolution, live cursor tracking, version control, and role-based sharing using Redis caching and Kafka event streaming",
      techStack: ["React.js", "TypeScript", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "WebSocket"],
      github: "https://github.com/soumyadipsarkar2/Collaborative-Document-Editor",
    },
    {
      title: "Multi Agent Legal Case Analysis System",
      description:
        "Developed a legal document analyzer using LangChain Agents and Ollama LLM with automated clause summarization and risk flagging to streamline legal document review processes",
      techStack: ["Python", "LangChain", "LangGraph", "FastAPI", "PostgreSQL", "Docker", "Kubernetes"],
      github: "https://github.com/soumyadipsarkar2/Multi-Agent-Legal-Case-Analysis-System",
    },
  ]

  const achievements = [
    "Received an award in ShareChat for increasing the revenue for network ads",
    "Bagged 1st rank in Google Hash code in our college",
    "Secured 15th rank globally in March Long challenge globally in Codechef",
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-950/95 backdrop-blur-lg z-50 border-b border-stone-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
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
      <section className="pt-28 pb-20 px-6 relative">
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left side - Asymmetrical text layout */}
            <div className="lg:col-span-7">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-amber-400 w-12"></div>
                  <span className="text-sm uppercase tracking-widest text-stone-600 font-medium">Software Engineer</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black text-stone-900 leading-none tracking-tighter">
                  Building
                  <br />
                  <span className="relative">
                    Systems
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400 transform rotate-1"></div>
                  </span>
                  <br />
                  <span className="text-stone-600">That Scale</span>
                </h1>
                
                <div className="pl-16 border-l-4 border-amber-400 max-w-lg">
                  <p className="text-lg text-stone-700 leading-relaxed">
                    4+ years crafting high-performance backend systems that handle millions of users. 
                    From 96% latency improvements to 3x revenue growth—I turn complex problems into elegant solutions.
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-8">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    size="lg"
                    className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 text-base font-medium"
                  >
                    Let's Talk
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-4 text-base font-medium"
                  >
                    <a href="https://drive.google.com/file/d/1mdUwkWNmlo3X114jNeiIRV7kUQlJ3_HP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Stats and info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-stone-200 p-6 rounded-lg">
                  <div className="text-3xl font-black text-amber-500 mb-2">96%</div>
                  <div className="text-sm text-stone-600 uppercase tracking-wide">Latency Reduction</div>
                </div>
                <div className="bg-white border border-stone-200 p-6 rounded-lg">
                  <div className="text-3xl font-black text-stone-900 mb-2">3x</div>
                  <div className="text-sm text-stone-600 uppercase tracking-wide">Revenue Growth</div>
                </div>
                <div className="bg-white border border-stone-200 p-6 rounded-lg">
                  <div className="text-3xl font-black text-stone-900 mb-2">100K+</div>
                  <div className="text-sm text-stone-600 uppercase tracking-wide">Actions/Day</div>
                </div>
                <div className="bg-white border border-stone-200 p-6 rounded-lg">
                  <div className="text-3xl font-black text-stone-900 mb-2">600M</div>
                  <div className="text-sm text-stone-600 uppercase tracking-wide">Daily Users</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-stone-600">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  <span className="text-sm">Texas A&M University</span>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <Mail className="h-4 w-4 text-amber-500" />
                  <a href="mailto:soumyadipsarkar@tamu.edu" className="text-sm hover:text-stone-900 transition-colors">
                    soumyadipsarkar@tamu.edu
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
                  <a href="tel:+919073285435"
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
      <section id="about" className="py-20 px-6 bg-stone-100">
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
                <div className="bg-white border border-stone-200 p-8 rounded-lg">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">🎓</div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-3">Currently</h3>
                      <p className="text-stone-700 leading-relaxed mb-4">
                        Pursuing my Master's in Computer Science at Texas A&M University while diving deep into 
                        advanced system design, machine learning applications, and distributed computing architectures.
                      </p>
                      <div className="text-sm text-stone-500">Aug 2025 - May 2027</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-stone-200 p-8 rounded-lg">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">🚀</div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-3">The Journey</h3>
                      <p className="text-stone-700 leading-relaxed mb-4">
                        4+ years building production systems at Salesforce, Flipkart, ShareChat, and Myntra. 
                        From handling 30,000+ requests/second to reducing latencies by 96%—each challenge 
                        taught me something new about the art of scalable engineering.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div>
                          <div className="text-2xl font-black text-stone-900">600M</div>
                          <div className="text-xs text-stone-500 uppercase tracking-wide">Daily Active Users</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-amber-500">30K+</div>
                          <div className="text-xs text-stone-500 uppercase tracking-wide">Requests/Second</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-stone-200 p-8 rounded-lg">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">💡</div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-3">What Drives Me</h3>
                      <p className="text-stone-700 leading-relaxed">
                        I believe great software is invisible—it just works. Whether it's cutting response times 
                        from 250ms to 10ms or architecting systems that turn infrastructure costs into profit, 
                        I'm obsessed with the intersection of technical excellence and business impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <Zap className="h-6 w-6 text-amber-500" />
              <span className="text-sm uppercase tracking-widest text-stone-600 font-medium">Experience</span>
            </div>
            
            <div className="space-y-16">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== experience.length - 1 && (
                    <div className="absolute left-8 top-20 w-px h-32 bg-stone-200"></div>
                  )}
                  
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
      <section id="projects" className="py-20 px-6 bg-stone-100">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <Code className="h-6 w-6 text-amber-500" />
              <span className="text-sm uppercase tracking-widest text-stone-600 font-medium">Featured Projects</span>
            </div>

            <div className="space-y-16">
              {projects.map((project, index) => (
                <div key={index} className={`grid lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-white border border-stone-200 p-8 rounded-lg">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                          <span className="text-sm text-stone-500 font-medium">Project {index + 1}</span>
                        </div>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      
                      <h3 className="text-2xl font-black text-stone-900 mb-4 leading-tight">{project.title}</h3>
                      <p className="text-stone-700 leading-relaxed mb-6">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-stone-50 border border-stone-200 text-stone-700 px-3 py-1 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <div className="bg-stone-900 p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="space-y-2 text-sm font-mono">
                          <div className="text-green-400">$ git clone {project.title.toLowerCase().replace(/\s+/g, '-')}</div>
                          <div className="text-blue-400">$ npm install</div>
                          <div className="text-amber-400">$ npm run dev</div>
                          <div className="text-stone-400"># Building the future...</div>
                        </div>
                      </div>
                      
                      {/* Decorative code blocks */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-lg transform rotate-12 opacity-20"></div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-stone-900 rounded-lg transform -rotate-12 opacity-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <Tool className="h-6 w-6 text-amber-500" />
              <span className="text-sm uppercase tracking-widest text-stone-600 font-medium">Technical Arsenal</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {Object.entries(skills).map(([category, skillList], index) => {
                const icons = {
                  "Programming Languages": <Code className="h-5 w-5" />,
                  "Cloud & Infrastructure": <Cloud className="h-5 w-5" />,
                  "Databases & Queueing": <Database className="h-5 w-5" />,
                  "Core Concepts": <Tool className="h-5 w-5" />,
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
                      <div className="grid grid-cols-2 gap-4">
                        {skillList.map((skill, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                            <span className="text-stone-700 font-medium text-sm">{skill}</span>
                          </div>
                        ))}
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
      <section id="education" className="py-20 px-6 bg-stone-100">
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
                    <p className="text-lg text-stone-600 font-medium mb-4">Computer Science, NIT Warangal</p>
                    <p className="text-stone-700">Foundation in algorithms, data structures, and software engineering. Active in competitive programming with global rankings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-white">
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
      <section id="contact" className="py-20 px-6 bg-stone-900 text-white">
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
                  href="mailto:soumyadipsarkar@tamu.edu"
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  soumyadipsarkar@tamu.edu
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
                  href="tel:+919073285435"
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  +91 9073285435
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-stone-900 px-8 py-4 text-base font-bold"
              >
                <a href="mailto:soumyadipsarkar@tamu.edu">
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
                <a href="https://drive.google.com/file/d/1mdUwkWNmlo3X114jNeiIRV7kUQlJ3_HP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
                  href="mailto:soumyadipsarkar@tamu.edu"
                  className="flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-medium">soumyadipsarkar@tamu.edu</span>
                </a>
                <a
                  href="tel:+919073285435"
                  className="flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors duration-300"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+91 9073285435</span>
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
