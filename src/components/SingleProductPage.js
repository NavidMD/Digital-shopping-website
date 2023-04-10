import React, { Component } from 'react';
import axios from 'axios';
//Styles
import styles from './SingleProductPage.module.css';
//Icons
import Plus from '../Icons/plus (1).svg';
import Minus from '../Icons/minus.svg';
import Cart from '../Icons/cart.png';
import Circle from '../Icons/circle.png';

class SingleProductPage extends Component {
   constructor(props){
      super(props);
      this.state = {
         myProduct:[],
         rating:[],
         count: 0
      }
   }

   componentDidMount(){
      axios.get(`fakestoreapi.com/products/${this.props.match.params.key}`)
      .then(response => this.setState({
         myProduct : response,
         rating: response.rating
      }))
   }

   plusHandler = () => {
      this.setState( prevState => ({
         count : prevState.count + 1,
      }))
   }

   minusHandler = () => {
      if(this.state.count){
         this.setState(prevState => ({
            count : prevState.count - 1,
         }))
      }
   }

   render() {
      const { myProduct , rating } = this.state;
      return (
         <div className={styles.page}>
            <div className={styles.productContainer}>
               <div className={styles.infoContainer}>
                  <div className={styles.imagePart}>
                     <div className={styles.divider}></div>
                     <img src={myProduct.image} alt={myProduct.title}/>
                  </div>
                  <div className={styles.infoPart}>
                     <h2>{myProduct.title}</h2>
                     <h3>
                        <img src={Circle} className={styles.circle}/>دسته بندی : <span>{myProduct.category}</span>
                     </h3>
                     <h3>
                        <img src={Circle} className={styles.circle}/>امتیاز : <span className={styles.rate}>{rating.rate} <span className={styles.votesCount}> ({rating.count} رای)</span></span>
                     </h3>
                     <h3>
                        <img src={Circle} className={styles.circle}/>قیمت : <span className={styles.price}>{myProduct.price}<span className={styles.dollarSign}>$</span></span>
                     </h3>
                     <div className={styles.buttonContainer}>
                        <img src={Plus} onClick={this.plusHandler}/>
                        <img src={Minus} className={!this.state.count ? styles.deactived : ''}  onClick={this.minusHandler}/>
                        <button className={styles.addToCart}> افزودن به سبد  {this.state.count? this.state.count : ''}</button>
                        <button className={styles.goToCart}><img src={Cart}/></button>
                     </div>
                  </div>
               </div>
               <div className={styles.descriptionContainer}>
                  <h2> توضیحات محصول :</h2>
                  <p>{myProduct.description}</p>
               </div>
               {/* <div className={styles.shopSevicesContainer}>
                  <div>
                     <img/>
                  </div>
                  <div>
                     <img/>
                  </div>
                  <div>
                     <img/>
                  </div>
                  <div>
                     <img/>
                  </div>
               </div> */}
            </div>
         </div>
      );
   }
}

export default SingleProductPage;