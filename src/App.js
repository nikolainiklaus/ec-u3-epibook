import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import HeroSection from "./components/HeroSection";
import BookSection from "./components/BookSection";
import SingleBook from "./components/SingleBook";
import romance from "./data/fantasy.json";

function App() {
  const singleBook = romance[2];
  // console.log(singleBook);
  return (
    <div className="App">
      <CustomNavbar />
      <HeroSection />
      <SingleBook book={singleBook} />
      <BookSection />
      <CustomFooter />
    </div>
  );
}

export default App;
