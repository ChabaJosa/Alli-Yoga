import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePhoto from "./img1.jpeg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Testimonials />
        <Offerings />
        <About />
        <Modalities />
        <RetreatHighlight />
        <CenteredCta />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="relative size-8 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src={profilePhoto}
              alt="Alli"
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </div>
          <span className="text-lg font-semibold tracking-tight">Alli Yogi</span>
        </div>
        <nav className="hidden gap-8 md:flex">
          {["Home", "Philosophy", "Offerings", "Retreats", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="rounded-full px-5">View Classes</Button>
          <Button className="rounded-full px-5">Book a Session</Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-100/40 via-transparent to-emerald-100/30 dark:from-rose-200/10 dark:to-emerald-200/10" />
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-200/30 blur-3xl dark:bg-rose-300/10" />
        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-300/10" />
      </div>
      <div className="mx-auto flex min-h-[86vh] max-w-6xl flex-col items-center justify-center gap-8 px-6 py-24 text-center sm:gap-10">
        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          A Space to Return to Yourself.
        </h1>
        <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
          Ground into presence through movement, breath, and stillness. Reconnect with your
          innate wisdom, soften into healing, and cultivate intentional living through practice.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full px-6">Begin Your Practice</Button>
          <Button variant="ghost" className="rounded-full px-6">Explore Offerings</Button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Sofia M.",
      quote:
        "Each class feels like a homecoming. I leave grounded, open-hearted, and deeply at ease.",
      avatar: profilePhoto.src,
    },
    {
      name: "Amara K.",
      quote:
        "A soft, safe space to listen to my body. The guidance is loving, gentle, and profound.",
      avatar: profilePhoto.src,
    },
    {
      name: "Leila P.",
      quote:
        "The rhythm, the breath, the intention—everything feels thoughtfully woven and deeply feminine.",
      avatar: profilePhoto.src,
    },
  ];
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <div className="mb-10 text-center sm:mb-14">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What Students Are Saying</h2>
        <p className="mt-2 text-muted-foreground">Warm words from our community</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <Card key={t.name} className="bg-card/70">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback>{t.name.split(" ").map((s) => s[0]).join("")}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{t.name}</CardTitle>
                  <CardDescription>Student</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-muted-foreground">
                “{t.quote}”
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Offerings() {
  const items = [
    {
      title: "Yoga",
      desc: "Fluid, breath-led practices to nourish body and heart.",
      icon: "🧘‍♀️",
    },
    {
      title: "Meditation",
      desc: "Quiet, contemplative stillness to soften the mind and open the heart.",
      icon: "🕯️",
    },
    {
      title: "Retreats",
      desc: "Immersive journeys to reset, restore, and reconnect to self.",
      icon: "🌿",
    },
  ];
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <div className="mb-10 text-center sm:mb-14">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Offerings</h2>
        <p className="mt-2 text-muted-foreground">Soft, intentional experiences to support your healing</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="transition-colors hover:bg-card/90">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-muted/60 text-lg">
                  <span aria-hidden>{item.icon}</span>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </div>
              <CardDescription className="pt-2">{item.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="rounded-full px-5">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-border/60">
          <Image
            src={profilePhoto}
            alt="Alli — portrait"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-200/20 to-emerald-200/20 dark:from-rose-300/10 dark:to-emerald-300/10" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Alli</h2>
          <p className="text-muted-foreground">
            Alli’s teaching is a devotion to presence, softness, and reverence for the feminine.
            Her approach weaves movement, meditation, and breathwork into a grounded, soulful rhythm.
          </p>
          <p className="text-muted-foreground">
            Each class is an invitation to return—into body, into breath, into the truth of who you are.
          </p>
          <div className="pt-2">
            <Button className="rounded-full px-6">Read Philosophy</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Modalities() {
  const items = ["Vinyasa", "Yin", "Breathwork", "Sound Healing", "Private Sessions", "Workshops"];
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Available Experiences</h2>
        <p className="mt-2 text-muted-foreground">Choose what supports you today</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {items.map((m) => (
          <div
            key={m}
            className="rounded-full border border-border/70 bg-card px-4 py-2 text-center text-sm text-foreground/90"
          >
            {m}
          </div>
        ))}
      </div>
    </section>
  );
}

function RetreatHighlight() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl px-6 py-20 ring-1 ring-border/60 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-100/40 via-transparent to-rose-100/40 dark:from-emerald-200/10 dark:to-rose-200/10" />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          Retreat into Stillness
        </h3>
        <p className="text-pretty text-muted-foreground">
          Step away from the noise and immerse yourself in a deeper journey—nourishing food,
          restorative practices, and soulful connection in nature.
        </p>
        <div className="pt-2">
          <Button className="rounded-full px-6">Explore Upcoming Retreats</Button>
        </div>
      </div>
    </section>
  );
}

function CenteredCta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Come Home to Yourself
        </h3>
        <p className="mt-3 text-muted-foreground">
          Begin your practice with intention. Your breath is ready. Your body knows the way.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button className="rounded-full px-6">Book a Session</Button>
          <Button variant="ghost" className="rounded-full px-6">View Classes</Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const links = ["Home", "Philosophy", "Offerings", "Retreats", "Contact"];
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-3 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="relative size-8 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src={profilePhoto}
              alt="Alli"
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <span className="text-base font-semibold tracking-tight">Alli Yogi</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground sm:justify-center">
          {links.map((l) => (
            <Link href="#" key={l} className="hover:text-foreground">
              {l}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-2 text-sm text-muted-foreground sm:items-end">
          <Link
            href="https://www.instagram.com/allidives/profilecard/?igsh=bXdtbjZoam92Y2kw"
            className="hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link href="mailto:Alli.barry@gmail.com" className="hover:text-foreground">
            Alli.barry@gmail.com
          </Link>
          <Link href="tel:+19084777982" className="hover:text-foreground">
            (908) 477-7982
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <p className="mx-auto max-w-7xl px-6 text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Alli Yogi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
