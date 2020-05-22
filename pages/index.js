import Layout from '../components/layout';
import BooksList from '../components/books-list/books-list';

const IndexPage = () => {
  const books = [
    {
      id: 1,
      title: 'Book_1',
    },
    {
      id: 2,
      title: 'Book_2',
    },
  ];

  return (
    <Layout>
      <BooksList books={books} />
    </Layout>
  );
};

export default IndexPage;
