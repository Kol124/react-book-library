import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addBook, selectBooks } from "../features/library/librarySlice";

const ResultCard = ({ book }) => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  const myBooks = books.find((myBook) => myBook.id === book.id);

  const addBookDisabled = myBooks ? true : false;

  const addBookCard = () => {
    dispatch(addBook(book));
    console.log(book);
  };

  return (
    <Card>
      {/* <a target={_blank} href={book.volumeInfo.previewLink}></a> */}
      {book.volumeInfo.imageLinks === undefined ? (
        <img
          src="https://via.placeholder.com/270x140/F5F5F5/AAAAAA/?text=No+Image+Available"
          alt={book.title}
        />
      ) : (
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.title} />
      )}
      <div>
        <h2>{book.volumeInfo.title}</h2>
        <h4>{book.volumeInfo.authors}</h4>
        <span>{book.volumeInfo.pageCount} Pages</span>
        {book.searchInfo === undefined ? (
          <p>No Description Available.</p>
        ) : (
          <p>{book.searchInfo.textSnippet}</p>
        )}
        <Buttons>
          <button disabled={addBookDisabled} onClick={addBookCard}>
            {addBookDisabled ? "Added" : "Add to Library"}
          </button>
        </Buttons>
      </div>
    </Card>
    // <>
    //   <Card>
    //     <img src={book.image} alt="the hound of the baskervilles" />
    //     <div>
    //       <h2>{book.title}</h2>
    //       <h4>{book.author}</h4>
    //       <Buttons>
    //         {addBookDisabled ? (
    //           <>
    //             <button>Added</button>
    //             <button onClick={() => dispatch(removeBook(book))}>
    //               Remove
    //             </button>
    //           </>
    //         ) : (
    //           <button
    //             disabled={addBookDisabled}
    //             onClick={() => dispatch(addBook(book))}
    //           >
    //             Add to Library
    //           </button>
    //         )}
    //       </Buttons>
    //     </div>
    //   </Card>
    // </>
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
    /* min-width: 25%; */
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;

    h2 {
      color: #78412e;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
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
      margin: 0.9rem 0 1.2rem 0;
      font-size: 1.4rem;
      color: #dd6529;
      font-weight: bold;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 2rem;

  button {
    font-family: Josefin Sans, sans-serif;
    padding: 1.2rem 1.5rem;
    color: #f9f9f9;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease;
    background-color: #78412e;

    &:first-of-type {
      margin-right: 2rem;
    }

    &:hover {
      background-color: #6c3a29;
    }

    &:disabled {
      background-color: #fff;
      border: 1px solid #ccc;
      color: #777;
    }

    @media only screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;

export default ResultCard;
