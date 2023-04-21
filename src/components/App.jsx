import getMockApi from "getMockApi";

 export const App = () => {

   getApi()
   
   async function getApi () {
     const result = await getMockApi();
     console.log(result)
}
  
  return (
    <>
    </>
  );
};
