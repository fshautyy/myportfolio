import {Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headingImage from "../assets/imgs/pixar.png";


export const Banner =()=>{

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7} className="animate__animated animate__fadeInLeft">
                        <span className="tagline">Exploring Boundaries, Defining Possibilities</span>
                        <h1>{"Hello, I'm a "}<span className="wrap" >Flutter Developer</span></h1>
                        <p>Hi there! I'm Yudha, a passionate Flutter developer aiming to make user-friendly mobile apps. I specialize in creating apps that work seamlessly across different platforms. Come explore my digital world, where I turn code into visually appealing and user-friendly experiences. Welcome to the intersection of creativity and functionality in the Flutter development universe!</p>
                        <button onClick={()=> document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Explore My Work <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="animate__animated animate__fadeInDown">
                        <img src={headingImage} alt="Heading img" />
                    </Col> 
                </Row>
            </Container>
        </section>
    )
}