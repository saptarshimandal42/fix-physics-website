import { Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const WHATSAPP_URL =
  "https://wa.me/918981835954?text=Hi%20Fix%20Physics%2C%20I%27d%20like%20to%20book%20a%20trial%20session."

const contactItems = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+91 89818 35954",
    href: WHATSAPP_URL,
    accent: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 87688 81990",
    href: "tel:+918768881990",
  },
  {
    icon: Mail,
    label: "Email",
    value: "fixphysicsonline@gmail.com",
    href: "mailto:fixphysicsonline@gmail.com",
  },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contact
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Get in Touch for a Trial Session
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Have questions or ready to start? Reach out and our team will help
              you find the right mentor for your goals.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3">
              <Clock className="size-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">
                Response Time: Usually within 2–4 hours
              </span>
            </div>

            <div className="mt-6">
              <Button
                render={
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
                size="lg"
                className="h-12 gap-2 bg-whatsapp px-6 text-base text-whatsapp-foreground hover:bg-whatsapp/90"
              >
                <WhatsAppIcon className="size-5" />
                Chat with us on WhatsApp
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${
                    item.accent
                      ? "bg-whatsapp/10 text-whatsapp"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="block truncate font-medium text-foreground">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
