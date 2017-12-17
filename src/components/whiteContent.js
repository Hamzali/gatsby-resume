import React from 'react'
import styledComponents from 'styled-components';

const WContent = styledComponents.p`
    color: white;
`

export const WhiteContent = ({text}) => (
    <WContent>
        {text || "DEMO"}
    </WContent>
)

export default WhiteContent