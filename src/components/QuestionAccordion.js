import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
`;

const QuestionBar = styled.div`
  background-color: #EFA9AE;
  padding: 16px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 12px;
  
  &:hover {
    background-color: #e5989e;
    box-shadow: 0 2px 10px rgba(239, 169, 174, 0.5);
  }
`;

const QuestionText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: white;
  font-family: 'Nunito', sans-serif;
`;

const ExpandIcon = styled.span`
  font-size: 16px;
  color: white;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

const Content = styled.div`
  background-color: #f8f8f8;
  padding: ${({ isOpen }) => (isOpen ? '20px' : '0')};
  max-height: ${({ isOpen }) => (isOpen ? '5000px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 0 0 12px 12px;
`;

function QuestionAccordion({ questionText, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <QuestionBar onClick={toggleAccordion}>
        <QuestionText>{questionText}</QuestionText>
        <ExpandIcon isOpen={isOpen}>▼</ExpandIcon>
      </QuestionBar>
      <Content isOpen={isOpen}>
        {isOpen && children}
      </Content>
    </AccordionContainer>
  );
}

export default QuestionAccordion;
