---
title: Uniswap and Value Capture in Decentralised Exchange Protocols
date: 2019-03-07T09:00:00.000Z
tags:
  - Project-specific
  - Finnish
  - Uniswap
---
Launched on the Ethereum mainnet in November 2018, Uniswap is a relative newcomer to the growing suite of decentralised exchange protocols. Despite its newness, Uniswap is already facilitating [trading volumes](https://www.coindesk.com/bancor-uniswap-dex-competition) exceeding established decentralised exchange projects like Bancor, which launched in 2017.

At the moment, there’s tremendous excitement around Uniswap. [Vitalik Buterin has expressed](https://twitter.com/VitalikButerin/status/1069573067930824705) his enthusiasm towards the project, and he’s not alone as Uniswap is trending topic on crypto Twitter right now. Over $6 million in Ethereum and ERC20 tokens is locked up in the protocol, and at its current growth rate, Uniswap is the [fastest growing](https://defipulse.com/) open finance protocol on most days.

![]( "Uniswap is growing quickly.")

### **How Uniswap Works**

Uniswap’s design is different from a traditional limit order book model because the protocol creates a single liquidity reserve for each ETH-ERC20 token pair.

Every liquidity reserve is an exchange smart contract that holds some quantity of ETH and an ERC20 token. The Uniswap exchange contract works as an automated market maker (AMM) that determines the exchange rate between ETH and an ERC20 token based on the relative quantity of each token in the reserve. Instead of filling buy and sell orders, users trade against the reserve by adding one token and removing another.

For example, a DAI/ETH reserve initially set up with 150,000 DAI and 1,000 ETH creates a price point of 150 DAI/ETH. If a user intends to buy 10,000 DAI from the DAI/ETH reserve, they are increasing the quantity of ETH in the reserve and removing DAI from it — thus, placing downward pressure on the DAI/ETH ratio and increasing the price of DAI.

![]( "ERC20 to ERC20 swaps in Uniswap. Image source: https://docs.uniswap.io/.")

An important detail to note is that price depends on the size of the order relative to the size of the DAI/ETH reserve. Uniswap’s market making model will always provide liquidity, meaning reserves will never be depleted. To understand the details of Uniswap’s market making formula, I recommend [Cyrus Younessi’s article](https://medium.com/@cyrus.younessi/uniswap-a-unique-exchange-f4ef44f807bf).

### **Why Uniswap is Succeeding**

Uniswap’s early success can be attributed to prioritising decentralisation and simplicity in its design decisions.

One of the most meaningful design decisions is Uniswap’s token model — namely, that there isn’t one. Contrasted to a protocol like Bancor that also pools liquidity, creating a Uniswap trading pair does not require [filling out a form on a website](https://support.bancor.network/hc/en-us/articles/360001166032-How-do-I-add-my-token-to-the-Bancor-Network-) or staking a token. Instead, users can freely create trading pairs with ETH as the reserve token. This removes friction and improves decentralisation.

Compared to 0x’s off-chain order books with on-chain settlement, Uniswap’s design is not necessarily better in every scenario — just different, with its own set of tradeoffs and optimisations. Everything in Uniswap runs on-chain, making it more susceptible to [front running and order collisions](https://medium.com/totle/front-running-and-its-effect-on-decentralized-exchanges-e463ca4474db). This means others can monitor incoming orders on the blockchain and capitalise on that information. Additionally, large orders (relative to the liquidity reserve) in Uniswap incur significant slippage costs because of Uniswap’s market making model, which guarantees a tradeable price. However, because exchange contracts are on-chain Uniswap is entirely decentralised and trustless. By providing a single price without the need to analyse the depth of an order book, Uniswap exchanges are simple to interact with for decentralised applications and users.

Liquidity providers receive a 0.3% fee on any trade executed on a Uniswap exchange. The fee is distributed based on the proportional amount of liquidity provided. Since liquidity is crucial to a market, and decentralised exchanges have struggled to build liquidity to compete with centralised exchanges, the 0.3% fee provides a valuable incentive for market makers. Currently, that incentive is working well, leading to liquidity in the protocol growing rapidly. This is creating a self-reinforcing cycle where the usability of the protocol improves — not to mention the added value of people sharing Uniswap’s growth stats, creating even more traction.

### **Value Capture in Decentralised Exchange Protocols**

Uniswap opting not to have a native token (and examples like Hydro Protocol forking the 0x protocol to remove the token) highlights the evolving understanding of token economics.

Just over a year ago, particularly during the ICO craze, most crypto protocols chose to implement their own token with the implicit expectation that their token will accrue value. However, most of those tokens are only used as mediums-of-exchange within their own network, a model [which is unlikely to capture value in the long-term](https://vitalik.ca/general/2017/10/17/moe.html) and adds friction.

0x works as a good example of a great project with a potentially flawed token model. By all accounts, 0x provides a valuable piece of crypto infrastructure and is backed by high-profile investors. Yet, there isn’t a clear way to value ZRX tokens and there’s much debate about whether the protocol will capture any significant value in the long-term — even if 0x ends up facilitating significant trading volumes.

ZRX’s primary function is in using the token govern protocol-level decision making, but there’s no consensus on how that should be valued. The fact that order books are maintained by centralised relayers and liquidity is isolated compounds this issue. For companies building on top of the 0x protocol, it’s difficult to justify tying up a large amount of capital when they could simply fork the protocol to make their desired modifications. The key question is, what stops a relayer from vertically integrating the market if they own the front-end that is the entire customer relationship? It’s important to note that [0x is working on ways to pool liquidity](https://0x.org/market-maker) to mitigate this issue.

At the recent Multicoin Summit, Jesse Walden from a16z crypto [discussed an interesting model](https://www.youtube.com/watch?v=Fbtz6rOKlBw) for how to think about value capture in crypto protocols. The important distinction was between stateful protocols with true network effects, and protocols that are more akin to software libraries. If 0x only works as an open-source software library with instructions on how to build a decentralised exchange, without shared liquidity there are barely any network effects. For a relayer, this means there is little cost to fork the network.

Protocols like Augur provide a stronger case for value capture. The Augur protocol is both non-rent-seeking and there is a clear incentive to hold its native REP token — participating in verifying the results of real-world events in exchange for rewards, and honest reporting is encouraged through economic incentives. Forking out the REP token would mean exiting the liquidity pool and the security provided by the reporters of the network.

Uniswap is beginning to prove that in order to become a successful decentralised exchange, a native token is not always necessary. Users providing valuable work (liquidity) to Uniswap are compensated for their efforts, the shared liquidity pools create network effects, but there is no native token through which the system is governed.

A growing number of high-quality projects like Dharma, dYdX and Compound have opted not to include a token in their designs, instead focusing their efforts into monetising a great [product built on top of their protocol](https://blog.dharma.io/dharma-isnt-currently-doing-a-token-sale-and-here-s-why-afa04e78247b). This speaks to the increased care entrepreneurs are putting into deciding whether a token model is appropriate for their crypto protocol.