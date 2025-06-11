import React from 'react';
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

import CustomButton from './CustomButton';

function CustomSearch(){

    return(
        <>
            <div style={{display: 'flex'}}>
                <Form.Control placeholder='Cerca qua!' style=
                {{
                    borderRadius:'20px',
                    paddingTop: '10px',
                    paddingBottom: '10px'
                }}>
                </Form.Control>
                <CustomButton search={true} testo="Cerca" bgcolor='red'></CustomButton>
            </div>
        </>
    )
}

export default CustomSearch;