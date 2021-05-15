import { useEffect, useState } from "react";
import Avatar from "../../avatar/Avatar";
import Input from "../../input/Input"
import {FiShoppingCart} from "react-icons/fi"
import {AiOutlineHome} from "react-icons/ai"
import { useHistory } from "react-router";
import ActionCard from "../actioncard/ActionCard";
import UserActionCard from "../../../useractioncard/UserActionCard";



const Header = () => {
    const history = useHistory();
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState([]);
    const [isAvatarActionCardVisible, setAvatarActionCardVisibility] = useState(false)
    const [isSearchedProductListVisible, setSearchedProdctListVisibility] = useState(false);
    const [countCartProduct, setCountCartProduct] = useState(0);
    
    const handleSearchedProductClicked = ({id, title}) => {
        setSearchKeyword(title)
        setSearchedProdctListVisibility(false)
        history.push(`/product/${id}`)
    }
    const fetchAllData = async() => {
        const api = 'https://fakestoreapi.com/products';
        const data = await fetch(api, {
            method: "GET"
        }).then(response=>response.json())
        const newSearchList = []
        for(let i = 0; i < data.length; i++){
            const id = data[i].id;
            const title = data[i].title;
            const keyword = [...(data[i].title+""+data[i].description).split(" ")]
            const product = {id, title, keyword}
            newSearchList.push(product)
        }
        //console.log(newSearchList)
        setSearchList(newSearchList)
    }
    const handleSearchInput = (searchedKey) => {
        setSearchKeyword(searchedKey)
        setSearchedProduct()
        if(searchedKey.trim() === "" ) return;
    
        let newSearchedProduct = []//new Set();
        const searchedKeywordList = searchedKey.split(" ")
        for(let i = 0; i < searchList.length; i++){
            let found = false;
            for(let j = 0; j < searchedKeywordList.length; j++){
                let foundKeyword = false;
                for(let k = 0; k < searchList[i].keyword.length; k++){
                    if(searchList[i].keyword[k].toLowerCase().includes(searchedKeywordList[j].toLowerCase())){
                       foundKeyword = true;
                       break;
                    }
                }
                if(foundKeyword === false){
                    //newSearchedProduct.delete(searchList[i])
                    found = false;
                    break;
                }else{
                    //newSearchedProduct.add(searchList[i])
                    found = true;
                }
            }
            if(found){
                newSearchedProduct.push(searchList[i])
            }
        }
        //console.log(newSearchedProduct)
        setSearchedProduct(newSearchedProduct)
        setSearchedProdctListVisibility(true)
    }
    const handleUserAvatarClick = () => {

    }
    const appImage = "./logo.svg"
    const user = {
        name: "Alena Walker",
        image: "https://reqres.in/img/faces/7-image.jpg"
    }
    useEffect(() => fetchAllData(), [])
    return(
        <div className="main-header">
            <AiOutlineHome onClick={() => history.push("/home") }/>
            <Input type="search" name="searchItem" placeholder="Search Items..." value={searchKeyword} onChange={(e) => handleSearchInput(e.target.value)} onMouseLeave={() => setSearchedProdctListVisibility(false)} onFocus={(e) => handleSearchInput(e.target.value)}>
            <div className="searched-productlist-container">
                {isSearchedProductListVisible && searchedProduct && searchedProduct.map((product, index) => <div key={`searched_index_${index}`} className="searched-product" onClick={()=> handleSearchedProductClicked(product)}>{product.title}</div>)}
            </div>
            </Input>
            <div>
                <span className="icon-value">{sessionStorage.getItem("countCartProduct")}</span>
                <FiShoppingCart className="cart-icon" onClick={() => {history.push("/cart")}}/>
                <Avatar image={user.image} custom_avatarContainer_class="avatarContainerClass" onMouseLeave={()=> setAvatarActionCardVisibility(false) } onMouseOver={() => setAvatarActionCardVisibility(true)} >
                    {isAvatarActionCardVisible && <UserActionCard/>}
                </Avatar>
            </div>
        </div>
    )
}

export default Header;
