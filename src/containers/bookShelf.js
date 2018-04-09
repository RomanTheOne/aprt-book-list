import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Book from '../components/book'

import { fetchBooks, retitleBook } from '../actions/actions'

import './bookShelf.css'

class BookShelf extends PureComponent {
  constructor(props) {
    super(props);

    this._onBookRefresh = this._onBookRefresh.bind(this);
    this._onLoadMoreClick = this._onLoadMoreClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks({to: this.props.dropDownOption});
  }

  _onLoadMoreClick() {
    const { dropDownOption, books } = this.props;
    const { id } = books[books.length - 1];

    this.props.fetchBooks({ from: id + 1, to: (id + 1 + dropDownOption) })
  }

  _onBookRefresh(event) {
    this.props.retitleBook(event.target.dataset.id)
  }

  render() {
    return(
      <div className='main'>
        <div>
          {!this.props.isFetching &&
            this.props.books.map(book => {
              return (
                <Book {...book} key={book.id} onClick={this._onBookRefresh} />
              )
            })
          }
        </div>

        <button onClick={this._onLoadMoreClick}>Load more</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dropDownOption: state.dropDown,
    books: state.requestBooks.books,
    isFetching: state.requestBooks.isFetching,
  }
};

const mapDispatchToProps = {
  fetchBooks,
  retitleBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShelf)
