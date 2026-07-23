import { useState } from "react";

import styles from "./ContactMeForm.module.css";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "509092d8-90c4-4ada-b3f0-125f2ed168c5"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    setResult(
      data.success
        ? "Message sent successfully!"
        : "Something went wrong."
    );
  };

  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
      />

      <button type="submit">
        Send Message
      </button>

      <p className={styles.result}>
        {result}
      </p>
    </form>
  );
}