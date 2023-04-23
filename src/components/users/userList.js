import { UserListStyled } from "./userListStyled"
import User from "./user"




export default function Users({ users }) {
    return (
        <UserListStyled>
                {users.map(item =>
                (
                    <User key={item.id}
                        id={item.id}
                        name={item.user}
                        avatar={item.avatar}
                        tweets={item.tweets}
                        followers={item.followers}
                        isFollowing={item.isFollowing}
                    ></User>
                )
                    )}
            </UserListStyled>
    )
}