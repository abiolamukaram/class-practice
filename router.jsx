import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import About from "./src/Pages/About";
import Contact from "./src/Pages/Contact";
import Projects from "./src/Pages/Projects";
import Testimonials from "./src/Pages/Testimonials";
import Login from "./src/Pages/Login";
import Register from "./src/Pages/Register"

export const router= createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/about", element: <About /> },
    {path: "/project", element: <Projects />},
    {path: "/contact", element: <Contact />},
    {path: "/testimonials", element: <Testimonials />},
    {path: "/login", element: <Login /> },
    {path: "register", element: <Register />}
])
