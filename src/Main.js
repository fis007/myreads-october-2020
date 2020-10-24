import React, { Component } from "react";
import Shelf from "./Shelf";

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
            />
            <Shelf
              books={this.props.books}
              shelfValue="wantToRead"
              shelfName="Want to Read"
            />
            <Shelf
              books={this.props.books}
              shelfValue="read"
              shelfName="Read"
            />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
