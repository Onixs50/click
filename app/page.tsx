"use client";

import { useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusLabel,
  TransactionStatusAction,
} from "@coinbase/onchainkit/transaction";
import { COUNTER_ABI, COUNTER_ADDRESS } from "./abi";

export default function HomePage() {
  const { setFrameReady, isFrameReady } = useMiniKit();

  // این تیکه به Base App میگه که اپ آماده‌ی نمایشه
  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <h1>Click to Transact</h1>
      <p>روی دکمه بزن تا یه تراکنش واقعی روی Base ثبت بشه</p>

      <Transaction
        chainId={8453} // Base mainnet
        calls={[
          {
            address: COUNTER_ADDRESS,
            abi: COUNTER_ABI,
            functionName: "increment",
            args: [],
          },
        ]}
      >
        <TransactionButton text="ثبت تراکنش" />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
    </div>
  );
}
