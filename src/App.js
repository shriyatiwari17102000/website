import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/dashboard/Dashboard";
import GetStarted from "./pages/getStarted/GetStarted";
import ScrollDottedLine from "./pages/dashboard/ScrollDottedLine";
import ScrollArrow from "./pages/dashboard/ScrollDottedLine";
import CounsellingPage from "./pages/dashboard/CounsellingPage";
import VideoSlider from "./pages/crousels/SuccessStories";
import "swiper/css";
import Footer from "./pages/footer/Footer";
import FooterTop from "./pages/footer/FooterTop";
import Blog from "./pages/blogs/Blog";
import FindCounselors from "./pages/crousels/FindCounselors";
import Drop from "./pages/blogs/FrequentlyAskQuestions";
import FrequentlyAskQuestions from "./pages/blogs/FrequentlyAskQuestions";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Dashboard />
      <CounsellingPage />
      <GetStarted />
      <VideoSlider />
      <FindCounselors />
      <FrequentlyAskQuestions />
      <Blog />
      <FooterTop />
    </div>
  );
}

export default App;
