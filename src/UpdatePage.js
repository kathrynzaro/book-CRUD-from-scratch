import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getBookById, updateBook, deleteBook } from './services/fetch-utils';

export default function UpdatePage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const { push } = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      const book = await getBookById(id);

      setTitle(book.title);
      setAuthor(book.author);
      setYear(book.year);
    }

    fetch();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await updateBook({
      title: title,
      author: author,
      year: year
    }, id);

    setTitle('');
    setAuthor('');
    setYear('');

    push('/books');
  }

  async function handleDelete() {
    await deleteBook(id);

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
        <button>Update</button>
      </form>
      <button onClick={handleDelete} className='delete'>Delete</button>
    </div>
  );
}


// CreatePage() : Tracks form state for your item's fields. Uses controlled form inputs (value property is linked to react state)	2
// CreatePage() : On submit, create a item in supabase using form data and redirect user back to the list page using the correct react-router-dom hook	

// UpdatePage() : Fetches and displays the appropriate item on load. The useEffect dependency array should account for changes in the URL id param. On Submit, update the item. On load, preload the form.