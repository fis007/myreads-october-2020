import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Main from "./Main";
import Search from "./Search";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Main />
        <Search />
      </div>
    );
  }
}

export default BooksApp;
