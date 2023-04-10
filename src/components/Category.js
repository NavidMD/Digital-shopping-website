import React, { Component } from 'react';
//Styles
import styles from './Category.module.css';
//Components
import CategoryCard from './CategoryCard.js';
//!Icons
import Laptop from '../images/laptop2.png';
import Monitor from '../images/Monitor.png';
import Headphones from '../images/headphones.png';
import Graphic from '../images/Graphic-Card.png';
import hardExternal from '../images/slider-1-basic-external-hard-drive-product-detail.png';

class Category extends Component {
   render() {
      return (
         <div className={styles.container}>
            <CategoryCard src={Laptop} alt="laptop" category="لپ تاپ و الترابوک"/>
            <CategoryCard src={Monitor} alt="monitor" category="مانیتور و تلوزیون"/>           
            <CategoryCard src={Headphones} alt="headphones" category="هدفون و هدست"/>
            <CategoryCard src={Graphic} alt="graphic-card" category="سخت افزار کامپیوتر"/>
            <CategoryCard src={hardExternal} alt="graphic-card" category="هارد و مموری"/>                 
         </div>
      );
   }
}

export default Category; 