import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import styled from 'styled-components';
//Icons
import UserIcon from '../Icons/person.png';

const MainDiv = styled.div`
   width: 140px;
   height: 40px;
   position: absolute;
   left: 25px;
   top: 21px;
   background-color: rgb(15, 30, 49);
   box-shadow: 0px 4px 10px -6px black;
   border-radius: 1.5em;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;
   transition: .3s;
   :hover {
      background-color: rgb(27, 53, 87);
   }
   img {
      width: 30px;
      position: absolute;
      left: 6px;
   }
   h3 {
      position: absolute;
      right: 12px;
      color: white;
      font-weight: 400;
      font-family: 'KoohNoor';
      font-size: .9rem;
   }
   @media (max-width: 525px) {
      width: 40px;
      h3 {
         display: none;
      }
      img {
         left: auto;
      }
   }
   @media (max-width:415px) {
      left: 18px;
   }
`

const EnterAccount = () => {
   return (
      <>
         <Link to='/signup'>
            <MainDiv>
               <h3>ورود به حساب</h3>   
               <img src={UserIcon}/>
            </MainDiv>
         </Link>
      </>
   );
};

export default EnterAccount;