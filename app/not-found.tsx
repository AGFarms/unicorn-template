import Link from "next/link";
import { Container } from "@/components/primitives/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center gap-6">
      <h1 className="font-display text-6xl">404.</h1>
      <p className="text-lg text-[var(--color-basalt)]/70">
        That page doesn&rsquo;t exist.
      </p>
      <Link
        href="/"
        className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-teal)] underline-offset-4 hover:underline"
      >
        Back home
      </Link>
    </Container>
  );
}
