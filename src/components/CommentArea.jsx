// import React, { useState, useEffect } from "react";

import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Col } from "react-bootstrap";

const CommentArea = ({ bookId }) => {
  return (
    <>
      <StickyContainer className="sticky">
        <Sticky>
          {({ style }) => (
            <Col style={style}>
              <h3 className="comment-title"> Comments 👨‍💻 </h3>
              <CommentsList bookId={bookId} />
              <AddComment bookId={bookId} />
            </Col>
          )}
        </Sticky>
      </StickyContainer>
    </>
  );
};
export default CommentArea;
