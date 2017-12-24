import React from 'react'
import Link from 'gatsby-link'
import styledComponents from 'styled-components';

import BlackCard from '../components/blackCard'
import WhiteTitle from '../components/whiteTitle'
import WhiteContent from '../components/whiteContent';
import ResumeBlock from '../components/resumeBlock';
import ResumeList from '../components/ResumeList';


const Container = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5em;
  grid-auto-rows: minmax(max-content, 2fr);
  grid-auto-flow: dense;
  padding: 5em;
`

const LandingPage = styledComponents.div`
  display: flex;
  justify-contetn: end;
  align-items: center;
  height: 85vh;
  width: 100%;
  background: url(https://us.123rf.com/450wm/sylverarts/sylverarts1407/sylverarts140702917/30278618-seamless-geometric-pattern-simple-vector-black-and-white-stripes-background.jpg?ver=6);
  border-bottom: solid black 10px;
`

const IndexPage = () => (
  <div>
    <LandingPage>
        <BlackCard padding={2} margin={5} width="40%">
          <WhiteTitle text="HAMZA ALI TAS"/>
          <WhiteContent text={text}/>
        </BlackCard>
      
    </LandingPage>
    <Container>  
      <div>
        <ResumeList data={resumeData} title="a title"/>
        <BlackCard padding={2}>
          <WhiteTitle text="HAMZA ALI TAS"/>
          <WhiteContent text="Hello this is a text something like that"/>
        </BlackCard>
        <ResumeList data={resumeData} title="a title"/>
      </div>
      <div>
        <ResumeList data={resumeData} title="a title"/>
        <br/>
        <BlackCard padding={2}>
          <WhiteTitle text="HAMZA ALI TAS"/>
          <WhiteContent text="Hello this is a text something like that"/>
        </BlackCard>

      </div>
    </Container>
  </div>
)

export default IndexPage

const text = `
Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.
`

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
  },
  {
    header: "a header",
    content: "a content a content a content",
    date: "a date info"
  }
]