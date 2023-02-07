import React, { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  state = {
    comments: [this.props.comments],
    isLoading: true,
  };

  // componentDidMount() {
  //   this.fetchComments();
  // }

  fetchComments = async () => {
    try {
      const theBook = this.props.bookId;
      console.log(this.props.bookId);
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${theBook}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGQ2M2U3MzczODAwMTUzNzQ0MDIiLCJpYXQiOjE2NzUzNDIzNzksImV4cCI6MTY3NjU1MTk3OX0.T9SspPION27bTb5U75j_Ax7maF8wvgAJveRPtqnGsmc",
          },
        }
      );
      const comments = await response.json();

      this.setState({ comments, isLoading: false });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.bookId !== this.props.bookId) {
      this.fetchComments();
    }

    // if (
    //   prevState.comments !== this.state.comments
    // ) {
    //   this.fetchComments();
    // }
  }

  render() {
    return (
      <>
        {/* <div>{bookId}</div> */}
        <div className="comments-list">
          {this.state.isLoading ? (
            <p>choose a book to read comments</p>
          ) : (
            this.state.comments.map((comment) => (
              <SingleComment key={comment._id} comment={comment} />
            ))
          )}
        </div>
      </>
    );
  }
}

export default CommentsList;
