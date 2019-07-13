import React from "react";
import "./style.css";

function SavedCard(props) {
  return (
    <div className="SavedCard row" id={props.id + "Card"}>
      <div className="ImageDiv col-2">
        <img src={props.image} alt={"Image of" + props.title}></img>
      </div>
      <div className="InfoDiv col-9">
        <div className="row">
          <h2 className="col-8">
            {props.title}
          </h2>
          <h3 className="col-4">
            {props.author}
          </h3>
        </div>
        <p className="SavedDescription">
          {props.description}
        </p>
      </div>
      <div className="SavedOptions col-1">
        <a href={props.link} target="_blank">
          <button className="ViewMore SavedOption">
            View More
          </button>
        </a>
        <button className="RemoveSaved SavedOption" id={props.id} onClick={(event) => { props.deleteBook(event.target.id) }}>
          Remove Book
        </button>
      </div>
    </div>
  );
};

function SavedBooks(props) {
  return (props.saved.length === 0) ? (
    <div id="SavedBooks">
      <h1> 0 Saved Results </h1>
    </div>
  ) : (
      <div id="SavedBooks">
        <h1> Saved Books </h1>
        {props.saved.map((book) => {
          return (
            <SavedCard
              key={book._id}
              id={book._id}
              image={book.image}
              title={book.title}
              author={book.authors}
              description={book.description}
              link={book.link}
              deleteBook={props.removeBook}
            />
          );
        })}
      </div>
    );
};

export default SavedBooks;