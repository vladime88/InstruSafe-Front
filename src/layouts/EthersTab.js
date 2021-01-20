import React, { useState, useEffect } from 'react'
import { Heading, Text,Container } from '@chakra-ui/react'
import { ethers } from 'ethers'

function EthersTab() {
  const [isEtherem, setIsEtherem] = useState(false)
  const [isEnable, setIsEnable] = useState(false)
  const [account, setAccount] = useState('0x00')
  const [network, setNetwork] = useState(null)
  const [balance, setBalance] = useState(0)

  // check if ethereum is injected
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setIsEtherem(true)
    } else setIsEtherem(false)
  }, [])

  // connect metamask to app
  useEffect(() => {
    ;(async () => {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        const account = accounts[0] // tableau de 1 element
        setIsEnable(true)
        setAccount(account)
      } catch (e) {
        setIsEnable(false)
      }
    })()
  }, [isEtherem])

  useEffect(() => {
    ;(async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const network = await provider.getNetwork()
      const _balance = await provider.getBalance(account)
      const balance = ethers.utils.formatEther(_balance)
      setNetwork(network)
      setBalance(balance)
    })()
  }, [isEnable, account])

  return (
    <Container centerContent>
      <Heading>Web3 with ethers.js</Heading>
      <Text>Metamask status: {isEnable ? 'connected' : 'disconnect'}</Text>
      {network !== null && (
        <>
          <Text>Account: {account}</Text>
          <Text>Network name: {network.name}</Text>
          <Text>Network id: {network.chainId}</Text>
          <Text>Balance: {balance}</Text>
        </>
      )}
    </Container>
  )
}

export default EthersTab;
