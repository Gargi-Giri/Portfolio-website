import Card from "../../../components/card/card";

function HeroCard() {
  return (
    <Card
      layout="horizontal"
      width="100%"
      height="600px"
      borderRadius="48px"
      image="/PLACEHOLDER_PROFILE_IMAGE.jpg"
      imageWidth="250px"
      imageHeight="250px"
      imageFrame
    >
      <h1>YOUR_NAME_HERE</h1>

      <h3>
        YOUR_PROFESSIONAL_TITLE_HERE
      </h3>

      <p>
        WRITE_SHORT_INTRO_HERE
      </p>

      <div>
        <button>
          Download Resume
        </button>

        <button>
          Contact Me
        </button>
      </div>
    </Card>
  );
}

export default HeroCard;