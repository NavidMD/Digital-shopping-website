import React, { Component } from 'react';
import styled from 'styled-components';

const PageMenu = styled.div`
   direction: rtl;
   width: 257px;
   height: 100vh;
   background-color: rgb(23, 37, 56);
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   /* border-radius: 0 1.5em 1.5em 0; */
   border-right: 1px solid black;
   padding: 4em 0em 1.5em 0em;
   right: 0;
   top: 0;
   z-index: 2;
   transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
   transition: all .3s ease;
   ul {
      width: 80%;
      display: flex;
      flex-direction: column;
      text-align: right;
      list-style: none;
      gap: 1em;
   }
   ul li {
      font-family: 'KoohNoor';
      font-weight: 100;
      padding: .6em 1em;
      color: white;
      width: 100%;
      border-radius: .8em;
      font-size: 1rem;
   }
`

const CategorySelect = styled.select`
   cursor: pointer;
   border: none;
   outline: none;
   font-family: 'Comfortaa';
   font-size: inherit;
   font-weight: bold;
   appearance: none;
   right: 60px;
   width: 100%;
   padding: .6em;
   border-radius: .8em;
   background-color: rgb(23, 37, 56);
   color: white;
   option{
      border: none;
      padding: .5em .5em;
   }
`

class Menu extends Component {
   render() {
      const {open} = this.props;
      return (
         <PageMenu open={open}>
            <ul>
               <li>داشبورد</li>
               {/* <CategorySelect>
                  <option>دسته بندی ها</option>
                  <option>لپ تاپ</option>
                  <option>مانیتور و تلوزیون</option>
                  <option>هدست</option>
                  <option>کارت گرافیک</option>
                  <option>کیبورد گیمینگ</option>
                  <option>موس گیمینگ</option>
               </CategorySelect> */}
               <li>سبد خرید</li>
               <li>محصولات</li>
               <li>تخفیف ها</li>
               <li>راهنما</li>
               <li>درباره ما</li>
               <li>تنظیمات</li>
               <li>تاریخچه سفارش ها</li>
               <li>خروج از حساب کاربری</li>
            </ul>
         </PageMenu>
      );
   }
}

export default Menu;