const hashCode = require("crypto-js/sha256");
 
class Block {
    constructor(index, timestamp, data, previousHash = '') { //Properties of block
        this.index = index; //where the blocks sits on the chain
        this.previousHash = previousHash; //contains hash of the previous block
        this.timestamp = timestamp; //when the block was created
        this.data = data; //any type of data that will be associated with the block
        this.hash = this.buildHash(); //hash of current block
    }
    buildHash() { //Calculate Hash for all the data.
      return hashCode(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
    calculateHash() { //Calculate Hash for all the data.
        return hashCode(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}
 
class BlockChain{
    constructor() { //Initializing Blockchain        
        this.chain = [this.makeGenesisBlock()]; //First block called Genesis Block
    }
    makeGenesisBlock() {
        return new Block(0, "01/04/2018", "Genesis block", "0"); //Genesis Block Data
    }
    getLastBlock() { 
        return this.chain[this.chain.length - 1]; //Return Last Block in the chain
    }
    addNewsBlock(newBlockData) { //adding a new block on to the chain
        newBlockData.previousHash = this.getLastBlock().hash; //setting previous hash
        newBlockData.hash = newBlockData.calculateHash(); //setting new hash by re calculating hash
        this.chain.push(newBlockData); //pushing to the chain
    }
    //return true if chain is valid and false if something wrong
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){  //not starting from block 0 because its genesis block
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) { //check if blocks are properly linked together
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) { //check if our block points to correct previous block
                return false;
            }
        }
        return true; // true if our chain perfectly valid.
    }
}

var devprofessorCoin = new BlockChain();
devprofessorCoin.addNewsBlock(new Block(1, "01/15/2018", { amount: 4 }));
devprofessorCoin.addNewsBlock(new Block(2, "01/16/2018", { amount: 9 }));
console.log(JSON.stringify(devprofessorCoin, null, 4));
