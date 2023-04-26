import { useState, useEffect } from "react";

const App = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const Language = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const Text = () => {
    switch (language) {
      case "fi":
        return "Hei, tämä on tekstilaatikko!";
      case "sv":
        return "Hej, det här är en textlåda!";
      default:
        return "Hello, this is a box of text!";
    }
  };

  return (
    <div className="flex flex-col text-center justify-center items-center h-screen text-xl">
      <div className="bg-slate-200 px-4 py-2 rounded-xl m-4">{Text()}</div>
      <div className="flex select-none">
        <div onClick={() => Language("fi")}>
          <img
            src="fi.webp"
            alt="Finnish"
            className="w-52 h-32 mx-4 my-3 cursor-pointer rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition duration-300 ease-in-out"
          />
          <p>Finnish</p>
        </div>
        <div onClick={() => Language("sv")}>
          <img
            src="se.webp"
            alt="Swedish"
            className="w-52 h-32 mx-4 my-3 cursor-pointer rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition duration-300 ease-in-out"
          />
          <p>Swedish</p>
        </div>
        <div onClick={() => Language("en")}>
          <img
            src="gb.webp"
            alt="English"
            className="w-52 h-32 mx-4 my-3 cursor-pointer rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition duration-300 ease-in-out"
          />
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default App;
