import React from 'react';
import { useState, useEffect } from 'react';
import { getBooks } from './services/fetch-utils';
import { Book } from './Book';

export default function ListPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetch() {
      const books = await getBooks();
  
      setBooks(books);
    }
    fetch();
  }, []);

  return (
    <div className='list-page'>
      <h2>My Books</h2>
      <div className='books-list'>
        {
          books.map((book, i) => <Book book={book} key={book.author + i + book.title} />)
        }
      </div>
    </div>
  );
}


// ListPage() : Fetches and displays all items on load by using .map and the Item component.