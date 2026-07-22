import HeroCard from "./cards/HeroCard/HeroCard";
import AboutCard from "./cards/AboutCard/AboutCard";
import ExperienceCard from "./cards/ExperienceCard/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard/ProjectsCard";
import SkillsCard from "./cards/SkillsCard/SkillsCard";
import ContactMeCard from "./cards/contactMeCard/ContactMeCard";

import styles from "./body.module.css";

function Body() {
  return (
    <main className={styles.body}>
      <section
        id="home"
        className={styles.section}
      >
        <HeroCard />
      </section>

      <section
        id="about"
        className={styles.section}
      >
        <AboutCard />
      </section>

      <section
        id="experience"
        className={styles.section}
      >
        <ExperienceCard />
      </section>

      <section
        id="projects"
        className={styles.section}
      >
        <ProjectsCard />
      </section>

      <section
        id="skills"
        className={styles.section}
      >
        <SkillsCard />
      </section>

      <section
        id="contact"
        className={styles.section}
      >
        <ContactMeCard />
      </section>
    </main>
    
  );
}

export default Body;