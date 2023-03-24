import { useEffect, useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [resultColor, setResultColor] = useState(undefined);
  const choices = ["🪨", "📄", "✂️"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case "✂️📄":
        case "🪨✂️":
        case "📄🪨":
          setResult("You won!");
          setResultColor("green");
          break;
        case "📄✂️":
        case "✂️🪨":
        case "🪨📄":
          setResult("You lost!");
          setResultColor("red");
          break;
        case "🪨🪨":
        case "📄📄":
        case "✂️✂️":
          setResult("Tie!");
          setResultColor("black");
          break;
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center text-xl">
        <h1 className="text-4xl pb-5">Rock Paper Scissors</h1>
        <div className="flex justify-center items-center mb-3">
          <h1 className="pr-4">Player: {userChoice}</h1>
          <h1>Computer: {computerChoice}</h1>
        </div>
        <div>
          {choices.map((choice, index) => (
            <button
              key={index}
              className="px-4 py-1.5 text-2xl rounded-xl text-white bg-slate-700 m-2 hover:bg-slate-800"
              onClick={() => handleClick(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
        <h1 style={{ color: resultColor }} className="text-3xl mt-2">
          {result}
        </h1>
      </div>
    </div>
  );
};
export default App;
