const EthSwap = artifacts.require("EthSwap");
const Token = artifacts.require("Token");

require("chai").use(require("chai-as-promised")).should();

contract("EthSwap", (accounts) => {
  describe("Token deployment", async () => {
    it("contract has a name", async () => {
      let ethswap = await EthSwap.new();
      const name = await ethswap.name();
      assert.equal(name, "EthSwap test");
    });
  });
});
