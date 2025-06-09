import React from "react";
import { CardImg, CardTitle } from "react-bootstrap";
import Card from "react-bootstrap/Card"

function GameCard(props){
    return(
        <Card style={{height:'100%', borderRadius:'20px', cursor:'hand'} }>
            <CardImg style={{borderRadius:'20px'}} src={props.immagine}>
            </CardImg>
            <CardTitle style={{marginTop:"10px"}}>
                <h3>{props.titolo}</h3>
            </CardTitle>
            <Card.Text>
                {props.desc}
            </Card.Text>
        </Card>
    )
}

export default GameCard