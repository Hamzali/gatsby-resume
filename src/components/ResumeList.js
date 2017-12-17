import React from 'react'
import styledComponents from 'styled-components'

import ResumeBlock from './resumeBlock'


const ListTitle = styledComponents.h1`
    color: black;    
    margin: 0;
`

export const ResumeList = ({data, title}) => (
    <div>
        <ListTitle>{title}</ListTitle>
        {data && data.map(d => <ResumeBlock header={d.header} content={d.content} date={d.date} />)}
    </div>
)

export default ResumeList