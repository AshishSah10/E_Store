import { Children, useState } from "react";
import UserActionCard from "../../useractioncard/UserActionCard";

const Avatar = ({children={},image,custom_avatarContainer_class="", onClick=() => {}, onMouseOver= () => {}, onMouseLeave= () => {}}) => {
    // const [isAvatarActionCardVisible, setAvatarActionCardVisibility] = useState(false)
    return(
        <div className={`AvatarContainer`} onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} >
            <img className="AvatarImage" src={image} alt="userImage"/>
            {children}
        </div>
    )
}
export default Avatar;