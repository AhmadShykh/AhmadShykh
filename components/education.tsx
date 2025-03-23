"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      institution: "FAST NUCES Lahore",
      degree: "Bachelor of Science in Computer Science",
      grade: "CGPA: 3.6",
    },
    {
      institution: "Unique Group Of Colleges",
      degree: "Intermediate in Computer Science",
      grade: "1080/1100",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="education" className="py-20 px-4 bg-primary/5 relative">
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
            Education
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-background to-primary/5">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <GraduationCap className="h-6 w-6 mr-2 text-primary" />
                    <CardTitle>{edu.institution}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{edu.degree}</p>
                  <div className="flex items-center mt-2 text-primary">
                    <Award className="h-4 w-4 mr-1" />
                    <p className="font-semibold">{edu.grade}</p>
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

