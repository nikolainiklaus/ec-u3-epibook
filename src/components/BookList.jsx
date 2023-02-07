import SingleBook from "./SingleBook";

import { Row, Col } from "react-bootstrap";
import { Component } from "react";
import { InputGroup, Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchTerm: "",
  };
  render() {
    const allBooks = this.props.books;
    return (
      <Col className="bklist" xs={8}>
        <div>
          <InputGroup className="mb-3, pt-4">
            <InputGroup.Text id="inputGroup-sizing-default">
              Search for a book
            </InputGroup.Text>
            <Form.Control
              value={this.state.searchTerm}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                this.setState({
                  searchTerm: e.target.value,
                });
              }}
            />
          </InputGroup>
        </div>
        <Row xs={12} className="mt-5">
          {allBooks.map((book) => {
            if (
              book.title
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
            ) {
              return (
                <SingleBook changeBook={this.props.changeBook} book={book} />
              );
            }
          })}
        </Row>
      </Col>
    );
  }
}

export default BookList;
