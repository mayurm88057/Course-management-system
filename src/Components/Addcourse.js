import React, { Fragment,useEffect, useState,handleForm } from "react";
import {Button, Container, Form,FormGroup, Input} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";



const Addcourse=()=>{
    useEffect(()=> {
        document.title="Add Course"
      },[]);

      const [course,setCourses]=useState({});
      //form handler funtion 
      const handleForm = (e) => {
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
      };

      // creating te function to post data on server
      const postDatatoServer = (data) =>{
        axios.post(`${base_url}/courses`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Course added succesfully");
            setCourses({id:"" ,title:"",description: ""});
        },  
        (error) =>{
        console.log(error);
        console.log("error");
        toast.error("Error ! something went wrong");


        }

        
        );
      };

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
<Form onSubmit={handleForm}> 
    <FormGroup>

        <label for>Courses Id</label>

        <Input 
        type="text" 
        placeholder="Enter here" 
        name="user" 
        id="user"
        onChange={(e)=> {
        setCourses({...course,id:e.target.value});
        }}/>

        
    </FormGroup>
    <FormGroup>
        <label for="title">course Title</label>
        <Input type="text" placeholder ="enter title here" id="title"
        onChange={(e)=>{
            setCourses({...course,title:e.target.value});
        }}
        />
 </FormGroup>
    <FormGroup>
        <label for ="description">Course Description</label>
        <Input type="textarea"
        placeholder="Enter the description" 
        id="description"
        style={{height:100}}
        onChange={(e)=>{
         setCourses({...course,description:e.target.value})   
        }}/>

       </FormGroup>
    <Container className="text-center">
        <Button type="submit" color="success">Addcourse</Button>
        <Button type="reset" onClick={()=> {
            setCourses({id:"",title:"",description:""});
        }}
            color="warning my-2">
                Clear
                </Button>
            
          
            
    </Container>

</Form>
        </Fragment>

    );
};
export default Addcourse;