import { Container, Picture,Logo, AvatarContainer, Line, Tweets, Followers,BtnContainer, Btn } from "./userStyled";
import pictureabstraction from '../../Image/picture21.png' // relative path to image 
import logo from '../../Image/Logo.svg';


export default function User({ name, tweets, avatar, followers, id }) {
    

    return (
        <Container key={id}>
            <Logo src={logo} alt='logo' />
            <Picture src={pictureabstraction} alt="pictureabstraction" />
            <AvatarContainer>
            <img src={avatar} alt="avatar"/> 
            </AvatarContainer>
            <Line></Line>
            <Tweets>{tweets} Tweets</Tweets>
            <Followers>{followers} followers</Followers>
            <BtnContainer>
            <Btn type="button">follow</Btn>
            </BtnContainer>
            </Container>
    )
}

