import React from "react";
import styled from "styled-components";

const BookCard = ({ book }) => {
  return (
    <Card>
      {/* <a target={_blank} href={book.volumeInfo.previewLink}></a> */}
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
      <div>
        <span>{book.volumeInfo.categories}</span>
        <h2>{book.volumeInfo.title}</h2>
        <h4>{book.volumeInfo.authors}</h4>
        <span>{book.volumeInfo.pageCount} Pages</span>
        <p>{book.searchInfo.textSnippet}</p>
        <Buttons>
          <button disabled="">Add to Library</button>
          <button disabled="">Add to Completed</button>
        </Buttons>
      </div>
    </Card>
    //   <Card>
    //   <img src="/images/book-02.jpg" alt="book-02" />
    //   <div>
    //     <h2>How to win friends and influence people</h2>
    //     <h4>Dale Carnegie</h4>
    //     <span>
    //       <i className="fas fa-star"></i>
    //       <i className="fas fa-star"></i>
    //       <i className="fas fa-star"></i>
    //       <i className="fas fa-star"></i>
    //       <i className="far fa-star"></i>
    //     </span>
    //     <p>
    //       There undaunted bird and though swung and prophet, surely this stock
    //       but rustling gently lenore, black the this doubting muttered fancy.
    //     </p>
    //     <Buttons>
    //       <button disabled="">Add to Library</button>
    //       <button disabled="">Add to Completed</button>
    //     </Buttons>
    //   </div>
    // </Card>
  );
};

const Card = styled.div`
  display: flex;
  box-shadow: 0 1rem 3.5rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 2rem;
  margin: 1rem;

  > img {
    width: 35%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;

    h2 {
      color: #833;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }

    h4 {
      font-size: 1.5rem;
      color: #5f4e40;
      opacity: 0.6;
      font-weight: 400;
    }

    p {
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 1px;
    }

    span {
      margin: 1rem 0;
      font-weight: bold;
      font-size: 1.4rem;
      color: #eeaa53;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 2rem;

  button {
    font-family: Josefin Sans, sans-serif;
    background-color: #833;
    outline: none;
    border: none;
    color: #f9f9f9;
    padding: 1.2rem 1.5rem;

    @media only screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  button:first-of-type {
    margin-right: 2rem;
  }
`;

export default BookCard;
