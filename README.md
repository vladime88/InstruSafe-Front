# **PROJET INSTRUSAFE**

Le projet InstruSafe est une DAPP créée à partir de l'ERC721

## **Pour commencer**

Pour bien débuter ce projet il est important d'avoir des notions avec React, ainsi que des connaissances sur la blockchain Ethereum et la création de DAPP.

### **Pré-requis**

- React
- Node
- Solidity
- Chakra
- Mocha / Chai
- Truffle
- yarn / npm

### **Installation**

- ## yarn install

```zsh
yarn install
```

- ## Chakra ui install

```zsh
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion

```

- ## Openzeppelin contracts

```zsh
npm install @openzeppelin/contracts
```

- ## Truffle

`Truffle` is a development environment, testing framework and deployment pipeline for Ethereum smart contracts.  
While we were working on `remix` since the beginning we will now switch to `Truffe` and write our code on `vscode`.

Official documentation: https://www.trufflesuite.com/docs/truffle/overview

### **Install Truffle**

Install truffle globally.

```zsh
% npm install -g truffle
```

Check if everything is installed with:

```zsh
% truffle version
Truffle v5.1.50 (core: 5.1.50)
Solidity v0.5.16 (solc-js)
Node v12.19.0
Web3.js v1.2.9

```

- ## configuring networks

Since we are using public nodes, we will need to sign all our transactions locally. We will use @truffle/hdwallet-provider to do this, setting it up with our mnemonic. We will also tell the provider how to connect to the test network by using the Infura endpoint.

```zsh
% yarn add --dev @truffle/hdwallet-provider
```

- ## Directory `test/`

We will use the OpenZepplin test helpers and test environment.
Install these packages as dev dependencies:

```zsh
yarn add --dev @openzeppelin/test-helpers @openzeppelin/test-environment mocha chai
```

We will no use `truffle test` for running tests since we switched to OpenZepplin test env.
So make Mocha the entry point of the test suite by modifying your _package.json_:  
add to _package.json_:

```json
"scripts": {
    "test": "npx mocha --exit --recursive"
},
```

we can now run test with `yarn test` command.`yarn test` will not compile your smart contracts. You will have to compile your smart contracts with`truffle compile` first.

### **Usage**

Create a directory for your project and `cd` inside:

```zsh
% mkdir myProject
% cd myProject
```

Initialize a Truffle project, the git repository and a nodejs project:

```zsh
% truffle init
% git init
% yarn init
```

`Truffle` will generate build files while compiling your project in the `build/` directory.  
This directory has to be added into `.gitignore`. (You can use the same .gitignore template generated by `djinit`).

3 directories and 1 config file are generated by the Truffle project initialization:

- `contracts/`: Directory for solidity contracts
- `migrations/`: Directory for scriptable deployment files
- `test/`: Directory for test files for testing the project and the smart contracts.
- `truffle-config.js`: Truffle configuration file

Ensuite vous pouvez montrer ce que vous obtenez au final...

## Démarrage

```zsh
 % yarn start
```

## Fabriqué avec

Programmes/logiciels/ressources utilisés pour développer notre projet

- [Solidity](https://docs.soliditylang.org/en/v0.6.0/) - Language blockchain
- [VSCode](https://code.visualstudio.com/) - Editeur de textes
- []() -

## Versions

**Dernière version stable :** 1.0

Git : [Cliquer pour afficher](https://github.com/vladime88/InstruSafe-Front)

## Auteur

- **Vladimir L** _alias_ [Vladime88](https://github.com/vladime88)


