import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/nav/Footer";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { HeroClaim } from "@/components/hero/HeroClaim";
import { HeroDemoSlot } from "@/components/hero/HeroDemoSlot";
import { NumberStrip } from "@/components/primitives/NumberStrip";
import { CTA } from "@/components/primitives/CTA";
import { Stamp } from "@/components/primitives/Stamp";

const navItems = [
  { label: "Verify", href: "/verify" },
  { label: "Anglers", href: "/anglers" },
  { label: "Captains", href: "/captains" },
];

const footerSitemap = [
  {
    heading: "Product",
    links: [
      { label: "Verify", href: "/verify" },
      { label: "Anglers", href: "/anglers" },
      { label: "Captains", href: "/captains" },
      { label: "BAIT", href: "/bait" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Definitions",
    links: [
      { label: "Definition One", href: "/definitions/one" },
      { label: "Definition Two", href: "/definitions/two" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Manifesto", href: "/manifesto" },
      { label: "Press", href: "/press" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
      { label: "Support", href: "/support" },
      { label: "Status", href: "/status" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms", href: "/legal/terms" },
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Trademark", href: "/legal/trademark" },
      { label: "DMCA", href: "/legal/dmca" },
      { label: "Accessibility", href: "/legal/accessibility" },
    ],
  },
];

export default function MarketingHome() {
  return (
    <>
      <Header
        items={navItems}
        cta={{ label: "Try Free", href: "/quiz" }}
      />

      <main>
        {/* HERO */}
        <Section>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-10">
              <Stamp label="Template" />
              <HeroClaim brand="Brand" claim="Category Claim" />
              <p className="max-w-xl text-lg text-[var(--color-basalt)]/70">
                Replace this copy with your category-defining subhead. Keep it
                short. The hero is supposed to feel empty.
              </p>
              <CTA label="Try Free" href="/quiz" />
            </div>
            <HeroDemoSlot />
          </div>
        </Section>

        {/* NUMBERS — LOCKED rule: real numbers only. */}
        <Section className="py-16 md:py-20">
          <NumberStrip
            // TODO: wire to live source (ISR ~60s revalidate). Show 0 honestly until real.
            metrics={[
              { label: "Users", value: 0 },
              { label: "Partners", value: 0 },
            ]}
          />
        </Section>

        {/* GENERIC SECTION SLOT */}
        <Section>
          <Container className="!px-0">
            <h2 className="font-display text-4xl md:text-6xl">A section.</h2>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-basalt)]/70">
              Drop your verification breakdown, feature grid, or testimonial
              wall here. Every component in this template is composable and
              token-driven.
            </p>
          </Container>
        </Section>

        {/* FINAL CTA */}
        <Section className="py-32">
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-display text-5xl md:text-7xl">Ready?</h2>
            <CTA label="Try Free" href="/quiz" />
          </div>
        </Section>
      </main>

      <Footer sitemap={footerSitemap} />
    </>
  );
}
