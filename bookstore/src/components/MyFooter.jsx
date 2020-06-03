import React, {Component} from "react";

import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";

class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "Book store!",
        };
    }
    render(){
        return(
            <MDBFooter color="black" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5>&copy;Strive Book Store - Changing lifes through learning </h5>
                            <p>
                                Here you can lend books that can enhance your learning
                            </p>
                            <p>
                                karviaistie 12, 00700, Helsinki, Finland
                            </p>
                        </MDBCol>
                        <MDBCol md ="6">
                            <h5 className="title">Contact Us</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!"><i class="fab fa-instagram fa-2x"></i></a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!"><i class="fab fa-twitter fa-2x"></i></a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!"><i class="fab fa-facebook fa-2x"></i></a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!"><i class="fab fa-youtube fa-2x"></i></a>
                                </li>
                            </ul>

                        
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Empact 
                    </MDBContainer>
                </div>
            
            
            </MDBFooter>
        )
    }
}
export default Footer;