import React, {Component} from 'react';
import {Container, Row, Col, Carousel } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';





class Welcomes extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "Welcome to Strives Book Store!",
        };
    }
    
    render(){
        return(
            
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome to Strives Book Store!</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                </Container>
            </Jumbotron>
        );
        
    }
    
}
export default Welcomes