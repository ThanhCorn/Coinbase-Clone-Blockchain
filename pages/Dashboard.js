import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
    ),
  ),
)


const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([])
  const [thirdWebTokens, setThirdWebTokens] = useState([])

  useEffect(() => {
    const getCoins = async () => {
        const SANITY_URL="https://tyd4imry.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D";
        const coins = await fetch(SANITY_URL);
        
        const sanityTokens = (await coins.json()).result

        setSanityTokens(sanityTokens)
        setThirdWebTokens(sanityTokens.map(token => sdk.getTokenModule(token.contractAddress)))

        }
    return () =>getCoins()
  }, [])
  console.log('ThirdWeb', thirdWebTokens)
  console.log('sanitytoken', sanityTokens)


  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          thirdWebTokens={thirdWebTokens}
          sanityTokens={sanityTokens}
          walletAddress={address}


        />
        <Main
          thirdWebTokens={thirdWebTokens}
          sanityTokens={sanityTokens}
          walletAddress={address}

        />
      </MainContainer>
    </Wrapper>
  )
}

export default Dashboard
export async function getServerSideProps(context) { }
export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  flex: 1;
`;