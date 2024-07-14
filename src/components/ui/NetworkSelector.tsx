"use client";

import { CheckCircle2, LucideIcon, XCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { useWallets } from "@privy-io/react-auth";

type Status = {
  value: string;
  label: string;
  icon: LucideIcon;
  id: string;
};

const statuses: Status[] = [
  {
    id: "0x14a34",
    value: "base",
    label: "🔵 Base",
    icon: CheckCircle2,
  },

  {
    id: "0x66eee",
    value: "arbitrum",
    label: "🅰️ Arbitrum",
    icon: XCircle,
  },
  {
    id: "0x8274f",
    value: "scroll",
    label: "📜 Scroll",
    icon: XCircle,
  },
  {
    id: "0xa96",
    value: "morph",
    label: "🐨 Morph",
    icon: XCircle,
  },

  {
    id: "0xcc",
    value: "bnb",
    label: "🟨 BNB Chain",
    icon: XCircle,
  },

  {
    id: "0x397",
    value: "mode",
    label: "Ⓜ️ Mode (Soon™)",
    icon: XCircle,
  },
];

const NetworkSelector: React.FC<any> = () => {
  const [open, setOpen] = useState(false);
  const { wallets } = useWallets();

  const [selectedStatus, setSelectedStatus] = useState<Status | null>(
    statuses[0]
  );

  const handleChange = async (e: any) => {
    const wallet = wallets[0];
    await wallet.switchChain(e);
    // TODO: change RPC and factory!
  };

  return (
    <div className="flex items-center space-x-4">
      <Select onValueChange={(e) => handleChange(e)}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder={statuses[0].label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {statuses.map((status, k) => (
              <SelectItem key={k} value={status.id}>
                {status.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default NetworkSelector;
