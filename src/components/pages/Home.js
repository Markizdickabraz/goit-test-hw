import { StyledLink, Title } from "components/users/userListStyled";

export default function Home() {
    return (
        <>
            <Title>Welcome</Title>
            <div style={{display:"flex"}}>
            <StyledLink to="/tweets">Read Tweets</StyledLink>
            <img 
                src="https://st.depositphotos.com/1499736/4705/i/450/depositphotos_47058485-stock-photo-man-pointing-his-finger-away.jpg"
                alt="new"
      /></div>
        </>
    )
}