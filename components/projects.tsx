"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, CheckCircle2 } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "AI ChatBot",
      description: [
        "Developed an AI-powered chatbot for a web application using Artificial Neural Networks (ANN).",
        "Designed a React-based frontend and integrated it with a Flask backend.",
        "Implemented natural language processing techniques to improve the accuracy of chatbot responses.",
      ],
      tags: ["React", "Flask", "ANN", "NLP"],
      url: "https://ai-chatbot-demo.vercel.app", // Example URL
    },
    {
      title: "Tech For You (FYP)",
      description: [
        "Created a vulnerability detection web application using the MERN stack.",
        "Developed back-end functionality using Node.js and Express.js.",
        "Implemented a Node.js server for website scanning using Linux Docker containers.",
      ],
      tags: ["MERN", "Node.js", "Express.js", "Docker", "Security"],
      url: "https://tech-for-you.vercel.app", // Example URL
    },
    {
      title: "BaeBbq Website",
      description: [
        "Developed a React and Tailwind CSS-based website for a meat business startup.",
        "Gained experience in professional game design documentation and industry practices.",
      ],
      tags: ["React", "Tailwind CSS", "Web Development"],
      url: "https://baebq.com", // Example URL
    },
    {
      title: "Cheesecake Website",
      description: [
        "Created a cake-selling e-commerce platform using Node.js, React, and Tailwind CSS.",
        "Managed both front-end and back-end development.",
      ],
      tags: ["Node.js", "React", "Tailwind CSS", "E-commerce"],
    },
    {
      title: "Studocu Clone (SMD Course Project)",
      description: [
        "Developed a mobile application clone of Studocu.",
        "Created an XML front-end and a Java back-end.",
      ],
      tags: ["Java", "XML", "Mobile Development"],
    },
    {
      title: "Spot the Difference Game",
      description: [
        "Developed a spot-the-difference game for a client using C# parallel programming.",
        "Utilized OpenCV for image difference detection.",
      ],
      tags: ["C#", "OpenCV", "Parallel Programming"],
    },
    {
      title: "Escape",
      description: [
        "Created a survival game using the Processing Game Engine in Java.",
        "Designed game mechanics where players can evade the chasing zombies.",
      ],
      tags: ["Java", "Processing", "Game Development"],
    },
    {
      title: "Trampoline Time",
      description: [
        "Developed a Mario mini-game using Line Renderer.",
        "Implemented trampoline mechanics for player movement.",
      ],
      tags: ["Unity", "C#", "Game Development"],
    },
    {
      title: "Guide The Bullet Game",
      description: [
        "Participated in MindStorm Champion Game Jam 2024.",
        "Designed a shooter game with scalable architecture for future modifications.",
      ],
      tags: ["Game Jam", "Game Development"],
    },
    {
      title: "Chess Game",
      description: [
        "Developed a desktop chess game using WinForms and C#.",
        "Applied Object-Oriented Programming principles to game logic.",
      ],
      tags: ["C#", "WinForms", "OOP"],
    },
    {
      title: "Space Shooter Game",
      description: [
        "Created a Unity 3D space shooter game using timeline animation.",
        "Designed interactive enemy AI and shooting mechanics.",
      ],
      tags: ["Unity", "C#", "3D", "Animation"],
    },
    {
      title: "Rocket Game",
      description: [
        "Developed a 3D game with a 2D camera perspective.",
        "Created levels where players navigate a rocket through obstacles to reach the goal.",
      ],
      tags: ["Unity", "C#", "3D", "Game Development"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-primary/5 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block relative">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-background to-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 mb-4">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start group">
                        <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full group"
                      >
                        <span>View Project</span>
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

