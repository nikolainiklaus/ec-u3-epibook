import SingleBook from "./SingleBook";
import Row from "react-bootstrap/Row";
import { Component } from "react";
import { Container, InputGroup, Form, Alert } from "react-bootstrap";

// const BookList = (props) => {
//   const allBooks = props.books;

//   return (
//     <Row xs={12} className="mt-5">
//       {allBooks.map((book) => (
//         <SingleBook book={book} />
//       ))}
//     </Row>
//   );
// };

class BookList extends Component {
  state = {
    searchTerm: "",
  };
  render() {
    const allBooks = this.props.books;
    return (
      <Container fluid>
        <div>
          <InputGroup className="mb-3">
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
              return <SingleBook book={book} />;
            }
          })}
        </Row>

        {/* <Row xs={12} className="mt-5">
          {allBooks.map((book) => {
            if (book.title.includes(this.state.searchTerm)) {
              return <SingleBook book={book} />;
            } else {
              console.log("no entries");
            }
          })}
        </Row> */}
      </Container>
    );
  }
}

export default BookList;
