import { useEffect, useState } from 'react';

import Layout from '../components/layout';
import BooksList from '../components/books-list/books-list';
import SearchInput from '../components/search-input';
import Spinner from '../components/spinner';
import { useDebounce } from '../hooks';
import api from '../api';

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState(undefined);
  const [books, setBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const fetchBooks = async () => {
    if (debouncedSearchQuery) {
      setIsSearching(true);
      try {
        const data = await api.getBooks(debouncedSearchQuery);

        setBooks(data);
        setIsSearching(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      setBooks(undefined);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [debouncedSearchQuery]);

  return (
    <Layout>
      <SearchInput onChange={setSearchQuery} />
      {!searchQuery && (
        <div className="text-3xl text-center mt-32 font-semibold">Welcome to knowledge world</div>
      )}
      {isSearching ? (
        <div className="mt-64">
          <Spinner />
        </div>
      ) : (
        <BooksList books={books} />
      )}
    </Layout>
  );
};

export default IndexPage;
