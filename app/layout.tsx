import type { Metadata } from "next";
import "./globals.css";
import { StoneTexture } from "@/components/primitives/StoneTexture";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoneTexture />
        {children}
        <OrganizationSchema />
      </body>
    </html>
  );
}
