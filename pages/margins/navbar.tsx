import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar className="justify-content-center justify-content-md-end nav-font">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}