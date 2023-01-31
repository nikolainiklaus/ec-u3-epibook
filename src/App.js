import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import HeroSection from "./components/HeroSection";
import BookSection from "./components/BookSection";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <HeroSection />
      <BookSection />
      <CustomFooter />
    </div>
  );
}

export default App;
