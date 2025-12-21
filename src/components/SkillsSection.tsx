import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Tools",
    skills: ["Python", "R", "SQL", "Git", "VS Code", "Jupyter", "Docker", "Linux"],
  },
  {
    title: "Data Science & Analytics",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Statistical Analysis", "EDA", "A/B Testing", "ETL Pipelines"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "XGBoost", "NLP", "Deep Learning", "Time Series", "Feature Engineering"],
  },
  {
    title: "Data Visualization & BI",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Streamlit"],
  },
  {
    title: "Finance & Quantitative",
    skills: ["Financial Modeling", "Risk Analysis", "Bloomberg Terminal", "Econometrics", "Portfolio Analysis"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Technical proficiencies spanning the full data science stack, from data engineering to deployment.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-secondary text-muted-foreground rounded-md hover:bg-accent/10 hover:text-accent transition-all duration-200"
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
