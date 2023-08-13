import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menus=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="Home" action>
                Home
                 </Link>
                 <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action >
                   Addcourse
                 </Link>
                 <Link className="list-group-item list-group-item-action" tag="a" to="view-courses" action>
                View courses
                 </Link >
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>
                ABout
                 </Link>
                 <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>
                Contact
                 </Link>








                 
        </ListGroup>

    )
}
export default Menus;