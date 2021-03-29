/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ArrowBase = styled.button`
color: inherit;
border: 0;
cursor: pointer;
margin: 0;
display: inline-flex;
outline: 0;
padding: 0;
position: relative;
align-items: center;
user-select: none;
border-radius: 0;
vertical-align: middle;
-moz-appearance: none;
justify-content: center;
text-decoration: none;
background-color: transparent;
`;

const Arrowlabel = styled.span`
color:555555;
width: 100%;
display: flex;
align-items: inherit;
justify-content: inherit;
padding: 12px;
&:hover{
    color: black; 
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 50%;
}
`;

function Move(element) {
  const elmnt = document.getElementById(element);
  elmnt.scrollIntoView();
}

export default function Button({ element }) {
  return (
    <ArrowBase>
      <Arrowlabel
        element={element}
        onClick={() => {
          Move(element);
        }}
      >
        <svg width="50" height="50" viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
          <path d="M1540 1025q0-27-18-45l-91-91q-18-18-45-18t-45 18l-189 189v-502q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v502l-189-189q-19-19-45-19t-45 19l-91 91q-18 18-18 45t18 45l362 362 91 91q18 18 45 18t45-18l91-91 362-362q18-18 18-45zm252-1q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
        </svg>
      </Arrowlabel>
    </ArrowBase>
  );
}
