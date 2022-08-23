import { DeployFunction } from "hardhat-deploy/types"
import { verify } from "../utils/helper-functions"


const deployFunction: DeployFunction = async ({ deployments, getNamedAccounts }) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    console.log("Deploying...")
    const frogNftDeployment = await deploy("UnstoppableFrog", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: 6,
    })
    console.log("Verifying...")
    await verify(frogNftDeployment.address, [])
}

export default deployFunction
deployFunction.tags = ["all"]
