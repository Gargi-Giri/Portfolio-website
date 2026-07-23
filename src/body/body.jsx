

import styles from "./body.module.css";

import HeroCard from "./cards/HeroCard/HeroCard";
import AboutCard from "./cards/AboutCard/AboutCard";
import ExperienceCard from "./cards/ExperienceCard/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard/ProjectsCard";
import SkillsCard from "./cards/SkillsCard/SkillsCard";
import ContactMeCard from "./cards/contactMeCard/ContactMeCard";
import AchievementCard from "./cards/AchievementCard/AchievementCard";


function Body() {
  return (
    <main className={styles.body}>
      {/* HERO */}
      <section
        id="home"
        className={styles.heroSection}
      >
        <HeroCard />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>
          About
        </h2>

        <AboutCard />
      </section>

      {/* ACHIEVEMENTS */}
      <section
        id="achievements"
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>
          Achievements
        </h2>

        <div className={styles.achievementContainer}>
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>
          Experience
        </h2>

        <div className={styles.experienceContainer}>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>
          Projects
        </h2>

        <div className={styles.projectGrid}>
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>
          Skills
        </h2>

        <SkillsCard />
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>
          Contact Me
        </h2>

        <ContactMeCard />
      </section>
    </main>
  );
}

export default Body;