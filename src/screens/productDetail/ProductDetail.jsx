import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { CartContext } from "../../App";
// import Cart from "../cart/Cart";

const ProductDetail = () => {
    
    const param = useParams();
    const [item, setItem] = useState({});

    const [cartItems, setCartItems] = useContext(CartContext);
    
    const fetchProductDetailById = async() => {
        const id = param.id;
        const api = `https://fakestoreapi.com/products/${id}`;
        const product = await fetch(api, {
            method: "GET"
        }).then(response => response.json()).catch(error => console.log(error))
        setItem(product)
    }
    useEffect(() => {
        fetchProductDetailById()
    })

    const handleAddToCart = (item) => {
        //console.log(item)
        const newCartItems = [...cartItems]
        let found = false;
        for(let i = 0; i < newCartItems.length; i++){
            if(newCartItems[i].id === item.id){
                found = true;
                newCartItems[i].count += 1
                newCartItems[i].totalPrice = item.price * newCartItems[i].count
                break;
            }
        }
        if(!found){
            const newlyCartItem = {
                id: item.id,
                value: {...item},
                totalPrice: item.price,
                count: 1
            }
            
            newCartItems.push(newlyCartItem)
        }
        //newCartItems.push(item)
        setCartItems(newCartItems)
    }
    return(
        <div className="product-detail-container">
            <div className="product-image">
                <img src={item.image} width="300px" height="500px" alt="jsx-a11y/alt-text"/>
            </div>
            <div className="product-info">
                <div><b>Title: </b>{item.title}</div>
                <div><b>Price: </b>${item.price}</div>
                <div><b>Description: </b>{item.description}</div>
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail;