import { useState, useEffect } from "react";

const App = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "sv"
  );
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notesLanguage")) || []
  );
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("notesLanguage", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() === "") {
      return;
    }
    const id = Math.floor(Math.random() * 1000000);
    const note = { id, language, text: newNote };
    setNotes([...notes, note]);
    setNewNote("");
  };

  const removeNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const filteredNotes = notes.filter((note) => note.language === language);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      addNote();
    }
  };

  const Text = () => {
    switch (language) {
      case "fi":
        return "Lisätä huomautus";
      default:
        return "Lägg till anteckning";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl bg-[#131615] text-white">
      <select
        className="w-auto text-xl rounded-md px-2 py-1 bg-[#2E3532]"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="sv">Svenska</option>
        <option value="fi">Suomi</option>
      </select>
      <div className="mt-2 w-[350px] max-h-[600px] rounded-md overflow-y-auto">
        <main>
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-[#2E3532] rounded-md flex flex-col items-center justify-between px-4 my-3 py-3 w-full"
            >
              <p className="flex justify-start items-start w-full max-h-[100px] truncate whitespace-normal border-b border-white">
                {note.text}
              </p>
              <button
                className="mt-3 hover:bg-red-400 w-full flex items-center justify-center rounded-md"
                onClick={() => removeNote(note.id)}
              >
                <img src="trash-bold.svg" alt="Trash" className="w-6" />
              </button>
            </div>
          ))}
        </main>
      </div>
      <div className="flex flex-col items-center justify-center">
        <input
          className="w-[350px] h-auto my-3 p-2 rounded-md bg-[#4b341b] resize-none"
          value={newNote}
          placeholder="Text"
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={handleKeyPress}
          type="text"
          inputMode="text"
        />
                <button
          className="px-3 py-1 bg-[#2E86AB] rounded-md focus:outline-none"
          onClick={addNote}
        >
          {Text()}
        </button>
      </div>
    </div>
  );
};

export default App;
