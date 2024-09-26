"use client";
import { Session } from "next-auth";
import React, { FC, ReactNode } from "react";
import { SessionProvider as NextAuthProvider } from "next-auth/react";
interface IsessionProvidersProps {
  children: ReactNode;
  session: Session | null;
}
const SessionProvider: FC<IsessionProvidersProps> = ({ children, session }) => {
  return <NextAuthProvider session={session}>{children}</NextAuthProvider>;
};

export default SessionProvider;