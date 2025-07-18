import React from "react";
import { Chip } from "@heroui/chip";
import { RiArrowRightUpLine, RiArrowLeftDownLine } from "@remixicon/react";
import Link from "next/link";

export default function HistoryItem({ item, href }) {
  return (
    <Link
      href={href}
      className='flex items-center gap-4 justify-between'
      style={{ textDecoration: "none" }}
    >
      <div className='flex items-center gap-2'>
        <div
          className={`size-10 rounded-full flex items-center justify-center ${item.type === "outgoing" ? "bg-primary-50 text-primary-500" : "bg-green-50 text-green-500"}`}
        >
          {item.type === "outgoing" ? (
            <RiArrowRightUpLine size={14} />
          ) : (
            <RiArrowLeftDownLine size={14} />
          )}
        </div>
        <div className='flex flex-col max-w-md gap-1'>
          <span className='text-sm'>{item.title}</span>
          <div className='flex items-center gap-2'>
            <Chip size='sm' className='size-5 bg-foreground-100'>
              {item.from}
            </Chip>
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
