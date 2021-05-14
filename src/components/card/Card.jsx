import { useHistory } from "react-router";

const Card = ({item, onClick="" }) => {
    const history = useHistory();
    return(
        <div className="card-container" onClick={() => history.push(`/product/${item.id}`)}>
            <img src={item.image} width="100%" height="40%"/>
            <div><span><b>Title:</b>{item.title}</span></div>
        </div>
    )
}

export default Card;