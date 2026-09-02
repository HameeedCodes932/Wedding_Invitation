"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningEnvelope from "@/components/OpeningEnvelope";
import HeroReveal from "@/components/HeroReveal";
import SaveTheDate from "@/components/SaveTheDate";
import WeddingCountdown from "@/components/WeddingCountdown";
import EventTimeline from "@/components/EventTimeline";
import GuestGreeting from "@/components/GuestGreeting";
import VenueSection from "@/components/VenueSection";
import RSVPSection from "@/components/RSVPSection";
import CelebrationSection from "@/components/CelebrationSection";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!opened ? (
        <OpeningEnvelope key="envelope" onComplete={() => setOpened(true)} />
      ) : (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <HeroReveal />
          <SaveTheDate />
          <WeddingCountdown />
          <EventTimeline />
          <GuestGreeting />
          <VenueSection />
          <RSVPSection />
          <CelebrationSection />
          <ClosingSection />
        </motion.main>
      )}
    </AnimatePresence>
  );
}