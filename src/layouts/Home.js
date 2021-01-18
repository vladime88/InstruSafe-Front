import React from 'react';
import {Text, Heading, Stack, Container} from '@chakra-ui/react';

export default function Home() {

return (
  <Container centerContent>
  <Stack>
      
          
          <Heading
          as="h1"
          size="sm"
          pt={4}
          >Hello !

          </Heading>
         
          <Text mt={4}>Voici donc un site pour enregistrer vos instruments de collection en toute sécurité...</Text>

    

  </Stack>
  </Container>
)
}