import 'dotenv/config';

import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BangBlastsCoin } from '../typechain-types';

describe("BangBlasts", function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const baseUrl = process.env.BASE_URL;

    const BangBlasts = await ethers.getContractFactory("BangBlasts");
    const bang: BangBlastsCoin = <BangBlastsCoin><unknown>await BangBlasts.deploy(baseUrl);

    return { bang, baseUrl, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { bang, baseUrl } = await loadFixture(deployOneYearLockFixture);

      expect(await bang.baseTokenURI()).to.equal(baseUrl);
    });

    it("Should set the right owner", async function () {
      const { bang, owner } = await loadFixture(deployOneYearLockFixture);

      expect(await bang.owner()).to.equal(owner.address);
    });
  });
});
