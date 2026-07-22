import Card from "../../../components/card/card";

function ContactMeCard() {
  return (
    <Card
      width="100%"
      borderRadius="40px"
      title="Contact Me"
      description="LET'S_CONNECT"
    >
      <form>
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
          rows="6"
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </Card>
  );
}

export default ContactMeCard;