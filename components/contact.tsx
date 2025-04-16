"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react"

const contactInfo = [
  {
    icon: <MailIcon className="h-6 w-6 text-primary" />,
    title: "Email",
    value: "sandhyaginare@gmail.com",
    link: "mailto:sandhyaginare@gmail.com",
  },
  {
    icon: <PhoneIcon className="h-6 w-6 text-primary" />,
    title: "Phone",
    value: "9981324820",
    link: "tel:9981324820",
  },
  {
    icon: <MapPinIcon className="h-6 w-6 text-primary" />,
    title: "Location",
    value: "Indore, MP, India",
    link: "https://maps.google.com/?q=Indore,MP,India",
  },
]

const ContactInfoCard = ({ info, index }: { info: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/50 bg-background/50 backdrop-blur-sm animate-pulse-glow">
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
              {info.icon}
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors hover-underline-animation"
            >
              {info.value}
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 relative">
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
            Contact <span className="text-primary">Me</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary rounded-full mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-foreground/70 text-center max-w-2xl">
            Feel free to reach out to me for any inquiries, project collaborations, or just to say hello. I'm always
            open to new opportunities and connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={info.title} info={info} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
          whileHover={{ scale: 1.02 }}
        >
          <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center">Send Me a Message</h3>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 text-green-500 rounded-lg text-center"
                >
                  Your message has been sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-primary/20 focus-visible:ring-primary transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border-primary/20 focus-visible:ring-primary transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="border-primary/20 focus-visible:ring-primary transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to discuss a project..."
                    required
                    className="min-h-[150px] border-primary/20 focus-visible:ring-primary transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <SendIcon className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact

