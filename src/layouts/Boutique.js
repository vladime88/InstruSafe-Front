import React from 'react'
import gretsch from '../assets/gretsch.png'
import oldguit from '../assets/oldguit.png'
import {
    ThemeProvider,
    CSSReset,
    theme,
  Box,
  Image,
  Badge,
  Text,
  Grid
} from '@chakra-ui/react';

function Boutique() {

    return (
        <ThemeProvider theme={theme}>
        <CSSReset />
        <Grid p={2} gap={2} templateColumns="repeat(auto-fit, minmax(50px, 1fr))">
<Box
          bg="#ffffff"
          rounded="lg"
          maxWidth="sm"
          minHeight="sm"
          border="1px solid lightgrey"
          overflow="hidden"
          shadow="sm"
          borderRadius="lg"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
        >
          <Box>
            <Image
              boxSize="250px"
              // fallbackSrc="https://via.placeholder.com/150"
              // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              src={oldguit}
              // width="100%"
              // height="auto"
              // minHeight="245px"
            />
          </Box>
          <Box p={5} pb={8}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={1}
              flexDirection="row"
            >
              <Badge
                variant="subtle"
                variantColor="teal"
                mr={2}
                rounded="lg"
                pl={2}
                pr={2}
              >
                NEW
              </Badge>
              <Text color="gray.500" fontSize="xs">
                DJANGO • SL11
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl">
              A Jazz manouch classic
            </Text>
            <Text fontSize="sm" mb={3}>
              YEAR : 1949
            </Text>
          </Box>
        </Box>
        <Box
          bg="#ffffff"
          rounded="lg"
          maxWidth="sm"
          minHeight="sm"
          border="1px solid lightgrey"
          overflow="hidden"
          shadow="sm"
          borderRadius="lg"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
        >
          <Box>
            <Image
              boxSize="250px"
              // fallbackSrc="https://via.placeholder.com/150"
              // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              src={gretsch}
             // width="100%"
             // height="auto"
             //  minHeight="245px"
            />
          </Box>
          <Box p={5} pb={8}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={1}
              flexDirection="row"
            >
              <Badge
                variant="subtle"
                variantColor="teal"
                mr={2}
                rounded="lg"
                pl={2}
                pr={2}
              >
                NEW
              </Badge>
              <Text color="gray.500" fontSize="xs">
                GRETSH • G-6136T 
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl">
              A classic from Gretsch
            </Text>
            <Text fontSize="sm" mb={3}>
              YEAR : 1979
            </Text>
          </Box>
        </Box>
        </Grid>
  </ThemeProvider>
)
};
    export default Boutique;