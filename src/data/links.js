import Home from "../pages/home";
import About from "../pages/about";
import Contacts from "../pages/contacts";
import Speakers from "../pages/speakers";




export const links = [
    { title: "Home", href: "/", element: <Home/> },
    { title: "Contacts", href: "/contacts", element: <Contacts/>},
    { title: "About", href: "/about", element: <About/> },
    { title: "Speakers", href: "/speakers", element: <Speakers/> },
];