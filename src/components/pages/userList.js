import { StyledLink, Title, UserListStyled } from "../users/userListStyled"
import {BtnContainerLoadMore, BtnLoadMore } from "../LoadMore/loadMoreStyled";
import { useEffect, useState } from "react";
import User from "../users/user"
import axios from "axios";


export default function Users() {
      const [users, setUsers] = useState([])
  const [limit, setLimit] = useState(3);
  
    const limitDecrement = () => {
        setLimit(limit + 3);
    }
    useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(`https://6442af8f76540ce22592fcfe.mockapi.io/users?page=1&limit=${limit}`)
        setUsers(response.data)
      } catch (error) {
        console.log(error);
      }
    }
      
    getUsers()
  }, [limit])
    return (
        <>
        <Title>Tweets</Title>
        <nav>
          <StyledLink to='/'>Go Home</StyledLink >
          </nav>
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

             <BtnContainerLoadMore>
                <BtnLoadMore type="button" onClick={limitDecrement}>Load More</BtnLoadMore>
            </BtnContainerLoadMore>
        </>
    )
}