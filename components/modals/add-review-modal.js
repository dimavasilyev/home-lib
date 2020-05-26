import { useState } from 'react';

import Modal from '../modal';
import RatingPicker from '../rating-picker';

const AddReviewModal = ({ onSubmit, ...props }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleTextareaChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ rating, comment });
    props.onClose();
  };

  return (
    <Modal
      title="Add a review"
      customStyles={{
        content: {
          top: '10%',
          margin: '0 auto',
          bottom: 'auto',
          width: '30%',
          minWidth: '300px',
        },
      }}
      {...props}
    >
      <form onSubmit={handleSubmit}>
        <RatingPicker rating={rating} onClick={handleRatingChange} />
        <label>
          <div className="text-lg mb-1 mt-6">Comment:</div>
          <textarea
            value={comment}
            type="text"
            className="input mb-6"
            onChange={handleTextareaChange}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddReviewModal;
