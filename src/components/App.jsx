import {BtnContainerLoadMore,BtnLoadMore } from "./LoadMore/loadMoreStyled";
import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./users/userList";
import GlobalStyle from "globalStyled";


export const App = () => {
  
  const [users, setUsers] = useState([])
  const [limit, setLimit] = useState(3);
  
    const limitDecrement = () => {
        setLimit(limit + 3);
    }
async function getUsers() {
  try {
    const response = await axios.get(`https://6442af8f76540ce22592fcfe.mockapi.io/users?page=1&limit=${limit}`)
    setUsers(response.data)
  } catch (error) {
    console.log(error);
  }
}
  useEffect(() => {
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit])
  
   return (
     <>
       <GlobalStyle />
       {users !== [] && <Users users={users} />}
      <BtnContainerLoadMore>
            <BtnLoadMore type="button" onClick={limitDecrement}>Load More</BtnLoadMore>
      </BtnContainerLoadMore>    </>
  );
};
