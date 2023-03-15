import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #383838;
  color: #14fdce;
  -webkit-font-smoothing: none;
  line-height: 1.2;
`;

export const Frame = styled.div`
  background-color: transparent;
  border-radius: 2rem;
  border: 1rem solid #080808;
  border-top-color: #020202;
  border-bottom-color: #121212;
  box-shadow: inset 0 0 18rem black, inset 0 0 3rem black, 0 0 10rem black;
  height: 96%;
  position: absolute;
  top: 2%;
  left: 2%;
  width: 96%;
  pointer-events: none;
  overflow: hidden;
`;

export const Layer = styled.div`
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
`;

const crt_output = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const crt_glow = keyframes`
  0% { opacity: 0.1; }
  50% { opacity: 0.2; }
`;

export const Output = styled(Layer)`
  animation: ${crt_output} 10ms infinite;
  background-color: var(--console-bg);
  overflow-y: auto;
  position: absolute;
  padding: 3rem 2rem;
  pointer-events: auto;
  text-shadow: 0 0.2rem 1rem var(--lighten-console-bg);
  //z-index: -1;
`;

export const Scanline = styled(Layer)`
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0.6)
  );
  background-size: 100% 0.3rem;
  border-radius: 1rem;
  position: absolute;
  pointer-events: none;
`;

export const Glow = styled(Layer)`
  animation: ${crt_glow} 60s infinite;
  background: radial-gradient(
    circle at center,
    rgba(27, 212, 89, 1) 0%,
    rgba(27, 212, 89, 0.88) 58%,
    rgba(21, 235, 92, 0.57) 80%,
    rgba(19, 94, 29, 0.27) 93%,
    rgba(10, 23, 12, 0) 100%
  );
  opacity: 0.15;
  pointer-events: none;
  position: fixed;
`;
