// Import the styles module from the style.module.css file
import styles from "./style.module.css";

// Define the Result component using arrow function syntax and destructuring the answer and guessedLetters props
const Result = (props) => {
  const { answer, guessedLetters } = props;

  // Render a <p> element that displays underscores for any letters in the answer that haven't been guessed yet, and displays the correctly guessed letters
  return (
    <>
      <p>
        {answer
          .split("")
          .map((letter) =>
            guessedLetters.has(letter.toLowerCase()) ? letter : "_ "
          )}
      </p>
    </>
  );
};

// Export the Result component to be used in other files
export default Result;
