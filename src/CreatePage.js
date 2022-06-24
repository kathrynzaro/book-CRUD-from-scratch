import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createBook } from './services/fetch-utils';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const { push } = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const book = await createBook({
      title: title,
      author: author,
      year: year
    });

    console.log(book);

    setAuthor('');
    setTitle('');
    setYear('');

    push('/books');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input onChange={e => setTitle(e.target.value)} value={title} />
        </label>
        <label>
          Author
          <input onChange={e => setAuthor(e.target.value)} value={author} />
        </label>
        <label>
          Year
          <input onChange={e => setYear(e.target.value)} value={year} />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
}


// CreatePage() : Tracks form state for your item's fields. Uses controlled form inputs (value property is linked to react state)	2
// CreatePage() : On submit, create a item in supabase using form data and redirect user back to the list page using the correct react-router-dom hook	