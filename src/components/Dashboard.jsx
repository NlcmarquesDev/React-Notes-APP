import { useState } from "react";

import NoteList from "./NoteList.jsx";
import Search from "./Search.jsx";
import { NOTES } from "../dataNotes.js";

const Dashboard = () => {
  const [notes, setNotes] = useState(NOTES);
  let newID = notes[notes.length - 1].id;
  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const newNote = { ...text, id: newID + 1 };
    setNotes((prevData) => {
      return [...prevData, newNote];
    });
  };

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  // console.log("data:", notes);
  console.log(searchText);
  return (
    <>
      <div className="container">
        <Search handleSearch={setSearchText} />
        <NoteList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </>
  );
};

export default Dashboard;
