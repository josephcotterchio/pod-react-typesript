import React from 'react';

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
  return (
    <div key={props.index}>
      <p style={{ textDecoration: note.complete ? 'line-through' : '' }}>
        {note.text}
      </p>
      <button type="button" onClick={(): void => completeNote(index)}>
        {note.complete ? 'Incomplete' : 'Complete'}
      </button>
      <button type="button" onClick={(): void => deleteNote(index)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
