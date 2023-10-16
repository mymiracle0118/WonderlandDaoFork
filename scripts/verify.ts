// import console from 'console'
const hre = require('hardhat')
require('dotenv').config()

const ski_address: string = "0xA0dC42332b42069D513DDd7A1A975226a5FAbd41"
const skibond_address: string = "0x26337e4Ca295a6A6A5c0c79688b3Ecf51D011E90"
const skishare_address: string = "0xEe8539Df375c89829a781AE574F693C98C206Ad4"
const masonry_address: string = "0xEe8539Df375c89829a781AE574F693C98C206Ad4"
const oracle_address: string = "0xA2D1dbE83593DCc37f39540d66800aFDB8cD6681"
const treasury_address: string = "0x75928eC62142a0aD74b845310B3335D53DC3E20f"
const shiba_address: string = "0x6c7FD384bF87B32041DFC7Df6183C8f2398Becbb"
const rebatetreasury_address: string = "0x2066C175f12286713b4Da7255Ea579e4e35650C7"
const skigenesisrewardpool_address: string = "0x5b791Dbf6Ea7f22B9d99950729bF4d1308C982F6"
const skirewardpool_address: string = "0x800fc3D2B6fF047725F0f87008f20bFF5A46EF3E"
const skisharerewardpool_address: string = "0xdc2E6C7ae5e81576362AFB68682B1c7528f2024c"

const main = async(): Promise<any> => {

  // Ski Verify
  console.log("Ski verify")
  await hre.run('verify:verify', {
    address: ski_address,
    constructorArguments: [
      0, process.env.TOKEN_ALLOCATOR
    ],
  })

  // SkiBond Verify
  console.log("SkiBond verify")
  await hre.run('verify:verify', {
    address: skibond_address,
  })

  // SkiShare Verify
  console.log("SkiShare verify")
  await hre.run('verify:verify', {
    address: skishare_address,
    constructorArguments: [
      1622637000, process.env.COMMUNITY_FUND, process.env.DEV_FUND
    ],
  })

  // Masonry Verify
  console.log("Masonry verify")
  await hre.run('verify:verify', {
    address: masonry_address,
  })

  // Oracle Verify
  console.log("Oracle verify")
  await hre.run('verify:verify', {
    address: oracle_address,
    constructorArguments: [
      process.env.DEX_PAIR, 21600, 1622637000
    ],
  })

  // Treasury Verify
  console.log("Treasury verify")
  await hre.run('verify:verify', {
    address: treasury_address,
  })

  // RebateTreasury Verify
  console.log("RebateTreasury verify")
  await hre.run('verify:verify', {
    address: rebatetreasury_address,
    constructorArguments: [
      ski_address, oracle_address, treasury_address
    ],
  })

  // Shiba Verify
  console.log("Shiba verify")
  await hre.run('verify:verify', {
    address: shiba_address,
  })

  // SkiGenesisRewardPool Verify
  console.log("SkiGenesisRewardPool verify")
  await hre.run('verify:verify', {
    address: skigenesisrewardpool_address,
    constructorArguments: [
      ski_address, shiba_address, 1644404392
    ],
  })

  // skiRewardPool Verify
  console.log("skiRewardPool verify")
  await hre.run('verify:verify', {
    address: skirewardpool_address,
    constructorArguments: [
      ski_address, 1644404392
    ],
  })

  // SkiShareRewardPool Verify
  console.log("SkiShareRewardPool verify")
  await hre.run('verify:verify', {
    address: skisharerewardpool_address,
    constructorArguments: [
      skishare_address, 1644404392
    ],
  })

  // RebateTreasury Verify
  console.log("RebateTreasury verify")
  await hre.run('verify:verify', {
    address: rebatetreasury_address,
    constructorArguments: [
      ski_address, oracle_address, treasury_address
    ],
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })