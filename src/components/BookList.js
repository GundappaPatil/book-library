import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import "./booklist.css";

const BookList = () => {
  const [books, setBooks] = useState(List);
  const navigate = useNavigate();

  const handleBookClick = (id) => {
    navigate(`/List/${id}`);
  };

  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {books.map((data) => {
          return (
            <div className="col" key={data.id}>
              {/* <Link to={`/product/${data.id}`}> */}
              <div className="card h-100">
                <img
                  src={data.image}
                  className="card-img-top"
                  alt="..."
                  onClick={() => handleBookClick(data.id)}
                />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <h5 className="card-title">{data.author}</h5>
                  <p>{data.genres}</p>
                  <p className="card-text"></p>
                </div>
              </div>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookList;
