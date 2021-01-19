import React from 'react';
import DarkModeSwitch from "./../components/DarkModeSwitch";
import {Text, Heading,Flex, Stack, Container,Badge, Spacer} from '@chakra-ui/react';

export default function Header() {

return (
  <Container centerContent pb={4}> 
  <Stack>
      
          <Flex pt={4}>
           <DarkModeSwitch/>
            
         <Spacer/>
          <Heading
          as="h1"
          size="sm"
          pt={4}
          ml={4}
          ><Text fontSize="3xl" fontWeight="bold">InstruSafe, your instrument is safe!!</Text>
            <Badge as="i" variant="solid" colorScheme="purple" ml={1}>
          Collector
        </Badge>
          </Heading>
          </Flex>
         
    

  </Stack>
  </Container>
)
}