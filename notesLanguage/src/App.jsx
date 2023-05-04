import { useState, useEffect } from "react";

const App = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "sv"
  );
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() === "") {
      return;
    }
    const id = Math.floor(Math.random() * 1000000);
    const note = { id, language, content: newNote };
    setNotes([...notes, note]);
    setNewNote("");
  };

  const removeNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const filteredNotes = notes.filter((note) => note.language === language);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl bg-slate-600 text-white">
      <select
        className="w-auto text-xl rounded-xl px-3 py-2 bg-[#0E103D]"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="sv">Svenska</option>
        <option value="fi">Suomi</option>
      </select>
      <div className="mt-5 w-auto max-h-[300px] rounded-xl overflow-y-auto">
        <main>
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-[#0E103D] rounded-xl flex items-center justify-between px-6 my-2 py-2 w-full"
            >
              <p className="mr-4 truncate max-w-[250px]">{note.content}</p>
              <button
                className="p-1 rounded-xl focus:outline-none"
                onClick={() => removeNote(note.id)}
              >
                <img src="trash-bold.svg" alt="Trash" className="w-6" />
              </button>
            </div>
          ))}
        </main>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <textarea
          className="w-full h-20 my-3 p-2 rounded-xl bg-[#0E103D] resize-none"
          value={newNote}
          placeholder="Lägg till text..."
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button
          className="px-3 py-2 bg-blue-900 rounded-xl focus:outline-none"
          onClick={addNote}
        >
          Lägg till anteckning
        </button>
      </div>
    </div>
  );
};

export default App;
