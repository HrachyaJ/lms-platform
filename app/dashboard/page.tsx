import CompanionCard from "@/components/shared/CompanionCard";
import CompanionsList from "@/components/shared/CompanionsList";
import CTA from "@/components/shared/CTA";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companions-actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main>
      <h1 className="text-2xl">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default DashboardPage;
