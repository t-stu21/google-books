import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchDiv from "../components/SearchDiv";
import SearchResults from "../components/SearchResults";

//https://www.googleapis.com/books/v1/volumes?q=Potter
//https://developers.google.com/books/docs/v1/getting_started
//https://www.googleapis.com/books/v1/{collectionName}/resourceID?parameters
//https://www.googleapis.com/books/v1/volumes?q=Potter&fields=items(title,authors,description)

//https://www.googleapis.com/books/v1/volumes?q=Potter&fields=items/volumeInfo(title,authors,description,imageLinks,previewLink,infoLink)



class SearchBooks extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };



  searchBooks = (event) => {
    event.preventDefault();
    let searchTerm = document.getElementById("searchbar").value;
    API.getGoogleBookSearch(searchTerm).then((res) => {
      let results = res.data.items;
      results = results.map((result) => {
        let book = {
          id: result.id,
          title: result.volumeInfo.title,
          authors: result.volumeInfo.authors,
          image: result.volumeInfo.imageLinks.thumbnail,
          description: result.volumeInfo.description,
          link: result.volumeInfo.infoLink
        };
        return book;
      });
      this.setState({ results: results });
    }).catch(err => console.log(err));
  };

  saveBook = (event) => {
    event.preventDefault();
    let bookSaveChoice = this.state.results.filter((book) => (book.id === event.target.id));
    bookSaveChoice = bookSaveChoice[0];
    API.saveBook(bookSaveChoice)
      .then(console.log(bookSaveChoice))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1 className="text-white">React Google Book Search</h1>
          <h2 className="text-white">Search for &amp; Save Books of Interst</h2>
        </Jumbotron>
        <Container>
          <SearchDiv searchBooks={this.searchBooks} />
          <SearchResults results={this.state.results} saveBook={this.saveBook} />
        </Container>
      </Container>
    );
  }
}

export default SearchBooks;
