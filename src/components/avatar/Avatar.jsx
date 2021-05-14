const Avatar = ({image,custom_avatarContainer_class=""}) => {
    return(
        <div className={`AvatarContainer`}>
            <img className="AvatarImage" src={image} alt="userImage"/>
        </div>
    )
}
export default Avatar;