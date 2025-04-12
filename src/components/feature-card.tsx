
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <CardSpotlight className={cn("h-full", className)}>
      <div className="flex flex-col items-center text-center">
        <div className="text-phishnet-purple mb-4 h-12 w-12">
          {icon}
        </div>
        <h3 className="text-xl font-bold relative z-20 mb-2 text-white">{title}</h3>
        <p className="text-neutral-300 relative z-20">{description}</p>
      </div>
    </CardSpotlight>
  );
};

export default FeatureCard;
