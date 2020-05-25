import { useState } from 'react';
import Modal from '../../modal';
import api from '../../../api';

import AddToShelf from './add-to-shelf';

const BookDetailsModal = ({ bookId, ...props }) => {
  const [details, setDetails] = useState({});
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
      <AddToShelf book={details} />
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
      <div className="text-sm mt-6" dangerouslySetInnerHTML={{ __html: description }} />
    </Modal>
  );
};

export default BookDetailsModal;
