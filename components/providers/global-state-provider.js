import React, { useReducer } from 'react';
import produce from 'immer';

const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload, 'payload');

  switch (type) {
    case 'ADD_SHELF':
      return produce(state, (draft) => {
        draft.shelves.push({ id: state.shelves.length + 1, ...payload });
      });
    case 'ADD_BOOK_TO_SHELF':
      return produce(state, (draft) => {
        if (draft.books.byShelfId[payload.shelfId]) {
          draft.books.byShelfId[payload.shelfId].push(payload.book);
        } else {
          draft.books.byShelfId[payload.shelfId] = [payload.book];
        }
      });
    case 'ADD_BOOK_REVIEW':
      return produce(state, (draft) => {
        draft.reviews.byBookId[payload.bookId] = payload.review;
      });
    case 'ADD_SHELF_REVIEW':
      return produce(state, (draft) => {
        draft.reviews.byShelfId[payload.shelfId] = payload.review;
      });
    default:
      throw new Error();
  }
};

const initialState = {
  books: {
    byShelfId: {
      '1': [],
      '2': [],
      '3': [],
    },
  },
  categories: ['Drama', 'Fable', 'Classic', 'Fairy Tale'],
  shelves: [
    {
      id: 1,
      title: 'My nice shelf',
      category: 'Fairy tales',
    },
    {
      id: 2,
      title: 'Serious shelf',
    },
  ],
  reviews: {
    byShelfId: {
      '1': {
        rating: 4,
        comment: 'yes',
      },
      '2': {
        rating: 4,
        comment: 'yes',
      },
    },
    byBookId: {
      '1': {
        rating: 4,
        comment: 'book yes',
      },
      '2': {
        rating: 4,
        comment: 'good book',
      },
    },
  },
};

const GlobalStateContext = React.createContext();

function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export { GlobalStateContext, GlobalStateProvider };
