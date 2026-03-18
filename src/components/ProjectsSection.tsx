import { motion } from "framer-motion";
import { Github, ExternalLink, LineChart, Shield, Building, Bot, Activity } from "lucide-react";

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
    description: "Collected & cleaned 5 NIFTY 50 stock datasets (2000–2025); integrated yfinance API for real-time updates. Engineered technical indicators (SMA 50, EMA 50, MACD, RSI) and implemented Linear Regression, Random Forest, and LSTM models achieving 92% accuracy.",
    techStack: ["Python", "Pandas", "TensorFlow", "LSTM", "Streamlit", "yfinance"],
    githubUrl: "https://github.com/adityabohra",
    liveUrl: "https://demo.com",
    icon: LineChart,
  },
  {
    title: "Credit Risk & Fraud Detection",
    description: "Cleaned & analyzed the German Credit Risk dataset (1,000+ records); performed EDA to identify borrower risk patterns. Implemented Logistic Regression and XGBoost achieving AUC > 0.93.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Seaborn", "Matplotlib"],
    githubUrl: "https://github.com/adityabohra",
    icon: Shield,
  },
  {
    title: "Savills – DataFest'25 Leasing Analysis",
    description: "Partnered with Savills to analyze U.S. tech leasing trends. Processed data with KNN imputation, enriched with Census/labor market data. Built Power BI dashboards for predictive insights.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"],
    githubUrl: "https://github.com/adityabohra",
    icon: Building,
  },
  {
    title: "KAIRO – AI Red-Teaming Platform",
    description: "Built an automated platform to test security weaknesses in agentic AI systems. Developed scalable modules connected to OpenAI, Anthropic, and Gemini models with clear vulnerability reports.",
    techStack: ["Python", "FastAPI", "LangChain", "OpenAI API", "Gemini"],
    githubUrl: "https://github.com/adityabohra",
    icon: Bot,
  },
  {
    title: "ReForm – AI Physiotherapy Assistant",
    description: "Built a real-time AI physiotherapy assistant with MediaPipe pose detection, vector-based joint angle computation, and interactive analytics dashboards for session performance tracking.",
    techStack: ["Next.js", "React", "TypeScript", "MediaPipe", "Recharts", "Zustand"],
    githubUrl: "https://github.com/adityabohra",
    icon: Activity,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container section-padding relative">
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative z-10"
      >
        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-3 block">
          // Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Featured Work
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Real-world applications showcasing financial analytics, machine learning, AI security, and data-driven decision making.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group bg-card rounded-xl p-6 md:p-8 glow-border hover:border-accent/20 hover:shadow-glow transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <project.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-[11px] font-mono bg-secondary text-muted-foreground rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-mono"
              >
                <Github size={14} />
                <span>Code</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-mono"
                >
                  <ExternalLink size={14} />
                  <span>Demo</span>
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
