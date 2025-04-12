
"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-phishnet-darkpurple flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-phishnet-darkpurple z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-5xl text-2xl font-bold text-white relative z-20 text-gradient mb-4")}>
        PhishNet
      </h1>
      <p className="text-center text-xl md:text-2xl text-phishnet-purple relative z-20">
        When in doubt, PhishNet it out
      </p>
    </div>
  );
}
