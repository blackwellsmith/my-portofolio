import React from "react"
import { Nav, Navbar } from "react-bootstrap"

export const Navigation = () => {
    return (
        
            <Navbar bg="dark" expand="lg" variant="dark">
              <Navbar.Brand href="/">Welcome</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav classname="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/resume">Resume</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/portfolio">Portfolio</Nav.Link></Nav.Item>
                </Nav>
              </Navbar.Collapse>
              </Navbar> 
        
    )
}