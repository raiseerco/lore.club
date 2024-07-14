import {
  arbitrumSepolia,
  baseSepolia,
  mainnet,
  scrollSepolia,
} from "viem/chains";
import {
  createPublicClient,
  createWalletClient,
  custom,
  formatEther,
  formatUnits,
  http,
  parseEther,
} from "viem";

import { formatNumber } from "./utils";
import { parseUnits } from "viem";

const DEFAULT_NETWORK = scrollSepolia; // arbitrumSepolia; // baseSepolia;

// import { createWalletClient } from 'viem'

// import tokenAbi from "./abis/TokenABI.json"; // TODO Viem does not infere when using an imported file, must be inline defined

// import { getContract } from "viem";
// import { parseAbi } from "viem";

const tokenFactoryABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_factoryParameters",
        type: "tuple",
        internalType: "struct TokenFactory.FactoryParameters",
        components: [
          {
            name: "exchangeRouterAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "exchangeFactoryAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "initialSupply",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "initialETHReserve",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "tradingFee",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "completionFee",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "targetReserveETH",
            type: "uint112",
            internalType: "uint112",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "COMPLETION_FEE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "EXCHANGE_FACTORY_ADDRESS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "EXCHANGE_ROUTER_ADDRESS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "INITIAL_ETH_RESERVE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "INITIAL_SUPPLY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TARGET_RESERVE_ETH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint112",
        internalType: "uint112",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TRADING_FEE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "createToken",
    inputs: [
      {
        name: "_params",
        type: "tuple",
        internalType: "struct TokenFactory.TokenParameters",
        components: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "ticker",
            type: "string",
            internalType: "string",
          },
          {
            name: "description",
            type: "string",
            internalType: "string",
          },
          {
            name: "image",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "feesCollected",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTokenInfo",
    inputs: [
      {
        name: "_tokenAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct TokenFactory.TokenInfo",
        components: [
          {
            name: "tokenAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "ticker",
            type: "string",
            internalType: "string",
          },
          {
            name: "description",
            type: "string",
            internalType: "string",
          },
          {
            name: "image",
            type: "string",
            internalType: "string",
          },
          {
            name: "creator",
            type: "address",
            internalType: "address",
          },
          {
            name: "poolAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "reserveToken",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "reserveETH",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "totalSupply",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "currentTokenPrice",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "tradingFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "completionFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "targetReserveETH",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "collectedFees",
            type: "uint112",
            internalType: "uint112",
          },
          {
            name: "initialETHVirtualReserve",
            type: "uint112",
            internalType: "uint112",
          },
          {
            name: "poolInitialized",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "presaleActive",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTokensCreated",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct TokenFactory.TokenInfo[]",
        components: [
          {
            name: "tokenAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "ticker",
            type: "string",
            internalType: "string",
          },
          {
            name: "description",
            type: "string",
            internalType: "string",
          },
          {
            name: "image",
            type: "string",
            internalType: "string",
          },
          {
            name: "creator",
            type: "address",
            internalType: "address",
          },
          {
            name: "poolAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "reserveToken",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "reserveETH",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "totalSupply",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "currentTokenPrice",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "tradingFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "completionFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "targetReserveETH",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "collectedFees",
            type: "uint112",
            internalType: "uint112",
          },
          {
            name: "initialETHVirtualReserve",
            type: "uint112",
            internalType: "uint112",
          },
          {
            name: "poolInitialized",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "presaleActive",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setCompletionFee",
    inputs: [
      {
        name: "_completionFee",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setExchangeFactoryAddress",
    inputs: [
      {
        name: "_factoryAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setExchangeRouterAddress",
    inputs: [
      {
        name: "_exchangeAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setInitialETHReserve",
    inputs: [
      {
        name: "_initialETHReserve",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setInitialSupply",
    inputs: [
      {
        name: "_initialSupply",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTargetReserveETH",
    inputs: [
      {
        name: "_targetReserveETH",
        type: "uint112",
        internalType: "uint112",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTradingFee",
    inputs: [
      {
        name: "_tradingFee",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tokensCreated",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawFees",
    inputs: [
      {
        name: "_to",
        type: "address",
        internalType: "address payable",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Received",
    inputs: [
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokenCreated",
    inputs: [
      {
        name: "tokenAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "name",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "ticker",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "description",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "image",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "TickerInUse",
    inputs: [],
  },
] as const;

const tokenABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_tokenParameters",
        type: "tuple",
        internalType: "struct ERC20AMM.TokenParameters",
        components: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "ticker",
            type: "string",
            internalType: "string",
          },
          {
            name: "description",
            type: "string",
            internalType: "string",
          },
          {
            name: "image",
            type: "string",
            internalType: "string",
          },
          {
            name: "creator",
            type: "address",
            internalType: "address",
          },
          {
            name: "exchangeRouter",
            type: "address",
            internalType: "address",
          },
          {
            name: "exchangeFactory",
            type: "address",
            internalType: "address",
          },
          {
            name: "initialETHVirtualReserve",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "totalSupply",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "tradingFee",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "completionFee",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "targetReserveETH",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "DEAD_ADDRESS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "buyTokens",
    inputs: [
      {
        name: "_minTokensOut",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deadline",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "calculatePurchaseTokens",
    inputs: [
      {
        name: "_ethAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "tokensToPurchase",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "feeAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "excessETH",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "calculateSaleTokens",
    inputs: [
      {
        name: "_tokenAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "netFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "ethFee",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "collectedFees",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint112",
        internalType: "uint112",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "completionFee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "creator",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decreaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "subtractedValue",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "description",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ethAccumulated",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "factory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCurrentETHPriceInToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCurrentTokenPriceInETH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMaxTokensToBuyWithETH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getReserves",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "image",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "increaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "addedValue",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "initialETHVirtualReserve",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint112",
        internalType: "uint112",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "poolAddress",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "poolInitialized",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "presaleActive",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "sellTokens",
    inputs: [
      {
        name: "_tokenAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_minETHOut",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deadline",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetReserveETH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tradingFee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "uniswapFactory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IUniswapV2Factory",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "uniswapRouter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IUniswapV2Router02",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PoolCreated",
    inputs: [
      {
        name: "tokenAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "poolAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokensDeposited",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "ethDeposited",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "liquidityTokens",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ReserveRecalibrated",
    inputs: [
      {
        name: "newReserveETH",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokensPurchased",
    inputs: [
      {
        name: "buyer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amountSpentETH",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "amountTokensReceived",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "minTokensExpected",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "feesPaid",
        type: "uint112",
        indexed: false,
        internalType: "uint112",
      },
      {
        name: "deadline",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokensSold",
    inputs: [
      {
        name: "seller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amountTokensSold",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "amountETHReceived",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "minETHExpected",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "feesPaid",
        type: "uint112",
        indexed: false,
        internalType: "uint112",
      },
      {
        name: "deadline",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "EthCannotBeZero",
    inputs: [],
  },
  {
    type: "error",
    name: "FailedToTransferETH",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientETHReserves",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientTokenAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "InvariantViolation",
    inputs: [
      {
        name: "kCurrent",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "kExpected",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "PoolInitializationFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "PresaleNotActive",
    inputs: [],
  },
  {
    type: "error",
    name: "SlippageToleranceExceeded",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenAmountCannotBeZero",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenAmountExceedsTokensInCirculation",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenAmountExceedsTotalSupply",
    inputs: [],
  },
  {
    type: "error",
    name: "TradingFeeCannotBeZero",
    inputs: [],
  },
  {
    type: "error",
    name: "TransactionExpired",
    inputs: [],
  },
] as const;

const ethABI = [
  {
    inputs: [
      { internalType: "address", name: "_aggregator", type: "address" },
      { internalType: "address", name: "_accessController", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    name: "AnswerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
    ],
    name: "NewRound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "accessController",
    outputs: [
      {
        internalType: "contract AccessControllerInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "aggregator",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_aggregator", type: "address" }],
    name: "confirmAggregator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_roundId", type: "uint256" }],
    name: "getAnswer",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
    name: "getRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_roundId", type: "uint256" }],
    name: "getTimestamp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRound",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestTimestamp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    name: "phaseAggregators",
    outputs: [
      {
        internalType: "contract AggregatorV2V3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "phaseId",
    outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_aggregator", type: "address" }],
    name: "proposeAggregator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedAggregator",
    outputs: [
      {
        internalType: "contract AggregatorV2V3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
    name: "proposedGetRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedLatestRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_accessController", type: "address" },
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_to", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const publicClient = createPublicClient({
  chain: DEFAULT_NETWORK,
  transport: http("https://scroll-sepolia.drpc.org"),
  // "https://base-sepolia.infura.io/v3/b96017bda544465082cb0d697443f0ee"
});

// TODO Send to server .env
export const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(
    "https://mainnet.infura.io/v3/b96017bda544465082cb0d697443f0ee"
  ),
});

const FACTORY_ARBITRUM_TESTNET = "3Bb3A3063DAfB15Bd3fF298DCC69564Db44D4D5B"; // DEPLOYED - TEST
const FACTORY_BASE_TESTNET = "0x297230aa5A9e6Ba168dDc3dac7726D762Ea9B262"; // OK
const FACTORY_BASE_TESTNET_oold = "81345Ac6DdBE6F972173DB12123896A31C6c6ABC"; // OK
//base-sepolia-rpc.publicnode.com

const FACTORY_SCROLL_TESTNET = "81345Ac6DdBE6F972173DB12123896A31C6c6ABC"; // OK
const FACTORY_MODE_TESTNET = "81345Ac6DdBE6F972173DB12123896A31C6c6ABC"; // UNDEPLOYED - TEST
const FACTORY_POLYGON_TESTNET = "81345Ac6DdBE6F972173DB12123896A31C6c6ABC"; // UNDEPLOYED - TEST
const FACTORY_OPTIMISM_TESTNET = "81345Ac6DdBE6F972173DB12123896A31C6c6ABC"; // UNDEPLOYED - TEST

export async function getTokensCreated() {
  try {
    const result = await publicClient.readContract({
      address: `0x${
        process.env.NEXT_PUBLIC_FACTORY_ADDRESS_DEFAULT ||
        "Ef29EE1a0E08Dfea72FbD49EBB7C07cD75184719"
        // "3Bb3A3063DAfB15Bd3fF298DCC69564Db44D4D5B"
      }`,
      abi: tokenFactoryABI,
      functionName: "getTokensCreated",
      // args: ['0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC']
    });

    return result;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

export async function getBalanceETH(addr: string) {
  try {
    if (!addr) {
      console.log("Nothing");
      return null;
    }

    const balance = await publicClient.getBalance({
      address: `0x${addr.replace("0x", "")}`,
      // blockTag: "safe",
    });

    return formatEther(balance);
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

export async function getTokenInfo(tokenAddress: string) {
  try {
    if (!tokenAddress) {
      console.log("Nothing");
      return null;
    }

    const addr = tokenAddress.replace("0x", "");
    const result = await publicClient.readContract({
      address: `0x${process.env.NEXT_PUBLIC_FACTORY_ADDRESS_DEFAULT || ""}`,
      abi: tokenFactoryABI,
      functionName: "getTokenInfo",
      args: [`0x${addr}`],
    });

    return result;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

// DEPRECATED
export async function getEvents() {
  const unwatch = await publicClient.watchEvent({
    address: `0x${process.env.NEXT_PUBLIC_FACTORY_ADDRESS_DEFAULT || ""}`,
    onLogs: (logs) => console.log("logs ", logs),
  });
}

// TODO expose in the UI
export async function getBlockNumber() {
  const blockNumber = await publicClient.getBlockNumber();
  return blockNumber;
}

export async function calculatePurchaseTokens(
  tokenAddress: string,
  _amount: string
) {
  try {
    if (!tokenAddress || !_amount) {
      console.log("No values to calculate");
      return null;
    }

    const ethAmount = parseUnits(_amount, 18);

    const addr = tokenAddress.replace("0x", "");
    const result = await publicClient.readContract({
      address: `0x${addr}`,
      abi: tokenABI,
      functionName: "calculatePurchaseTokens",
      args: [BigInt(ethAmount)],
    });

    return {
      tokensToPurchase: formatEther(result[0]),
      feeAmount: result[1],
      excessETH: result[2],
    };
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

export async function calculateSaleTokens(
  _tokenAmount: string,
  _tokenAddress: string
) {
  try {
    if (!_tokenAmount || parseFloat(_tokenAmount) === 0) {
      console.log("No values to calculate");
      return null;
    }

    const addr = _tokenAddress.replace("0x", "");
    const result = await publicClient.readContract({
      address: `0x${addr}`,
      abi: tokenABI,
      functionName: "calculateSaleTokens",
      args: [parseUnits(_tokenAmount, 9)],
    });

    return {
      netFee: result[0], // BUG bad calculation that comes from the contract
      ethFee: result[0],
    };
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

const getWalletClient = () =>
  typeof window === "undefined"
    ? undefined
    : createWalletClient({
        chain: DEFAULT_NETWORK,
        transport: custom(window.ethereum),
      });

export async function buyTokens(
  _tokenAddress: string,
  _minTokensOut: bigint,
  _ether: string,
  _deadline: bigint,
  _account: string
) {
  try {
    if (!_minTokensOut || !_deadline) {
      console.log("No values to calculate");
      return null;
    }

    console.log("_tokenAddress: ", _tokenAddress);
    console.log("_minTokensOut: ", _minTokensOut);
    console.log("_deadline: ", _deadline);
    console.log("_ether: ", _ether);
    console.log("_account: ", _account);

    const { request } = await publicClient.simulateContract({
      account: `0x${_account.replace("0x", "")}`,
      address: `0x${_tokenAddress.replace("0x", "")}`,
      abi: tokenABI,
      functionName: "buyTokens",
      value: parseEther(_ether),
      args: [_minTokensOut, _deadline],
    });

    console.log("Buy results: ", request);

    const c = getWalletClient();
    if (!c) {
      return;
    }
    const hash = await c.writeContract(request);
    console.log("TX hash", hash);

    return {
      hash,
    };
  } catch (error) {
    console.log("⛔️ Error: ", error);
    throw error;
  }
}

export async function getETHPrice() {
  try {
    const priceFeedABI = [
      "function latestRoundData() external view returns (uint80, int256, uint256, uint256, uint80)",
    ];
    const result = await mainnetClient.readContract({
      address: `0x${"5f4ec3df9cbd43714fe2740f5e3616155c5b8419"}`, // Chainlink oracle
      abi: ethABI, //priceFeedABI,
      functionName: "latestRoundData",
    });
    const r = result[1];
    const res = formatUnits(r, 8);
    //  console.log(`El precio actual de ETH en USD es: $${(price / 1e8).toFixed(2)}`);
    // console.log(`El precio es: `res);

    //  const priceFeed = new web3.Contract(priceFeedABI, priceFeedAddress);
    //  const data = await priceFeed.methods.latestRoundData().call();
    //  const price = result[1]; // El precio está en la segunda posición del array retornado

    return res;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

export async function getBalanceToken(
  userAddress: string,
  tokenAddress: string
) {
  try {
    if (!tokenAddress || !userAddress) {
      console.log("No values to calculate");
      return null;
    }

    const addr = tokenAddress.replace("0x", "");
    const result = await publicClient.readContract({
      address: `0x${addr}`,
      abi: tokenABI,
      functionName: "balanceOf",
      args: [`0x${userAddress.replace("0x", "")}`],
    });

    return result;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

export async function createToken(
  _name: string,
  _ticker: string,
  _description: string,
  _image: string,
  _userAddress: string
) {
  try {
    if (!_name || !_ticker || !_userAddress) {
      console.log("No params provided");
      return null;
    }

    console.log("_name: ", _name);
    console.log("_ticker: ", _ticker);
    console.log("_description: ", _description);
    console.log("_image: ", _image);
    console.log("_userAddress: ", _userAddress);

    const { request } = await publicClient.simulateContract({
      address: `0x${
        process.env.NEXT_PUBLIC_FACTORY_ADDRESS_DEFAULT ||
        "3Bb3A3063DAfB15Bd3fF298DCC69564Db44D4D5B"
      }`,

      account: `0x${_userAddress.replace("0x", "")}`,
      abi: tokenFactoryABI,
      functionName: "createToken",
      args: [
        {
          name: _name,
          ticker: _ticker,
          description: _description,
          image: _image,
        },
      ],
    });

    console.log("create results: ", request);

    const c = getWalletClient();
    if (!c) {
      return;
    }
    const hash = await c.writeContract(request);
    console.log("TX hash", hash);

    return {
      hash,
    };
  } catch (error) {
    console.log("⛔️ Error: ", error);
    throw error;
  }
}
