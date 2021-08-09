import React from "react";
import styled from "styled-components";

const BookCover = ({ book }) => {
  return (
    <>
      <Card>
        <CardImage>
          <img src="/images/book-01.jpg" alt="" />

          <CardImageIcons>
            <i className="fas fa-check"></i>
            <i className="fas fa-times"></i>
          </CardImageIcons>
        </CardImage>
        <CardText>
          {/* <h2>{book.volumeInfo.title}</h2>
          <h4>{book.volumeInfo.authors}</h4> */}
          <h2>How to win friends and influence people</h2>
          <h4>Bram Stoker</h4>
          {/* <p>{book.volumeInfo.categories}</p> */}
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
  /* border: 1px solid #444; */
  transition: all 0.4s ease;
  transform: translate(0, 100%);

  i {
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
      color: #dd6529;
    }
  }
`;

const Card = styled.div`
  overflow: hidden;

  &:hover ${CardImageIcons} {
    transform: translate(0, -5%);
  }
`;

const CardImage = styled.div`
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  cursor: pointer;
  /* overflow: hidden; */

  img {
    width: 100%;
  }
`;

const CardText = styled.div`
  h2 {
    color: #78412e;
    font-weight: 600;
    font-size: 2.2rem;
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
