import { Chip } from "@heroui/chip";
import { RiArrowLeftDownLine, RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GTB, Kuda, Moniepoint, Opay, Paystack } from "../assets";

// Function to get bank image based on 'from' field
const getBankImage = (fromField) => {
  const bankName = fromField?.toLowerCase();

  switch (bankName) {
    case "gtb":
      return GTB;
    case "kuda":
      return Kuda;
    case "opay":
      return Opay;
    case "moniepoint":
      return Moniepoint;
    case "paystack":
    case "paystack titan":
      return Paystack;
    default:
      return null;
  }
};

export default function HistoryItem({
  item,
  href,
  oneBank = false,
  hasImage = false,
}) {
  const bankImage = getBankImage(item.to);

  return (
    <Link
      href={href}
      className='flex items-center gap-4 justify-between'
      style={{ textDecoration: "none" }}
    >
      <div className='flex items-center gap-2'>
        {hasImage === true ? (
          <Image
            alt='bank image'
            width={32}
            height={32}
            className='rounded-full size-8'
            src={bankImage}
          />
        ) : (
          <div
            className={`size-10 rounded-full flex items-center justify-center ${item.type === "outgoing" ? "bg-primary-50 text-primary-500" : "bg-green-50 text-green-500"}`}
          >
            {item.type === "outgoing" ? (
              <RiArrowRightUpLine size={14} />
            ) : (
              <RiArrowLeftDownLine size={14} />
            )}
          </div>
        )}

        <div className='flex flex-col max-w-md gap-1'>
          <span className='text-sm'>{item.title}</span>
          <div className='flex items-center gap-2'>
            {oneBank === true ? null : (
              <Chip size='sm' className='size-5 bg-foreground-100'>
                {item.from}
              </Chip>
            )}

            <Chip size='sm' className='size-5 bg-foreground-100'>
              {item.to}
            </Chip>
            <span className='text-foreground-500 text-sm'>{item.date}</span>
          </div>
        </div>
      </div>
      <span className='text-sm text-green-600'>
        + ₦{item.amount.toLocaleString()}
      </span>
    </Link>
  );
}
