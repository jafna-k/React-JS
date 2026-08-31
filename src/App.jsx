
import { Outlet } from "react-router";
import AboutPage from "./pages/AboutPage"; 
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Landingpage from "./pages/Landingpage";
import Header from "./components/Header";



function App() {
  return (
   
    <>
  
    <Header/>
  
    
     <Outlet/>
   
    </>
  
 
  );
}

export default App;