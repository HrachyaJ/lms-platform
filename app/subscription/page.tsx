import { PricingTable } from "@clerk/nextjs";
import Image from "next/image";

const Subscription = () => {
  return (
    <div className="container mx-auto px-10">
      <h1 className="text-center pt-4 pb-3">Choose Your Learning Journey</h1>
      <p className="text-center mb-8 text-muted-foreground max-w-xl mx-auto">
        Unlock smarter Conversations, deeper insights, and unlimited potential
        with a plan that fits your goals and budget.
      </p>
      <div className="hidden xl:flex items-start justify-center gap-2 mb-4">
        <Image
          src="/icons/Vector.png"
          alt="Arrow"
          width={40}
          height={20}
          className="object-contain mt-2"
        />
        <span className="text-sm text-primary font-medium">Most popular!</span>
      </div>
      <PricingTable />
    </div>
  );
};

export default Subscription;
