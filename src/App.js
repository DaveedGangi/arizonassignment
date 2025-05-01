import {Component} from "react";

import { Switch,Route } from "react-router-dom";

import Cart from "./components/cart";
import Home from "./components/home";

import CartContext from "./context/cartcontext";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./App.css";

class App extends Component{
    
  state={cartList:[],darkMode:false}
  addItemToCart=(product)=>{
    const{cartList}=this.state;
    const ifItexists=cartList.find((each)=>each.id===product.id)
    if(ifItexists) return ;
    this.setState({cartList:[...cartList,product]});

  }

  removeItemToCart=(product)=>{
    const{cartList}=this.state;
    const removedFilteredItems=cartList.filter((each)=>each.id!==product.id);
    this.setState({cartList:removedFilteredItems})
  }
  removeAllItems=()=>{
    this.setState({cartList:[]})
  }
  incrementCartQuantity=(product)=>{

    console.log("incrementedProduct: ",product);
   const{cartList}=this.state;
     const incremented= cartList.map((each)=>{
        if(each.id===product.id){
          const quantity=each.quantity+1
          const increment={...product,quantity}
          return increment
        }
        return each;
      });

      this.setState({cartList:incremented})
    
    
    
  }

  decrementCartQuantity=(product)=>{
    if(product.quantity>1){

    const{cartList}=this.state;
    const decremented=cartList.map((each)=>{
      if(each.id===product.id){
        const quantity=each.quantity-1
        const decrement={...product,quantity}
        return decrement;
      }
      return each;
    })

    this.setState({cartList:decremented});
  }

  }


  changeDarkMode=()=>{
    const{darkMode}=this.state;
    this.setState({darkMode:!darkMode})
  }


  render(){
    const{cartList,darkMode}=this.state;
    console.log("cartListItems: ",cartList);
    const cartItemsCount=cartList.length;
    let totalCost=0;
    cartList.map((each)=>totalCost+=each.quantity*each.price)
    return(
      <CartContext.Provider value={{
        cartList,darkMode,
        changeDarkMode:this.changeDarkMode,
        cartItemsCount,
        totalCost,
        addItemToCart:this.addItemToCart,
        removeAllItems:this.removeAllItems,
        removeItemToCart:this.removeItemToCart,
        incrementCartQuantity:this.incrementCartQuantity,
        decrementCartQuantity:this.decrementCartQuantity
        }}>
          <div className="app-container">
          <Navbar/>
          <div className="main-content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
        </div>

        <Footer/>
        </div>
      </CartContext.Provider>
      
    )
  }
}

export default App;