import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Main from "./Main";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    showedBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ showedBooks: books });
    });
  }

  render() {
    console.log(this.state.showedBooks);
    return (
      <div className="app">
        <Main test="test" books={this.state.showedBooks} />
        <Search />
      </div>
    );
  }
}

export default BooksApp;
