const BookListItem = ({ volumeInfo, onClick }) => {
  const { title, imageLinks, authors } = volumeInfo;

  const authorsString = authors?.slice(0, 3).join(', ');
  const titleString = title.length > 20 ? `${title.substring(0, 20)}...` : title;

  return (
    <div
      onClick={onClick}
      className="max-w-xs w-56 mr-12 mb-10 rounded overflow-hidden shadow-lg cursor-pointer bg-white"
    >
      <img className="w-full" src={imageLinks?.smallThumbnail} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2" title={title}>
          {titleString}
        </div>
        <p className="text-gray-700 text-base">{authorsString}</p>
      </div>
    </div>
  );
};

export default BookListItem;
