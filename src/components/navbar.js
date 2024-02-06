import Head from "next/head";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function WCSNavbar() {
    return (
        <Navbar
            style={{
                backgroundImage: "linear-gradient(rgba(255, 143, 205, 1), rgba(253, 176, 218, 1))",
                color: "#014d4e",
                fontSize: 300,
                // borderSpacing: 500,
                fontPalette: "#014d4e",
                fontWeight: 600,
                
                //width: "60ch"
                // color1: #fe93d2
                // color2: #rgba (253, 176, 218, 1)
            }}
        >
            <Container>
                <Navbar.Brand href=""><img src="https://points.illinoiswcs.org/assets/logo-9d49d730.png" width="140"></img></Navbar.Brand>
                <Nav className="justify-content-end">
                  <h4>
                    <Nav.Link href="https://points.illinoiswcs.org/" >points</Nav.Link>
                  </h4>
                  <h4>
                    <Nav.Link href="">committees</Nav.Link>
                  </h4>
                  <h4>
                    <Nav.Link href="">resources</Nav.Link>
                  </h4>
                </Nav>
            </Container>
        </Navbar>
    );
  }
