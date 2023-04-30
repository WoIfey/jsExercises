import React, { useState } from "react";

const App = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="p-2 text-xl">Hover over me!</h1>
      <div
        className="bg-[#b95f3c] text-white h-20 w-96 rounded-xl"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && (
          <div className="text-3xl flex justify-center items-center h-full">
            {"I love schoool <3<3<3"}
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
