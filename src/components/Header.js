import {Badge, Container, Nav, Navbar} from 'react-bootstrap/';
import {FaShoppingBasket} from 'react-icons/fa'
import { MainContex,useContext } from '../context';

function Header() {
  let {setModalShow,basket} = useContext(MainContex)
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Papa-Reshid's</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaShoppingBasket onClick={() => {setModalShow(true)}} />
              <Badge className="position-absolute top-1 translate-middle badge rounded-pill bg-danger">{basket.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;