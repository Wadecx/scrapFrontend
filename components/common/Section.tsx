import { cn } from "@/libs/utils";
import { PropsWithChildren } from "react";

interface SectionProps {
  size?: "8/10" | "9/10" | "full";
  className?: string;
}

export const Section = ({
  children,
  size = "8/10",
  className,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section
      className={cn(
        {
          "max-w-9/10 lg:max-w-8/10": size === "8/10",
          "max-w-9/10": size === "9/10",
          "max-w-full": size === "full",
          "3xl:max-w-[1400px] 3xl:mx-auto": size !== "full",
        },

        //? Ajout intentionnels des deux directions y pour faciliter l'overwriting en top ou bottom uniquement.
        "mx-auto mt-[50px] mb-[50px] md:mt-[150px] md:mb-[150px]",
        className
      )}
    >
      {children}
    </section>
  );
};
