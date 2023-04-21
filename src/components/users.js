import User from "./user"

export default function Users({ users }) {
    return (
           <ul>
                {users.map(item =>
                (
                    <User key={item.id}
                        name={item.user}
                        avatar={item.avatar}
                        tweets={item.tweets}
                        followers={item.followers}
                    ></User>
                )
                    )}
            </ul>
    )
}