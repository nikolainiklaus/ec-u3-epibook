import SingleBook from "./SingleBook";

const BookList = (props) => {
  const allBooks = props.books;
  //   console.log(firstBook);

  return <h1>{allBooks[0].title}</h1>;
};

export default BookList;
