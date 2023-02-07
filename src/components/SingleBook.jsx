import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";


class SingleBook extends Component {
  state = {
    selected: false,
    className: "not-selected",
    comments: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.selected !== this.state.selected &&
      this.state.selected === true
    ) {

    }
  }

  render() {
    return (
      <Col className="mb-5" xs={12} md={4} lg={3}>
        <Card className={this.state.className}>
          <Card.Img
            className="book-img"
            variant="top"
            src={this.props.book.img}
            onClick={() => {
              if (this.state.selected === false) {
                this.setState({
                  selected: true,
                  className: "selected",
                });
                this.props.changeBook(this.props.book.asin)
              } else {
                this.setState({
                  selected: false,
                  className: "not-selected",
                });
              }
            }}
          />
          <Card.Body>
            {/* <Card.Title>{book.title}</Card.Title> */}
            <Card.Text>{this.props.book.title}</Card.Text>
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
  }
}

export default SingleBook;
