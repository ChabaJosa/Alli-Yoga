import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookInquiryForm } from "@/components/book-inquiry-form";
import { cn } from "@/lib/utils";
import profilePhoto from "./img1.jpeg";
import portraitPhoto from "./img3.png";

const PHONE_HREF = "tel:+19084777982";
const EMAIL = "Alli.barry@gmail.com";
const MAILTO_HREF = `mailto:${EMAIL}`;

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Private Sessions", href: "#private-sessions" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "Book", href: "#book" },
];

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <TheExperience />
        <AboutSection />
        <PackagesSection />
        <JournalSection />
        <BookSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-colors duration-500">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="#top"
          className="flex items-center gap-3 transition-opacity duration-500 hover:opacity-80"
        >
          <div className="relative size-8 shrink-0 overflow-hidden rounded-full ring-1 ring-border/80">
            <Image
              src={profilePhoto}
              alt=""
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </div>
          <span className="font-serif text-lg font-medium tracking-wide text-foreground">
            Alli Barry
          </span>
        </Link>
        <nav className="hidden flex-wrap justify-end gap-x-4 gap-y-1 text-xs sm:text-sm md:flex lg:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors duration-500 ease-out hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="#book"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "rounded-full px-4 transition-opacity duration-500 ease-out",
          )}
        >
          Book
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
          poster={portraitPhoto.src}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/55 to-background/90"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center sm:py-32">
        <p className="font-serif text-4xl font-light tracking-[0.28em] text-foreground sm:text-5xl md:text-6xl">
          ALLI BARRY
        </p>
        <p className="mt-5 text-xs font-normal uppercase tracking-[0.35em] text-muted-foreground sm:text-sm">
          Private Yoga · Breathwork · Somatic Recovery
        </p>
        <p className="mt-10 font-serif text-2xl italic leading-snug text-foreground sm:text-3xl">
          “For those seeking depth — not distraction.”
        </p>
        <p className="mt-8 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Private coaching for athletes, executives, creatives, and individuals seeking deeper
          nervous system regulation, mental clarity, and physical resilience.
        </p>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Through a customized blend of yoga, breathwork, meditation, recovery work, and performance
          coaching, this work is designed to help clients optimize both mind and body under pressure.
        </p>
        <a
          href="#private-sessions"
          className="mt-12 rounded-full border border-border/80 bg-card/30 px-10 py-3 text-sm font-medium tracking-[0.2em] text-foreground uppercase backdrop-blur-sm transition duration-700 ease-out hover:bg-card/50"
        >
          Enter the Space
        </a>
      </div>
    </section>
  );
}

function TheExperience() {
  const pillars = [
    {
      title: "Athletic performance yoga",
      desc: "Mobility, strength, flexibility, and recovery — sequenced to meet you where you are.",
    },
    {
      title: "Somatic restoration",
      desc: "Myofascial release, pressure-point recovery, nervous system downregulation, and breath-led movement.",
    },
    {
      title: "Guided meditation & breathwork",
      desc: "Private meditation journeys, pranayama, and grounding practices to deepen inner steadiness.",
    },
  ];
  return (
    <section
      id="private-sessions"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          The experience
        </h2>
        <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Each session is intentionally crafted to regulate the nervous system, restore mobility, deepen
          breath awareness, and reconnect you to your body with precision and care.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        {pillars.map((p) => (
          <Card
            key={p.title}
            className="border-border/60 bg-card/40 text-left transition-colors duration-500 ease-out hover:bg-card/60"
          >
            <CardHeader>
              <CardTitle className="font-serif text-xl font-medium tracking-tight">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="border-t border-border/40 bg-muted/15">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm md:max-w-none">
          <Image
            src={portraitPhoto}
            alt="Alli Barry"
            fill
            className="object-cover transition duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"
            aria-hidden
          />
        </div>
        <div className="space-y-5">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            About Alli
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Alli blends advanced yoga instruction, breathwork, mobility training, and intuitive somatic
            guidance to create deeply personalized experiences that support both physical performance and
            emotional regulation.
          </p>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Alli Barry is a private coach specializing in yoga, meditation, breathwork, nervous system
            regulation, and performance optimization for athletes and high performers. A former Team USA
            fencer and NCAA Division I national champion, she understands firsthand the physical and
            emotional demands of elite competition. Her work blends modern performance coaching with
            Eastern mindfulness traditions studied extensively in Buddhist monasteries across Asia.
          </p>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            With nearly a decade of teaching, Alli has worked with ATP tennis athletes, Major League Rugby
            athletes, the Notre Dame athletic department, military veterans, and private clients seeking
            deeper regulation, resilience, and wellbeing. True performance, she believes, is not created
            through force alone — but through the ability to remain clear, regulated, and connected under
            pressure.
          </p>
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section id="packages" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Private coaching packages & pricing
        </h2>
        <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          All sessions are fully customized to meet your evolving goals, schedule, and current physical and
          mental state.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card className="border-border/60 bg-card/40 text-left transition-colors duration-500 hover:bg-card/55">
          <CardHeader>
            <CardTitle className="font-serif text-2xl font-medium">Private coaching sessions</CardTitle>
            <CardDescription className="text-base text-foreground/90">
              Starting at <span className="font-medium text-foreground">$150</span> per session
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>75-minute private sessions, in person.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Customized breathwork, mobility, asana adjustments, mindset coaching, and recovery protocols</li>
              <li>Parent or coach check-in updates available as needed</li>
              <li>Virtual breathwork during travel to support nervous system stability</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border-border/60 bg-card/40 text-left transition-colors duration-500 hover:bg-card/55">
          <CardHeader>
            <CardTitle className="font-serif text-2xl font-medium">System Reset performance package</CardTitle>
            <CardDescription className="text-base text-foreground/90">
              Custom pricing available
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              An intensive, high-touch program to stabilize the mind-body connection during peak training
              blocks or periods of elevated stress.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Seven consecutive 75-minute private sessions over one week</li>
              <li>Physical and mental recalibration for recovery, focus, and competition readiness</li>
              <li>Personalized support between sessions for travel recovery and performance management</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function JournalSection() {
  return (
    <section id="journal" className="border-t border-border/40 bg-muted/10">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center sm:py-24">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Journal
        </h2>
        <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Reflections on movement, the ocean, nervous system, and healing — a slower space for words.
          Entries will live here soon.
        </p>
      </div>
    </section>
  );
}

function BookSection() {
  return (
    <section id="book" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Book
        </h2>
        <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
          A simple inquiry — share your name, email, and a few lines. You will be taken to your email app
          to send the note directly.
        </p>
        <div className="mt-10 rounded-lg border border-border/60 bg-card/30 p-6 sm:p-8">
          <BookInquiryForm email={EMAIL} />
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Prefer voice?{" "}
          <a href={PHONE_HREF} className="underline underline-offset-4 transition-colors duration-500 hover:text-foreground">
            (908) 477-7982
          </a>
        </p>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-8">
        <Link href="#top" className="flex items-center gap-3 transition-opacity duration-500 hover:opacity-80">
          <div className="relative size-8 shrink-0 overflow-hidden rounded-full ring-1 ring-border/80">
            <Image src={profilePhoto} alt="" fill className="object-cover" sizes="32px" />
          </div>
          <span className="font-serif text-base font-medium tracking-wide">Alli Barry</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors duration-500 ease-out hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:items-end">
          <Link
            href="https://www.instagram.com/allidives/profilecard/?igsh=bXdtbjZoam92Y2kw"
            className="transition-colors duration-500 hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link href={MAILTO_HREF} className="transition-colors duration-500 hover:text-foreground">
            {EMAIL}
          </Link>
          <Link href={PHONE_HREF} className="transition-colors duration-500 hover:text-foreground">
            (908) 477-7982
          </Link>
        </div>
      </div>
      <div className="border-t border-border/40 py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alli Barry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
