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
    return(
        <div className="product-detail-container">
            <div>
                <img src={item.image} width="300px" height="500px"/>
            </div>
            <div className="product-info">
                <div><b>Title: </b>{item.title}</div>
                <div><b>Price: </b>{item.price}</div>
                <div><b>Description: </b>{item.description}</div>
            </div>
        </div>
    )
}

export default ProductDetail;