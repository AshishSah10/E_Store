const User = ({user={}}) => {
    const {image, name, emailId, mobileNo} = {
        image: "https://reqres.in/img/faces/7-image.jpg",
        name: "Alena Walker",
        emailId: "alena234walker@gamil.com",
        mobileNo: "9984545324"
    };
    return(
        <div className="user-detail-container">
            <div className="user-image">
                <img src={image} width="200px" height="200px" alt="UserImage"/>
            </div>
            <div className="user-info">
                <div><b>Name: </b>{name}</div>
                <div><b>Email: </b>{emailId}</div>
                <div><b>Contact No: </b>{mobileNo}</div>
            </div>
        </div>
    )
}

export default User;