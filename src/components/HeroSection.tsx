import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/aditya-profile.jpg";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Adi2004-goat", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-bohra007/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:adityabohra.vb@gmail.com", label: "Email" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center section-container section-padding">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <p className="text-accent font-medium mb-3 tracking-wide text-sm uppercase">
            Data Science Student
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Aditya Bohra</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            I'm an undergraduate student at <span className="text-foreground font-medium">Arizona State University</span> majoring in Data Science with a minor in Economics. I'm passionate about using data-driven insights, statistical modeling, and machine learning to solve real-world problems at the intersection of technology, finance, and decision-making.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-accent hover:bg-secondary/80 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
            >
              Get in Touch
              <ExternalLink size={16} />
            </a>
            <a
              href="/AdityaBohra_Resume.pdf"
              download="AdityaBohra_Resume.pdf"
              className="px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-all duration-300 flex items-center gap-2"
            >
              Resume
              <Download size={16} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={profileImage}
                alt="Aditya Bohra"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/20" />
            <div className="absolute -z-20 -top-8 -right-8 w-full h-full rounded-2xl bg-secondary" />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
