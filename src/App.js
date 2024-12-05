import React from "react";
import { Main } from "./Pages";
import { Navbar, Footer } from "./components";
import '@rainbow-me/rainbowkit/styles.css'
import { WagmiProvider, http } from 'wagmi'
import { configureChains, createConfig } from 'wagmi'
import { Chain } from '@rainbow-me/rainbowkit'

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  mainnet,
  sepolia,
  optimism,
  arbitrum,
  base,
  bsc
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'de1d411f819b86feff3f1c8025fc4728',
  chains: [mainnet, sepolia, optimism,
    bsc,
    arbitrum,
    base],
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/...'),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/...'),
    [bsc.id]: http('https://bsc-dataseed.binance.org/'), // BSC Mainnet RPC
    [optimism.id]: http('https://optimism-mainnet.infura.io/v3/...'), // Replace with your Infura Optimism API key
    [arbitrum.id]: http('https://arbitrum-mainnet.infura.io/v3/...'), // Replace with your Infura Arbitrum API key
    [base.id]: http('https://base-mainnet.g.alchemy.com/v2/...'), // Replace with your Alchemy Base API key
  },
});



const queryClient = new QueryClient()


function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
         <RainbowKitProvider>
          <React.Fragment>
            <Navbar />
            <Main />
            <Footer />
          </React.Fragment>
        </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
