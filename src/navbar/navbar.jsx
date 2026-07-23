// import { useEffect, useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";

// import styles from "./navbar.module.css";

// const sections = [
//   "home",
//   "about",
//   "achievements",
//   "experience",
//   "projects",
//   "skills",
//   "contact",
// ];

// function Navbar() {
//   const [activeSection, setActiveSection] = useState("home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "-30% 0px -50% 0px",
//       threshold: 0,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, observerOptions);

//     sections.forEach((sectionId) => {
//       const section = document.getElementById(sectionId);

//       if (section) {
//         observer.observe(section);
//       }
//     });

//     return () => observer.disconnect();
//   }, []);

//   const handleNavigation = (sectionId) => {
//     const section = document.getElementById(sectionId);

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }

//     setMenuOpen(false);
//   };

//   return (
//     <>
//       <header className={styles.header}>
//         <nav className={styles.navbar}>
//           <div
//             className={styles.logo}
//             onClick={() => handleNavigation("home")}
//           >
//             GG
//           </div>

//           <ul className={styles.navLinks}>
//             {sections.map((section) => (
//               <li key={section}>
//                 <button
//                   className={`${styles.navButton} ${
//                     activeSection === section ? styles.active : ""
//                   }`}
//                   onClick={() => handleNavigation(section)}
//                 >
//                   {section === "home"
//                     ? "Home"
//                     : section.charAt(0).toUpperCase() +
//                       section.slice(1)}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <button
//             className={styles.menuButton}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <HiX /> : <HiMenu />}
//           </button>
//         </nav>
//       </header>

//       {menuOpen && (
//         <div className={styles.mobileMenu}>
//           {sections.map((section) => (
//             <button
//               key={section}
//               className={`${styles.mobileLink} ${
//                 activeSection === section ? styles.activeMobile : ""
//               }`}
//               onClick={() => handleNavigation(section)}
//             >
//               {section === "home"
//                 ? "Home"
//                 : section.charAt(0).toUpperCase() +
//                   section.slice(1)}
//             </button>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;



import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import ThemeTrigger from "../components/themeTrigger/themeTrigger";

import styles from "./navbar.module.css";

const sections = [
  "home",
  "about",
  "achievements",
  "experience",
  "projects",
  "skills",
  "contact",
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      observerOptions
    );

    sections.forEach((sectionId) => {
      const section =
        document.getElementById(sectionId);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (sectionId) => {
    const section =
      document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div
            className={styles.logo}
            onClick={() =>
              handleNavigation("home")
            }
          >
            GG
          </div>

          <ul className={styles.navLinks}>
            {sections.map((section) => (
              <li key={section}>
                <button
                  className={`${styles.navButton} ${
                    activeSection === section
                      ? styles.active
                      : ""
                  }`}
                  onClick={() =>
                    handleNavigation(section)
                  }
                >
                  {section === "home"
                    ? "Home"
                    : section.charAt(0).toUpperCase() +
                      section.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.rightControls}>
            <ThemeTrigger />

            <button
              className={styles.menuButton}
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <HiX />
              ) : (
                <HiMenu />
              )}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {/* <div className={styles.mobileTheme}>
            <ThemeTrigger /> 
          </div> */}

          {sections.map((section) => (
            <button
              key={section}
              className={`${styles.mobileLink} ${
                activeSection === section
                  ? styles.activeMobile
                  : ""
              }`}
              onClick={() =>
                handleNavigation(section)
              }
            >
              {section === "home"
                ? "Home"
                : section.charAt(0).toUpperCase() +
                  section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;