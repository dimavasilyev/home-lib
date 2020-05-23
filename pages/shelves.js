import { useMemo } from 'react';
import Layout from '../components/layout';
import ShelvesList from '../components/shelves-list/shelves-list';

const ShelvesPage = () => {
  const shelves = useMemo(
    () => [
      {
        title: 'My nice shelf',
        category: 'Fairy tales',
      },
      {
        title: 'Serious shelf',
        category: '',
      },
    ],
    [],
  );

  return (
    <Layout pageTitle="Shelves">
      <ShelvesList shelves={shelves} />
    </Layout>
  );
};

export default ShelvesPage;
