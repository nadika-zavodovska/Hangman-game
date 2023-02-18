// Import the styles module from the style.module.css file
import styles from "./style.module.css";

// Define the Buttons component using arrow function syntax and destructuring the onPress and guessedLetters props
const Buttons = (props) => {
  const { onPress, guessedLetters } = props;

  // Use the .split() method to create an array of letters and map over it, returning a button for each letter
  return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
    // Each button has a unique key based on the letter, an onClick event listener that passes the letter to the onPress function, a disabled property that checks if the letter is in the guessedLetters Set object, and a className based on the styles.btn property
    <button
      key={letter}
      onClick={() => onPress(letter)}
      disabled={guessedLetters.has(letter)}
      className={`${styles.btn}`}
    >
      {letter}
    </button>
  ));
};

// Export the Buttons component to be used in other files
export default Buttons;
