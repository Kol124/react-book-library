import React from "react";
import styled from "styled-components";

const BookCard = () => {
  return (
    <Card>
      <img src="/images/book-01.jpg" alt="book-01" />
      <div>
        <h2>How to win friends and influence people</h2>
        <h4>Dale Carnegie</h4>
        <p>
          Lenteurs rouleurs les des j'aille peuple un l'amour baiser la suivi,
          enfants yeux mer des avec des vu comme, de.
        </p>
      </div>
    </Card>
  );
};

const Card = styled.div`
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  display: flex;
`;

export default BookCard;
