import React, { Fragment, useState } from 'react';
import Note from './components/Note';

type FormElement = React.FormEvent<HTMLFormElement>;

interface INote {
  text: string;
  complete: boolean;
}

//JSX.Element: TS custom definition
function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [notes, setNotes] = useState<INote[]>([]);
  const [editNote, setEditNote] = useState(false);
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
  console.log(notes);

  const completeNote = (index: number): void => {
    const newNotes: INote[] = [...notes];
    // switch complete state
    newNotes[index].complete = !newNotes[index].complete;
    setNotes(newNotes);
  };

  const deleteNote = (index: number): void => {
    const newNotes: INote[] = [...notes];
    newNotes.splice(index, 1);
    // newTodos = todos.filter((todo: ITodo) => todo !== newTodos[index]); This also work but must `let newTodos`
    setNotes(newNotes);
  };

  return (
    <>
      <h1>My notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add note</button>
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
            />
          );
        })}
      </section>
    </>
  );
}
export default App;
