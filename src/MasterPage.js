import { Link, Outlet } from "react-router-dom";

function MasterPage()
{
    return(<div>
            <header>
                <div className="logo">
                  <img src="azure.png" alt="azure logo"  width="200" height="100"/>
                </div>
                <div className="menu">
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About us</Link>
                </li>
                <li>
                    <Link to="/service">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
             </ul>
                </div>
            
            </header>
            <section>
            <Outlet />
            </section>
            <footer>

            </footer>
            
    </div>)
}
export default MasterPage;