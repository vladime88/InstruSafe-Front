import * as React from "react";
import Main from "./pages/Main";
import {Container} from '@chakra-ui/react';
import Header from './layouts/Header.js'

function App() {

  return (
  
 <Container maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Header/>
    <Main/>
    
 </Container>
    
  );
}
  

export default App;