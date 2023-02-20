// Import the styles module from the style.module.css file, and import image files from the images folder
import styles from "./style.module.css";
import image1 from "../../images/state1.GIF";
import image2 from "../../images/state2.GIF";
import image3 from "../../images/state3.GIF";
import image4 from "../../images/state4.GIF";
import image5 from "../../images/state5.GIF";
import image6 from "../../images/state6.GIF";
import image7 from "../../images/state7.GIF";
import image8 from "../../images/state8.GIF";
import image9 from "../../images/state9.GIF";
import image10 from "../../images/state10.GIF";
import image11 from "../../images/state11.GIF";

// Define the Images component using arrow function syntax and destructuring the index and gameOver props
const Images = (props) => {
  const { index, gameOver } = props;

  // Create an array of image sources that correspond to the number of wrong guesses
  const imageSources = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  // Render an <img> element, but only render the <img> element if gameOver is false
  return (
    <>
      {!gameOver && <img src={imageSources[index]} alt={props.alt} />}
    </>
  );
};

// Export the Images component to be used in other files
export default Images;
