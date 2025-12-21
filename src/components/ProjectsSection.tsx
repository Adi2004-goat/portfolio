import { motion } from "framer-motion";
import { Github, ExternalLink, LineChart, Shield, Building, Bot } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: typeof LineChart;
}

const projects: Project[] = [
  {
    title: "Stock Price Predictor System",
    description: "Built LSTM neural network achieving 92% accuracy for NIFTY 50 stock predictions. Collected 5 stock datasets (2000–2025), engineered technical indicators (SMA, EMA, MACD, RSI), and developed interactive Streamlit dashboard.",
    techStack: ["Python", "Pandas", "TensorFlow", "LSTM", "Streamlit", "yfinance"],
    githubUrl: "https://github.com/adityabohra",
    liveUrl: "https://demo.com",
    icon: LineChart,
  },
  {
    title: "Credit Risk & Fraud Detection System",
    description: "Analyzed German Credit Risk dataset (1,000+ records) to identify borrower risk patterns. Implemented Logistic Regression and XGBoost achieving AUC > 0.93 with comprehensive comparison reports.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Seaborn", "Matplotlib"],
    githubUrl: "https://github.com/adityabohra",
    icon: Shield,
  },
  {
    title: "Savills DataFest'25 Office Leasing Analysis",
    description: "Partnered with Savills to analyze U.S. tech leasing trends. Used KNN imputation for data cleaning, enriched with Census/labor market data, built Power BI dashboards for market insights.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"],
    githubUrl: "https://github.com/adityabohra",
    icon: Building,
  },
  {
    title: "KAIRO – AI Red-Teaming Platform",
    description: "Built automated platform to test and identify security weaknesses in agentic AI systems. Developed scalable modules for attack crafting, orchestration, and result aggregation with clear vulnerability reports.",
    techStack: ["Python", "FastAPI", "LangChain", "OpenAI API", "Gemini"],
    githubUrl: "https://github.com/adityabohra",
    icon: Bot,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container section-padding bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Real-world applications showcasing analytics, machine learning, and data-driven decision making.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-card rounded-xl p-6 md:p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <project.icon className="w-6 h-6 text-accent" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
