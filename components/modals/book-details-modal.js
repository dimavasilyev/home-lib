import { useState } from 'react';
import Modal from '../modal';
import api from '../../api';

const BookDetailsModal = ({ bookId, ...props }) => {
  // categories, description, imageLinks, averageRating, title, publisher,
  const [details, setDetails] = useState({});
  const { volumeInfo = {} } = details;
  const {
    categories,
    description,
    imageLinks,
    averageRating,
    title,
    publisher,
    authors,
    ratingsCount,
  } = volumeInfo;
  console.log('volumeInfo:', volumeInfo);
  let rating = '';

  const fetchBookDetails = async () => {
    try {
      const data = await api.getBookById(bookId);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (averageRating && ratingsCount) {
    rating = `${averageRating} / ${ratingsCount}`;
  }

  return (
    <Modal title="Book details" onAfterOpen={fetchBookDetails} {...props}>
      {/* <img src={imageLinks.smallThumbnail} alt="" /> */}

      <div className="font-semibold">{title}</div>
      {rating && <div className="font-semibold">{rating}</div>}
      <div className="">
        {authors?.map((category) => (
          <span className="inline-block text-sm font-semibold text-gray-700 mr-2">{category}</span>
        ))}
      </div>

      <div className="font-semibold">{publisher}</div>
      <div className="">
        {categories?.map((category) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {category}
          </span>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Modal>
  );
};

export default BookDetailsModal;
