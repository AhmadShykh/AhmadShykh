"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: "SolutionInn",
      position: "Software Engineer Intern",
      period: "Jan 2025 – Present",
      responsibilities: [
        "Contributed to the enhancement of their AI Tutor by adding new features.",
        "Worked on web scraping to collect and optimize data for the platform.",
        "Gained hands-on experience in AI-driven solutions and data processing.",
      ],
    },
    {
      company: "RIFT Games",
      position: "Game Development Intern",
      period: "July 2024 – August 2024",
      responsibilities: [
        "Developed professional game design documents.",
        "Worked on a game using industry-standard development practices.",
        "Gained insights into multiplayer development and improved 3D art skills.",
      ],
    },
    {
      company: "MindStorm Studio",
      position: "Game Programming Intern",
      period: "Jan 2022 – August 2022",
      responsibilities: [
        "Took professional lessons from highly qualified developers.",
        "Gained industry exposure and learned game development basics.",
        "Created a small 3D mobile game and a Chess Game using OOP principles.",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 bg-background relative">
      {/* Timeline decoration */}
      <div className="absolute left-1/2 top-32 bottom-32 w-0.5 bg-primary/20 hidden md:block"></div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block relative">
            Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>

              <Card
                className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:w-5/6 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} bg-gradient-to-br from-background to-primary/5`}
              >
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-primary" />
                      <CardTitle>{exp.position}</CardTitle>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start group">
                        <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

