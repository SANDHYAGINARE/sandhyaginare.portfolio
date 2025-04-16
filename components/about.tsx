"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 relative">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl"
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
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto relative z-10"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary rounded-full mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20"
                animate={{
                  background: [
                    "linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.2))",
                    "linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(147, 51, 234, 0.2))",
                    "linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.2))",
                  ],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Animated particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-primary/30"
                  initial={{
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    opacity: 0.3 + Math.random() * 0.4,
                  }}
                  animate={{
                    x: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                    y: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                    opacity: [0.3 + Math.random() * 0.4, 0.1, 0.3 + Math.random() * 0.4],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              ))}

              <motion.div
                className="text-center p-8 backdrop-blur-sm bg-background/30 rounded-lg border border-primary/20 shadow-xl max-w-md z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Who I Am</h3>
                <p className="text-foreground/80">
                  A passionate MERN Stack Developer from Indore, India with a strong focus on creating responsive and
                  user-friendly web applications.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.p
              className="text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I am a dynamic Full Stack Developer with 1 year and 9 months of hands-on experience in building and
              maintaining responsive web applications. My expertise spans across the entire development stack, with a
              particular focus on JavaScript, React, Node.js, and database management.
            </motion.p>
            <motion.p
              className="text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I am passionate about creating scalable and user-centric solutions that not only meet but exceed client
              expectations. My approach to development is characterized by a commitment to clean code, attention to
              detail, and a continuous learning mindset.
            </motion.p>
            <motion.p
              className="text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Currently pursuing my Master of Computer Applications (MCA) at Mathuradevi Institute of Technology &
              Management, I am constantly expanding my knowledge and staying updated with the latest technologies and
              industry trends.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05, x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <h4 className="text-primary font-semibold mb-2">Name:</h4>
                <p className="text-foreground/80">Sandhya Ginare</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <h4 className="text-primary font-semibold mb-2">Email:</h4>
                <p className="text-foreground/80">sandhyaginare@gmail.com</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <h4 className="text-primary font-semibold mb-2">Phone:</h4>
                <p className="text-foreground/80">9981324820</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <h4 className="text-primary font-semibold mb-2">Location:</h4>
                <p className="text-foreground/80">Indore, MP, India</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

