import React from "react";
import styled from "styled-components";

const BookCover = ({ book }) => {
  return (
    <>
      <Card>
        <CardImage>
          <img src="/images/book-01.jpg" alt="" />
        </CardImage>
        <CardText>
          {/* <h2>{book.volumeInfo.title}</h2>
          <h4>{book.volumeInfo.authors}</h4> */}
          <h2>Dracula</h2>
          <h4>Bram Stoker</h4>
          {/* <p>{book.volumeInfo.categories}</p> */}
        </CardText>
      </Card>
    </>
  );
};

const Card = styled.div`
  overflow: hidden;
`;

const CardImage = styled.div`
  margin-bottom: 1rem;

  img {
    height: 35rem;
  }
`;

const CardText = styled.div`
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
`;

export default BookCover;