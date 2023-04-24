import { GoHomeLinkStyled, StyledLink, Title, UserListContainer, UserListStyled } from "./userListStyled"
import { useEffect, useState } from "react";
import User from "../components/users/user"
import axios from "axios";
import DropdownMenu from "components/dropDownMenu/dropdownMenu";
import LoadMore from "components/LoadMore/loadMore";


export default function Users() {
    const [users, setUsers] = useState([])
    const [limit, setLimit] = useState(3);
  

  const hendleFilter = async (option) => {
    console.log(option)
       let userFilter = []
      try {
        const response = await axios.get(`https://6442af8f76540ce22592fcfe.mockapi.io/users`)
        if (option === '') {
          userFilter = response.data
            }
        if (option === 'follow') {
          const userMap = response.data.map(user => user)
          userFilter = userMap.filter(user => user.isFollowing === false)
        }
        if (option === 'followings') {
          const userMap = response.data.map(user => user)
          userFilter = userMap.filter(user => user.isFollowing === true)
        }
        
        setUsers(userFilter)
        // console.log(users)
      } catch (error) {
        console.log(error);
      }
      }
      
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
        <UserListContainer>
        <Title>Tweets</Title>
        <GoHomeLinkStyled>
          <StyledLink to='/'>Go Home</StyledLink >
        </GoHomeLinkStyled>
        <DropdownMenu filter={hendleFilter}></DropdownMenu>
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
        <LoadMore limitDecrement={limitDecrement} />
        </UserListContainer>
    )
}