import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Main from "./Main";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    showedBooks: [],
    query: "",
    searchedBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ showedBooks: books });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ showedBooks: books });
    });
  };

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({
            searchBooks: [],
          });
        } else {
          this.setState({
            searchedBooks: books,
          });
        }
      });
    } else {
      this.setState({
        searchBooks: [],
      });
    }
  };

  render() {
    console.log(`QUERY: ${this.state.query}`);
    console.log(this.state.showedBooks);
    console.log(this.state.searchedBooks);
    return (
      <div className="app">
        <Main
          changeShelf={this.changeShelf}
          test="test"
          books={this.state.showedBooks}
        />
        <Search
          changeShelf={this.changeShelf}
          searchedBooks={this.state.searchedBooks}
          searchBooks={this.searchBooks}
        />
      </div>
    );
  }
}

export default BooksApp;
