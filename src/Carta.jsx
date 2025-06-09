import React from "react";
import { CardImg, CardTitle } from "react-bootstrap";
import Card from "react-bootstrap/Card"

function GameCard(props){

    function switchToGamePage(){
        props.setPosizione('c');
        props.setCartaSelezionata(props.id);
        console.log("Carta selezionata: " + props.id);
    }

    return(
        <Card onClick={() => {switchToGamePage()}} style={{height:'100%', borderRadius:'20px', backgroundColor:'#FFF7F7', cursor: "pointer"} }>
            <CardImg style={{borderRadius:'20px'}} src={props.immagine}/>
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