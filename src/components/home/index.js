import React,{useEffect,useState} from "react";

import {PacmanLoader} from "react-spinners";

import CartContext from "../../context/cartcontext";



import "./index.css";

function Home(){

    const[product,setProducts]=useState([]);
    const[search,setSearch]=useState("");
    const[loading,setLoading]=useState(false);

    useEffect(()=>{

        const fetching=async()=>{
            const api=await fetch("https://fakestoreapi.com/products");
            setLoading(true);
            if(api.ok){
                const response=await api.json();
                const addingQuantity=response.map((each)=>{
                    return {...each,quantity:1}
                })

               let furtherFilteringBasedOnSearch=addingQuantity.filter((each)=>each.title.toLowerCase().includes(search.toLocaleLowerCase()));
                setProducts(furtherFilteringBasedOnSearch);
                setLoading(false);
            }
        }

        fetching();
    },[search])



    return(
        <CartContext.Consumer>{
            value=>{
                const {addItemToCart,darkMode}=value

       return( <div>

        <div className="search-div">
            <input className="search-input" type="search" onChange={(e)=>setSearch(e.target.value)} vlaue={search} placeholder="Search your products"/>
        </div>

    
       {loading?<div className="loader-spinner"><PacmanLoader /></div>:

            <div>
                {product.length===0?<div className="empty-image"><img className="empty-image-show" src="https://img.freepik.com/free-vector/woman-with-shopping-cart-illustration_23-2148896783.jpg?t=st=1746088579~exp=1746092179~hmac=37ba17dfd2084d12933b23de7436a869e214e0156c4ac21da26f11595e4ae734&w=900" alt="searchresults-zero-image"/></div>:
            <div className={darkMode?"all-products-dark":"all-products"}>
            {
                product.map((each)=>(
                    <div className="each-product" key={each.id}>
                        <img className="each-product-image" src={each.image} alt={each.title}/>
                        <p className="each-product-title">Title: {each.title.slice(0,24)}</p>
                        <p className="each-product-price">&#8377;{each.price}</p>
                        <button className="add-to-cart-button" onClick={()=>addItemToCart(each)}>Add to Cart</button>

                    </div>
                ))
            }
            </div>
            }

            </div>


            }


        </div>)

            }}
        </CartContext.Consumer>
    )
}

export default Home;