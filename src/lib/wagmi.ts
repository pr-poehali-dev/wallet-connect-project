import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, arbitrum, polygon, bsc, avalanche } from 'wagmi/chains'

export const projectId = '1f381251dc9bb03a8ed7e7cd7928f9ff'

const metadata = {
  name: 'CryptoRichLife',
  description: 'Криптовалютная платформа для заработка',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, polygon, bsc, avalanche] as const

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
})