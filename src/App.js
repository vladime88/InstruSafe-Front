import * as React from "react";
import Main from "./pages/Main";
import {Container} from '@chakra-ui/react';
import Header from './layouts/Header.js';
import { useContract } from "./hooks/useContract";
import { MyAxe_address, MyAxe_abi } from "./contracts/MyAxe";

export const MyAxeContext = React.createContext(null);

function App() {

const myaxe = useContract(MyAxe_address, MyAxe_abi);

  return (
  <MyAxeContext.Provider value={myaxe}>
 <Container maxW="3xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Header/>
    <Main/>
    
 </Container>
 </MyAxeContext.Provider>
    
  );
}
  

export default App;