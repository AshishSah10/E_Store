import { useEffect, useState } from "react";
import { useParams } from "react-router"

const ProductDetail = () => {
    const param = useParams();
    const [item, setItem] = useState({});
    
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
        let countProduct = sessionStorage.getItem("countCartProduct")
        countProduct = parseInt(countProduct)+1;
        sessionStorage.setItem("countCartProduct", ""+countProduct)
    }
    return(
        <div className="product-detail-container">
            <div className="product-image">
                <img src={item.image} width="300px" height="500px"/>
            </div>
            <div className="product-info">
                <div><b>Title: </b>{item.title}</div>
                <div><b>Price: </b>{item.price}</div>
                <div><b>Description: </b>{item.description}</div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail;