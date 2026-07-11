import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Faculty } from "@/components/faculty"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyChooseUs />
        <Faculty />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
