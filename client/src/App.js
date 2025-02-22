import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import "./App.css"
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import Slide from "react-reveal/Slide";
import MobileNav from "./components/MobileNav/MobileNav";

// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Testimonial from "./pages/Testimonials/Testimonial";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        {/* <ToastContainer /> */}
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Team />
          <Contact />
        </div>
        <div className="footer pb-5 ms-9">
          <Tada>
            <Slide left>
              <h4 className="text-center footer1" >PRABHAKAR SINGH S/O VINOD PRATAP SINGH</h4>
              {/* <h4 className="text-center">All Right Reserved &copy; 2023</h4> */}
            </Slide>

            <hr />
          </Tada>

        </div>
      </div >
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "2px" }}
      />
    </>
  );
}

export default App;
