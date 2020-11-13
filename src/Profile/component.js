import React from 'react';
import {Card, Button, Container} from 'react-bootstrap';
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';



const Component = (props) =>{

    
    const styleObject= {width: '25%', margin: '10px auto'};


    return(
        <Container>
                 <Card style={styleObject}>
  <Card.Img variant="top" src={props.children} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>{props.bio}</Card.Text>
    <h5><Card.Text>{props.profession}</Card.Text></h5>

    <Button variant="primary" onClick= {()=>(props.click)(props.name)}>Alert name</Button>
  </Card.Body>
</Card>
        </Container>
   

    );
}
Component.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    click: PropTypes.func
   };
Component.defaultProps = {
    name:"your name",
    bio:"your bio",
    profession: "your profession"

}
export default Component;