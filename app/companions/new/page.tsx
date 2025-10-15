import CompanionForm from "@/components/shared/CompanionForm";
import { newCompanionPermissions } from "@/lib/actions/companions-actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>

          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit w-full p-6 flex flex-col items-center text-center gap-6">
          <div className="relative">
            <Image
              src="/images/limit.svg"
              alt="Companion limit reached"
              width={400}
              height={300}
              className="relative z-10"
            />
          </div>

          <div className="space-y-4 max-w-sm">
            <h1 className="text-4xl font-bold text-gray-900">
              You&apos;ve Reached Your Limit
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              You&apos;ve reached your companion limit. Upgrade to create more
              companions and premium features.
            </p>
          </div>

          <Link
            href="/subscription"
            className="btn-primary w-full max-w-sm justify-center text-lg"
          >
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
