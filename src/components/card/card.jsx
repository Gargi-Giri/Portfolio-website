// import styles from "./Card.module.css";

// function Card({
//   width = "100%",
//   height = "auto",

//   backgroundColor = "#ffffff",

//   borderRadius = "32px",

//   title,
//   description,

//   titleSize = "2rem",
//   descriptionSize = "1rem",

//   textColor = "#111827",

//   image,

//   imageWidth = "120px",
//   imageHeight = "120px",

//   imageFrame = false,
//   imageFrameColor = "#4285f4",

//   imagePosition = "top",

//   children,
// }) {
//   return (
//     <div
//       className={styles.card}
//       style={{
//         width,
//         height,
//         backgroundColor,
//         borderRadius,
//       }}
//     >
//       {image && imagePosition === "top" && (
//         <div
//           className={`${styles.imageContainer} ${
//             imageFrame ? styles.framed : ""
//           }`}
//           style={{
//             borderColor: imageFrameColor,
//             width: imageWidth,
//             height: imageHeight,
//           }}
//         >
//           <img
//             src={image}
//             alt={title}
//             className={styles.image}
//           />
//         </div>
//       )}

//       <div className={styles.content}>
//         {title && (
//           <h2
//             className={styles.title}
//             style={{
//               color: textColor,
//               fontSize: titleSize,
//             }}
//           >
//             {title}
//           </h2>
//         )}

//         {description && (
//           <p
//             className={styles.description}
//             style={{
//               color: textColor,
//               fontSize: descriptionSize,
//             }}
//           >
//             {description}
//           </p>
//         )}

//         {children}
//       </div>

//       {image && imagePosition === "bottom" && (
//         <div
//           className={`${styles.imageContainer} ${
//             imageFrame ? styles.framed : ""
//           }`}
//           style={{
//             borderColor: imageFrameColor,
//             width: imageWidth,
//             height: imageHeight,
//           }}
//         >
//           <img
//             src={image}
//             alt={title}
//             className={styles.image}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Card;



import styles from "./card.module.css";

function Card({
  width = "100%",
  height = "auto",

  borderRadius = "32px",

  backgroundColor,

  title,
  description,

  titleSize = "2rem",
  descriptionSize = "1rem",

  textColor,

  image,

  imageWidth = "120px",
  imageHeight = "120px",

  imageFrame = false,
  imageFrameColor,

  imagePosition = "top",

  layout = "vertical",

  hoverable = true,

  children,
}) {
  const cardStyle = {
    width,
    height,
    borderRadius,

    ...(backgroundColor && {
      backgroundColor,
    }),
  };

  const titleStyle = {
    fontSize: titleSize,

    ...(textColor && {
      color: textColor,
    }),
  };

  const descriptionStyle = {
    fontSize: descriptionSize,

    ...(textColor && {
      color: textColor,
    }),
  };

  return (
    <div
      className={`${styles.card} ${
        layout === "horizontal"
          ? styles.horizontal
          : styles.vertical
      } ${
        hoverable
          ? styles.hoverable
          : ""
      }`}
      style={cardStyle}
    >
      {image && (
        <div
          className={`${styles.imageContainer} ${
            imageFrame
              ? styles.framed
              : ""
          }`}
          style={{
            width: imageWidth,
            height: imageHeight,

            ...(imageFrameColor && {
              borderColor:
                imageFrameColor,
            }),
          }}
        >
          <img
            src={image}
            alt={title}
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.content}>
        {title && (
          <h2
            className={styles.title}
            style={titleStyle}
          >
            {title}
          </h2>
        )}

        {description && (
          <p
            className={
              styles.description
            }
            style={descriptionStyle}
          >
            {description}
          </p>
        )}

        {children}
      </div>
    </div>
  );
}

export default Card;