import { motion } from "framer-motion";
import { Code2, Database, Brain, BarChart3, Wrench, Users } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: typeof Code2;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "SQL", "Java", "C", "C++", "MATLAB"],
    icon: Code2,
  },
  {
    title: "Data Science & Analytics",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Seaborn", "Matplotlib", "Tableau", "Alteryx", "MS Access", "statsmodels"],
    icon: Database,
  },
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Transformers (Hugging Face)", "LSTM", "NLP", "Deep Learning"],
    icon: Brain,
  },
  {
    title: "Finance & BI Tools",
    skills: ["yfinance", "Quandl", "Excel (Advanced)", "Tableau", "Power BI", "statsmodels"],
    icon: BarChart3,
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Jupyter", "VS Code", "Salesforce", "Firebase", "Google Workspace", "Microsoft 365", "Google Collab"],
    icon: Wrench,
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Communication", "Teamwork", "Problem-Solving", "Punctuality", "Work Ethic"],
    icon: Users,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container section-padding relative">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative z-10"
      >
        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-3 block">
          // Tech Stack
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Technical proficiencies spanning data science, machine learning, financial analytics, and full-stack development.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-card rounded-xl p-6 glow-border hover:border-accent/20 hover:shadow-glow transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <category.icon className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-mono bg-secondary text-muted-foreground rounded-md border border-border hover:border-accent/30 hover:text-accent transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
