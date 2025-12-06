import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {new Date().getFullYear()}</span>
            <span className="gradient-text font-semibold">{personalInfo.name}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Egypt
            </span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-3 glass-card text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
