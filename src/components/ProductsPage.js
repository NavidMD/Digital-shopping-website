import React, { Component } from 'react';
import axios from 'axios';
//Components
import ProductCard from './ProductCard';
//Styles
import styles from './ProductsPage.module.css';


class ProductsPage extends Component {
   constructor(props){
      super(props)
      this.state = {
         products:[],
         filteredProducts:[]
      }
   }

   componentDidMount(){
      axios.get('fakestoreapi.com/products')
      .then(response => response.filter( product => {
         if(product.category === 'electronics') this.state.filteredProducts.push(product);
         this.setState({
            products: this.state.filteredProducts,
         })
      }))
   }

   render() {
      const { filteredProducts } = this.state;
      return (
         <>
            <div className={styles.pageContainer}>
               <div className={styles.productsContainer}>
                  {
                     filteredProducts.map(product => <ProductCard key={product.id} src={product.image} alt={product.title} title={product.title} price={product.price} category={product.category} productNumber={product.id.toString()} productData={product} id={product.id}/>
                     )
                  }
               </div>
            </div>
         </>
      );
   }
}

export default ProductsPage;