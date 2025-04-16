"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code2Icon, DatabaseIcon, LayoutIcon, ServerIcon, GitBranchIcon } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <LayoutIcon className="h-6 w-6 text-primary" />,
    skills: ["React JS", "Next JS", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    icon: <ServerIcon className="h-6 w-6 text-primary" />,
    skills: ["Node JS", "Express JS", "API Development", "Authentication"],
  },
  {
    title: "Database",
    icon: <DatabaseIcon className="h-6 w-6 text-primary" />,
    skills: ["MongoDB", "Database Design", "Data Modeling"],
  },
  {
    title: "Tools & Others",
    icon: <GitBranchIcon className="h-6 w-6 text-primary" />,
    skills: ["GIT & GitHub", "VS Code", "Postman", "Responsive Design"],
  },
]

const SkillCard = ({ category, index }: { category: any; index: number }) => {
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
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/50 bg-background/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="p-3 rounded-full bg-primary/10 mb-4"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(147, 51, 234, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {category.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill: string, i: number) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 relative">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-40 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl"
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
        className="absolute bottom-20 -right-20 w-60 h-60 rounded-full bg-purple-700/5 blur-3xl"
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
            My <span className="text-primary">Skills</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary rounded-full mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-foreground/70 text-center max-w-2xl">
            I specialize in full-stack development with a focus on modern JavaScript frameworks and technologies. Here
            are the key skills I bring to the table:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="mt-16 p-6 border border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Code2Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Technical Proficiency</h3>
              <p className="text-foreground/70 mb-4">
                My technical expertise is centered around the MERN stack (MongoDB, Express.js, React.js, Node.js), with
                additional proficiency in Next.js, Redux, and Tailwind CSS. I am experienced in building responsive,
                user-friendly web applications with a focus on performance and scalability.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "90%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500"
                    ></motion.div>
                  </div>
                  <span className="text-sm mt-1 text-foreground/70">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "85%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500"
                    ></motion.div>
                  </div>
                  <span className="text-sm mt-1 text-foreground/70">Next.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "80%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500"
                    ></motion.div>
                  </div>
                  <span className="text-sm mt-1 text-foreground/70">Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "75%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 1.1 }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500"
                    ></motion.div>
                  </div>
                  <span className="text-sm mt-1 text-foreground/70">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills

