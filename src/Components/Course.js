import React from "react";
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
}from "reactstrap";
import "../Styles/course.css"
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course =({course,update}) =>{
 const  deleteCourse=(Id)=>{
    axios.delete(`${base_url}/courses/${Id}`).then(
        (response)=>{
            toast.success("Course deleted");
            update(Id);
        },
        (error)=>{
            toast.error("course not deleted !! server problem");
        }
        

    );

 };

    return(
        <card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <cardText>{course.description}</cardText>
                 <Container classname ="text-center">
                    <Button color="danger ml-6" onClick={()=>{
                        deleteCourse(course.id);
                    
                    }} >Delete</Button>
                    
                    <Button color="warning ml-1 ">Update</Button>
                 </Container> 
            </CardBody>
            </card>
    );

}
export default Course;
