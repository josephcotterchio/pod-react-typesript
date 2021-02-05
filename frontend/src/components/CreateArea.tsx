import React, { useState } from 'react';

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={3}
        />

        <button
          onClick={(event) => {
            props.onAdd(note);
            setNote({
              title: '',
              content: '',
            });
            event.preventDefault();
            // setNote("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
