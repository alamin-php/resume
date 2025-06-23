import { motion, Variants } from "framer-motion";
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { ProfessionalSummary } from "@/components/resume/ProfessionalSummary";
import { TechnicalSkills } from "@/components/resume/TechnicalSkills";
import { Experience } from "@/components/resume/Experience";
import { Education } from "@/components/resume/Education";
import { Projects } from "@/components/resume/Projects";
import { ScrollToTop } from "@/components/resume/ScrollToTop";
import { Navigation } from "@/components/resume/Navigation";


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};


const Index = () => {
  return (
    <div className="min-h-screen bg-black text-resume-text font-inter">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 space-y-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <ResumeHeader />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <ProfessionalSummary />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <TechnicalSkills />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <Experience />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <Education />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <Projects />
        </motion.div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Index;
