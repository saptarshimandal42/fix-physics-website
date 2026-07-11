import Image from "next/image"
import { CheckCircle2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const WHATSAPP_DEMO_URL =
  "https://wa.me/918981835954?text=Hi%20Fix%20Physics%2C%20I%27d%20like%20to%20book%20a%20demo%20session."
const WHATSAPP_CONTACT_URL =
  "https://wa.me/918981835954?text=Hi%20Fix%20Physics%2C%20I%20have%20a%20few%20questions%20about%20your%20tutoring."

const highlights = [
  "Grades 9–12",
  "CBSE · ICSE · State Boards",
  "100+ students mentored",
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-secondary/40"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-primary">
            <span className="size-1.5 rounded-full bg-whatsapp" />
            Now booking FREE demo sessions
          </span>

          <h1 className="mt-5 text-pretty font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            One Stop Solution for ONE on ONE Science
          </h1>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Personalized online tutoring that turns academic challenges into
            confident success stories — for students across the globe. Reach us
            on WhatsApp and get started in minutes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={
                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              size="lg"
              className="h-12 gap-2 bg-whatsapp px-6 text-base text-whatsapp-foreground hover:bg-whatsapp/90"
            >
              <WhatsAppIcon className="size-5" />
              Book a FREE Demo via WhatsApp
            </Button>
            <Button
              render={
                <a
                  href={WHATSAPP_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 gap-2 border-primary/30 px-6 text-base text-primary hover:bg-primary/5"
            >
              <MessageCircle className="size-5" />
              Contact Us on WhatsApp
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <CheckCircle2 className="size-4 text-whatsapp" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <Image
              src="/hero-student.png"
              alt="Student attending a one-to-one online science tutoring session"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Floating stat badge */}
          <div className="absolute -bottom-5 left-5 flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-3 shadow-md">
            <div className="text-center">
              <p className="font-serif text-2xl font-semibold text-primary">
                100+
              </p>
              <p className="text-xs text-muted-foreground">Students</p>
            </div>
            <span className="h-8 w-px bg-border" aria-hidden="true" />
            <div className="text-center">
              <p className="font-serif text-2xl font-semibold text-primary">4</p>
              <p className="text-xs text-muted-foreground">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
