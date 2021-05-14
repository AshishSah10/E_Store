import { useEffect, useState } from "react";
import Avatar from "../../avatar/Avatar";
import Input from "../../input/Input"
import {FiShoppingCart} from "react-icons/fi"
import {AiOutlineHome} from "react-icons/ai"
import { useHistory } from "react-router";



const Header = () => {
    const history = useHistory();
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState([]);
    const fetchAllData = async() => {
        const api = 'https://fakestoreapi.com/products';
        const data = await fetch(api, {
            method: "GET"
        }).then(response=>response.json())
        const newSearchList = []
        for(let i = 0; i < data.length; i++){
            const id = data[i].id;
            const title = data[i].title;
            const keyword = (data[i].title+""+data[i].description).split(" ").join()
            const product = {id, title, keyword}
            newSearchList.push(product)
        }
        //console.log(newSearchList)
        setSearchList(newSearchList)
    }
    const handleSearchInput = (searchedKey) => {
        setSearchKeyword(searchedKey)
        setSearchedProduct([])
        if(searchedKey.trim() === "" ) return;
    
        let newSearchedProduct = []
        for(let i = 0; i < searchList.length; i++){
            if(searchList[i].keyword.toLowerCase().includes(searchedKey.toLowerCase())){
                newSearchedProduct.push(searchList[i])
            }
        }
        console.log(newSearchedProduct)
        setSearchedProduct(newSearchedProduct)
    }
    const appImage = "./logo.svg"
    const user = {
        name: "John Walker",
        image: "https://reqres.in/img/faces/7-image.jpg"
    }
    useEffect(() => fetchAllData(), [])
    return(
        <div className="main-header">
            <AiOutlineHome onClick={() => history.push("/home") }/>
            <Input type="search" name="searchItem" placeholder="Search Items..." value={searchKeyword} onChange={(e) => handleSearchInput(e.target.value)}/>
            <div className="searched-productlist-container">
                {searchedProduct.map((product, index) => <div key={`searched_index_${index}`} className="searched-product" onClick={()=> history.push(`/product/${product.id}`)}>{product.title}</div>)}
            </div>
            <div>
                <FiShoppingCart />
                <Avatar image={user.image} custom_avatarContainer_class="avatarContainerClass"/>
            </div>
        </div>
    )
}

export default Header;
