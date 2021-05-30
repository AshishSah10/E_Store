import { useEffect, useState } from "react";
// import {useHistory} from "react-router-dom"
import Button from "../../components/button/Button"
import Card from "../../components/card/Card";

const CategoriesList = () => {
    const [selectedCategory, setSelectedCategory] = useState("jewelery");
    const [allItems, setAllItems] = useState([]);
    const [allCategories, setAllCategories] = useState([]);

    const fetchAllCategoriesFromApi = async() => {
        const api = "https://fakestoreapi.com/products/categories";
        let categories = await fetch(api, {
            method:"GET"
        }).then(response => response.json()).catch(error => console.log(error))
        setAllCategories(categories)
    }
    const fetchAllItemsByCategory = async() => {
        const api = `https://fakestoreapi.com/products/category/${selectedCategory}`;
        let items = await fetch(api, {
            method: "GET"
        }).then(response => response.json()).catch(error => console.log(error))
        setAllItems(items);
        //console.log(items)
    }
    useEffect(() => fetchAllCategoriesFromApi(),[])
    useEffect(() => fetchAllItemsByCategory(),[selectedCategory, fetchAllItemsByCategory])
    
    return(
        <div className="categories-container">
            <div className="categories-header">
                {allCategories.map((category, index)=> <Button key={`category_${index}`} disabled={selectedCategory===category}  value={category} onClick={(e) => setSelectedCategory(e.target.innerText)}/>)}
            </div>
            <div className="categories-items">
                {allItems.map((item, index) =>  <Card key={`item_${index}`} item={item} />)}
            </div>
        </div>
    )
}
export default CategoriesList;