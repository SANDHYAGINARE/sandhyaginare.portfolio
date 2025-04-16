"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "VKAPS IT Solutions Pvt. Ltd.",
    period: "May 2023 - Present",
    location: "Indore (MP), India",
    description: [
      "Proficient in Next.js for building interactive and SEO-friendly web applications.",
      "Skilled in API integration with Redux-Toolkit to ensure efficient data management in frontend.",
      "Effective team player, adept at collaborating with cross-functional teams to deliver successful projects.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: 'Ezage - "The One" App',
    period: "March 2023 - May 2023",
    location: "Remote",
    description: [
      "Collaborating with other members of a development team, such as project designers, and other developers.",
      "Working with both front-end and back-end technologies, including server-side programming and database management.",
    ],
  },
  {
    title: "Web Developer",
    company: "Ypsilon IT Solution Pvt. Ltd.",
    period: "August 2022 - February 2023",
    location: "Indore (MP), India",
    description: [
      "Developed user interfaces with modern JavaScript frameworks, HTML5 and CSS3.",
      "Redesigned the website to create a more visually appealing, user-friendly experience.",
      "Researched and implemented correct coding practices for SEO, resulting in higher search engine rankings than previously.",
    ],
  },
]

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
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
      {index < experiences.length - 1 && <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary/30"></div>}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="p-3 rounded-full bg-primary/10 inline-flex">
                <BriefcaseIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <h4 className="text-primary font-medium mb-2">{experience.company}</h4>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-foreground/70 text-sm">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{experience.location}</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {experience.description.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-foreground/70 text-center max-w-2xl">
            With nearly 2 years of professional experience, I've worked on various projects that have helped me develop
            a strong skill set in full-stack development.
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

