import { Container, Picture,Logo, AvatarContainer, Line, Tweets, Followers,BtnContainer, BtnFalse, BtnTrue } from "./userStyled";
import pictureabstraction from '../../Image/picture21.png';
import logo from '../../Image/Logo.svg';
import { useState} from "react";
import axios from "axios";

export default function User({name, tweets, avatar, followers, id, isFollowing}) {

    const [follower, setFollower] = useState(followers);
    const [btnFollowing, setBtnFollowing] = useState(isFollowing);
    
    const following = async () => {
        const updatedFollowerCount = btnFollowing ? follower - 1 : follower + 1;
        const updateIsFollowing = !isFollowing ? true : false;
        // const formattedNumberFollowing = updatedFollowerCount.toLocaleString('en-US', { maximumFractionDigits: 0 });        
        try {
            await axios.put(
                `https://6442af8f76540ce22592fcfe.mockapi.io/users/${id}`,
                { followers: updatedFollowerCount, isFollowing : updateIsFollowing}

                );
                setFollower(updatedFollowerCount);
                setBtnFollowing(!btnFollowing);
            } catch (error) {
                console.log(error);
            }
        };

    
    return (
        <Container key={id} id={id}>
            <Logo src={logo} alt='logo' />
            <Picture src={pictureabstraction} alt="pictureabstraction" />
            <AvatarContainer>
                <img src={avatar} alt={name } /> 
            </AvatarContainer>
            <Line></Line>
            <Tweets>{tweets} Tweets</Tweets>
            <Followers>{follower.toLocaleString('en-US', { maximumFractionDigits: 0 })} followers</Followers>
            <BtnContainer>
                {!btnFollowing && <BtnFalse type="button" onClick={following}>follow</BtnFalse>}
                {btnFollowing && <BtnTrue type="button" onClick={following}>following</BtnTrue>}
            </BtnContainer>
        </Container>
    )
}

