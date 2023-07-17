
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

function NavBar() {
    return (
      <div>  
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                <img alt="instacart logo" src="https://1000logos.net/wp-content/uploads/2023/04/Instacart-Logo.png" width="180px" align="left" />
            </Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Nav
                style={{
                    padding: "24px 40px 20px 1000px",
                    fontSize: "18px",
                    lineHeight: "26px",
                    fontWeight: "bolder",
                    textAlign: "right",
                    justifyContent: "end",
                }}
            >
                <Nav.Item>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Button variant="success" style={{ fontSize: "18px" }}>Sign Up</Button>{' '}
                </Nav.Item>
            </Nav>

        </Navbar>
    </div>
    );
}

export default NavBar;