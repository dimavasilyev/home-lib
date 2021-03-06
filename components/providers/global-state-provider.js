import React, { useReducer, useEffect } from 'react';
import produce from 'immer';
import Lockr from 'lockr';

const myProduce = (state, func) => {
  const newState = produce(state, func);
  Lockr.set('globalState', newState);

  return newState;
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_GLOBAL_STATE':
      return payload;
    case 'ADD_SHELF':
      return myProduce(state, (draft) => {
        draft.shelves.push({ id: state.shelves.length + 1, ...payload });
      });
    case 'ADD_BOOK_TO_SHELF':
      return myProduce(state, (draft) => {
        if (draft.books.byShelfId[payload.shelfId]) {
          draft.books.byShelfId[payload.shelfId].push(payload.book);
        } else {
          draft.books.byShelfId[payload.shelfId] = [payload.book];
        }
      });
    case 'ADD_BOOK_REVIEW':
      return myProduce(state, (draft) => {
        draft.reviews.byBookId[payload.bookId] = payload.review;
      });
    case 'ADD_SHELF_REVIEW':
      return myProduce(state, (draft) => {
        draft.reviews.byShelfId[payload.shelfId] = payload.review;
      });
    case 'TOGGLE_THEME':
      return myProduce(state, (draft) => {
        draft.theme = state.theme === 'theme-dark' ? 'theme-light' : 'theme-dark';
      });
    default:
      throw new Error();
  }
};

const initialState = {
  books: {
    byShelfId: {},
  },
  categories: [
    'Social Science / General',
    'Drama',
    'Fable',
    'Classic',
    'Fairy Tale',
    'Medical / General',
    'Religion / Christian Theology / Christology',
  ],
  shelves: [],
  reviews: {
    byShelfId: {},
    byBookId: {},
  },
  theme: 'theme-light',
};

const GlobalStateContext = React.createContext();

function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedState = Lockr.get('globalState');

    if (savedState) {
      setGlobalState({ type: 'SET_GLOBAL_STATE', payload: savedState });
    }
  }, []);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export { GlobalStateContext, GlobalStateProvider };
