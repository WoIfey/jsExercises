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

  const LanguageText = () => {
    switch (language) {
      case "fi":
        return {
          fi: "Suomi",
          sv: "Ruotsi",
          en: "Englanti",
        };
      case "sv":
        return {
          fi: "Finska",
          sv: "Svenska",
          en: "Engelska",
        };
      case "en":
      default:
        return {
          fi: "Finnish",
          sv: "Swedish",
          en: "English",
        };
    }
  };

  const SelectedText = () => {
    switch (language) {
      case "fi":
        return "Valittu kieli: 🇫🇮";
      case "sv":
        return "Valt språk: 🇸🇪";
      default:
        return "Selected Language: 🇬🇧";
    }
  };

  return (
    <div className="flex flex-col text-center justify-center items-center h-screen text-xl">
      <p>{SelectedText()}</p>
      <p className="bg-slate-200 px-4 py-2 rounded-xl m-4">{Text()}</p>
      <div className="flex select-none flex-col md:flex-row">
        <div onClick={() => Language("fi")}>
          <img
            src="fi.webp"
            alt="Finnish"
            className="w-52 h-32 mx-4 my-3 cursor-pointer rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition duration-300 ease-in-out"
          />
          <p>{LanguageText().fi}</p>
        </div>
        <div onClick={() => Language("sv")}>
          <img
            src="se.webp"
            alt="Swedish"
            className="w-52 h-32 mx-4 my-3 cursor-pointer rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition duration-300 ease-in-out"
          />
          <p>{LanguageText().sv}</p>
        </div>
        <div onClick={() => Language("en")}>
          <img
            src="gb.webp"
            alt="English"
            className="w-52 h-32 mx-4 my-3 cursor-pointer rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition duration-300 ease-in-out"
          />
          <p>{LanguageText().en}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
