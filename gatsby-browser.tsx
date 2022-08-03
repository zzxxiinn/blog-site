import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import styled from 'styled-components'

import "terminal.css"

import "./src/styles/typography.css"
import "./src/styles/main.styl"

import Doodle from "./src/components/doodle"


const DoodleWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding: 5em 0;
`

const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`


export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {

  return (
    <PageWrapper>``
      <DoodleWrapper>
        <Doodle rule={`
          @grid: 1 / 100vw 100vh;
          background-color: #0a0c27;
          background-size: 200px 200px;
          background-image: @doodle(
            @grid: 6 / 100%;
            @size: 4px;
            font-size: 4px;
            color: hsl(@r240, 30%, 50%);
            box-shadow: @m3x5(
              calc(4em - @nx * 1em) calc(@ny * 1em)
                @p(@m3(currentColor), @m2(#0000)),
              calc(2em + @nx * 1em) calc(@ny * 1em)
                @lp
            );
          );
        `} />
      </DoodleWrapper>
      <ContentWrapper>{element}</ContentWrapper>
    </PageWrapper>
  )
}
