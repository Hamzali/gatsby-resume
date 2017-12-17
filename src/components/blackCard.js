import React from 'react'
import styledComponents from 'styled-components';

const Card = styledComponents.div`
    background: black;
    padding: ${props => props.padding || 0}em;
    margin: ${props => props.margin || 0}em;
    width: ${props => props.width};
    height: ${props => props.height};
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.25);
    text-align: center;
`

export const BlackCard = (props) => {
    return(
        <Card {...props}>
            {props.children}
        </Card>
    )
}

export default BlackCard