import React, { Component } from 'react';
//Styles
import styles from './CategoryCard.module.css';

class Card extends Component {
   render() {
      const {src,alt,category} = this.props;
      return (
         <div className={styles.container}>
            <img src={src}  alt={alt}/>
            <h2>{category}</h2>
         </div>
      );
   }
}

export default Card;