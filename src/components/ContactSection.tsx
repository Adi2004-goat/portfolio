import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Phone } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "adityabohra.vb@gmail.com",
      href: "mailto:adityabohra.vb@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aditya-bohra007",
      href: "https://www.linkedin.com/in/aditya-bohra007/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Adi2004-goat",
      href: "https://github.com/Adi2004-goat",
    },
  ];

  return (
    <section id="contact" className="section-container section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Open to internship opportunities, research collaborations, and conversations about 
            data science, analytics, and fintech. Let's build something impactful together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground mb-1">{label}</span>
              <span className="text-foreground font-medium text-sm group-hover:text-accent transition-colors flex items-center gap-1">
                {label === "Email" ? value : value.replace("https://", "")}
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="mailto:adityabohra.vb@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300"
          >
            <Mail size={18} />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
