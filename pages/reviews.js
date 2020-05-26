import { useCallback } from 'react';
import Link from 'next/link';

import Layout from '../components/layout';
import { useGlobalState } from '../hooks';

const ReviewPage = () => {
  const {
    globalState: {
      shelves,
      reviews: { byShelfId },
    },
  } = useGlobalState();

  const prepareShelvesWithReview = useCallback(() => {
    const preparedData = [];

    shelves.forEach((shelf) => {
      if (byShelfId.hasOwnProperty(shelf.id)) {
        preparedData.push({ ...shelf, review: byShelfId[shelf.id] });
      }
    });

    return preparedData;
  }, [byShelfId, shelves]);

  const shelvesWithReview = prepareShelvesWithReview();

  return (
    <Layout>
      {shelvesWithReview.map(({ id, title, category, review: { rating, comment } }) => (
        <Link key={id} href="/shelves/[id]" as={`/shelves/${id}`}>
          <div className="mb-8">
            <div className="flex flex-wrap items-center mb-2">
              <span className="text-2xl font-semibold mr-3 cursor-pointer">{title}</span>
              {category && (
                <span className="inline-block bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {category}
                </span>
              )}
              <span className="text-lg ml-4">{rating}</span>
              <svg
                className="w-6 h-6 mr-1 cursor-pointer fill-current text-yellow-600"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
            {comment && <div className="italic">- {comment}</div>}
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export default ReviewPage;
