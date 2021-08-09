import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeBook, completeBook } from "../features/library/librarySlice";

const BookCard = ({ book }) => {
  // const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <CardImage>
          <img src={book.image} alt={book.title} />

          <CardImageIcons>
            {book.completed ? (
              <i className="fas fa-clock"></i>
            ) : (
              <i
                className="fas fa-check"
                onClick={() => dispatch(completeBook(book))}
              ></i>
            )}
            <i
              className="fas fa-times"
              onClick={() => dispatch(removeBook(book))}
            ></i>
          </CardImageIcons>
        </CardImage>
        <CardText>
          <a target="_blank" rel="noopener noreferrer" href={book.link}>
            <h2>{book.title}</h2>
          </a>
          <h4>{book.authors}</h4>
        </CardText>
      </Card>
    </>
  );
};

const CardImageIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 20%;
  background: #e8eddf;
  transition: all 0.4s ease;
  transform: translate(0, 100%);

  i {
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
      color: #dd6529;
    }
  }
`;

const Card = styled.div`
  overflow: hidden;
`;

const CardImage = styled.div`
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
  }

  &:hover ${CardImageIcons} {
    transform: translate(0, -4%);
  }
`;

const CardText = styled.div`
  h2 {
    color: #78412e;
    font-weight: 600;
    font-size: 2rem;
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
`;

export default BookCard;
