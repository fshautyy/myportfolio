import { Container, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/imgs/port1.jpg";
import projImg2 from "../assets/imgs/port2.jpg";
import projImg3 from "../assets/imgs/port3.jpg";
import projImg4 from "../assets/imgs/port4.jpg";
import projImg5 from "../assets/imgs/port5.jpg";
import projImg6 from "../assets/imgs/port6.jpg";
import projImg7 from "../assets/imgs/port7.jpg";
import projImg8 from "../assets/imgs/port8.jpg";
import projImg9 from "../assets/imgs/port9.jpg";
import projImg10 from "../assets/imgs/port10.jpg";
import projImg11 from "../assets/imgs/port11.jpg";
import projImg12 from "../assets/imgs/port12.jpg";
import projImg13 from "../assets/imgs/port13.jpg";
import { ProjectCard } from "./projectsCard";
import colorSharp2 from "../assets/imgs/color-sharp2.png";

export const Project = () =>{
    const projects =[
        {
            title: "PPOB Arindo",
            desc: "Mobile Development",
            imgUrl: projImg1
        },
        {
            title: "Face Recognition Attendance",
            desc: "Mobile Development",
            imgUrl: projImg2
        },
        {
            title: "Nasiira",
            desc: "Mobile Development",
            imgUrl: projImg3
        },
        {
            title: "To-Do List",
            desc: "Mobile Development",
            imgUrl: projImg10
        },
        {
            title: "SubMitra App",
            desc: "Mobile Development",
            imgUrl: projImg7
        },
        {
            title: "Dhastore",
            desc: "Mobile Development",
            imgUrl: projImg11
        },
        {
            title: "Incomm",
            desc: "Mobile Development",
            imgUrl: projImg12
        },
        {
            title: "Dashboard Server Monitoring",
            desc: "Mobile Development",
            imgUrl: projImg13
        },
        {
            title: "Decision Support System",
            desc: "Web Development",
            imgUrl: projImg4
        },
        {
            title: "Book Management System",
            desc: "Web Development",
            imgUrl: projImg5
        },
        {
            title: "Inti Health Store",
            desc: "Web Development",
            imgUrl: projImg6
        },
        {
            title: "MH World Long Sword ",
            desc: "Web Development",
            imgUrl: projImg8
        },
        {
            title: "Waserba ",
            desc: "Web Development",
            imgUrl: projImg9
        },
        
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                        <h2>Projects</h2>
                        <p>Discover a collection of my diverse projects and creations.</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, i)=>{
                                                return(
                                                   <ProjectCard key={i}{...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="img"></img>
        </section>
    );
}