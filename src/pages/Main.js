import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Home from '../layouts/Home'
import Inscription from '../layouts/Inscription'
import Boutique from '../layouts/Boutique'
import EthersTab from '../layouts/EthersTab'
import Instrument from '../layouts/Instrument'

function Main() {
  return (
    <>
      <Tabs colorScheme="purple" size="lg" isFitted={true}>
        <TabList>
          <Tab>Home</Tab>
          <Tab>Inscription</Tab>
          <Tab>Instrument</Tab>
          <Tab>Boutique</Tab>
          <Tab>EthersTab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Home />
          </TabPanel>
          <TabPanel>
            <Inscription />
          </TabPanel>
          <TabPanel>
            <Instrument />
          </TabPanel>
          <TabPanel>
            <Boutique />
          </TabPanel>
          <TabPanel>
            <EthersTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default Main;