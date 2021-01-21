import React, { useState, useContext } from 'react'
import {MyAxeContext} from "./../App"
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  VStack,
  Button,
  Center,
  // useToast,
} from '@chakra-ui/react'


function Inscription() {
 
 const MyAxe = useContext(MyAxeContext);
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  
 // const toast = useToast()

/*  const handleSubmit = (event) => {
    event.preventDefault()
    toast({
      position: 'top',
      title: `Registration succeded`,
      description: `This registration set for: 
        username: ${name} 
        phone: ${tel}
      `,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
*/
  const handleInscription = async () => {
    await MyAxe.createMember(name, tel);
  
  }

  return (
    <>
  
      <VStack spacing={10}>
        <Heading mb={10}>Incrivez-vous</Heading>
        <form>
          <FormControl id="name" isRequired={true}>
            <FormLabel>Nom :</FormLabel>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.currentTarget.value)
              }}
            />
            <FormHelperText>Entrez votre nom complet</FormHelperText>
          </FormControl>
          <FormControl mt={6} id="tel" isRequired={true}>
            <FormLabel>Numéro de téléphone :</FormLabel>
            <Input
              value={tel}
              type="tel"
              id="name"
              onChange={(event) => {
                setTel(event.currentTarget.value)
              }}
            />
            <FormHelperText>Entrez votre numéro complet</FormHelperText>
          </FormControl>
          <Center>
            <Button
              type="submit"
              colorScheme="blue"
              mt={10}
              onClick={handleInscription}
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