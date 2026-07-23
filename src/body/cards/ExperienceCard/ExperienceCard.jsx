import Card from "../../../components/card/card";

function ExperienceCard() {
  return (
    <Card
      layout="horizontal"
      width="inherit"
      borderRadius="36px"
      image="/PLACEHOLDER_COMPANY_LOGO.png"
      imageWidth="120px"
      imageHeight="120px"
      imageFrame
    >
      <h2>COMPANY_NAME</h2>

      <p>JOB_TITLE</p>

      <p>DURATION</p>

      <p>
        WRITE_EXPERIENCE_DESCRIPTION_HERE
      </p>
    </Card>
  );
}

export default ExperienceCard;