"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C#", "Java", "JavaScript", "Python", "HTML", "CSS"],
      icon: "💻",
    },
    {
      title: "Frameworks",
      skills: ["React", "Node.js", "Tailwind CSS"],
      icon: "🔧",
    },
    {
      title: "Tools",
      skills: ["Docker", "Git", "Linux", "Firebase"],
      icon: "🛠️",
    },
    {
      title: "Domains",
      skills: ["Prompt Engineering", "AI/ML", "Game Dev", "Software Engineering"],
      icon: "🧠",
    },
    {
      title: "Game Engines",
      skills: ["Unity", "Unreal", "Processing"],
      icon: "🎮",
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
    <section id="skills" className="py-20 px-4 bg-primary/5 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block relative">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-background to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-2">{category.icon}</span>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <span className="mr-2 text-primary">
                          <Check className="h-4 w-4" />
                        </span>
                        <span>{skill}</span>
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

