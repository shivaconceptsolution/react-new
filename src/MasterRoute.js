import { BrowserRouter,Routes, Route } from "react-router-dom";
import MasterPage from "./MasterPage";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
function MasterRoute()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MasterPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="service" element={<Service />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default MasterRoute;