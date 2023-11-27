import Note from "./Note.jsx";
import AddNote from "./AddNote.jsx";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleNewNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
