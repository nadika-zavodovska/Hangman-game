# Hangman game

Hangman is a classic word-guessing game where one player thinks of a word and the other player has to guess the word by suggesting letters. For each incorrect guess, a part of a "hangman" is drawn, and if the player fails to guess the word before the "hangman" is completed, they lose the game. This implementation of the game is in React and uses an array of words to randomly choose a word for the player to guess. The player's guesses are tracked, and the game ends when the player has either correctly guessed the word or the "hangman" is fully drawn.

## Rules of the Hangman game

* The computer selects a word or phrase, and displays a row of dashes representing each letter of the word or phrase.

* The player guesses one letter at a time.

* If the guessed letter is in the word or phrase, the computer fills in all corresponding blanks.

* If the guessed letter is not in the word or phrase, the computer draws a part of the hanging man's body on the screen.

* The player continues guessing letters until they guess the word or phrase correctly, or the computer completes the drawing of the hanging man.

* The player wins if they guess the word or phrase correctly before the hanging man is fully drawn, and loses if the hanging man is fully drawn before they guess the word or phrase.

## Screenshot of the Hangman game
![Hangman game](hangman_game.jpg)

# Launch the Hangman game application

1. Download project from repository.
2. Install dependences by runing command  `npm install`.
3. Run `npm start` for start development mode. Project will run on localhost:3000.
4. Run `npm run build` for create release version.
