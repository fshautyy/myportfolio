import { Col } from "react-bootstrap"
import { LazyLoadImage } from "react-lazy-load-image-component";


export const ProjectCard = ({title, desc, imgUrl}) =>{
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <LazyLoadImage  src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{desc}</span>
                </div>
            </div>
        </Col>
    )
}