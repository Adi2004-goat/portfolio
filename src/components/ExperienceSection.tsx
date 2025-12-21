import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Building2 } from "lucide-react";

interface Experience {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  icon: typeof Briefcase;
}

const experiences: Experience[] = [
  {
    title: "Data Analyst Intern",
    organization: "PricewaterhouseCoopers LLP (PwC)",
    location: "India",
    period: "June 2025 – July 2025",
    description: "Executed data validation and analysis for financial and operational datasets in a data warehousing environment.",
    highlights: [
      "Executed 50+ SQL validation tests ensuring 95% accuracy between source data and data marts",
      "Analyzed 500k+ financial/operational rows to identify 10+ KPIs and revenue drivers",
      "Co-created Business Requirement Documents (BRDs), reducing managers' data review time by 30%",
      "Collaborated with developer team on data warehousing projects using Oracle and Hadoop",
    ],
    icon: Building2,
  },
  {
    title: "Futures Center Peer (Student Worker)",
    organization: "Futures Center — The College of Liberal Arts & Sciences (ASU)",
    location: "Tempe, AZ",
    period: "Sep 2025 – Present",
    description: "Analyzing graduate outcomes data to inform advising strategies through data-driven insights.",
    highlights: [
      "Analyzing datasets on 1000+ ASU graduates to identify post-graduation outcomes",
      "Conducting EDA with Python to detect trends/correlations that inform advising strategies",
      "Delivering visualized reports/dashboards (Seaborn, Matplotlib) to enhance decision-making efficiency",
    ],
    icon: TrendingUp,
  },
  {
    title: "Director of Events & Operations",
    organization: "DevLabs, Arizona State University",
    location: "Tempe, AZ",
    period: "April 2024 – Present",
    description: "Leading organization of large-scale hackathons and tech events with 500+ participants.",
    highlights: [
      "Led planning and execution of 20+ hackathons, workshops, and expos engaging 500+ student community",
      "Collaborated with marketing, finance, and operations teams for seamless logistics and budgeting",
      "Developed scalable frameworks to expand DevLabs' reach and strengthen ASU's entrepreneurial ecosystem",
    ],
    icon: Users,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container section-padding bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          A track record of impact through data-driven analysis, leadership, and technical problem-solving.
        </p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <exp.icon className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0 md:text-right">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
