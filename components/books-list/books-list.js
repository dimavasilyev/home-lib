import { useCallback } from 'react';
import BookListItem from './book-list-item';
import BookDetailsModal from '../modals/book-details-modal/book-details-modal';
import { useModal } from '../../hooks';

const BooksList = ({ books = [] }) => {
  const { isOpen, openModalWithProps, modalProps } = useModal();

  const handleListItemClick = useCallback((id) => {
    openModalWithProps({ bookId: id });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {books.map((book) => (
        <BookListItem key={book.id} {...book} onClick={() => handleListItemClick(book.id)} />
      ))}
      {isOpen && <BookDetailsModal isOpen={isOpen} {...modalProps} />}
    </div>
  );
};

export default BooksList;
