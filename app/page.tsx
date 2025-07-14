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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Soumyadip Sarkar
            </h1>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 hover:text-purple-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-slate-600 hover:text-purple-600 transition-colors font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 hover:text-purple-600 transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-600 hover:text-purple-600 transition-colors font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-slate-600 hover:text-purple-600 transition-colors font-medium"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-purple-600 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="container mx-auto text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-relaxed">
                Software Engineer
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed font-medium">
                Experienced backend engineer specializing in high-scale distributed systems, with a proven track record
                of optimizing performance and driving revenue growth
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up animation-delay-200">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Button>
                              <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  <a href="https://drive.google.com/uc?export=download&id=1mdUwkWNmlo3X114jNeiIRV7kUQlJ3_HP" target="_blank" rel="noopener noreferrer" download="Soumyadip Sarkar Resume.pdf">
                    Download Resume
                  </a>
                </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up animation-delay-300">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <a href="https://linkedin.com/in/soumyadip-sarkar2" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <a href="https://github.com/soumyadipsarkar2" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-300 text-green-700 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <a href="tel:+919073285435">
                  <Phone className="mr-2 h-4 w-4" />
                  +91 9073285435
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-slate-600 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span className="font-medium">Texas A&M University</span>
              </div>
              <a
                href="mailto:soumyadipsarkar@tamu.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300"
              >
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="font-medium">soumyadipsarkar@tamu.edu</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-purple-100">
              <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                I'm a passionate Software Engineer currently pursuing my Master's in Computer Science at Texas A&M
                University. With over 4 years of industry experience at top-tier companies like Salesforce, Flipkart,
                ShareChat, and Myntra, I specialize in building scalable backend systems that handle millions of users.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                My expertise lies in designing high-performance distributed systems, optimizing system architecture for
                scale, and implementing real-time data processing pipelines. I've successfully reduced system latencies
                by up to 96% and increased revenue streams by 3x through strategic technical optimizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-gradient-to-b from-purple-500 to-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl text-slate-800 font-bold">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 bg-purple-50 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{job.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-4">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-700 flex items-start gap-3 font-medium">
                        <span className="text-purple-500 mt-2 text-lg">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200 hover:from-purple-200 hover:to-blue-200 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50/50 border border-purple-100 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Folder className="h-6 w-6 text-purple-600" />
                      <CardTitle className="text-xl text-slate-800 font-bold">{project.title}</CardTitle>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-purple-200 hover:bg-purple-50 bg-transparent"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4 font-medium leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => {
              const icons = {
                "Programming Languages": <Code className="h-6 w-6" />,
                "Cloud & Infrastructure": <Cloud className="h-6 w-6" />,
                "Databases & Queueing": <Database className="h-6 w-6" />,
                "Core Concepts": <Tool className="h-6 w-6" />,
              }

              const gradients = [
                "from-purple-500 to-pink-500",
                "from-blue-500 to-cyan-500",
                "from-green-500 to-teal-500",
                "from-orange-500 to-red-500",
              ]

              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-purple-100 group hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-800">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${gradients[index]} text-white`}>
                        {icons[category as keyof typeof icons]}
                      </div>
                      <span className="text-sm font-bold">{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-purple-200 text-slate-700 hover:bg-purple-50 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-blue-500 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 font-bold">Master of Computer Science</CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600">
                  Texas A&M University, College Station
                </CardDescription>
                <div className="flex items-center gap-2 text-slate-600 bg-blue-100 px-3 py-1 rounded-full w-fit">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">August 2025 – May 2027</span>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-green-500 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 font-bold">
                  Bachelor of Technology in Computer Science
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-green-600">
                  National Institute of Technology Warangal
                </CardDescription>
                <div className="flex items-center gap-2 text-slate-600 bg-green-100 px-3 py-1 rounded-full w-fit">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">July 2017 – May 2021</span>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 group hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 w-fit mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-slate-700 font-semibold leading-relaxed">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 font-medium">
            I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow
            engineers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="mailto:soumyadipsarkar@tamu.edu">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <a href="https://drive.google.com/uc?export=download&id=1mdUwkWNmlo3X114jNeiIRV7kUQlJ3_HP" target="_blank" rel="noopener noreferrer" download="Soumyadip_Sarkar_Resume.pdf">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <a href="tel:+919073285435">
                <Phone className="mr-2 h-4 w-4" />
                Call Me
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <a href="https://linkedin.com/in/soumyadip-sarkar2" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <a href="https://github.com/soumyadipsarkar2" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <a
              href="mailto:soumyadipsarkar@tamu.edu"
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300"
            >
              <Mail className="h-4 w-4" />
              <span className="font-medium">soumyadipsarkar@tamu.edu</span>
            </a>
            <a
              href="tel:+919073285435"
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+91 9073285435</span>
            </a>
          </div>
          <p className="font-medium">&copy; 2024 Soumyadip Sarkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
