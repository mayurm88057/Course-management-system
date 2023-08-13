import React, { useState,useEffect } from "react";
import Course from "./Course"
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const Allcourse= ( ) =>{  
    useEffect(()=>{
        document.title="All Courses"
    }, []); 

    // function  to call server 
    const getAllcoursesFromServer=() =>{
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
               // console.log(response);
                console.log(response.data);
                toast.success("courses has been loaded",{
                position:"bottom-right",

                }
            );
                setCourses(response.data);
}, 
            (error) => {  
//for error
console.log(error);

toast.error("something went wrong")

            }
            
        
        );
    };

    // callin the loading course fucntion
    useEffect(()=>{
        getAllcoursesFromServer();

    }, []);

    const[courses,setCourses]=useState([]);
    const updatecourses=(Id)=>{
        setCourses(courses.filter((c)=>c.Id !=Id ));
         
    };

return (
    <div>
        
        <h1 className="text-center">Allcourse</h1>
        <p className="text-center"> List of courses are as follows</p>
       
        { courses.length>0
        ?courses.map((item)=>
            <Course key={item.id} course={item} update={updatecourses} />): "no Courses"}
</div>
);
};
export default Allcourse;