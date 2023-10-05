import { Link } from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>BugBuster</h1>
                </Link>
            </div>
        </header>
    )
}


export default Navbar