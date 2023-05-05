import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const Addition = () => {
    setCount(count + 1);
  };

  const Subtract = () => {
    setCount(count - 1);
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen text-2xl bg-[#131615] text-white">
      <h1 className="text-4xl mb-4">{count}</h1>
      <div>
        <button
          className="bg-red-600 px-4 py-1 rounded-l-md hover:bg-red-700 active:bg-red-600"
          onClick={Subtract}
        >
          Remove
        </button>
        <button
          className="bg-green-600 px-4 py-1 rounded-r-md hover:bg-green-700 active:bg-green-600"
          onClick={Addition}
        >
          Add
        </button>
      </div>
    </main>
  );
};

export default App;
