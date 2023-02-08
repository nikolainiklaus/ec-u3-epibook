import SingleBook from "./SingleBook";

import { Row, Col } from "react-bootstrap";

import { InputGroup, Form } from "react-bootstrap";
import { useState } from "react";

const BookList = ({ books, changeBook }) => {
  // state = {
  //   searchTerm: "",
  // };

  const [searchTerm, setSearchTerm] = useState("");

  const allBooks = books;
  return (
    <Col className="bklist" xs={8}>
      <div>
        <InputGroup className="mb-3, pt-4">
          <InputGroup.Text id="inputGroup-sizing-default">
            Search for a book
          </InputGroup.Text>
          <Form.Control
            value={searchTerm}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </InputGroup>
      </div>
      <Row xs={12} className="mt-5">
        {allBooks.map((book) => {
          if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return <SingleBook changeBook={changeBook} book={book} />;
          }
        })}
      </Row>
    </Col>
  );
};

export default BookList;
