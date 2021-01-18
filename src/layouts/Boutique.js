import React from 'react'
import {
    ThemeProvider,
    CSSReset,
    theme,
  Box,
  Image,
  Badge,
  Text,
  Icon,
  
} from '@chakra-ui/react';

function Boutique() {

    return (
        <ThemeProvider theme={theme}>
        <CSSReset />
<Box
          bg="#ffffff"
          rounded="lg"
          width="sm"
          minHeight="sm"
          border="1px solid lightgrey"
          overflow="hidden"
        >
          <Box>
            <Image
              size="100px"
              fallbackSrc="https://via.placeholder.com/150"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              width="100%"
              height="auto"
              minHeight="245px"
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
                3 BEDS • 2 BATHS
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="xl">
              Modern home in city center
            </Text>
            <Text fontSize="sm" mb={3}>
              $119/night
            </Text>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="flex-start"
            >
              <Icon name="star" color="yellow.400" mr={1} />
              <Text fontWeight="bold" mr={1}>
                4.84
              </Text>
              <Text fontSize="sm">(190)</Text>
            </Box>
          </Box>
        </Box>
  </ThemeProvider>
)
};
    export default Boutique;