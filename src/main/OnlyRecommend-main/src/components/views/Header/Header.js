import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import  'bootstrap/dist/css/bootstrap.min.css' ;
import './Header.css'


const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand style={{ fontSize: '22px' }} as={Link} to="/">
                    <img className="headerGrupImg" alt="grupImg" src="image/GRUP로고.png" /></Navbar.Brand>
                    <img className="headerJOONGBUImg" src="image/중부대로고.jpg" alt='중부대로고' />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto mx-auto">
                        <Nav.Link style={{ fontSize: '20px', color:'black'}}href="#features">HOME</Nav.Link>
                        <Nav.Link style={{ fontSize: '20px', color:'black' }}as={Link} to="/RecommendPage">AI 식물 추천</Nav.Link>
                        <Nav.Link style={{ fontSize: '20px', color:'black' }}as={Link} to="/IntroducePage">팀원소개</Nav.Link>
                        <Nav.Link style={{ fontSize: '20px', color:'black' }}as={Link} to="/CrawlingPage">식물상점</Nav.Link>
                        <NavDropdown title={<span style={{ fontSize: '20px', color: '#c0eb75' }}>게시판</span>} id="collasible-nav-dropdown">
                            <NavDropdown.Item style={{ color: 'black' }} href="#action/3.1">고민게시판</NavDropdown.Item>
                            <NavDropdown.Item style={{ color: 'black' }} href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{ color: 'black' }} as={Link} to="/Introduce">Introduce</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item style={{ color: 'black' }} href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/Login">로그인</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/SignIn">
                        회원가입
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header