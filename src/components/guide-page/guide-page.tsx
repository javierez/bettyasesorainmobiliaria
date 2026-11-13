import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, MessageCircle, Phone } from "lucide-react";
import Footer from "~/components/footer";
import { getServiceIcon } from "~/lib/service-icons";
import type { GuidePageContent } from "./types";

interface GuidePageProps {
  content: GuidePageContent;
  /** E.164 mobile, used for both the call and the WhatsApp buttons. */
  phone: string;
  phoneDisplay: string;
  /** Background of the dark feature panel (brand colour); defaults to --primary. */
  panelColor?: string;
}

/** Thin gold rule — the brand manual's recurring detail. */
function Rule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block h-px w-14 bg-brand ${className}`} />;
}

/**
 * Long-form guide page (hero, intro, highlights, steps, feature panel, FAQ,
 * CTA). Content-only: every per-account page passes its own copy, so the
 * layout stays in one place.
 */
export function GuidePage({ content, phone, phoneDisplay, panelColor }: GuidePageProps) {
  const { hero, intro, highlights, steps, feature, faqs, cta } = content;
  const whatsappHref = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(cta.whatsappText)}`;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero — claim on the left, photo on the right */}
      <section className="container mx-auto px-4 pt-28 sm:px-6 sm:pt-32">
        <div className="grid grid-cols-1 items-center gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow mb-5 block">{hero.eyebrow}</span>
            <h1 className="text-4xl font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {hero.title} <em className="text-brand">{hero.titleAccent}</em>
            </h1>
            <Rule className="mt-8" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contacto-guia"
                className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-3.5 text-sm font-medium uppercase tracking-eyebrow text-brand-foreground transition-colors hover:bg-brand/90"
              >
                {cta.buttonText}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 border border-foreground/30 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            {intro.title}
          </h2>
          <Rule className="mx-auto mt-6" />
          {intro.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-muted/40 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-12 text-center text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            {highlights.title}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.items.map((item) => {
              const Icon = getServiceIcon(item.icon);
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-background p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/40 text-brand">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl font-normal text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <span className="eyebrow mb-4 block text-center">{steps.eyebrow}</span>
          <h2 className="text-center text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            {steps.title}
          </h2>
          <ol className="mt-12 space-y-0">
            {steps.items.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-border/70 py-7 sm:grid-cols-[5rem_1fr]"
              >
                <span className="font-[family-name:var(--font-cinzel)] text-3xl italic leading-none text-brand sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-normal text-foreground sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Feature — dark brand panel beside a photo */}
      {feature && (
        <section className="container mx-auto px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2">
            <div className="relative min-h-[18rem] lg:min-h-[28rem]">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              className="bg-primary p-8 text-primary-foreground sm:p-12"
              style={panelColor ? { backgroundColor: panelColor, color: "#FAF7F2" } : undefined}
            >
              <span className="mb-4 block text-xs font-medium uppercase tracking-eyebrow text-brand">
                {feature.eyebrow}
              </span>
              <h2 className="text-3xl font-normal tracking-tight sm:text-4xl">{feature.title}</h2>
              <Rule className="mt-6" />
              <ul className="mt-8 space-y-4">
                {feature.lines.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {line}
                  </li>
                ))}
              </ul>
              {feature.note && (
                <p className="mt-8 text-sm leading-relaxed opacity-80">{feature.note}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-muted/40 py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="divide-y divide-border/70 border-y border-border/70">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-foreground sm:text-lg">
                  {faq.question}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto-guia" className="scroll-mt-24 py-16 sm:py-24">
        <div className="container mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            {cta.title}
          </h2>
          <Rule className="mx-auto mt-6" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {cta.text}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-3.5 text-sm font-medium uppercase tracking-eyebrow text-brand-foreground transition-colors hover:bg-brand/90"
            >
              {cta.buttonText}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-foreground/30 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
