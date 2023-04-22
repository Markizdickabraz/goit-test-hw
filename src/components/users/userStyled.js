import styled from "styled-components";


export const Container = styled.li`
position:relative;
width:380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
border-radius:20px;
`;

export const Logo = styled.img`
position:absolute;
top: 20px;
left: 20px;
`;

export const Picture = styled.img`
padding: 28px 36px 18px 36px;
`;

export const AvatarContainer = styled.div`
position: absolute;
top:178px;
left: 150px;
border-radius: 50%;
border: 8px solid #EBD8FF;
display:flex;
justify-content:center;
width: 80px;
height: 80px;
overflow: hidden;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`;

export const Line = styled.div`
height: 8px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`

export const Tweets = styled.p`
text-align:center;
padding-top: 62px;
margin: 0;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`;

export const Followers = styled.p`
padding-top: 16px;
text-align:center;
margin: 0;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`;

export const BtnContainer = styled.div`
margin: 0 92px 0 92px;
padding-top: 26px;
`;

export const Btn = styled.button`
width: 100%;
padding: 14px 28px 14px 28px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
`