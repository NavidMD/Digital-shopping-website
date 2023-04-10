import React, { Component } from 'react';
//Components
import ProductCard from './ProductCard';
//Styles
import styles from './MainProducts.module.css';
//Icons
import laptop from '../images/laptop2.png';
import monitor from '../images/Monitor.png';
import headphones from '../images/headphones.png';
import graphic from '../images/Graphic-Card.png';


class MainProducts extends Component {
   constructor(){
      super();
      this.state = {
         products: [
            {id: 1, image: laptop, title: 'MACBOOK M1 2021', price: 1700, category: 'laptops'},
            {id: 2,image: monitor, title: 'ASUS 27inch LCD', price: 350, category: 'monitors'},
            {id: 3,image: graphic, title: 'Geforce RTX2060 Ti', price: 890, category: 'graphic cards'},
            {id: 4,image: headphones, title: 'Beats HQBass 2022', price: 709, category: 'headphones'},
            {id: 5,image: laptop, title: 'MACBOOK M2 2022', price: 1900, category: 'laptops'}
         ]
      }
   }
   
   render() {
      return (
         <>
            <div className={styles.mainProducts}>
               <p className={styles.headerName}>جدید ترین محصولات </p>
               <div className={styles.container}>
                  {
                     this.state.products.map(product => 
                     <ProductCard key={product.id} src={product.image} title={product.title} alt={product.category} price={product.price} category={product.category}/>)
                  }
               </div>
            </div>
         </>
      );
   }
}

export default MainProducts;