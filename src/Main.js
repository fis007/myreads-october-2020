import React, { Component } from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              books={this.props.books}
              shelfValue="currentlyReading"
              shelfName="Currently Reading"
              changeShelf={this.props.changeShelf}
            />
            <Shelf
              books={this.props.books}
              shelfValue="wantToRead"
              shelfName="Want to Read"
              changeShelf={this.props.changeShelf}
            />
            <Shelf
              books={this.props.books}
              shelfValue="read"
              shelfName="Read"
              changeShelf={this.props.changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Test</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
