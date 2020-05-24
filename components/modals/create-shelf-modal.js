import { useState } from 'react';
import Modal from '../modal';

const CreateShelfModal = ({ onCreate, shelves, ...props }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState();
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
    if (error) {
      setError('');
    }
  };
  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  const categories = ['Drama', 'Fable', 'Classic', 'Fairy Tale'];

  const isFormValidated = () => {
    if (!title) {
      setError('Title is required');
      return false;
    }

    if (shelves.some((shelf) => shelf.title === title)) {
      setError('Shelf with that title already exists');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValidated()) {
      onCreate({ title, category });
      props.onClose();
    }
  };

  return (
    <Modal
      title="Create new shelf"
      ariaHideApp={false}
      customStyles={{
        content: {
          top: '10%',
          margin: '0 auto',
          bottom: 'auto',
          width: '30%',
          minWidth: '300px',
        },
      }}
      {...props}
    >
      <form onSubmit={handleSubmit}>
        <label>
          <div className="text-lg mb-1">Title*:</div>
          <input value={title} type="text" className="input mb-1" onChange={handleInputChange} />
          {error && <p class="text-red-500 text-xs italic mb-2">{error}</p>}
        </label>
        <label>
          <div className="text-lg mb-1">Category:</div>
          <div className="relative mb-6">
            <select
              value={category}
              onChange={handleSelectChange}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>No category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Create
          </button>
        </label>
      </form>
    </Modal>
  );
};

export default CreateShelfModal;
