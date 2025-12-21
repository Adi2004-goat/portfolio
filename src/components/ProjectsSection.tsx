import { motion } from "framer-motion";
import { Github, ExternalLink, Database, LineChart, Brain, BarChart3 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: typeof Database;
}

const projects: Project[] = [
  {
    title: "Stock Price Prediction Model",
    description: "LSTM neural network for predicting stock movements using historical data and technical indicators.",
    techStack: ["Python", "TensorFlow", "Pandas", "yFinance", "Streamlit"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    icon: LineChart,
  },
  {
    title: "Customer Churn Analytics",
    description: "End-to-end ML pipeline predicting customer churn with 92% accuracy using ensemble methods.",
    techStack: ["Python", "XGBoost", "SHAP", "SQL", "Power BI"],
    githubUrl: "https://github.com",
    icon: BarChart3,
  },
  {
    title: "Real Estate Price Estimator",
    description: "Regression model analyzing 50+ features to estimate property values with interactive dashboard.",
    techStack: ["Python", "Scikit-learn", "Plotly", "FastAPI", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    icon: Database,
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Transformer-based sentiment analysis on financial news to gauge market sentiment.",
    techStack: ["Python", "HuggingFace", "BERT", "Flask", "PostgreSQL"],
    githubUrl: "https://github.com",
    icon: Brain,
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
            <p className="text-muted-foreground mb-4 leading-relaxed">
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
