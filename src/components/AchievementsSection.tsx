import { motion } from "framer-motion";
import { Award, Trophy, GraduationCap, Star } from "lucide-react";

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
    year: "2022 - Present",
    description: "Maintained 3.8+ GPA across all semesters in Data Science program.",
    icon: GraduationCap,
  },
  {
    title: "1st Place - Data Analytics Hackathon",
    organization: "ASU Fulton Schools",
    year: "2023",
    description: "Built predictive model for urban traffic optimization using real-time data.",
    icon: Trophy,
  },
  {
    title: "Undergraduate Research Scholarship",
    organization: "ASU FURI Program",
    year: "2023",
    description: "Awarded funding for ML research in financial risk prediction.",
    icon: Star,
  },
  {
    title: "Outstanding Student Leader",
    organization: "ASU Student Organizations",
    year: "2023",
    description: "Recognized for exceptional contribution to tech community building.",
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
          Achievements
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Academic honors, competitions, and leadership recognition.
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
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <achievement.icon className="w-7 h-7 text-accent" />
            </div>

            {/* Year */}
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              {achievement.year}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">
              {achievement.title}
            </h3>

            {/* Organization */}
            <p className="text-sm text-muted-foreground mb-3">
              {achievement.organization}
            </p>

            {/* Description */}
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
