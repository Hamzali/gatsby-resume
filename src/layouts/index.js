import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styledComponents from 'styled-components';

import './index.css'

import Header from '../components/header'


const Content = styledComponents.div`
  margin: 0;
  max-widht: 960;
  padding-top: 0;
`

const Container = styledComponents.div`
  display: grid;
  grid-template-rows: 15vh auto 100px;
`

const Footer = styledComponents.footer`
  background: black;
`


const TemplateWrapper = ({children}) => (
  <Container>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
      {
        name: 'description',
        content: 'Sample'
      }, {
        name: 'keywords',
        content: 'sample, something'
      }
    ]}/>
    <Header/>
    <Content>
      {children()}
    </Content>
    <Footer>

    </Footer>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
