import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Button, Container, Row ,Col} from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './Components/Home'
import Course from './Components/Course';
import Allcourse from './Components/Allcourse'
import Addcourse from './Components/Addcourse';
import Menus from './Components/Menus';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';

function App() {

  const btnHandle = () => {
    toast.error("done",{
    position:"top-right",
    });
  
  };
  return (
  <div>
    <Router>
    <ToastContainer/>
    <Container>
      <Header/>
      <Row>
        <Col md={2}>
          <Menus/>
          </Col>
        <Col md={10}>
<Routes>
          <Route path="Home"Component={Home} exact/>
          <Route path="add-course" Component={Addcourse} exact/>
          <Route path="view-courses" Component={Allcourse} exact/>
</Routes>
        </Col>
        
      </Row>
    </Container>
    </Router>
 </div>
  );
};

export default App;
