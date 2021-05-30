import { useHistory } from "react-router";

const Card = ({item, onClick="", children}) => {
    const history = useHistory();
    return(
        <div className="card-container" onClick={() => history.push(`/product/${item.id}`)}>
            <img src={item.image} width="100%" height="40%" alt="jsx-a11y/alt-text"/>
            <div><span><b>Title:</b>{item.title}</span></div>
            {children}
        </div>
    )
}

export default Card;