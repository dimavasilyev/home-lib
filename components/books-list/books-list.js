import Book from './book';

const BooksList = ({ books = [] }) => {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BooksList;
