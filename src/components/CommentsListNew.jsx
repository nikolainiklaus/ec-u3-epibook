
import { setState, useEffect } from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({bookId}) => {
 
  const[comments, setComments] = setState([])
  const[isLoading, setLoading] = setState(true)

  // componentDidMount() {
  //   this.fetchComments();
  // }

  const fetchComments = async () => {
    try {
      const theBook = bookId;
      console.log(bookId);
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
      setComments(comments)
      setLoading(false)

      
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(()=> {
    fetchComments();
  })

  
    return (
      <>
        {/* <div>{bookId}</div> */}
        <div className="comments-list">
          {isLoading ? (
            <p>choose a book to read comments</p>
          ) : (
            comments.map((comment) => (
              <SingleComment key={comment._id} comment={comment} />
            ))
          )}
        </div>
      </>
    );
  
}

export default CommentsList;
