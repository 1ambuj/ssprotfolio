import { ScrollProgress } from '../components/site/Effects'
import { Footer } from '../components/site/Footer'
import { Navbar } from '../components/site/Navbar'
import { About } from '../components/sections/About'
import { Achievements } from '../components/sections/Achievements'
import { Books } from '../components/sections/Books'
import { Contact } from '../components/sections/Contact'
import { Experience } from '../components/sections/Experience'
import { Expertise } from '../components/sections/Expertise'
import { Hero } from '../components/sections/Hero'
import { Insights } from '../components/sections/Insights'
import { Marquee } from '../components/sections/Marquee'
import { Testimonials } from '../components/sections/Testimonials'

export function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <Books />
        <Experience />
        <Insights />
        <Testimonials />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
