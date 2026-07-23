// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
// } from "react-icons/fa";

// import styles from "./footer.module.css";

// function Footer() {
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <footer className={styles.footer}>
//       <div className={styles.footerCard}>
//         <div className={styles.topSection}>
//           <div className={styles.brandSection}>
//             <h2>Gargi Giri</h2>

//             <p>
//               Software Development Engineer
//               <br />
//               Building scalable systems,
//               cloud solutions and modern web
//               applications.
//             </p>
//           </div>

//           <div className={styles.linksSection}>
//             <h3>Navigation</h3>

//             <button
//               onClick={() =>
//                 scrollToSection("home")
//               }
//             >
//               Home
//             </button>

//             <button
//               onClick={() =>
//                 scrollToSection("about")
//               }
//             >
//               About
//             </button>

//             <button
//               onClick={() =>
//                 scrollToSection("experience")
//               }
//             >
//               Experience
//             </button>

//             <button
//               onClick={() =>
//                 scrollToSection("projects")
//               }
//             >
//               Projects
//             </button>

//             <button
//               onClick={() =>
//                 scrollToSection("contact")
//               }
//             >
//               Contact
//             </button>
//           </div>

//           <div className={styles.socialSection}>
//             <h3>Connect</h3>

//             <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaGithub />
//               GitHub
//             </a>

//             <a
//               href="https://linkedin.com/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaLinkedin />
//               LinkedIn
//             </a>

//             <a href="mailto:gargi31giri07@gmail.com">
//               <FaEnvelope />
//               Email
//             </a>
//           </div>
//         </div>

//         <div className={styles.bottomSection}>
//           <p>
//             © {new Date().getFullYear()} Gargi
//             Giri. All rights reserved.
//           </p>

//           <p>
//             Designed & Developed with React
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import ThemeTrigger from "../components/themeTrigger/themeTrigger";

import styles from "./footer.module.css";

function Footer() {
  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerCard}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <h2>Gargi Giri</h2>

            <p>
              Software Development Engineer
              <br />
              Building scalable systems,
              cloud solutions and modern web
              applications.
            </p>
          </div>

          <div className={styles.linksSection}>
            <h3>Navigation</h3>

            <button
              onClick={() =>
                scrollToSection("home")
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                scrollToSection("about")
              }
            >
              About
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "achievements"
                )
              }
            >
              Achievements
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "experience"
                )
              }
            >
              Experience
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "projects"
                )
              }
            >
              Projects
            </button>

            <button
              onClick={() =>
                scrollToSection("skills")
              }
            >
              Skills
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "contact"
                )
              }
            >
              Contact
            </button>
          </div>

          <div className={styles.socialSection}>
            <h3>Connect</h3>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a href="mailto:your-email@example.com">
              <FaEnvelope />
              Email
            </a>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.leftBottom}>
            <p>
              ©{" "}
              {new Date().getFullYear()}{" "}
              Gargi Giri. All rights
              reserved.
            </p>
          </div>

          <div className={styles.rightBottom}>
            

            <p>
              Designed & Developed with
              React + Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;