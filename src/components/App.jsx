import Users from "../pages/userList";
import GlobalStyle from "globalStyled";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { AppStyle } from "./appStyled";


export const App = () => {
   return (
     <AppStyle>
       <GlobalStyle />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Users />}> </Route>
          <Route path="*" element={<Home/>} /> 
       </Routes>
     </AppStyle>

  );
};
