import {BrowserRouter as Router, Route, Link, Routes, useRoutes} from 'react-router-dom';


import Home from "../pages/Home"
import About from "../pages/About"
import Page from "../pages/Page"
import Contact from "../pages/Contact"



const Index = () =>{

    const AllRoutes = useRoutes([
        { path: "/", element:<Home />},
        { path: "/About", element:<About />},
        { path: "/Page", element:<Page />},
        { path: "/Contact", element:<Contact />},
        
    ])
    
    return  AllRoutes   
}
export default Index;

