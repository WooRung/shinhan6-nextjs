"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

type NavItem = {
  url: string;
  title: string;
};
type NavBarClientProps = {
  navItems: NavItem[];

  rightItems: NavItem[];
};

export default function NavBarClient({
  navItems,
  rightItems,
}: NavBarClientProps) {
  const { user, logout } = useAuth();
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  {navItems.map((item, idx) => {
                    return (
                      <Link
                        key={item.url}
                        href={item.url}
                        style={{ textDecoration: "none" }}
                      >
                        <Nav.Link as="div" className="text-black">
                          {item.title}
                        </Nav.Link>
                      </Link>
                    );
                  })}
                </Nav>

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* {user?.email} */}
                  {!user ? (
                    rightItems.map((item, idx) => {
                      return (
                        <Link
                          key={item.url}
                          href={item.url}
                          style={{ textDecoration: "none" }}
                        >
                          <Nav.Link as="div" className="text-black">
                            {item.title}
                          </Nav.Link>
                        </Link>
                      );
                    })
                  ) : (
                    <Nav.Link className="text-black" onClick={() => logout()}>
                      로그아웃
                    </Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
