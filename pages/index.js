import { useEffect, useState } from 'react';

import Layout from '../components/layout';
import BooksList from '../components/books-list/books-list';
import SearchInput from '../components/search-input';
import { useDebounce } from '../hooks';
import api from '../api';

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
      setBooks([]);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [debouncedSearchQuery]);

  const isEmptyQuery = searchQuery === '';

  return (
    <Layout>
      <SearchInput onChange={setSearchQuery} placeholder />
      {isEmptyQuery && 'Please write someting'}
      {isSearching ? 'loading...' : <BooksList books={books} />}
    </Layout>
  );
};

export default IndexPage;
