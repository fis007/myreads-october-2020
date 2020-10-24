import React, { Component } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

class Search extends Component {
  render() {
    console.log(this.props.searchedBooks);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              onChange={(event) => {
                this.props.searchBooks(event.target.value);
              }}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchedBooks.map((book) => (
              <Book
                changeShelf={this.props.changeShelf}
                book={book}
                key={book.id}
                shelfValue="none"
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
