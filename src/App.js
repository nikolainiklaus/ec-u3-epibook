import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import HeroSection from "./components/HeroSection";
import BookSection from "./components/BookSection";
import SingleBook from "./components/SingleBook";
import romance from "./data/fantasy.json";
import BookList from "./components/BookList";

function App() {
  const singleBook = romance[2];
  // console.log(singleBook);
  return (
    <div className="App">
      <CustomNavbar />
      <HeroSection />
      <BookList books={romance} />
      <SingleBook book={singleBook} />
      {/* className="book-img" */}
      <CustomFooter />
    </div>
  );
}

export default App;
