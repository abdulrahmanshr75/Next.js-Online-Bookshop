import Link from "next/link";
import { motion } from "framer-motion";
import { Nav, Navbar, Container } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <>
      <Navbar className="navy" bg="dark" expand="lg">
        <Container>
          <motion.div
            whileHover={{ rotate: 360, scale: 1.3 }}
            transition={{ type: "spring", stiffness: 100, duration: 4 }}
            className="navbar-brand"
            href="/"
          >
            <Link href="/">
              <img className="siteLogo" src="k.png" />
            </Link>
          </motion.div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" href="#About">
                About
              </Link>
              <Link className="nav-link" href="#Services">
                Services
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;