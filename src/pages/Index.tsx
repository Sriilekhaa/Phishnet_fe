
import React from "react";
import { Shield, Code, Link, AlertTriangle } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";
import DownloadButton from "@/components/download-button";
import FeatureCard from "@/components/feature-card";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,black)] dark:[mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes className="opacity-50" />
        
        <div className="container mx-auto text-center relative z-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient">
            PhishNet
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-200 mb-10 max-w-3xl mx-auto">
            When in doubt, PhishNet it out
          </p>
          <DownloadButton className="float" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center text-gradient">What is PhishNet?</h2>
          <div className="flex justify-center">
            <CardSpotlight 
              className="max-w-3xl w-full" 
              color="#6b21a8"
            >
              <div className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                <p className="mb-4">
                  An AI-powered Chrome extension that protects you from Web3 scams in real time.
                </p>
                <p className="mb-4">
                  It analyzes smart contracts, URLs, and wallet interactions before you click, 
                  helping you stay safe from phishing attacks, rug pulls, and malicious transactions.
                </p> 
                <p>
                  Whether you're a crypto newbie or a DeFi pro — PhishNet's got your back.
                </p>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted" id="features">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              title="Smart Contract Analysis" 
              description="Scans and analyzes smart contract addresses to detect malicious or risky behavior before interaction."
              icon={<Shield size={48} />}
            />
            <FeatureCard 
              title="Wallet Analysis" 
              description="Evaluates wallet addresses for suspicious activity, ensuring you don't engage with scam or blacklisted accounts."
              icon={<Code size={48} />}
            />
            <FeatureCard 
              title="URL Scanner" 
              description="Checks if a website you're about to visit is safe, warning you of known phishing links and fake DApps in real time."
              icon={<Link size={48} />}
            />
            <FeatureCard 
              title="Report System" 
              description="Let users fight back — easily report suspicious URLs with a message to help protect the entire community."
              icon={<AlertTriangle size={48} />}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
