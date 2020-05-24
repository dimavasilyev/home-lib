import { useCallback } from 'react';
import BookListItem from './book-list-item';
import BookDetailsModal from '../modals/book-details-modal';
import { useModal } from '../../hooks';

const BooksList = ({ books = [] }) => {
  console.log('books:', books);
  const { isOpen, openModalWithProps, modalProps } = useModal();

  const handleListItemClick = useCallback((id) => {
    openModalWithProps({ bookId: id });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {books.map((book) => (
        <BookListItem key={book.id} {...book} onClick={() => handleListItemClick(book.id)} />
      ))}
      {isOpen && <BookDetailsModal isOpen={isOpen} {...modalProps} />}
    </div>
  );
};

export default BooksList;
