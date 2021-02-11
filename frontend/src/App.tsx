import React, { Fragment, useState } from 'react';
import Note from './components/Note';

type FormElement = React.FormEvent<HTMLFormElement>;

interface INote {
  text: string;
  complete: boolean;
}

//JSX.Element: TS custom definition
function App(): JSX.Element {
  const [value, setValue] = useState<string>(' ');
  const [notes, setNotes] = useState<INote[]>([ ]);
  // debugger;

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addNote(value);
    setValue('');
  };

  const addNote = (text: string): void => {
    const newNotes: INote[] = [...notes, { text, complete: false }];
    setNotes(newNotes);
  };

  const completeNote = (index: number): void => {
    const newNotes: INote[] = [...notes];
    // switch complete state
    newNotes[index].complete = !newNotes[index].complete;
    setNotes(newNotes);
  };

  const deleteNote = (index: number): void => {
    const newNotes: INote[] = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const editNote = (index: number, text: string): void => {
    const newNotes: INote[] = [...notes];
    newNotes[index].text = text;
    setNotes(newNotes);
  };

  return (
    <>
      <h1>Notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add new note</button>
      </form>
      <section>
        {notes.map((note: INote, index: number) => {
          return (
            <Note
              key={'note' + index}
              note={note}
              index={index}
              completeNote={completeNote}
              deleteNote={deleteNote}
              editNoteContent={editNote}
            />
          );
        })}
      </section>
    </>
  );
}
export default App;
