import Navbar from "./navbar/navbar";
import Body from "./body/body";
import Footer from "./footer/footer";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;