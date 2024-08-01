import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function MasterPage() {
    return (
    <>
        <div className="container-fluid header">
          
                <div className="row">
                    <div className="col-sm-4">
                        <img src="azure.png" alt="azure logo" className="img-fluid" />
                    </div>
                    <div className="col-sm-8">
                        <nav className="navbar navbar-expand-sm navbar-dark">
                            <div className="container-fluid">

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/About">About us</Link>
                                        </li>
                                      
                                        <li className="nav-item">
                                            <Link to="/service">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact">Contact us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>


          
        </div>
        <section className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <Outlet />
                </div>
            </div>

        </section>
        <footer className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <p>footer part 1</p>
                </div>
                <div className="col-sm-4">
                    <p>footer part 2</p>
                </div>
                <div className="col-sm-4">
                    <p>footer part 3</p>
                </div>
            </div>
        </footer>

    </>)
}
export default MasterPage;