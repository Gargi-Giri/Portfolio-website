import Card from "../../../components/card/card";

function ProjectsCard() {
  return (
    <Card
      width="inherit"
      borderRadius="36px"
      image="/PLACEHOLDER_PROJECT_IMAGE.png"
      imageWidth="100%"
      imageHeight="220px"
    >
      <h2>PROJECT_NAME</h2>

      <p>
        WRITE_PROJECT_DESCRIPTION_HERE
      </p>

      <div>
        TECHNOLOGY_1 • TECHNOLOGY_2 •
        TECHNOLOGY_3
      </div>

      <div>
        <button>Live Demo</button>

        <button>GitHub</button>
      </div>
    </Card>
  );
}

export default ProjectsCard;