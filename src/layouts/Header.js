import React from 'react';
import DarkModeSwitch from "./../components/DarkModeSwitch";
import {Text, Heading,Flex, Stack, Container,Badge, Spacer} from '@chakra-ui/react';

export default function Header() {

return (
  <Container centerContent>
  <Stack>
      
          <Flex>
           <DarkModeSwitch/>
            
         <Spacer/>
          <Heading
          as="h1"
          size="sm"
          pt={4}
          ><Text fontSize="2xl" fontWeight="bold">InstruSafe, your instrument is safe!!</Text>
            <Badge variant="subtle" variantColor="pink" ml={1}>
          BETA
        </Badge>
          </Heading>
          </Flex>
         
    

  </Stack>
  </Container>
)
}