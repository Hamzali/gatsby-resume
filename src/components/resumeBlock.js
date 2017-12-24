import React from 'react'
import styledComponents from 'styled-components';

const Body = styledComponents.div`
    background: white;
    border: solid black 10px;
    border-bottom: none;
    border-top: none;
    border-right: none;
`

const Header = styledComponents.h3`
    background: black;
    padding: .3em;
    padding-left: 0;
    color: white;
    margin: 0;
`

const Content = styledComponents.p`
    margin: 0;
    padding: .5em 0 0 1em;
`

const DateData = styledComponents.p`
    margin: 0;
    padding: 0 0 .5em 1em;
`

export const ResumeBlock = ({header, content, date}) => (
    <Body>
        <Header>&#10070; {header}</Header>
        <Content>{content}</Content>
        <DateData>{date}</DateData>
    </Body>
)

export default ResumeBlock