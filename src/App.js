import * as React from "react";
import Main from "./pages/Main";
// import {Container} from '@chakra-ui/react';
import Header from './layouts/Header.js';
import { useContract } from "../src/hooks/useContract";
import { MyAxe_address, MyAxe_abi } from "./contracts/MyAxe";


export const MyAxeContext = React.createContext(null);

function App() {

  const myaxe = useContract(MyAxe_address, MyAxe_abi);

  return (


   <MyAxeContext.Provider value={myaxe}>
     <Header/>
     <Main/>
   </MyAxeContext.Provider>
  

  );
}
  

export default App;