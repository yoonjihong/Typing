import styled from 'styled-components';

export const TypingPageStyled = styled.div`
  position: relative;
  margin: 50px 60px;
  font-weight: bold;
  font-size: 50px;
  line-height: 1.7;
  width: 100vw;
  height: 100vh;

  .editorbleBox {
    outline: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #000;
  }

  .sentence {
    color: rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0);
    word-break: keep-all;
  }
`;
