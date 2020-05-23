const BookListItem = ({ volumeInfo, onClick }) => {
  const { title, imageLinks, authors } = volumeInfo;

  const authorsString = authors?.slice(0, 3).join(', ');

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
      <img className="w-full" src={imageLinks.smallThumbnail} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{authorsString}</p>
      </div>
      {/* <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
      </div> */}
    </div>
  );
};

export default BookListItem;
