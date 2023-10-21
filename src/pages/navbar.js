import Head from "next/head";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function WCSNavbar() {
    return (
        <Navbar
            style={{
                backgroundColor: "#ff8fcd"
            }}
        >
            <Container>
                <Navbar.Brand href=""><img src="https://points.illinoiswcs.org/assets/logo-9d49d730.png" width="140"></img></Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="https://points.illinoiswcs.org/">points</Nav.Link>
                    <Nav.Link href="">committees</Nav.Link>
                    <Nav.Link href="">resources</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
