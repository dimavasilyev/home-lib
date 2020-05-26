import { useState, useCallback } from 'react';
import Modal from '../../modal';
import AddReviewModal from '../../modals/add-review-modal';
import { useModal, useGlobalState } from '../../../hooks';
import api from '../../../api';

import AddToShelf from './add-to-shelf';
import Review from './review';

const BookDetailsModal = ({ bookId, ...props }) => {
  const [details, setDetails] = useState({});
  const { isOpen, openModal, modalProps } = useModal();
  const {
    setGlobalState,
    globalState: {
      reviews: { byBookId },
    },
  } = useGlobalState();

  const { volumeInfo = {} } = details;
  const { categories, description, imageLinks = {}, title, publisher, authors } = volumeInfo;

  const fetchBookDetails = async () => {
    try {
      const data = await api.getBookById(bookId);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBookReview = useCallback(() => {
    if (Object.keys(byBookId).includes(bookId)) {
      return byBookId[bookId];
    }
  }, [bookId, byBookId]);

  const bookReview = getBookReview();

  const addBookReview = (review) => {
    setGlobalState({
      type: 'ADD_BOOK_REVIEW',
      payload: { bookId, review },
    });
  };

  return (
    <Modal title="Book details" onAfterOpen={fetchBookDetails} {...props}>
      <img className="xs:w-full md:float-left pr-6 pb-6" src={imageLinks?.smallThumbnail} alt="" />
      <div className="font-semibold text-lg mb-2">{title}</div>
      <div className="mb-2">
        {authors?.map((author) => (
          <span key={author} className="inline-block text-sm font-semibold text-gray-700 mr-2">
            {author}
          </span>
        ))}
      </div>
      <div className="font-semibold text-gray-600 mb-3">{publisher}</div>
      {details.id && <AddToShelf book={details} />}
      <button
        onClick={openModal}
        className="mt-2 mb-8 block rounded-lg rounded-lg focus:outline-none focus:shadow-outline text-blue-700 underline"
      >
        add a review
      </button>
      <div className="mt-4">
        {categories?.map((category) => (
          <span
            key={category}
            className="inline-block bg-gray-200 mt-1 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {category}
          </span>
        ))}
      </div>
      <div
        className="text-sm mt-6 mb-4"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <hr className="mb-4" />
      {bookReview && <Review {...bookReview} />}
      {isOpen && <AddReviewModal isOpen={isOpen} onSubmit={addBookReview} {...modalProps} />}
    </Modal>
  );
};

export default BookDetailsModal;
