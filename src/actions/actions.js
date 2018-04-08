export const SELECT_OPTION = 'SELECT_OPTION';
export const selectDropDownValue = option => ({
  type: SELECT_OPTION,
  option,
});

export const REQUEST_BOOKS = 'REQUEST_BOOKS';
const requestBooksAction = query_params => ({
  type: REQUEST_BOOKS,
  options: query_params,
});

export const LOAD_BOOKS = 'LOAD_BOOKS';
const loadBooksAction = (query_params, json) => ({
  type: LOAD_BOOKS,
  books: json,
});

export const RETITLE_BOOK = 'RETITLE_BOOK';
const retitleBookAction = (id, data) => ({
  type: RETITLE_BOOK,
  id: id,
  data: data,
});

export const fetchBooks = (query_params = {}) => dispatch => {
  let URL = 'http://54.218.168.113:3000/books?';

  dispatch(requestBooksAction(query_params));

  Object.keys(query_params).forEach(key => URL = URL.concat(`&${key}=${query_params[key]}`));
  return fetch(URL)
    .then(response => {
      return response.json()
      }
    )
    .then(json => {
      return dispatch(loadBooksAction(query_params, json))
    })
    .catch(error => console.error(error))
};

export const retitleBook = id => dispatch => {
  let URL = `http://54.218.168.113:3000/retitle/${id}`;

  fetch(URL, { method: 'post' })
    .then(response => {
      return response.json()
    })
    .then(data => {
      dispatch(retitleBookAction(id, data))
    })

};
