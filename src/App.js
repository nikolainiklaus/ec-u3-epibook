import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import HeroSection from "./components/HeroSection";
// import BookSection from "./components/BookSection";
import SingleBook from "./components/SingleBook";
import romance from "./data/fantasy.json";
import horror from "./data/horror.json";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const singleBook = romance[2];
  // console.log(singleBook);
  return (
    <div className="App">
      <CustomNavbar />
      <HeroSection />
      <BookList books={horror} />
      <SingleBook book={singleBook} />
      {/* <BookSection /> */}
      <CustomFooter />
    </div>
  );
}

export default App;
