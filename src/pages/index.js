import React from 'react'
import Link from 'gatsby-link'

import BlackCard from '../components/blackCard'
import WhiteTitle from '../components/whiteTitle'
import WhiteContent from '../components/whiteContent';
import ResumeBlock from '../components/resumeBlock';
import ResumeList from '../components/ResumeList';

const IndexPage = () => (
  <div>

    <BlackCard padding={2} margin={2}>
      <WhiteTitle text="HAMZA ALI TAS"/>
      <WhiteContent text="Hello this is a text something like that"/>
    </BlackCard>
    
    <ResumeBlock header="itu" content="some content" date="2017-"/>

    <ResumeList data={resumeData} title="a title"/>


  </div>
)

export default IndexPage

const resumeData = [
  {
    header: "a header",
    content: "a content a content a content",
    date: "a date info"
  },
  {
    header: "a header",
    content: "a content a content a content",
    date: "a date info"
  },
  {
    header: "a header",
    content: "a content a content a content",
    date: "a date info"
  }
]