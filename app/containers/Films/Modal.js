/*
 * Modal Component
 *
 */

import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.show ? 'block' : 'none')};
`;

const ModalMain = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  border-radius: 10px;
  padding: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -10px;
  margin-bottom: 20px;
`;

const Button = styled.div`
  height: 50px;
  width: 50px;
`;

const Content = styled.section``;

const Modal = ({ handleClose, show, children }) => (
  <ModalContainer show={show}>
    <ModalMain>
      <Header>
        <Button onClick={handleClose}>
          <MdClose size={25} />
        </Button>
      </Header>
      <Content>{children}</Content>
    </ModalMain>
  </ModalContainer>
);

export default Modal;
