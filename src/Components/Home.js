import React, { useEffect }  from "react";
import { Container,Button } from 'reactstrap';
import "../Styles/Home.css"



const Home=()=>{
  useEffect(()=> {
    document.title="Home || Learnwith NEW "
  }, []);
  
  
    return(
        <div>
            <section className="section1">
         
           
          <h1 className="display-3"> learn with mayur</h1> 
          <p>This a course project</p>
          <Container>
            <Button color="primary" outline>Start using</Button>
          </Container>
          </section>
        </div>
       
    );
}
export default Home;