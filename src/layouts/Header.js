import React from 'react';
import DarkModeSwitch from "./../components/DarkModeSwitch";
import {Text, Heading,Flex, Stack, Container} from '@chakra-ui/react';

export default function Header() {

return (
  <Container centerContent>
  <Stack>
      
          <Flex>
           <DarkModeSwitch/>
            
          </Flex>
          <Flex>
          <Heading
          as="h1"
          size="sm"
          pt={4}
          ><Text>InstruSafe, your instrument is safe!!</Text>
          </Heading>
          </Flex>
         
    

  </Stack>
  </Container>
)
}