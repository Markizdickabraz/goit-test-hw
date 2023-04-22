import { Container, Picture,Logo, AvatarContainer, Line, Tweets, Followers,BtnContainer, BtnFalse, BtnTrue } from "./userStyled";
import pictureabstraction from '../../Image/picture21.png' // relative path to image 
import logo from '../../Image/Logo.svg';
import { useState } from "react";
import axios from "axios";


export default function User({ name, tweets, avatar, followers, id }) {
    
async function putUsers() {
  try {
    const response = await axios.put(
      `https://6442af8f76540ce22592fcfe.mockapi.io/users/${id}`,
      { followers: follower }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}   
    
    const [btnFollowing, setBtnFollowing] = useState(false)   
    const [follower, setFollower] = useState(followers)

    const following = (e) => {
        if (e.target.nodeName !== 'BUTTON') {
            return
        }
        if (btnFollowing) {
            setBtnFollowing(false)
            setFollower(follower - 1)
            putUsers(e.currentTarget.id )
        }

        if (!btnFollowing) {
            setBtnFollowing(true)
            setFollower(follower + 1)
            putUsers(e.currentTarget.id)
        }
        console.log(follower)
        console.dir(e.currentTarget)
    }

    return (
        <Container key={id} id={id}  onClick={following}>
            <Logo src={logo} alt='logo' />
            <Picture src={pictureabstraction} alt="pictureabstraction" />
            <AvatarContainer>
                <img src={avatar} alt={name } /> 
            </AvatarContainer>
            <Line></Line>
            <Tweets>{tweets} Tweets</Tweets>
            <Followers>{follower} followers</Followers>
            <BtnContainer>
                {!btnFollowing && <BtnFalse type="button">follow</BtnFalse>}
                {btnFollowing && <BtnTrue type="button">following</BtnTrue>}
                
            </BtnContainer>
            </Container>
    )
}

