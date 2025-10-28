import React from 'react';
import styled from 'styled-components';

const SpeechBubbleContainer = styled.div`
  position: relative;
  display: inline-block;
  max-width: 80%;
  margin: 10px 0;
  align-self: flex-end;
`;

const SpeechBubbleText = styled.div`
  background-color: #EFA9AE !important; /* Force light pink */
  color: #000 !important; /* Force black text */
  padding: 12px 16px;
  border-radius: 18px 18px 0 18px;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  line-height: 1.4;
  position: relative;
  word-wrap: break-word;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: fit-content;
  max-width: 80%;
  margin-left: auto;
`;

const SpeechBubbleTail = styled.div`
  position: absolute;
  right: 10px;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #EFA9AE;
`;

function QASpeechBubble({ answerText }) {
  return (
    <SpeechBubbleContainer>
      <SpeechBubbleText>
        {answerText}
      </SpeechBubbleText>
      <SpeechBubbleTail />
    </SpeechBubbleContainer>
  );
}

export default QASpeechBubble;
