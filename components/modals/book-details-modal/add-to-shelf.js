import { useCallback } from 'react';
import { useGlobalState } from '../../../hooks';

const AddToShelf = ({ book }) => {
  const {
    setGlobalState,
    globalState: {
      shelves,
      books: { byShelfId },
    },
  } = useGlobalState();

  const bookCategories = book.volumeInfo?.categories ?? [];
  const currentBookId = book.id;

  const addBookToShelf = (e) => {
    const shelfId = e.target.value;
    if (shelfId !== '+ add to shelf') {
      setGlobalState({
        type: 'ADD_BOOK_TO_SHELF',
        payload: { shelfId, book },
      });
    }
  };

  const isCategoryAllowed = useCallback((shelfId, category) => {
    const shelfCategoryNotMatch = category && !bookCategories.includes(category);
    const shelfAlreadyContainsBook = byShelfId[shelfId]?.some(
      (volume) => currentBookId === volume.id,
    );
    console.log('shelfAlreadyContainsBook:', shelfAlreadyContainsBook);
    console.log(byShelfId[shelfId], 'byShelfId[shelfId]');

    if (shelfCategoryNotMatch || shelfAlreadyContainsBook) return false;

    return true;
  }, []);

  return (
    <select
      onChange={addBookToShelf}
      className="block cursor-pointer appearance-none bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    >
      <option>+ add to shelf</option>
      {shelves.map(({ id, title, category }) => (
        <option key={id} value={id} disabled={!isCategoryAllowed(id, category)}>
          {title}
          {category && ` (${category})`}
        </option>
      ))}
    </select>
  );
};

export default AddToShelf;
