import React, {Component} from 'react';
import {Container,  Row, Col,  Card } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'
import items from "../jsons/fantasy.json";




class Latest extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "Welcome to Strivesturant!",
        };
    }
   
    
    render(){
        return(
            
            <Container>
                <h1> Latest Release</h1>
                <Row>
                        {items.map((item)=>{
                            return(
                                
                            <Col md={3}  >
                             
                                <Card key={item.asin}>
                                <Card.Img variant="top" src={item.img}/>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.category}
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>  
                            </Col> 
                            );
                            
                            
                            
                        })}
                       
                    
                </Row>
          </Container>
        );
        
    }
    
    

    
}

export default Latest
