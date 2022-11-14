import React from "react";
// bootstrap component
import { Navbar as NavbarBootstrap, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <NavbarBootstrap bg="dark" variant="dark">
      <Container>
        <NavbarBootstrap.Brand>SPORT CALENDAR</NavbarBootstrap.Brand>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;
