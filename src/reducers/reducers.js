import update from 'immutability-helper';

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
      return update(state, {isFetching: {$set: true}});
    case LOAD_BOOKS:
      return update(state, {isFetching: {$set: false}, books: {$push: action.books}});
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
