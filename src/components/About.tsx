import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react";
import { aboutText, education, courses, personalInfo } from "@/data/portfolioData";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Get to know me
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 h-full">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {aboutText}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-background/50 rounded-lg">
                    <span className="text-3xl font-bold gradient-text">3+</span>
                    <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <span className="text-3xl font-bold gradient-text">1+</span>
                    <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education & Courses */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education Card */}
              <div className="glass-card p-6 glow-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg font-semibold text-foreground">
                      Education
                    </h4>
                    <p className="text-primary font-medium mt-1">{education.degree}</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {education.university}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {education.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award size={14} />
                        {education.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Card */}
              <div className="glass-card p-6 glow-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <BookOpen className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg font-semibold text-foreground">
                      Certifications
                    </h4>
                    <p className="text-primary font-medium mt-1">{courses.name}</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {courses.institution}
                    </p>
                    <div className="flex items-center gap-1 mt-3 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {courses.period}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info Quick View */}
              <div className="glass-card p-6">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Quick Contact
                </h4>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <span className="text-primary">Email:</span> {personalInfo.email}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-primary">Phone:</span> {personalInfo.phone}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-primary">Location:</span> {personalInfo.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
