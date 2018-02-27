Sample Blockchain App:
- install nodejs: 6.10.1
- install chocolatey: https://www.chocolatey.org/install
- install Github Client: choco install git -params "GitAndUnixToolsOnPath"
- verify: git config --system http.sslverify false
- npm install -g node-gyp
- npm install --global --production windows-build-tools
- npm install -g ethereumjs-testrpc
- npm install -g truffle

=> start making Smart Contract: Write -> Compile -> Deploy -> Interact
- Solidity: is an object oriented java script style language
- Solidity: support datatypes: bool, string, int/uint (int8 -> int256), address, ufixed, ufixed8x8
- Access Modifiers: public, private, internal, external => your code can only be executed from where you expected