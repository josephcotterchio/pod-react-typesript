import React, { useState } from 'react';

interface INote {
  text: string;
  complete: boolean;
}

interface Props {
  note: INote;
  index: number;
  deleteNote: (index: number) => void;
  completeNote: (index: number) => void;
}

function Note(props: Props) {
  const { note, index, completeNote, deleteNote } = props;
  const [editNote, setEditNote] = useState(false);
  return (
    <div key={props.index}>
      {editNote ? (
        <>
          <input value={note.text}></input>
          <button
            type="button"
            onClick={() => {
              setEditNote(true);
            }}
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              setEditNote(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <p style={{ textDecoration: note.complete ? 'line-through' : '' }}>
            {note.text}
          </p>

          <button type="button" onClick={(): void => completeNote(index)}>
            {note.complete ? 'Incomplete' : 'Complete'}
          </button>
          <button type="button" onClick={(): void => deleteNote(index)}>
            Delete
          </button>
          <button
            type="button"
            onClick={() => {
              setEditNote(true);
            }}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default Note;
