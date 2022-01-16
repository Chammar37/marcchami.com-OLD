import MeInfo from './components/MeInfo'; 
import MeJobs from './components/Jobs';
import { Container, Row, Col } from "react-bootstrap";


function App() {
  return (
    <>
    
      <div className="Personal_Info">
        <MeInfo
          name={"Marc J. Chami"}
          position={"Software Engineer"}
        
        ></MeInfo>
      </div>
      
      <Container> 
        <Row>
          <div className="Job1">
              <MeJobs
                title={"Quality Engineer Automation & RPA"}
                description = {"lotus poems"}
                technology = {"Java, Python, Jenkins, Terminal, Bash"}
              ></MeJobs>

          </div>
        </Row>
    </Container>
      
      </>





  );
}




export default App;
