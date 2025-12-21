import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp } from "lucide-react";

interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  icon: typeof Briefcase;
}

const experiences: Experience[] = [
  {
    title: "Data Analytics Researcher",
    organization: "ASU Research Lab",
    period: "2023 - Present",
    description: "Conducting exploratory data analysis and building predictive models on large-scale datasets.",
    highlights: [
      "Processed and analyzed 500K+ records for research insights",
      "Built automated data pipelines using Python and SQL",
      "Created interactive dashboards for stakeholder reporting",
    ],
    icon: TrendingUp,
  },
  {
    title: "Tech Event Organizer & Lead",
    organization: "ASU Hackathon Committee",
    period: "2022 - Present",
    description: "Leading organization of large-scale hackathons and tech events with 500+ participants.",
    highlights: [
      "Coordinated 10+ sponsors and managed $50K+ budget",
      "Led team of 20+ volunteers for event execution",
      "Grew participation by 40% year-over-year",
    ],
    icon: Users,
  },
  {
    title: "Student Data Analyst",
    organization: "University Analytics Office",
    period: "2022 - 2023",
    description: "Supported institutional research through data collection, cleaning, and visualization.",
    highlights: [
      "Automated weekly reporting saving 10+ hours/week",
      "Developed Python scripts for data quality checks",
      "Presented findings to senior leadership",
    ],
    icon: Briefcase,
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
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">
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
