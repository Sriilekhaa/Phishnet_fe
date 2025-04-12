
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ className }) => {
  return (
    <Button 
      className={cn(
        "bg-gradient-to-r from-phishnet-purple to-phishnet-blue hover:opacity-90 text-white font-semibold px-6 py-6 rounded-xl border border-white/10 shadow-lg relative overflow-hidden group",
        className
      )}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-phishnet-purple/50 to-phishnet-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <Download className="mr-2 h-5 w-5" /> 
      <span className="relative z-10">Download PhishNet</span>
    </Button>
  );
};

export default DownloadButton;
