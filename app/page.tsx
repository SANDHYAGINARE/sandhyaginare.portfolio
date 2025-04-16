import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <AnimatedBackground />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

