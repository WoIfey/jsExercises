import { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.title.trim() === "" || newNote.content.trim() === "") {
      return;
    }
    const id = Math.floor(Math.random() * 1000000);
    const note = {
      id,
      ...newNote,
      timeAdded: new Date().toLocaleString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    setNotes([...notes, note]);
    setNewNote({ title: "", content: "" });
  };

  const removeNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const updateNote = (id, field, value) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, [field]: value };
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl bg-[#131615] text-white">
      <div className="w-auto max-h-[600px] rounded-md overflow-y-auto">
        <main>
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-[#2E3532] rounded-md flex items-center justify-between px-4 mt-4 py-3 w-full"
            >
              <div className="flex flex-col">
                <input
                  className="mb-4 truncate max-w-[250px] bg-transparent border-b border-white outline-none focus:border-blue-400"
                  value={note.title}
                  maxLength={30}
                  placeholder="Title"
                  onChange={(e) => updateNote(note.id, "title", e.target.value)}
                />
                <textarea
                  className="max-w-[300px] h-24 bg-transparent border-b border-white outline-none focus:border-blue-400 resize-none"
                  value={note.content}
                  placeholder="Text"
                  onChange={(e) =>
                    updateNote(note.id, "content", e.target.value)
                  }
                />
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 mt-2 text-sm">{note.timeAdded}</p>
                  <button onClick={() => removeNote(note.id)} className="mt-2">
                    <div className="hover:bg-red-400 rounded-md">
                      <img src="trash-bold.svg" alt="Trash" className="w-5" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <input
          className="w-full my-3 p-2 rounded-md bg-[#2E3532] text-white outline-none focus:border-blue-400"
          value={newNote.title}
          placeholder="Title"
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          className="w-full h-20 p-2 rounded-md bg-[#2E3532] text-white resize-none outline-none focus:border-blue-400"
          value={newNote.content}
          placeholder="Text"
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button
          className="px-3 py-2 my-3 bg-[#2E86AB] rounded-md focus:outline-none"
          onClick={addNote}
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default App;
