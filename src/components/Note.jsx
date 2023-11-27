import { Trash3 } from "react-bootstrap-icons";
const Note = ({ note, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{note.title}</span>
      <p>{note.description}</p>
      <div className="note-footer">
        <small>{note.date}</small>
        <Trash3
          onClick={() => handleDeleteNote(note.id)}
          className="delete-icon"
          size={25}
        ></Trash3>
      </div>
    </div>
  );
};

export default Note;
