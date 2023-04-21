// import getMockApi from "getMockApi";
import axios from "axios";
import Users from "./users/userList";
import { useEffect, useState } from "react";
import GlobalStyle from "globalStyled";
export const App = () => {
  
  const [users, setUsers] = useState([])
  
async function getUsers() {
  try {
    const response = await axios.get(`https://6442af8f76540ce22592fcfe.mockapi.io/users`)
    setUsers(response.data)
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getUsers();
}, [])

  console.log(users);
  
   return (
     <>
       <GlobalStyle />
    {users !== [] && <Users users={users} />}
    </>
  );
};
