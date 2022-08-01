import React, { FC, PropsWithChildren } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
	font-faminy: inherit;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: auto;
	border: none;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;



const Code: FC<PropsWithChildren> = (props) => (
	<Highlight {...defaultProps} theme={theme} code={String(props.children)} language="jsx">
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
);

export default Code;
