import React, { FC, ReactElement } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import styled from "styled-components";
import { MDXProviderProps } from "@mdx-js/react";

const Wrapper = styled.div`
  text-align: center;
`;

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: auto;
  border: none;
  font-family: var(--code-font-stack);

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  white-space: nowrap;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const HighlightCode: FC<MDXProviderProps> = (props) => {
  const codeItem = props.children;
  const {
    children,
    className
  } = (codeItem as ReactElement)?.props
  const language = className.replace(/language-/, '')


  return (
    <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

export default HighlightCode;
