import { useState } from "react";

const AddNote = ({ handleNewNote }) => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const char = 200;
  let validateInput = true;

  const [noteText, setNoteText] = useState({
    id: "",
    title: "",
    description: "",
    date: formattedDate,
    isDone: false,
  });
  function handleChangeTitle(e) {
    setNoteText((prevNote) => {
      return {
        ...prevNote,
        title: e.target.value,
      };
    });
  }
  function handleChangeDescription(e) {
    if (char - e.target.value.length >= 0) {
      setNoteText((prevNote) => {
        return {
          ...prevNote,
          description: e.target.value,
        };
      });
    }
  }

  function handleSaveClick() {
    if (
      noteText.description.trim().length > 0 &&
      noteText.title.trim().length > 0
    ) {
      handleNewNote(noteText);
      setNoteText({ title: "", description: "" });
    } else {
      validateInput = false;
    }
  }
  console.log(noteText);
  return (
    <div className="note new">
      <input
        type="text"
        className="input-title"
        placeholder="Title"
        value={noteText.title}
        onChange={handleChangeTitle}
        required
      />

      <textarea
        name=""
        placeholder="Type to add a note...."
        id=""
        cols="10"
        rows="8"
        value={noteText.description}
        onChange={handleChangeDescription}
        required
      ></textarea>

      <div className="note-footer">
        <small>{char - noteText.description.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
