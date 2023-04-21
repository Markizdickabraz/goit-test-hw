export default function User({ name, tweets, avatar, followers, id}) {
    return (
        <li key={id}> <span> {name} : {tweets}</span>
            <img src={avatar} alt="avatar" />
            <span>{followers}</span>
            <button>following</button>
            </li>
    )
}