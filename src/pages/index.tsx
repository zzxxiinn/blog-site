import * as React from "react";
import styled from "styled-components";


const Section = styled.section`
  background-color: var(--background-color);
  width: 90vw;
  margin: 0 auto;
`

const Header = styled.header`
  width: 100%;
  text-align: center;
`

const H1 = styled.h1`
  font-size: 4em;
  display: block;
`


const IndexPage = () => {
  return (
    <Section>
      <Header>
        <H1>你好，世界！</H1>
      </Header>
    </Section>
  )
}

export default IndexPage
