import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const SingleBook = (props) => {
  return (
    <Col className="mb-5" xs={12} md={3} lg={2}>
      <Card>
        <Card.Img className="book-img" variant="top" src={props.book.img} />
        <Card.Body>
          {/* <Card.Title>{book.title}</Card.Title> */}
          <Card.Text>{props.book.title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
