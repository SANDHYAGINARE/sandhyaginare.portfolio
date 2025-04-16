"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import TypingEffect from "./typing-effect"

const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20 relative overflow-hidden">
      {/* Animated circles */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-purple-700/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text"
            >
              Sandhya Ginare
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold mt-2 text-foreground/80"
            >
              <TypingEffect
                texts={["MERN Stack Developer", "Full Stack Developer", "Web Developer", "React Developer"]}
              />
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-foreground/70 max-w-xl"
          >
            Dynamic Full Stack Developer with experience in building and maintaining responsive web applications.
            Proficient in JavaScript, React, Node.js, and database management, with a strong focus on delivering
            scalable and user-centric solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-primary/50 hover:border-primary hover:scale-105 transition-all duration-300"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex space-x-4 pt-4"
          >
            <Link
              href="http://www.linkedin.com/in/sandhya-g-6987b8135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/SANDHYAGINARE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:sandhyaginare@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <MailIcon className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-lg"
              animate={{
                background: [
                  "linear-gradient(to bottom right, rgba(147, 51, 234, 0.3), rgba(168, 85, 247, 0.3))",
                  "linear-gradient(to bottom right, rgba(168, 85, 247, 0.3), rgba(147, 51, 234, 0.3))",
                  "linear-gradient(to bottom right, rgba(147, 51, 234, 0.3), rgba(168, 85, 247, 0.3))",
                ],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center p-8 backdrop-blur-sm bg-background/30 rounded-lg border border-primary/20 shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Full Stack Developer</h3>
                <p className="text-foreground/80 mb-6">Turning ideas into reality with code and creativity</p>
                <div className="flex justify-center">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Link href="#about">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowDownIcon className="h-5 w-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero

