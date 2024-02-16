// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract BangBlastsCoin is ERC721Enumerable, Ownable {
    uint public constant PRICE = 0.005 ether;
    string public baseTokenURI;
    mapping (address => uint[]) nftOwner;
    event MintNft(address senderAddress, uint256 nftToken);
    mapping (uint => bool) soldedTokenIds;
    uint totalSolded;

    constructor(string memory baseURI)  ERC721("BangBlastCoint", "BBC") Ownable(msg.sender) {
        setBaseURI(baseURI);
    }

    function _baseURI() internal  view  virtual  override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function reserveNFT(uint _tokenId) public onlyOwner {
        _safeMint(msg.sender, _tokenId);
        nftOwner[msg.sender].push(_tokenId);
        soldedTokenIds[_tokenId] = true;
        emit MintNft(msg.sender, _tokenId);
    }

    function mintNFT(uint _tokenId) public payable {
        require(msg.value >= PRICE, "Not enough ether to purchase NFT.");
        _safeMint(msg.sender, _tokenId);
        soldedTokenIds[_tokenId] = true;
        emit MintNft(msg.sender, _tokenId);
    }

    function tokensOfOwner(address _owner) external view returns (uint[] memory) {
        return nftOwner[_owner];
    }

    function withdraw() public payable onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "No ether left to withdraw");
        (bool success, ) = (msg.sender).call{value: balance}("");
        require(success, "Transfer failed.");
    }

    modifier checkTokenStatus(uint _tokenId) {
        require(!soldedTokenIds[_tokenId], "Token is sold");
        _;
    }
}