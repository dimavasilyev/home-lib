import BookDetailsModal from '../modals/book-details-modal';

const BookListItem = ({ volumeInfo, onClick }) => {
  const { title, imageLinks, authors } = volumeInfo;

  const authorsString = authors?.slice(0, 3).join(', ');

  return (
    <div onClick={onClick} className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
      <img className="w-full" src={imageLinks.smallThumbnail} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{authorsString}</p>
      </div>
    </div>
  );
};

export default BookListItem;
