import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import { cn } from "@/libs/utils";
import { PropsWithChildren } from "react";

type ContainerProps = {
  children: React.ReactNode;
  direction?: "row" | "row-reverse";
  className?: string;
};

export const Container = ({
  children,
  direction = "row",
  className,
}: ContainerProps) => {
  return (
    <Section className="lg:my-[100px] my-[0px] mt-[100px] mb-[50px]">
      <div
        className={cn(
          {
            "lg:flex-row": direction === "row",
            "lg:flex-row-reverse": direction === "row-reverse",
          },
          "flex flex-col gap-8 lg:gap-12 justify-between",
          className
        )}
      >
        {children}
      </div>
    </Section>
  );
};

const LeftContainer = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <AnimateContainer className={cn("lg:w-3/5 w-full", className)}>
      {children}
    </AnimateContainer>
  );
};

const RightContainer = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <AnimateContainer delay={0.2} className={cn("lg:w-2/5 w-full", className)}>
      {children}
    </AnimateContainer>
  );
};

Container.LeftContainer = LeftContainer;
Container.RightContainer = RightContainer;
