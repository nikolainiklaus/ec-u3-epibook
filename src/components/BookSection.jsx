import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import scifi from "../data/scifi.json";
import romance from "../data/romance.json";

class BookSection extends Component {
  state = {
    selectedCategory: fantasy,
  };
  render() {
    return (
      <Container fluid>
        <Button
          onClick={() => {
            this.setState({
              selectedCategory: fantasy,
            });
          }}
          variant="outline-secondary"
          id="button-addon1"
        >
          Fantasy
        </Button>
        <Button
          onClick={() => {
            this.setState({
              selectedCategory: scifi,
            });
          }}
          variant="outline-secondary"
          id="button-addon1"
        >
          Scifi
        </Button>
        <Button
          onClick={() => {
            this.setState({
              selectedCategory: romance,
            });
          }}
          variant="outline-secondary"
          id="button-addon1"
        >
          Romance
        </Button>
        <Button
          onClick={() => {
            console.log(this.state.selectedCategory);
            this.setState({
              selectedCategory: horror,
            });
          }}
          variant="outline-secondary"
          id="button-addon1"
        >
          Horror
        </Button>

        <Row xs={12} className="mt-5">
          {this.state.selectedCategory.map((book) => {
            return (
              <Col className="mb-5" xs={12} md={3} lg={2}>
                <Card>
                  <Card.Img variant="top" src={book.img} className="book-img" />
                  <Card.Body>
                    {/* <Card.Title>{book.title}</Card.Title> */}
                    <Card.Text>{book.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookSection;
