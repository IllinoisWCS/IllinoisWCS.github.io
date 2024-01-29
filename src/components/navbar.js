import Head from "next/head";
import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function WCSNavbar() {
  return (
    <Navbar
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 143, 205, 1), rgba(253, 176, 218, 1))",
        color: "#175d5e",
        // color1: #fe93d2
        // color2: #rgba (253, 176, 218, 1)
      }}
    >
      <Container>
        <Navbar.Brand href="">
          <img
            src="https://points.illinoiswcs.org/assets/logo-9d49d730.png"
            width="140"
          ></img>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="https://points.illinoiswcs.org/">points</Nav.Link>
          <Nav.Link href="/committees">committees</Nav.Link>
          <Nav.Link href="/resources">resources</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
