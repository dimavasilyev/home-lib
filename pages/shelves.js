import { useState } from 'react';
import Layout from '../components/layout';
import ShelvesList from '../components/shelves-list/shelves-list';
import CreateShelfModal from '../components/modals/create-shelf-modal';
import { useModal, useGlobalState } from '../hooks';

const ShelvesPage = () => {
  const { isOpen, openModalWithProps, modalProps } = useModal();
  const {
    globalState: { shelves },
    setGlobalState,
  } = useGlobalState();

  const addNewShelf = (shelf) => {
    setGlobalState({ type: 'ADD_SHELF', payload: shelf });
  };

  const handleAddButton = () => {
    openModalWithProps({ onCreate: addNewShelf, shelves });
  };

  return (
    <Layout pageTitle="Shelves">
      <button
        onClick={handleAddButton}
        className="mb-8 block ml-auto rounded-lg rounded-lg focus:outline-none focus:shadow-outline text-blue-700 underline"
      >
        + add new shelf
      </button>
      {shelves.length ? (
        <ShelvesList shelves={shelves} />
      ) : (
        <div className="text-3xl">No shelves yet :(</div>
      )}

      {isOpen && <CreateShelfModal isOpen={isOpen} {...modalProps} />}
    </Layout>
  );
};

export default ShelvesPage;
