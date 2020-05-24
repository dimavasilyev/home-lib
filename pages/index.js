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
      const data = await api.getBooks(debouncedSearchQuery);

      setBooks(data);
      setIsSearching(false);
    } else {
      setBooks(undefined);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [debouncedSearchQuery]);

  const isEmptyQuery = !searchQuery;


  return (
    <Layout>
      <SearchInput onChange={setSearchQuery} />
      {isEmptyQuery && (
        <div className="text-3xl text-center font-semibold">Please write something</div>
      )}
      {isSearching ? (
        <div className="mt-64">
          <Spinner />
        </div>
      ) : (
        <BooksList books={books} onListItemClick={() => console.log('hey')} />
      )}
    </Layout>
  );
};

export default IndexPage;
