import { Link } from 'react-router-dom';

export function Book({ book }) {
  return <Link style={{ textDecoration: 'none' }} to={`/books/${book.id}`} >
    <p className='book-data'>{book.title} written by {book.author} and published in {book.year}</p>
  </Link>;
}

// Item() : Renders a single item, with a react-rotuer-dom Link that takes the user to the item's edit page