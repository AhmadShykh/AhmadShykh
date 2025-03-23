"use client"
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 relative w-32 h-32 mx-auto"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-white">
            AA
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ahmad Ali
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-foreground/80 mb-8 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Game Developer",
              2000,
              "Web Developer",
              2000,
              "AI Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            asChild
            variant="outline"
            size="sm"
            className="group transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="#contact" className="flex items-center gap-2">
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span>0321-4669811</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="group transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="mailto:ahmadshykh2015@gmail.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span>ahmadshykh2015@gmail.com</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="group transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Link
              href="https://linkedin.com/in/ahmad-ali-b781a21a5"
              target="_blank"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span>LinkedIn</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="group transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="https://github.com/AhmadShykh" target="_blank" className="flex items-center gap-2">
              <Github className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span>GitHub</span>
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button asChild className="relative overflow-hidden group">
            <Link href="#projects">
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-primary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="relative overflow-hidden group">
            <Link href="#contact">
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
                Contact Me
              </span>
              <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Link href="#about">
          <Button variant="ghost" size="icon" className="rounded-full animate-bounce">
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}

