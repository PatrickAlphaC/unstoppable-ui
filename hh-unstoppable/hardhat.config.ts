import "@typechain/hardhat"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-ethers"
import "solidity-coverage"
import "hardhat-deploy"
import { HardhatUserConfig } from "hardhat/config"

const config: HardhatUserConfig = {
    solidity: "0.8.7",
    networks: {
        arbitrum: {
            url: process.env.ARBITRUM_RPC_URL,
            accounts: [process.env.PRIVATE_KEY!],
            saveDeployments: true,
            chainId: 42161,
        },
        goerli: {
            url: process.env.GOERLI_RPC_URL,
            accounts: [process.env.PRIVATE_KEY!],
            saveDeployments: true,
            chainId: 5,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    etherscan: {
        apiKey: {
            arbitrumOne: process.env.ETHERSCAN_ARBITRUM_TOKEN!,
            rinkeby: process.env.ETHERSCAN_TOKEN!,
        },
    },
}

export default config
