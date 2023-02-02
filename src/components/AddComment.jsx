
import React, { useState } from "react";

const AddComment = ({ bookId, onCommentAdded }) => {
  const [comment, setText] = useState("");
  const [rate, setRating] = useState(0);
  const elementId = bookId;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGQ2M2U3MzczODAwMTUzNzQ0MDIiLCJpYXQiOjE2NzUzNDIzNzksImV4cCI6MTY3NjU1MTk3OX0.T9SspPION27bTb5U75j_Ax7maF8wvgAJveRPtqnGsmc",
        },
        body: JSON.stringify({
          comment,
          rate,
          elementId,
        }),
      }
    );

    if (response.ok) {
      const newComment = await response.json();
      onCommentAdded(newComment);
    }
    console.log(bookId);
  };

  return (
    <form  onSubmit={handleSubmit}>
      <textarea
      className="input-default"
        value={comment}
        onChange={(event) => setText(event.target.value)}
      />
      <div className="submit-form">
      <input
        type="number"
        min="1"
        max="5"
        value={rate}
        onChange={(event) => setRating(event.target.value)}
      />
      <button className="submit-button" type="submit">Add Comment</button>
      </div>
    </form>
  );
};

export default AddComment;
