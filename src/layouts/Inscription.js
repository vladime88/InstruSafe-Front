import React, { useState } from 'react'
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  VStack,
  Button,
  Center,
  useToast,
} from '@chakra-ui/react'

function Inscription() {
  const [username, setUsername] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const toast = useToast()

  const handleSubmit = (event) => {
    event.preventDefault()
    toast({
      position: 'top',
      title: `Registration succeded`,
      description: `This registration set for: 
        username: ${username} 
        phone number: ${phoneNumber}
      `,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <>
      <VStack spacing={10}>
        <Heading mb={10}>Incrivez-vous</Heading>
        <form>
          <FormControl id="username" isRequired={true}>
            <FormLabel>Nom :</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.currentTarget.value)
              }}
            />
            <FormHelperText>Entrez votre nom complet</FormHelperText>
          </FormControl>
          <FormControl mt={6} id="phoneNumber" isRequired={true}>
            <FormLabel>Numéro de téléphone :</FormLabel>
            <Input
              value={phoneNumber}
              type="tel"
              onChange={(event) => {
                setPhoneNumber(event.currentTarget.value)
              }}
            />
            <FormHelperText>Entrez votre numéro complet</FormHelperText>
          </FormControl>
          <Center>
            <Button
              type="submit"
              colorScheme="blue"
              mt={10}
              onClick={handleSubmit}
            >
              register
            </Button>
          </Center>
        </form>
      </VStack>
    </>
  )
}

export default Inscription;