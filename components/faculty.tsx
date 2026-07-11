"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Subject =
  | "Physics"
  | "Chemistry"
  | "Mathematics"
  | "Biology"
  | "Computer"
  | "Geography"

const subjects: Subject[] = [
  "Physics",
  "Chemistry",
  "Mathematics",
  "Biology",
  "Computer",
  "Geography",
]

// How many tutors to preview per subject in the "All" view before
// prompting the visitor to view the rest of that subject's tutors.
const PREVIEW_COUNT = 3

type Teacher = {
  name: string
  subject: Subject
  experience: string
  bio: string
  photo: string
}

const teachers: Teacher[] = [
  {
    name: "Mr. Saptarshi Mandal",
    subject: "Physics",
    experience: "7 years",
    bio: "Specialist in mechanics and electromagnetism who makes tough concepts intuitive for board and competitive exams.",
    photo: "/faculty/saptarshi_mandal.png",
  },
  {
    name: "Ms. Tanushree Paul",
    subject: "Physics",
    experience: "6 years",
    bio: "Modern physics and optics mentor who blends visual demos with lots of numerical practice.",
    photo: "/faculty/faculty-5.png",
  },
  {
    name: "Ms. Moumita Bhowmick",
    subject: "Physics",
    experience: "6 years",
    bio: "Modern physics and optics mentor who blends visual demos with lots of numerical practice.",
    photo: "/faculty/faculty-5.png",
  },
  {
    name: "Ms. Sara Khan",
    subject: "Chemistry",
    experience: "9 years",
    bio: "Organic and physical chemistry expert focused on building rock-solid fundamentals through guided practice.",
    photo: "/faculty/faculty-2.png",
  },
  {
    name: "Mr. Vikram Rao",
    subject: "Chemistry",
    experience: "15 years",
    bio: "Inorganic chemistry veteran who simplifies reaction mechanisms with memory-friendly frameworks.",
    photo: "/faculty/faculty-6.png",
  },
  {
    name: "Ms. Priya Nair",
    subject: "Mathematics",
    experience: "10 years",
    bio: "Calculus and algebra mentor known for a step-by-step approach that removes math anxiety for good.",
    photo: "/faculty/faculty-3.png",
  },
  {
    name: "Mr. Aditya Sharma",
    subject: "Mathematics",
    experience: "6 years",
    bio: "Trigonometry and coordinate geometry coach who focuses on speed, accuracy, and exam strategy.",
    photo: "/faculty/faculty-7.png",
  },
  {
    name: "Ms. Bijaya Kar",
    subject: "Biology",
    experience: "4 years",
    bio: "Passionate about genetics and human physiology, turning dense syllabi into memorable visual stories.",
    photo: "/faculty/Bijaya_kar.jpeg",
  },
  {
    name: "Mr. Arnab Das",
    subject: "Biology",
    experience: "8 years",
    bio: "Passionate about genetics and human physiology, turning dense syllabi into memorable visual stories.",
    photo: "/faculty/faculty-4.png",
  },
]

function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden bg-secondary">
        <Image
          src={teacher.photo || "/placeholder.svg"}
          alt={`Portrait of ${teacher.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur">
          {teacher.subject}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-serif text-lg font-semibold text-foreground">
          {teacher.name}
        </h4>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Briefcase className="size-4" aria-hidden="true" />
          {teacher.experience} experience
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {teacher.bio}
        </p>
      </div>
    </article>
  )
}

export function Faculty() {
  const [active, setActive] = useState<Subject | "All">("All")

  // Count of teachers available per subject
  const counts = useMemo(() => {
    const map = new Map<Subject, number>()
    for (const s of subjects) map.set(s, 0)
    for (const t of teachers) map.set(t.subject, (map.get(t.subject) ?? 0) + 1)
    return map
  }, [])

  // When "All", group teachers under their subject heading.
  // When a subject is selected, show just that subject's teachers.
  const groups = useMemo(() => {
    const source = subjects
      .map((subject) => ({
        subject,
        list: teachers.filter((t) => t.subject === subject),
      }))
      .filter((g) => g.list.length > 0)

    return active === "All"
      ? source
      : source.filter((g) => g.subject === active)
  }, [active])

  return (
    <section id="faculty" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Our Faculty
        </p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Meet the mentors behind the results
        </h2>
        <p className="mt-4 text-muted-foreground">
          A team of specialist tutors for every subject. Pick a subject to
          browse all of its mentors, or preview the highlights below.
        </p>
      </div>

      {/* Filter buttons with per-subject teacher counts */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setActive("All")}
          aria-pressed={active === "All"}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            active === "All"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
          }`}
        >
          All
          <span
            className={`ml-2 rounded-full px-1.5 py-0.5 text-xs font-semibold ${
              active === "All"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-secondary text-primary"
            }`}
          >
            {teachers.length}
          </span>
        </button>

        {subjects.map((subject) => {
          const isActive = active === subject
          const count = counts.get(subject) ?? 0
          const disabled = count === 0
          return (
            <button
              key={subject}
              type="button"
              disabled={disabled}
              onClick={() => setActive(subject)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                disabled
                  ? "cursor-not-allowed border-border bg-card text-muted-foreground/40"
                  : isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {subject}
              <span
                className={`ml-2 rounded-full px-1.5 py-0.5 text-xs font-semibold ${
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-secondary text-primary"
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Grouped, subject-wise teacher listings */}
      <div className="mt-12 space-y-14">
        {groups.map((group) => {
          // In the "All" view we only preview a few tutors per subject so the
          // page stays short; a selected subject shows every tutor.
          const isPreview = active === "All"
          const visible = isPreview
            ? group.list.slice(0, PREVIEW_COUNT)
            : group.list
          const hiddenCount = group.list.length - visible.length

          return (
            <div key={group.subject}>
              <div className="mb-6 flex items-center gap-3">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {group.subject}
                </h3>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-primary">
                  {group.list.length}{" "}
                  {group.list.length === 1 ? "tutor" : "tutors"}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
                {isPreview && group.list.length > PREVIEW_COUNT && (
                  <button
                    type="button"
                    onClick={() => setActive(group.subject)}
                    className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex"
                  >
                    View all {group.list.length}
                    <ArrowRight className="size-4" />
                  </button>
                )}
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((teacher) => (
                  <TeacherCard key={teacher.name} teacher={teacher} />
                ))}
              </div>
              {isPreview && hiddenCount > 0 && (
                <div className="mt-6 flex justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setActive(group.subject)}
                    className="gap-2 border-primary/30 text-primary hover:bg-primary/5"
                  >
                    View all {group.list.length} {group.subject} tutors
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Back to all subjects when viewing a single subject */}
      {active !== "All" && (
        <div className="mt-10 flex justify-center">
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setActive("All")}
            className="text-muted-foreground hover:text-primary"
          >
            ← Back to all subjects
          </Button>
        </div>
      )}

      {groups.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">
          New {active} faculty joining soon — check back shortly!
        </p>
      )}
    </section>
  )
}
