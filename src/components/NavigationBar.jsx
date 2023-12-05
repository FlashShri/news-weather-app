import { Container , Nav , Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap' ;
export function NavigationBar(){
    return(


        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

        <LinkContainer to='/'>
         <Nav.Link >Home</Nav.Link>
        </LinkContainer>
           
          <LinkContainer to='/allnews'>
         <Nav.Link href="#home">All news</Nav.Link>
        </LinkContainer>

         <LinkContainer to='/weather'>
         <Nav.Link href="#home">Weather</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/register'>
         <Nav.Link href="#home">Register</Nav.Link>
        </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    )
    ;
}