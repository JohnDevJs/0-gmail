import './App.css';
// import { Navbar} from 'reactstrap';
import  IndexRoutes  from "./routes/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import NavbarComp from "./components/Navbar/Navbar";



function App() {
  return (
    <>
    <NavbarComp/>
    <IndexRoutes/>
    <Footer/>
    </>
  );
}

export default App;
