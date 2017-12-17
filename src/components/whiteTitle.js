import React from 'react'
import styledComponents from 'styled-components';

const WTitle = styledComponents.h2`
    color: white;
`

export const WhiteTitle = ({text}) => (
    <WTitle>
        {text || "DEMO"}
    </WTitle>
)

export default WhiteTitle