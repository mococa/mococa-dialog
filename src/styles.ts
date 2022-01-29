import styled, { keyframes } from 'styled-components';
import { DialogActionButtonProps } from '.';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 999;

  background-color: rgba(0, 0, 0, 0.1);

  animation: ${fadeIn} 125ms;

  font-family: SpaceGrotesk-Bold;
`;

export const DialogContainer = styled.div`
  display: flex;
  flex-flow: column;

  position: absolute;
  margin: auto;
  padding: 16px;

  background: #fafafa;

  box-shadow: -1px 3px 10px 0px rgb(131 131 131 / 48%);

  border-radius: 4px;

  width: 30%;
  min-width: 350px;
  height: 200px;
`;

export const DialogTitle = styled.h1`
  position: relative;

  margin: 12px 0 4px;
`;

export const DialogBody = styled.div`
  flex: 1;

  font-size: 1.125rem;
  color: black;

  padding: 8px 6px 4px;
`;

export const DialogActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    :not(:first-of-type) {
      margin-left: 8px;
    }
  }
`;

export const DialogActionButton = styled.button<DialogActionButtonProps>`
  border: none;
  border-radius: 3px;

  outline: none;

  padding: 12px 24px;

  min-width: 80px;

  cursor: pointer;

  transition: 100ms ease;

  background-color: ${({ background }) => background || '#dedede'};
  color: ${({ textColor }) => textColor || '#272727'};

  :hover {
    filter: brightness(95%);
  }

  :active {
    filter: brightness(90%);
  }
`;

export const DialogCross = styled.button`
  position: absolute;
  right: 0;
  top: -12px;

  height: 25px;
  width: 25px;

  cursor: pointer;

  padding: 0;

  border: none;
  outline: none;

  background: rgba(0, 0, 0, 0);

  svg {
    width: inherit;
    height: inherit;
  }
`;
