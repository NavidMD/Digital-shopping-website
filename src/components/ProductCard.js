import React, { useState , useContext } from 'react';
import { Link } from 'react-router-dom';
//Functions
import titleSplitter from '../functions/titleSplitter';
import cartChecker from '../functions/cartChecker';
import quantityChecker from '../functions/quantityChecker';
//Styles
import styled from 'styled-components';
import styles from './ProductCard.module.css';
//Icons
import PlusIcon from '../Icons/plus.png';
import MinusIcon from '../Icons/minus.png';
import DeleteIcon from '../Icons/recycle-bin.png';
//Context
import { CartContext } from '../context/CartContextProvider';

const Card = styled.div`
   width: 220px;
   height: 330px;
   background-color: white;
   border-radius: 1em;
   box-shadow: 0px 3px 15px -5px black;
   position: relative;
   overflow: hidden;
   a {
      text-decoration: none;
   }
`
const ProductCard = (props) => {

   const [count , setCount] = useState(0); 
   const {state , dispatch} = useContext(CartContext);

   return (
      <Card>
         {
            quantityChecker(state , props.id) && 
               <span className={styles.cardCounterOn}>{quantityChecker(state,props.id)}</span> 
         }
         <Link to={`/products/${props.productNumber}`}>
            <div className={styles.imgContainer}>
               <img src={props.src} alt={props.alt}/>
            </div>
         </Link>
         <div className={styles.infoContainer}>
            <h2>{titleSplitter(props.title, 'short')}</h2>
            <div className={styles.category}>
               <p>دسته بندی :</p>
               <p>{props.category}</p>
            </div>
            <div className={styles.price}>
               <p>قیمت :</p>
               <p className={styles.priceNumber}>{count ? count * props.price : props.price}$</p>
            </div>
            <div className={quantityChecker(state, props.id) ? styles.btnContainerRight : styles.btnContainer}>
               {
                  quantityChecker(state ,props.id) > 1 && <img src={MinusIcon} onClick={()=> dispatch({type: 'DECREASE', payload: props.productData})} /> 
               }
               {
                  quantityChecker(state ,props.id) === 1 && <img src={DeleteIcon}  onClick={()=> dispatch({type: 'REMOVE-ITEM' , payload: props.productData})} />
               }
               {
                  cartChecker(state , props.id) ? 
                  <img src={PlusIcon} onClick={()=> dispatch({type: 'INCREASE' , payload: props.productData})} /> :
                  <button onClick={()=> dispatch({type: 'ADD-ITEM' , payload: props.productData})}>افزودن به سبد</button>
               }
            </div>
         </div>
      </Card>
   )
}

export default ProductCard;


{/* <img src={Plus} onClick={plusHandler}/>
   <button>خرید</button>
<img src={Minus} className={count ? '' : styles.deactived} onClick={minusHandler}/> */}