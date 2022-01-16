import { Container, Row, Col } from "react-bootstrap";

function MeJobs(props){
    return (
    <Container>
        <Row>
            <Col>  {props.title} </Col>
            <Col>  {props.description} </Col>
            <Col>  {props.technology} </Col>
        </Row> 
        </Container>  
    );
}

export default MeJobs;
