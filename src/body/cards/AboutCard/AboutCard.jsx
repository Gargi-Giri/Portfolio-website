import Card from "../../../components/card/card";

function AboutCard() {
  return (
    <Card
      width="inherit"
      borderRadius="40px"
      title="About Me"
      description="WRITE_YOUR_ABOUT_DESCRIPTION_HERE"
    >
      {/* Add additional content here */}

      <div>
        <h3>Education</h3>
        <p>WRITE_EDUCATION_HERE</p>
      </div>

      <div>
        <h3>Current Role</h3>
        <p>WRITE_CURRENT_ROLE_HERE</p>
      </div>
    </Card>
  );
}

export default AboutCard;