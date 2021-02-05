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
  editNoteContent: (index: number, text: string) => void;
}

function Note(props: Props) {
  const { note, index, completeNote, deleteNote, editNoteContent } = props;
  const [editNote, setEditNote] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div key={props.index}>
      {editNote ? (
        <>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button
            type="button"
            onClick={() => {
              editNoteContent(props.index, value);
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
              setValue(note.text);
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
