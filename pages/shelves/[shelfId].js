import { useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/layout';
import BooksList from '../../components/books-list/books-list';
import AddReviewModal from '../../components/modals/add-review-modal';
import { useModal } from '../../hooks';

const ShelfPage = () => {
  const [shelvesWithBooks] = useState([{}]);
  const { isOpen, openModalWithProps, modalProps } = useModal();

  const {
    query: { shelfId },
  } = useRouter();

  const handleAddButton = () => {
    openModalWithProps();
  };

  return (
    <Layout pageTitle="Shelves">
      <button
        onClick={handleAddButton}
        className="mb-8 block ml-auto rounded-lg rounded-lg focus:outline-none focus:shadow-outline text-blue-700 underline"
      >
        + add a review
      </button>
      {shelfId}
      <BooksList books={[]} />
      {isOpen && <AddReviewModal isOpen={isOpen} {...modalProps} />}
    </Layout>
  );
};

export default ShelfPage;
