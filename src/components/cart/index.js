import CartContext from "../../context/cartcontext";

import "./index.css";

function Cart(){




    return (
        <CartContext.Consumer>{
            value=>{
                const{cartList,totalCost,incrementCartQuantity,decrementCartQuantity,removeItemToCart,removeAllItems,darkMode}=value;

        return(<div className={darkMode?"dark":"light"}>
                       { 
                        cartList.length===0?<div className="empty-image"><img className="empty-image-show" src="https://img.freepik.com/free-vector/woman-with-shopping-cart-illustration_23-2148896783.jpg?t=st=1746088579~exp=1746092179~hmac=37ba17dfd2084d12933b23de7436a869e214e0156c4ac21da26f11595e4ae734&w=900" alt="searchresults-zero-image"/></div>
                        
                        :
            
                    
                     <div>
                        <div className="cart-details">
                        <h3 className="total-cost">Total Cost: &#8377;{parseInt(totalCost)}</h3>

                        <button className="remove-all-cart-product-button" onClick={()=>removeAllItems()}>Remove All items</button>
                        </div>
                        <br/>
                        <hr/>

                     {
                        cartList.map((each)=>(
                            <div className="each-cart-product" key={each.id}>
                                <div className="image-and-title">
                                <img className="each-product-cart-image" src={each.image} alt={each.title}/>
                                <p className="each-product-title">{each.title}</p>
                                </div>
                                <div className="price-and-description">
                                <p className="each-product-description">{each.description}</p>
                                <p className="each-product-price-cart">&#8377;{each.price}</p>
                                </div>
                                <div className="increment-decrement-quantity-buttons">
                                    <button className="increment-button" onClick={()=>incrementCartQuantity(each)} >+</button>
                                    <p className="each-quantity">{each.quantity}</p>
                                    <button className="decrement-button" onClick={()=>decrementCartQuantity(each)}>-</button>
                                </div>
                                <div className="remove-button-bg">
                                    <button className="remove-button" onClick={()=>removeItemToCart(each)}>Remove</button>
                                </div>
                            </div>
                        ))
                     }
                     </div>

                    }


        </div>)


        }}
        </CartContext.Consumer>
    )
}

export default Cart;