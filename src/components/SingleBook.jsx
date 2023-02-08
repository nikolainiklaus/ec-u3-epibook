import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
// import CommentArea from "./CommentArea";
// import CommentsList from "./CommentsList";
// import AddComment from "./AddComment";

const SingleBook = ({ book, changeBook }) => {
  const [selected, setSelected] = useState(false);
  const [className, setClassName] = useState("not-selected");

  return (
    <Col className="mb-5" xs={12} md={4} lg={3}>
      <Card className={className}>
        <Card.Img
          className="book-img"
          variant="top"
          src={book.img}
          onClick={() => {
            if (selected === false) {
              setSelected(true);
              setClassName("selected");
              changeBook(book.asin);
            } else {
              setSelected(false);
              setClassName("not-selected");
            }
          }}
        />
        <Card.Body>
          {/* <Card.Title>{book.title}</Card.Title> */}
          <Card.Text>{book.title}</Card.Text>
        </Card.Body>
      </Card>
      {/* {this.state.selected && (
          <CommentArea 
          bookId={this.props.book.asin}>
            <CommentsList bookId={this.props.book.asin} />
            <AddComment />
          </CommentArea>
        )} */}
    </Col>
  );
};

export default SingleBook;
