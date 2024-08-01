import { BrowserRouter,Routes, Route } from "react-router-dom";
import MasterPage from "./MasterPage";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import MasterLayout from "./MasterLayout";
function MasterRoute()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MasterLayout />}>
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