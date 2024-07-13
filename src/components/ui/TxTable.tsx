import "tailwindcss/tailwind.css";

import { FC } from "react";
import { formatDistanceToNow } from "date-fns";

interface Transaction {
  time: Date;
  type: string;
  token: string;
  amountWETH: number;
  amountUSD: number;
  address: string;
  txId: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

// TODO: Use datatables

const TxTable: FC<TransactionTableProps> = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-stone-700">
        <thead className="bg-gray-50 dark:bg-stone-700">
          <tr>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Token
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              WETH
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              USD
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tx
            </th>
          </tr>
        </thead>
        <tbody className="  divide-y divide-gray-200  dark:divide-stone-700">
          {transactions.map((tx, idx) => (
            <tr
              key={idx}
              className="hover:bg-stone-200 hover:dark:bg-stone-800 "
            >
              <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                <span data-tip={tx.time.toLocaleString()}>
                  {formatDistanceToNow(new Date(tx.time))} ago
                </span>
              </td>
              <td
                className={`px-2 py-4 whitespace-nowrap text-xs ${
                  tx.type === "sell" ? "text-red-600" : "text-green-600"
                }`}
              >
                {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                {tx.token}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                {tx.amountWETH.toFixed(8)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                {tx.amountUSD.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                {`${tx.address.slice(0, 4)}...${tx.address.slice(-4)}`}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  className="cursor-pointer outline-none p-2"
                  href={`https://etherscan.io/tx/${tx.txId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" text-xs font-black">↗︎</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TxTable;
