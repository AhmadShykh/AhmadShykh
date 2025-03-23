"use client"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-primary/10 bg-gradient-to-t from-primary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ahmad Ali. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href="mailto:ahmadshykh2015@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href="https://linkedin.com/in/ahmad-ali-b781a21a5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href="https://github.com/AhmadShykh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

