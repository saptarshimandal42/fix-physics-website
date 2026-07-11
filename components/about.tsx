import { Globe, Award, TrendingUp } from "lucide-react"

const stats = [
  { icon: Award, label: "5+ Years of Excellence" },
  { icon: Globe, label: "Global Reach" },
  { icon: TrendingUp, label: "Proven Results" },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          About Us
        </p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          5+ Years of Excellence | Global Reach | Proven Results
        </h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          We provide specialized online tutoring for Grades 9–12 (CBSE, ICSE,
          and various State Boards), serving a global community across Dubai, UK,
          USA, and Canada. With a track record of mentoring 100+ one-to-one
          students, we turn academic challenges into success stories.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <stat.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="font-medium text-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
