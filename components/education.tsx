"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpenIcon, CalendarIcon, MapPinIcon } from "lucide-react"

const educations = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Mathuradevi Institute of Technology & Management",
    period: "August 2023 - Present",
    location: "Indore (MP), India",
    description: "Currently pursuing MCA to deepen my knowledge in advanced computing concepts and technologies.",
  },
  {
    degree: "B.Sc (Computer Science)",
    institution: "Holkar Science College",
    period: "2018 - 2021",
    location: "Indore (MP), India",
    description: "Majored in Computer Science and Electronics with specialization in Mathematics.",
  },
]

const EducationCard = ({ education, index }: { education: any; index: number }) => {
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
      className="mb-8 relative"
    >
      {index < educations.length - 1 && <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary/30"></div>}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="p-3 rounded-full bg-primary/10 inline-flex">
                <BookOpenIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{education.degree}</h3>
              <h4 className="text-primary font-medium mb-2">{education.institution}</h4>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-foreground/70 text-sm">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{education.location}</span>
                </div>
              </div>

              <p className="text-foreground/80">{education.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-foreground/70 text-center max-w-2xl">
            My educational background has provided me with a strong foundation in computer science and continues to fuel
            my passion for learning and growth.
          </p>
        </div>

        <div className="space-y-4">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education

