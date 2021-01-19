import React, { useState } from 'react'
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Button,
  Center,
  useToast,
} from '@chakra-ui/react'

function Instrument() {
  const [brand, setBrand] = useState('')
  const [year, setYear] = useState('')
  const [ref, setRef] = useState('')
  const [certif, setCertif] = useState('')

  

  const toast = useToast()

  const handleSubmit = (event) => {
    event.preventDefault()
    toast({
      position: 'top',
      title: `Registration succeded`,
      description: `This registration is set for: 
        brand: ${brand} 
        year: ${year}
        ref: ${ref}
      `,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <>
      <VStack spacing={10}>
        <Heading mb={10}>Enregistrez votre instrument</Heading>
        <form>
          <FormControl id="brand" isRequired={true}>
            <FormLabel>Marque:</FormLabel>
            <Input
              type="text"
              value={brand}
              onChange={(event) => {
                setBrand(event.currentTarget.value)
              }}
            />
           
          </FormControl>
          <FormControl id="year" isRequired={true}>
            <FormLabel>Année:</FormLabel>
            <Input
              type="text"
              value={year}
              onChange={(event) => {
                setYear(event.currentTarget.value)
              }}
            />
            
          </FormControl>
          <FormControl id="ref" isRequired={true}>
            <FormLabel>Ref:</FormLabel>
            <Input
              type="text"
              value={ref}
              onChange={(event) => {
                setRef(event.currentTarget.value)
              }}
            />
          
          </FormControl> 
          <FormControl id="categorie" isRequired={true}>
          <FormLabel>Catégorie</FormLabel>
            <Select placeholder="Piano">
  <option value="option0">Piano</option>
  <option value="option1">Guitare</option>
  <option value="option2">Trompette</option>
</Select>
          </FormControl>
          <FormControl id="certif" isRequired={true}>
            <FormLabel>Téléchargez votre certificat d'authenticité</FormLabel>
            <Input
              type="text"
              value={certif}
              onChange={(event) => {
                setCertif(event.currentTarget.value)
              }}
            />
            
          
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

export default Instrument;
