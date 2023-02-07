import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import HeroSection from "./components/HeroSection";
// import BookSection from "./components/BookSection";
// import SingleBook from "./components/SingleBook";
// import romance from "./data/fantasy.json";
import horror from "./data/horror.json";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selectedBookId: null,
  };

  changeBookId = (BookId) => {
    this.setState({
      selectedBookId: BookId,
    });
  };

  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <HeroSection />
        <Container fluid className="relative">
          <Row>
            <BookList changeBook={this.changeBookId} books={horror} />

            <CommentArea bookId={this.state.selectedBookId} />
          </Row>
        </Container>
        {/* <SingleBook book={singleBook} /> */}
        {/* <BookSection /> */}
        <CustomFooter />
      </div>
    );
  }
}

export default App;
