import update from 'react-addons-update';

import { combineReducers } from 'redux'
import {
  SELECT_OPTION,
  REQUEST_BOOKS,
  LOAD_BOOKS,
  RETITLE_BOOK,
} from '../actions/actions'

const requestBooks = (state = { isFetching: false, books: [] }, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {...state, isFetching: true};
    case LOAD_BOOKS:
      return {...state, isFetching: false, books: [...state.books, ...action.books]};
    case RETITLE_BOOK:
      return update(state, {books: {[action.id]: {$merge: {title: action.data.title}}}});
    default:
      return state;
  }
};

const dropDown = (state = 1, action) => {
  switch (action.type) {
    case SELECT_OPTION:
      return action.option;
    default:
      return state
  }
};


export default combineReducers({
  dropDown,
  requestBooks,
});
