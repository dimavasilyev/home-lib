import { useRouter } from 'next/router';

import Layout from '../../components/layout';
import BooksList from '../../components/books-list/books-list';
import AddReviewModal from '../../components/modals/add-review-modal';
import { useModal, useGlobalState } from '../../hooks';

const ShelfPage = () => {
  const { isOpen, openModalWithProps, modalProps } = useModal();
  const {
    query: { shelfId },
  } = useRouter();

  const {
    setGlobalState,
    globalState: {
      shelves,
      books: { byShelfId },
    },
  } = useGlobalState();

  const { title, category } = shelves.find((shelf) => shelf.id === Number(shelfId)) ?? {};
  const shelfBooks = byShelfId[shelfId] ?? [];

  const handleAddButton = () => {
    openModalWithProps();
  };

  const addShelfReview = (review) => {
    setGlobalState({ type: 'ADD_SHELF_REVIEW', payload: { shelfId, review } });
  };

  return (
    <Layout pageTitle="Shelves">
      <button
        onClick={handleAddButton}
        className="absolute right-0 mr-10 mb-8 block ml-auto rounded-lg rounded-lg focus:outline-none focus:shadow-outline text-blue-700 underline"
      >
        + add a review
      </button>
      <h1 className="text-3xl font-semibold mb-8">
        {title}
        {category && ` (${category})`}
      </h1>
      {shelfBooks.length ? <BooksList books={shelfBooks} /> : 'No books here yet :('}
      {isOpen && <AddReviewModal isOpen={isOpen} onSubmit={addShelfReview} {...modalProps} />}
    </Layout>
  );
};

export default ShelfPage;
