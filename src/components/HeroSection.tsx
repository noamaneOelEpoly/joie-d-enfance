import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  videoUrl?: string;
}

const HeroSection = ({
  title = "Joie d'Enfance",
  subtitle = "Bringing joy and hope to children in need around the world",
  ctaText = "Donate Now",
  onCtaClick = () => {},
  videoUrl = "https://streamable.com/tenmwd",
}: HeroSectionProps) => {
  // Extract the actual video ID from streamable URL
  const videoId = videoUrl.split("/").pop() || "tenmwd";

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://streamable.com/e/${videoId}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&background=1`}
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
          className="absolute inset-0 w-full h-full min-w-full min-h-full scale-[1.2]"
          title="Background Video"
        ></iframe>

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-8 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
