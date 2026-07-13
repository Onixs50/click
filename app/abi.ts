export const COUNTER_ABI = [
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

// Contract address from env (set in Vercel: NEXT_PUBLIC_COUNTER_ADDRESS)
export const COUNTER_ADDRESS =
  process.env.NEXT_PUBLIC_COUNTER_ADDRESS ||
  "0x40F3ff97Abe37051d37bc28fF156EC1a44cD8Fa9";
