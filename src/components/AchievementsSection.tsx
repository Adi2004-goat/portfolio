import { motion } from "framer-motion";
import { Award, GraduationCap, BookOpen, Trophy } from "lucide-react";

interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: typeof Award;
}

const achievements: Achievement[] = [
  {
    title: "Dean's List with Distinction",
    organization: "Arizona State University",
    year: "2023 – 2025",
    description: "Fall '23, Spring '24, Fall '24, Spring '25, Fall '25 — Maintained 3.90 GPA in Data Science program.",
    icon: GraduationCap,
  },
  {
    title: "NAMU Scholarship Recipient",
    organization: "Arizona State University",
    year: "2023",
    description: "Awarded merit-based scholarship for academic excellence and demonstrated potential in data science.",
    icon: Trophy,
  },
  {
    title: "Financial Markets Certification",
    organization: "Yale University (Coursera)",
    year: "2024",
    description: "Completed comprehensive course on financial markets, instruments, and investment strategies.",
    icon: BookOpen,
  },
  {
    title: "Neural Networks & Deep Learning",
    organization: "DeepLearning.AI (Coursera)",
    year: "2024",
    description: "Mastered fundamentals of neural networks and deep learning architectures.",
    icon: Award,
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-container section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Achievements & Certifications
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Academic honors, scholarships, and professional certifications in data science and finance.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <achievement.icon className="w-7 h-7 text-accent" />
            </div>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              {achievement.year}
            </span>
            <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">
              {achievement.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {achievement.organization}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
