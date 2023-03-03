import React from "react";
import List from "./List";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./book.css";

const Book = () => {
  const { id } = useParams();
  const book = List.find((book) => book.id === parseInt(id));
  return (
    <div className="container">
      <div className="card mb-3" style={{ maxwidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={book.image}
              className="img-fluid rounded-start"
              alt="cannot load "
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">{book.summary}</p>
              <p className="card-text">
                <small className="text-muted">{book.author}</small>
              </p>
              <p className="card-text">{book.genres}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
