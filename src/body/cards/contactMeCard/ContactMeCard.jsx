import Card from "../../../components/card/card";
import ContactForm from "../../../components/contactME/ContactMeForm";

import styles from "./ContactMeCard.module.css";

function ContactMeCard() {
  return (
    <Card
      width="inherit"
      borderRadius="36px"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Contact Me</h2>

          <p>
            Feel free to reach out for
            opportunities, collaborations,
            or just to say hello.
          </p>
        </div>

        <ContactForm />
      </div>
    </Card>
  );
}

export default ContactMeCard;