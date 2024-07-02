import { NextRequest, NextResponse } from "next/server";

import ERC20ABI from "@openzeppelin/contracts/build/contracts/ERC20.json";
import { publicClient } from "@/lib/privy";

const tokenAbi = [
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
];

const usdcABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "src", type: "address" },
      { indexed: true, internalType: "address", name: "guy", type: "address" },
      { indexed: false, internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "dst", type: "address" },
      { indexed: false, internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "src", type: "address" },
      { indexed: true, internalType: "address", name: "dst", type: "address" },
      { indexed: false, internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "src", type: "address" },
      { indexed: false, internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "Withdrawal",
    type: "event",
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "guy", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "deposit",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "dst", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "src", type: "address" },
      { internalType: "address", name: "dst", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "wad", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tokenAddress = searchParams.get("token");

  //   return Response.json(
  //     {
  //       status: "No token address provided",
  //       data: [],
  //     },
  //     { status: 404 }
  //   );
  // }

  console.log("token searchParams: ", tokenAddress);

  // Convertir los números de bloque de string a BigInt
  // const blockStart = BigInt(fromBlock as string);
  // const blockEnd = BigInt(toBlock as string);

  try {
    if (!tokenAddress) {
      return Response.json(
        {
          status: "No token address provided",
          data: [],
        },
        { status: 404 }
      );
    }

    const block = await publicClient.getBlock();
    // console.log("CURRENT BLOCK ", block.number);
    const addr = "d74cc5d436923b8ba2c179b4bCA2841D8A52C5B5"; //  (tokenAddress as string).replace("0x", "");

    const logs = await publicClient.getContractEvents({
      address: "0x7DA28E806FDeD94a025B49bFEE591F92Df2C23d4", // `0x${addr}`,
      abi: ERC20ABI.abi,
      // abi: tokenAbi,
      // eventName: "Transfer",
      // fromBlock: "earliest",
      // toBlock: "latest",
      // fromBlock: 3827700n,
      fromBlock: block.number - 9000n, // FIXME
      // toBlock: 3827723n,
      toBlock: "latest",
    });

    //   args: {
    //     from: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    //     to: "0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac",
    //   },
    // return res.status(200).json({
    //   status: "success",
    //   data: logs,
    // });

    console.log(".......... ", logs);
    return Response.json(
      {
        status: "success",
        data: logs,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        status: "error",
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
