import { MonitorPlay, LineChart, HeartHandshake, MessagesSquare } from "lucide-react"

const features = [
  {
    icon: MonitorPlay,
    title: "Modern Workflow",
    description:
      "Full integration with Google Classroom for notes, assignments, and 24/7 resource access.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Progress",
    description:
      "Regular exams and transparent Progress Reports shared directly with parents.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description:
      "Specialized focus on weak students, ensuring foundational clarity through patient guidance.",
  },
  {
    icon: MessagesSquare,
    title: "Interactive Learning",
    description:
      "Regular doubt-clearing sessions and consistent Parent-Teacher Meetings.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A smarter way to master science
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
