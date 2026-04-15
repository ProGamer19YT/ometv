import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Menu } from "@/components/menu"
import { Reservation } from "@/components/reservation"
import { PrivateEvents } from "@/components/private-events"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Menu />
      <Reservation />
      <PrivateEvents />
      <Gallery />
      <Testimonials />
      <Contact />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
