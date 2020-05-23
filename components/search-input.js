import { useEffect, useRef } from 'react';

const SearchInput = ({ onChange }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      ref={inputRef}
      onChange={handleChange}
      className="input mb-6"
      type="text"
      placeholder="Search by book title"
    />
  );
};

export default SearchInput;
