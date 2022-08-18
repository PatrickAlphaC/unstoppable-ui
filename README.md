# Unstoppable Froge

Pronounced "frōg" as in "yogurt". This repo shows how to deploy a website to a ton of decentralized solutions so it will stay up. 

# Unstoppable Deployments

## Websites
[IPFS](ipfs://QmPL3uV44A8Njzcoezd3q7Kj5r2pGckY53fABLNyLvKqqg)
[Arweave](https://arweave.net/0M0QZAG90JfEXvuJy05NxYhUg_-uEAjiToWdrTACQvo)

# Table Of Contents

- [Unstoppable Froge](#unstoppable-froge)
- [Unstoppable Deployments](#unstoppable-deployments)
  - [Websites](#websites)
- [Table Of Contents](#table-of-contents)
  - [How can we make a website unstoppable as f*ck?](#how-can-we-make-a-website-unstoppable-as-fck)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Quickstart](#quickstart)
- [Unstoppableness](#unstoppableness)
  - [Export The Code](#export-the-code)
  - [IPFS](#ipfs)
    - [Bonus](#bonus)
    - [IPFS & Filecoin - FleekHQ](#ipfs--filecoin---fleekhq)
  - [Filecoin](#filecoin)
  - [Arweave - Raw](#arweave---raw)

## How can we make a website unstoppable as f*ck? 

1. Store UI on all decentralized storage
   1. IPFS
   2. Filecoin
   3. Arweave
   4. Skynet
   5. 0Chain
   6. Ethereum
2. Store code on all decentralized git 
   1. Radicle
   2. Sourc3
3. ENS it
4. Add Logic to Smart Contract Platform (ETH)
   1. We don't have one, but this would be the easy part


# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version`and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like: `x.x.x`
    - You might need to install it with npm

> If you're familiar with `npx` and `npm` instead of `yarn`, you can use `npx` for execution and `npm` for installing dependencies. 

## Quickstart

1. Clone this repo, install dependencies.

```bash
git clone https://PatrickAlphaC/unstoppable-ui
cd unstoppable-ui
yarn
```

2. Check out the UI!

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Unstoppableness


<br/>
<p align="center">
Un<img src="./img/ron.webp" width="125" alt="Ron Stoppable">
</p>
<br/>

Get the joke? 

## Export The Code

First, we need to create a static build of our app.

```
yarn next build
yarn next export -o unstoppable-ui-static-export
```

This will generate all the code we need in a folder named `unstoppable-ui-static-export`.

## IPFS

1. [Install IPFS](https://ipfs.tech/#install)

Install the [IPFS Desktop app](https://ipfs.tech/#install). You could install the IPFS command line too, but the desktop app is nice. 


2. Open the app and click `import` -> `folder`

<p align="center">
<img src="./img/import-ipfs.png" width="500" alt="Import IPFS">
</p>

3. Choose `unstoppable-ui-static-export` and hit `upload`

<p align="center">
<img src="./img/upload-ipfs.png" width="500" alt="Upload IPFS">
</p>

You'll now have this folder on your IPFS node! 

4. Pin it, share it with everyone and tell them to pin it. 

You now have a CID with your pinned Website! Copy your CID from IPFS, and paste it into your browser with an `ipfs://` prefix. 

If you have a IPFS enabled browser with something like [brave](https://brave.com/) or your browser has [IPFS Companion](https://chrome.google.com/webstore/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch), you can go to the following URL in your browser:

```
ipfs://QmUrF435TTvK6wQGUEJ5W6mLTokyD98do2LHmPwk29amed
```

Or

```
ipfs://bafybeidaxlgco3us3dbs2svojipcfvwl4e6dwne3wohlhmxd2ozjdexbxy/
```

### Bonus

Ask centralized projects like [Pinata](https://www.pinata.cloud/) to host our data for some redundancy. 

### IPFS & Filecoin - FleekHQ

Now this is great! The next step on our journey is hosting to Filecoin. IPFS is great, but if we are the only node on the planet that is hosting the data, we could get shut down! So we need to have our data hosted on a decentralized blockchain that can't get shut down! So we want to store it on Filecoin.

Now the Filecoin deployment process can get... tricky. An easier way for us to deploy to Filecoin (but not censorship resistant!) is [FleekHQ](https://fleekhq.eth.link/).

Just follow their docs, deploy your code, and BOOM. You'll have a deal setup with IPFS & Filecoin! You'll need to integrate Github as well. I'm going going to go over it here since you should follow their docs.

## Filecoin 

Now... The raw saving to Filecoin... It's really hard right now. [You can follow these docs](https://lotus.filecoin.io/tutorials/lotus/store-and-retrieve/store-data/).

They working on FVM to make this easier. 


## Arweave - Raw


1. Export another output

```
yarn build
yarn next export -o arweave-output
```

2. Update to relative imports

Arweave can only understand relative imports. So, go into `index.html` of the `arweave-output` file, and do a find & replace of `"/` with `"./`.

Then, update:

```
src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
```
with
```
src="./lily-pad.png"
```

3. Get an arweave wallet/key

You can get some free [arweave for testing here.](https://faucet.arweave.net/) Then just save your json key to a file. 

4. Deploy to arweave

```
yarn arkb deploy ./arweave-output --wallet /path/to/wallet.json
``

[arkb](https://docs.arweave.org/developers/tools/textury-arkb)














