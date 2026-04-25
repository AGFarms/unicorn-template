import * as React from "react";
import { stoneTextureDataUri, texture } from "@/tokens/texture";
import { cn } from "@/lib/cn";

/**
 * Fixed, low-opacity stone-grain overlay. Pointer-events: none so it never
 * blocks interaction.
 */
export function StoneTexture({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 mix-blend-multiply",
        className,
      )}
      style={{
        backgroundImage: `url("${stoneTextureDataUri}")`,
        backgroundRepeat: "repeat",
        opacity: texture.opacity,
      }}
    />
  );
}
