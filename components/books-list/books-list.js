import BookListItem from './book-list-item';

const BooksList = ({ books = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {books.map((book) => (
        <BookListItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BooksList;
