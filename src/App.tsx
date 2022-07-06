import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import DropDownOverlay from './lib/components/dropDownOverlay';
const SimpleMenu = () => {
  return (
    <DropUl >
      <DropLi >Car</DropLi>
      <DropLi >Bike</DropLi>
    </DropUl>
  )
}
function App() {
  
  
  return (
    <div >
      <DropDownOverlay  overlay={<SimpleMenu/>} trigger={['click']}>
      <button>
        Click Menu
      </button>
      </DropDownOverlay>
    </div>
  );
}

export default App;


const DropUl = styled.ul`
    background: #0B162A;
    border: 0.1rem solid #2B3952;
    border-radius: 0.9rem;
    padding:2.2rem 5.8rem 2.2rem 2.2rem;
    list-style:none;
    display:block;
`
const DropLi = styled.li`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #FFFFFF;
    cursor:pointer;
    margin-bottom: 1.2rem;
    &:last-child {
        margin-bottom: 0;
    }
`