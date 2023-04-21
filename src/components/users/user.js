import { Container } from "./userStyled";

export default function User({ name, tweets, avatar, followers, id}) {
    return (
        <Container key={id}>
            {/* <div> */}
            <span> {name} : {tweets}</span>
            <img src={avatar} alt="avatar"/>
            <span>{followers}</span>
            <button type="button">follow</button>
            {/* </div> */}
            </Container>
    )
}

