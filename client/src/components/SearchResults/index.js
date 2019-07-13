import React from "react";
import "./style.css";

function ResultsCard(props) {
    return (
        <div className="ResultsCard row" id={props.title + " Card"}>
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
                <p className="ResultDescription">
                    {props.description}
                </p>
            </div>
            <p className="link">
                   TEsting! {props.infoLink}
                </p>
            <div className="ResultOptions col-1">
                <a href={props.link} target="_blank">
                    <button className="ViewMore ResultOption">
                        View More
                    </button>
                </a>
                <button className="SaveResult ResultOption" id={props.id} onClick={(event) => props.saveBook(event)}>
                    Save Book
                </button>
            </div>
        </div>
    );
};

function ResultsWrapper(props) {
    return (props.results.length === 0) ? (
        <div id="ResultsWrapper">
            <h1> Search Results </h1>
        </div>
    ) : (
            <div id="ResultsWrapper">
                <h1> Search Results </h1>
                {props.results.map((book) => {
                    return (
                        <ResultsCard
                            key={book.id}
                            id={book.id}
                            image={book.image}
                            title={book.title}
                            author={book.authors}
                            description={book.description}
                            link={book.link}
                            saveBook={props.saveBook}
                        />
                    );
                })}
            </div>
        );
};

export default ResultsWrapper;