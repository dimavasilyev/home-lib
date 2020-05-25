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
    globalState: { books: byShelfId },
  } = useGlobalState();

  const shelfBooks = byShelfId[shelfId] ?? [];

  const handleAddButton = () => {
    openModalWithProps();
  };

  const addReview = (review) => {
    console.log(review, 'review');
  };

  return (
    <Layout pageTitle="Shelves">
      <button
        onClick={handleAddButton}
        className="mb-8 block ml-auto rounded-lg rounded-lg focus:outline-none focus:shadow-outline text-blue-700 underline"
      >
        + add a review
      </button>
      <BooksList books={shelfBooks} />
      {isOpen && <AddReviewModal isOpen={isOpen} onSubmit={addReview} {...modalProps} />}
    </Layout>
  );
};

export default ShelfPage;
