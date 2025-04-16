"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"

const projects = [
  {
    title: "Sofri Admin Portal",
    period: "September 2024 - Present",
    description:
      "Sofri Banking Service is a Nigerian banking platform offering financial services to its customers. I contributed to the development of the Admin Portal, empowering administrators to efficiently manage various banking operations.",
    contributions: [
      "Customer Management: Implemented features to view customer profiles, deactivate/activate accounts, and send personalized emails.",
      "Loan Management: Designed functionality to enable/disable loans for customers, enhancing credit control.",
      "Data Analytics: Integrated APIs to display customer and transaction data in intuitive dashboards, aiding quick decision-making.",
      "Notification System: Developed a module for admins to send announcements and updates directly to customers.",
    ],
    technologies: ["Next.js", "React", "Redux", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Velox Admin Portal",
    period: "January 2024 - May 2024",
    description:
      "The Velox Payment App provides International Money Transfer, Multi-Currency Wallet, and Bills Payment services. I developed the Admin Portal, a centralized platform to monitor and configure services.",
    contributions: [
      "Service Configuration: Integrated APIs for managing currency settings, payout partner configurations, and jurisdiction-specific rules.",
      "Permission Management: Implemented secure, role-based access controls for administrators.",
      "Enhanced Usability: Delivered features to streamline admin operations and optimize workflows.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
  },
  {
    title: "RevanaTech Training Platform",
    period: "October 2023 - December 2024",
    description:
      "Revana Tech Training is an online learning platform offering courses in cloud technologies, similar to Udemy. I developed the user-facing platform and the Admin Portal.",
    contributions: [
      "Course Management: Built features to browse, purchase, and access courses while enabling progress tracking through an interactive dashboard.",
      "Admin Portal: Designed tools for managing courses, monitoring user activity, sending notifications, and viewing reports on course performance and revenue.",
      "Secure Payment Integration: Ensured seamless purchasing by implementing a secure payment gateway.",
    ],
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
]

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/50 bg-background/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <motion.h3
              className="text-xl font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {project.title}
            </motion.h3>
            <div className="flex items-center text-foreground/70 text-sm">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>{project.period}</span>
            </div>
          </div>

          <p className="text-foreground/80 mb-4">{project.description}</p>

          <div className="mb-4">
            <h4 className="text-primary font-medium mb-2">Key Contributions:</h4>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              {project.contributions.map((contribution: string, i: number) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                >
                  {contribution}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech: string, i: number) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Badge
                  variant="outline"
                  className="bg-primary/10 text-primary border-primary/20 transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 relative">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-40 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 -left-20 w-60 h-60 rounded-full bg-purple-700/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto relative z-10"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary rounded-full mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-foreground/70 text-center max-w-2xl">
            Here are some of the notable projects I've worked on throughout my career. Each project has helped me grow
            as a developer and expand my skill set.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

