import { useState } from 'react';
import Layout from '../components/layout';
import ShelvesList from '../components/shelves-list/shelves-list';
import CreateShelfModal from '../components/modals/create-shelf-modal';
import { useModal } from '../hooks';

const ShelvesPage = () => {
  const { isOpen, openModalWithProps, modalProps } = useModal();
  const [shelves, setChelves] = useState([
    {
      id: 1,
      title: 'My nice shelf',
      category: 'Fairy tales',
    },
    {
      id: 2,
      title: 'Serious shelf',
    },
  ]);
  console.log('shelves:', shelves);

  const addNewShelf = (shelf) => {
    setChelves([...shelves, { id: shelves.length + 1, ...shelf }]);
  };

  const handleAddButton = () => {
    openModalWithProps({ onCreate: addNewShelf, shelves });
  };

  return (
    <Layout pageTitle="Shelves">
      <button
        onClick={handleAddButton}
        className="block mb-8 ml-auto rounded-lg rounded-lg focus:outline-none focus:shadow-outline text-blue-700 underline"
      >
        + add new shelf
      </button>
      <ShelvesList shelves={shelves} />
      {isOpen && <CreateShelfModal isOpen={isOpen} {...modalProps} />}
    </Layout>
  );
};

export default ShelvesPage;
