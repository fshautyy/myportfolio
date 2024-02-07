import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/imgs/mylogo.svg";
import navIcon1 from "../assets/imgs/nav-icon1.svg";
import navIcon2 from "../assets/imgs/nav-icon2.svg";
import navIcon3 from "../assets/imgs/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/anandaydha" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/yudha.ananda20" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/anandaydha" target="_blank"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}