import Link from 'next/link';

const ShelfListItem = ({ id, title, category, onClick }) => {
  return (
    <Link href="/shelves/[id]" as={`/shelves/${id}`}>
      <div onClick={onClick} className="w-full pointer min-w-full cursor-pointer">
        <div className="flex flex-wrap items-center mb-1">
          <span className="text-2xl font-semibold mr-3">{title}</span>
          {category && (
            <span className="inline-block bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {category}
            </span>
          )}
        </div>
        <div className="w-full h-6 bg-yellow-800 rounded-md" />
      </div>
    </Link>
  );
};

export default ShelfListItem;
