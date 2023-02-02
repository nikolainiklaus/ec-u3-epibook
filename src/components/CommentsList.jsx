import React, { Component } from 'react';
import SingleComment from './SingleComment';

class CommentsList extends Component {
  state = {
    comments: [this.props.comments],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGQ2M2U3MzczODAwMTUzNzQ0MDIiLCJpYXQiOjE2NzUzNDIzNzksImV4cCI6MTY3NjU1MTk3OX0.T9SspPION27bTb5U75j_Ax7maF8wvgAJveRPtqnGsmc',
          },
        }
      );
      const comments = await response.json();

      this.setState({ comments, isLoading: false });
    } catch (error) {
      console.error(error);
    }
  };
  

  render() {
    console.log("rla", this.state.comments[0]);
    return (
      <div className="comments-list">
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          this.state.comments.map((comment) => (
            <SingleComment key={comment._id} comment={comment} />
          ))
        )}
        {console.log(this.state.comments)}
      </div>
    );
  }

}

export default CommentsList;
