import * as React from "react";
import styled from "styled-components";


const Section = styled.section`
  background-color: var(--background-color);
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = styled.header`
  width: 100%;
  text-align: center;
`

const H1 = styled.h1`
  font-size: 7em;
  display: block;
  text-shadow: -0.1em 0.1em #ff5e5e, 0.05em -0.05em 0em #5e5eff;
`

const DoodleContainer = styled.div`
  width: 100%;
  height: 300px;
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
