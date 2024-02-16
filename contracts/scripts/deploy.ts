import 'dotenv/config';

import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const baseUrl = process.env.BASE_URL;

  const lock = await ethers.deployContract("BangBlasts", [baseUrl]);

  await lock.waitForDeployment();

  console.log(
    `Bang blasts with ${baseUrl} base url deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
