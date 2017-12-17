import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styledComponents from 'styled-components';

import './index.css'

import Header from '../components/header'


const Layout = styledComponents.div`
  margin: 0 auto;
  max-widht: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const TemplateWrapper = ({children}) => (
  <div>
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
    <Layout>
      {children()}
    </Layout>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
