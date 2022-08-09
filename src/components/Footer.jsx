import React from "react";
import { ModalFooter } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import {Row} from "react-bootstrap";

function Foot(){
    return(
       <ModalFooter style={{position: 'fixed', left: 0, bottom : 0, right: 0}} className = "footer">
            <Row>
                <div className="d-flex">
                    
                </div>
                <div className="d-flex">
                <a href="https://www.linkedin.com/in/thomas-ruppeiner-201880170/" className="linked-in-icon"><BsLinkedin size={28}/></a>
                Made By Thomas Ruppeiner
                </div>
            </Row>
       </ModalFooter>
    )
};

export default Foot;

