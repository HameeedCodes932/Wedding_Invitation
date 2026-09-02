"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import InvitationMessage from "./InvitationMessage";

/**
 * Reads the optional `guest` query parameter (?guest=Ahmad), sanitizes it
 * and personalizes the invitation. When absent, a generic greeting is shown.
 */
function GuestGreetingInner() {
  const params = useSearchParams();
  let guest: string | undefined;

  const raw = params.get("guest");
  if (raw) {
    const cleaned = raw.trim().slice(0, 32).replace(/[<>{}[\]"]/g, "");
    if (cleaned) {
      guest = cleaned;
    }
  }

  return <InvitationMessage guestName={guest} />;
}

export default function GuestGreeting() {
  return (
    <Suspense fallback={<InvitationMessage />}>
      <GuestGreetingInner />
    </Suspense>
  );
}