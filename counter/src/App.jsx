import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("counter")) || 0
  );

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  function Addition() {
    setCount(count + 1);
  }

  function Subtraction() {
    setCount(count - 1);
  }

  return (
    <main className="flex flex-col justify-center items-center h-screen text-3xl bg-[#131615] text-white">
      <h1 className="text-4xl mb-2">Counter: {count}</h1>
      <div>
        <button
          className="m-3 bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 active:bg-red-600"
          onClick={Subtraction}
        >
          Remove
        </button>
        <button
          className="m-3 bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-600"
          onClick={Addition}
        >
          Add
        </button>
      </div>
    </main>
  );
};

export default App;
