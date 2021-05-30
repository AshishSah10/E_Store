import { useContext } from "react";
import { CartContext } from "../../App";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";

const Cart = () => {
    const [cartItems, setCartItems] = useContext(CartContext);
    console.log(cartItems)
    let price = 0;

    const calculateTotalPriceInCart = () => {
        const newCartItems = [...cartItems]
        for(let i = 0; i < newCartItems.length; i++){
            price += newCartItems[i].totalPrice;
        }
        price = price.toFixed(2)
    }
    calculateTotalPriceInCart();
    const removeItemFromCart = (e, item) => {
        e.stopPropagation();
        const id = item.id;
        const newCartItems = [...cartItems]
        for(let i = 0; i < newCartItems.length; i++){
            if(id === newCartItems[i].id){
                newCartItems.splice(i, 1)
                setCartItems(newCartItems)
                break;
            }
        }
    }
    const increaseItemCount = (e, item) => {
        e.stopPropagation();
        const id = item.id;
        const newCartItems = [...cartItems]
        for(let i = 0; i < newCartItems.length; i++){
            if(id === newCartItems[i].id){
                newCartItems[i].count += 1;
                newCartItems[i].totalPrice = newCartItems[i].value.price * newCartItems[i].count;
                setCartItems(newCartItems)
                break;
            }
        }
    }
    const decreaseItemCount = (e, item) => {
        e.stopPropagation();
        const id = item.id;
        const newCartItems = [...cartItems]
        for(let i = 0; i < newCartItems.length; i++){
            if(id === newCartItems[i].id){
                if(newCartItems[i].count > 1){
                    newCartItems[i].count -= 1;
                    newCartItems[i].totalPrice = newCartItems[i].value.price * newCartItems[i].count;
                }else{
                    newCartItems.splice(i, 1)
                }
                setCartItems(newCartItems)
                break;
            }
        }
    }
    return(
        <div>
            <div className="checkout-class">
                <label>Total Amount: {price}</label>
                <Button value="Buy Now"/>
            </div>
            {cartItems.map((item, index) => {
                return(
                    <div className="cart-item">
                        <Card key={`item_${item.id}`} item={item.value} />
                        <div>
                            <div><lable>Price: ${item.totalPrice}</lable></div>
                            <Button onClick={(e) => removeItemFromCart(e,item.value)} value="Remove From Cart"/>
                            <div><Button value="+" onClick={(e) => increaseItemCount(e, item.value)}/>{item.count}<Button onClick={(e) => decreaseItemCount(e, item.value)} value="-" /></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart;