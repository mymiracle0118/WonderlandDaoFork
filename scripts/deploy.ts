import { 
  Contract, 
  ContractFactory 
} from "ethers"
import { ethers } from "hardhat"
require('dotenv').config()

const main = async(): Promise<any> => {

  // Deploy Ski
  console.log("Deploy Ski conract")
  const Ski: ContractFactory = await ethers.getContractFactory("Ski")
  const ski: Contract = await Ski.deploy(0, process.env.TOKEN_ALLOCATOR)
  await ski.deployed()
  console.log(`ski address: ${ski.address}`)

  // Deploy SkiBond
  console.log("Deploy SkiBond contract")
  const SkiBond: ContractFactory = await ethers.getContractFactory("SkiBond")
  const skiBond: Contract = await SkiBond.deploy()
  await skiBond.deployed()
  console.log(`ski bond address: ${skiBond.address}`)

  // Deploy SkiShare
  console.log("Deploy SkiShare contract")
  const SkiShare: ContractFactory = await ethers.getContractFactory("SkiShare")
  const skiShare: Contract = await SkiShare.deploy(1622637000, process.env.COMMUNITY_FUND, process.env.DEV_FUND)
  await skiShare.deployed()
  console.log(`ski share address: ${skiShare.address}`)

  // Deploy Masonry
  console.log("Deploy Masonry contract")
  const Masonry: ContractFactory = await ethers.getContractFactory("Masonry")
  const masonry: Contract = await Masonry.deploy()
  await masonry.deployed()
  console.log(`masonry address: ${masonry.address}`)

  // Deploy Oracle
  console.log("Deploy Oracle contract")
  const Oracle: ContractFactory = await ethers.getContractFactory("Oracle")
  const oracle: Contract = await Oracle.deploy(process.env.DEX_PAIR, 21600, 1622637000)
  await oracle.deployed()
  console.log(`oracle address: ${oracle.address}`)

  // Deploy Treasury
  console.log("Deploy Treasury contract")
  const Treasury: ContractFactory = await ethers.getContractFactory("Treasury")
  const treasury: Contract = await Treasury.deploy()
  await treasury.deployed()
  console.log(`treasury address: ${treasury.address}`)

  // Deploy RebateTreasury
  console.log("Deploy RebateTreasury contract")
  const RebateTreasury: ContractFactory = await ethers.getContractFactory("RebateTreasury")
  const rebateTreasury: Contract = await RebateTreasury.deploy(ski.address, oracle.address, treasury.address)
  // const rebateTreasury: Contract = await RebateTreasury.deploy("0xA0dC42332b42069D513DDd7A1A975226a5FAbd41", "0xA2D1dbE83593DCc37f39540d66800aFDB8cD6681", "0x75928eC62142a0aD74b845310B3335D53DC3E20f")
  await rebateTreasury.deployed()
  console.log(`rebateTreasury address: ${rebateTreasury.address}`)

  // Deploy Shiba
  console.log("Deploy Shiba contract")
  const Shiba: ContractFactory = await ethers.getContractFactory("Shiba")
  const shiba: Contract = await Shiba.deploy()
  await shiba.deployed()
  console.log(`Shiba address: ${shiba.address}`)

  // Deploy SkiGenesisRewardPool
  console.log("Deploy SkiGenesisRewardPool contract")
  const SkiGenesisRewardPool: ContractFactory = await ethers.getContractFactory("SkiGenesisRewardPool")
  const skiGenesisRewardPool: Contract = await SkiGenesisRewardPool.deploy(ski.address, shiba.address, 1644404392)
  // const skiGenesisRewardPool: Contract = await SkiGenesisRewardPool.deploy("0xA0dC42332b42069D513DDd7A1A975226a5FAbd41", "0x6c7FD384bF87B32041DFC7Df6183C8f2398Becbb", 1644404392)//2022-02-9 07:59:52
  await skiGenesisRewardPool.deployed()
  console.log(`SkiGenesisRewardPool address: ${skiGenesisRewardPool.address}`)

  // Deploy skiRewardPool
  console.log("Deploy skiRewardPool contract")
  const SkiRewardPool: ContractFactory = await ethers.getContractFactory("SkiRewardPool")
  // const skiRewardPool: Contract = await SkiRewardPool.deploy(ski.address, 1644404392)
  const skiRewardPool: Contract = await SkiRewardPool.deploy("0xA0dC42332b42069D513DDd7A1A975226a5FAbd41", 1644404392)
  await skiRewardPool.deployed()
  console.log(`skiRewardPool address: ${skiRewardPool.address}`)

  // Deploy SkiShareRewardPool
  console.log("Deploy SkiShareRewardPool contract")
  const SkiShareRewardPool: ContractFactory = await ethers.getContractFactory("SkiShareRewardPool")
  // const skiShareRewardPool: Contract = await SkiShareRewardPool.deploy(skiShare.address, 1644404392)
  const skiShareRewardPool: Contract = await SkiShareRewardPool.deploy("0xEe8539Df375c89829a781AE574F693C98C206Ad4", 1644404392)
  await skiShareRewardPool.deployed()
  console.log(`SkiShareRewardPool address: ${skiShareRewardPool.address}`)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})
