import { useHistory } from "react-router";
import "./userActionCard.scss"

const UserActionCard = () => {
    const history = useHistory()
    // const [userActionList, setUserActionList] = ([
    //     {
    //         name: "User Profile",
    //         link: "/profile"
    //     },
    //     {
    //         name: "Logout",
    //         link: "/logout"
    //     }
    // ])
    const userActionList = [
        {
            name: "User Profile",
            link: "/user"
        },
        {
            name: "Logout",
            link: "/logout"
        }
    ]
    const handleActionClick = ({link}) => {
        history.push(link)
        //setUserActionList([])
    }
    return(
        <div className="user-action-card-container">
            {userActionList.map(userAction => <div className="user-action" onClick={() => handleActionClick(userAction)}>{userAction.name}</div>)}
        </div>
    )
}

export default UserActionCard;