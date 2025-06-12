import React from 'react';
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useState } from 'react';

import CustomButton from './CustomButton';

function CustomSearch(props){

    console.log(props);
    
    const [ricercaUtenteInput, setRicercaUtenteInput] = useState('');

    const handleInputChange = (event) => {
        setRicercaUtenteInput(event.target.value);
        console.log("Input changed:", event.target.value);
    };

    return(
        <>
            <div style={{display: 'flex'}}>
                <Form.Control onInput={handleInputChange} placeholder='Cerca qua!' style=
                {{
                    borderRadius:'20px',
                    paddingTop: '10px',
                    paddingBottom: '10px'
                }}>
                </Form.Control>
                <CustomButton ricerca={ricercaUtenteInput} search={true} testo="Cerca" bgcolor='red' onSearch={ props.onSearch} setCartaSelezionata={props.setCartaSelezionata}></CustomButton>
            </div>
        </>
    )
}

export default CustomSearch;