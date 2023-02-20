// Import the styles module from the style.module.css file.
import styles from "./style.module.css";

// Define a functional component called Rules
const Rules = () => {
  // Render the component
  return (
    <>
      <div className={`${styles.forumPost} ${styles.btn}`}>
        <a
          href="#hide"
          className={`${styles.hide} ${styles.btnRules}`}
          id="hide"
        >
          Help.The rules of the game.
        </a>
        <a
          href="#show"
          className={`${styles.show} ${styles.btnRules}`}
          id="show"
        >
          Hide the rules of the game.
        </a>
        <div className={`${styles.spoiler}`}>
          <p className={`${styles.spoilerContent}`}>
            <h2>The rules of the game</h2>
            <ul>
              <li>
                The computer selects a word or phrase, and displays a row of
                dashes representing each letter of the word or phrase.
              </li>
              <li>The player guesses one letter at a time.</li>
              <li>
                If the guessed letter is in the word or phrase, the computer
                fills in all corresponding blanks.
              </li>
              <li>
                If the guessed letter is not in the word or phrase, the computer
                draws a part of the hanging man's body on the screen.
              </li>
              <li>
                The player continues guessing letters until they guess the word
                or phrase correctly, or the computer completes the drawing of
                the hanging man.
              </li>
              <li>
                The player wins if they guess the word or phrase correctly
                before the hanging man is fully drawn, and loses if the hanging
                man is fully drawn before they guess the word or phrase.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

// Export the Rules component to be used in other files
export default Rules;
