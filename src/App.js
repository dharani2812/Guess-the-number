import { useState } from 'react';
import './App.css';
import Result from './Result';
import Celebration from './Celebration'; // Import the animation component

function App() {
  const generateSecretNum = () => Math.floor(Math.random() * 10) + 1;

  const [secretnum, setSecretNum] = useState(generateSecretNum());
  const [number, setNumber] = useState('');
  const [chances, setChances] = useState(5);
  const [message, setMessage] = useState('');
  const [showCelebration, setShowCelebration] = useState(false); // Controls animation

  function handleChange(e) {
    const value = e.target.value;
    setNumber(value);

    if (value.trim() !== "") {
      // Only subtract chances if the input is valid
      setChances((prevChances) => Math.max(prevChances - 1, 0)); // Prevent chances from going below 0
    }

    const guess = parseInt(value, 10);

    if (isNaN(guess) || guess < 1 || guess > 10) {
      setMessage("Enter a valid number between 1 and 10.");
    } else if (guess > secretnum) {
      setMessage("Too High!");
    } else if (guess < secretnum) {
      setMessage("Too Low!");
    } else {
      setMessage("Awesome! You are Correct!");
      setShowCelebration(true); // Show flying birds/flowers
      setTimeout(() => resetGame(), 2000); // Reset after 2 seconds
      return;
    }

    if (chances === 1) {
      setMessage(`Out of chances! The correct number was ${secretnum}.`);
      setTimeout(() => resetGame(), 2000); // Reset after 2 seconds
    }
  }

  function handleFocus() {
    setMessage(""); // Clear the message when clicking the input
  }

  function resetGame() {
    setChances(5);
    setSecretNum(generateSecretNum());
    setNumber('');
    setMessage('');
    setShowCelebration(false); // Hide animation after reset
  }

  return (
    <div className="container">
      {showCelebration && <Celebration />} {/* Display flying animation */}
      <div className="head">
        <label htmlFor="term">Guess the Number Between 1 to 10:</label>
        <input
          id="term"
          name="term"
          type="number"
          min="1"
          max="10"
          value={number}
          onFocus={handleFocus}
          onChange={handleChange}
        />
      </div>
      <Result message={message} />
      <p className="chances">Chances Left: {chances}</p>
    </div>
  );
}

export default App;
