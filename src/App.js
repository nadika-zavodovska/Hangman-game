// Import the App.css file to apply styling to the App component
import "./App.css";

// Import the Hangman component
import Hangman from "./Hangman";

// Define the App component
function App() {
  // Render the App component
  return (
    <div className="App">
      <section className="App-header">
        {/* Render the Hangman component */}
        <Hangman />
      </section>
    </div>
  );
}

// Export the App component to be used in other files
export default App;
