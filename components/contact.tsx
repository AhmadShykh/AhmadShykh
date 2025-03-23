"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({ name: "", email: "", message: "" })
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 px-4 bg-background relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-tl-full -z-10"></div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block relative">
            Contact Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-primary/5">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Feel free to reach out to me through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div
                  className="flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span>0321-4669811</span>
                </motion.div>

                <motion.div
                  className="flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a
                    href="mailto:ahmadshykh2015@gmail.com"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    ahmadshykh2015@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <a
                    href="https://linkedin.com/in/ahmad-ali-b781a21a5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    linkedin.com/in/ahmad-ali-b781a21a5
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <a
                    href="https://github.com/AhmadShykh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    github.com/AhmadShykh
                  </a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-primary/5">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="border-primary/20 focus:border-primary transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="border-primary/20 focus:border-primary transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      className="border-primary/20 focus:border-primary transition-colors duration-300"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-primary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

