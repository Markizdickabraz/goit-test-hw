import { Container, Picture,Logo, AvatarContainer, Line, Tweets, Followers,BtnContainer, BtnFalse, BtnTrue } from "./userStyled";
import pictureabstraction from '../../Image/picture21.png';
import logo from '../../Image/Logo.svg';
import { useState } from "react";
import axios from "axios";

export default function User({ name, tweets, avatar, followers, id}) {

    const [btnFollowing, setBtnFollowing] = useState(false);
    const [follower, setFollower] = useState(followers);
        
    async function updateUsers() {
        try {
            const response = await axios.put(
            `https://6442af8f76540ce22592fcfe.mockapi.io/users/${id}`,
            {followers: follower}
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

     function following() {
        // if (e.target.nodeName !== 'BUTTON') {
        //     return;
        // }
        if (btnFollowing) {
            setBtnFollowing(false)
            setFollower(follower - 1)
        }  
        if (!btnFollowing) {
            setBtnFollowing(true)
            setFollower(follower + 1)
        }
            updateUsers()
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
            <Followers>{follower} followers</Followers>
            <BtnContainer>
                {!btnFollowing && <BtnFalse type="button" onClick={following}>follow</BtnFalse>}
                {btnFollowing && <BtnTrue type="button" onClick={following}>following</BtnTrue>}
            </BtnContainer>
        </Container>
    )
}

