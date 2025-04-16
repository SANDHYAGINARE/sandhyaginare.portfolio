"use client"

import Link from "next/link"
import { GithubIcon, LinkedinIcon, MailIcon, HeartIcon } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text mb-4 inline-block"
            >
              Sandhya Ginare
            </Link>
          </motion.div>

          <div className="flex space-x-6 mb-6">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="http://www.linkedin.com/in/sandhya-g-6987b8135"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="https://github.com/SANDHYAGINARE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="mailto:sandhyaginare@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <MailIcon className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>

          <div className="text-center text-foreground/60 text-sm">
            <p className="mb-2">&copy; {currentYear} Sandhya Ginare. All rights reserved.</p>
            <p className="flex items-center justify-center">
              Made with
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="mx-1"
              >
                <HeartIcon className="h-4 w-4 text-red-500" />
              </motion.div>
              using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

