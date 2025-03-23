"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award } from "lucide-react"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    "Certificate of Achievement - PhotoMath Freelancing Math Expert",
    "Certificate of Achievement - Winter Game Jam 2022",
    "Certificate Of Completion - Rookie Game Jam 2023",
    "Certificate Of Participation - Game Jam Competition 2024",
    "Certificate Of Participation - Rookie Game Jam 2023",
    "Certificate of Participation - Seminar: Cracking The Code",
    "SOFTEC '23 - Programming Competition",
    "HackerRank SQL (Intermediate) Certificate",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="certifications" className="py-20 px-4 bg-background relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block relative">
            Certifications
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded"></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-primary/5">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Award className="h-6 w-6 mr-2 text-primary" />
                <CardTitle>Professional Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <motion.ul
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {certifications.map((cert, index) => (
                  <motion.li key={index} className="flex items-start group" variants={itemVariants}>
                    <div className="mr-3 mt-1 text-primary flex-shrink-0 w-5 h-5 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute group-hover:opacity-0 transition-opacity duration-300"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <path d="M12 15l-2-2h4l-2 2z"></path>
                        <path d="M10 19l2 2 2-2"></path>
                        <path d="M17.8 14c.8-1.3 1.2-2.7 1.2-4a7 7 0 1 0-14 0c0 1.3.4 2.7 1.2 4"></path>
                      </svg>
                    </div>
                    <span className="group-hover:text-primary transition-colors duration-300">{cert}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

