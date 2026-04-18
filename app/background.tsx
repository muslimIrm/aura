"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

export function AuroraBackgroundDemo({ children }: { children: React.ReactNode }) {
  return (
    <AuroraBackground >

      {children}
    </AuroraBackground>
  );
}
