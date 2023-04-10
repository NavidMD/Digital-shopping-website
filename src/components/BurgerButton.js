import React, { Component } from 'react';
//Components
import Menu from './Menu';
//Styles
import styled from 'styled-components';

const Ul = styled.ul`
   direction: rtl;
   width: 40px;
   height: 40px;
   background-color: rgb(15, 30, 49);
   box-shadow: 0px 4px 13px -5px black;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap:3px;
   position: fixed;
   right: ${props => props.open ? '200px':'25px'};
   top: 21px;
   z-index: 10;
   transition: .3s;
   cursor: pointer;
   :hover {
      background-color: rgb(27, 53, 87);
   }
   div {
      transform-origin: center;
      transition: all .8s;
      width: 21px;
      height: 3px;
      background-color: white;
      border-radius: 3px;
      position: ${props => props.open ? 'absolute':'static'};
      &:nth-child(1) {
         transform: ${props => props.open ? 'rotate(-45deg)':'rotate(0)'};
      }
      &:nth-child(2) {
         opacity: ${props => props.open ? '0':'1'};
      }
      &:nth-child(3) {
         transform: ${props => props.open ? 'rotate(45deg)':'rotate(0)'};
      }
   }
`

class BurgerButton extends Component {
   constructor(){
      super();
      this.state = {
         open : false,
      }
   }
   clickHandler = ()=> {
      this.setState({
         open : !this.state.open,
      })
   }
   render() {
      return (
         <>
            <Ul open={this.state.open} onClick={this.clickHandler}>
               <div></div>
               <div></div>
               <div></div>
            </Ul>
            <Menu open={this.state.open}/>
         </>
      );
   }
}

export default BurgerButton;