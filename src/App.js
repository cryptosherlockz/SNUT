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

const avalanche = {
  id: 43_114,
  name: 'Avalanche',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
}

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
