import { motion } from "framer-motion";
import { Users, TrendingUp, Building2 } from "lucide-react";

interface Experience {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  icon: typeof Building2;
}

const experiences: Experience[] = [
  {
    title: "Data Analyst Intern",
    organization: "PricewaterhouseCoopers LLP (PwC)",
    location: "India",
    period: "June 2025 – July 2025",
    description: "Executed data validation, financial analysis, and automated reporting in a large-scale data warehousing environment.",
    highlights: [
      "Executed 50+ SQL validation tests to reconcile source systems vs. data marts, ensuring 95% accuracy for downstream financial reporting",
      "Analyzed 500K+ financial and operational records to define 10+ KPIs, uncover revenue drivers, and surface performance trends",
      "Built and maintained Excel dashboards (PivotTables, Power Query, advanced formulas) to automate KPI reporting, reducing manual effort by 30%",
      "Performed EDA in Python (Pandas, NumPy, Matplotlib/Seaborn) to profile data quality, identify outliers/missingness, and validate business assumptions",
    ],
    icon: Building2,
  },
  {
    title: "Futures Center Peer (Student Worker)",
    organization: "Futures Center — The College of Liberal Arts & Sciences (ASU)",
    location: "Tempe, AZ",
    period: "Sep 2025 – Present",
    description: "Analyzing graduate outcomes data to inform advising strategies through data-driven insights and statistical analysis.",
    highlights: [
      "Analyzing datasets on 1000+ ASU graduates to identify post-graduation outcomes (employment, grad school, internships)",
      "Conducting EDA with Python to detect trends/correlations that inform advising strategies",
      "Delivering visualized reports/dashboards (Seaborn, Matplotlib) to managers to enhance decision-making efficiency",
    ],
    icon: TrendingUp,
  },
  {
    title: "Director of Events & Operations",
    organization: "DevLabs, Arizona State University",
    location: "Tempe, AZ",
    period: "April 2024 – Dec 2025",
    description: "Led planning and execution of large-scale hackathons, workshops, and tech expos engaging 500+ students.",
    highlights: [
      "Led planning and execution of 20+ hackathons, workshops, and expos engaging a 500+ student community at ASU",
      "Collaborated with marketing, finance, and operations teams to ensure seamless logistics and budgeting",
      "Developed scalable frameworks to expand DevLabs' reach and strengthen ASU's entrepreneurial ecosystem",
    ],
    icon: Users,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container section-padding relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative z-10"
      >
        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-3 block">
          // Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Where I've Made Impact
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Data-driven analysis, financial modeling, and technical problem-solving across industry and academia.
        </p>
      </motion.div>

      <div className="space-y-4 relative z-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-xl p-6 md:p-8 glow-border hover:border-accent/20 hover:shadow-glow transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <exp.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 md:mt-0 md:text-right font-mono bg-secondary px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0 shadow-[0_0_6px_hsl(185_80%_55%/0.5)]" />
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
