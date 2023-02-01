import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Badge";

// const SingleBook = (props) => {
//   return (
//     <Col className="mb-5" xs={12} md={3} lg={2}>
//       <Card>
//         <Card.Img className="book-img" variant="top" src={props.book.img} />
//         <Card.Body>
//           {/* <Card.Title>{book.title}</Card.Title> */}
//           <Card.Text>{props.book.title}</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

class SingleBook extends Component {
  state = {
    selected: false,
    className: "not-selected",
  };
  render() {
    return (
      <Col className="mb-5" xs={12} md={3} lg={2}>
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
      </Col>
    );
  }
}
export default SingleBook;
