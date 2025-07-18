"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { Avatar, Select, SelectItem } from "@heroui/react";
import { RiArrowLeftLine, RiCheckboxCircleFill } from "@remixicon/react";
import React, { useState } from "react";
import { Kuda, Moniepoint, Opay, Paystack } from "../../../assets";
import Image from "next/image";

export default function TransferMoneyPage() {
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState("");

  const banks = [
    { key: "opay", label: "Opay", image: Opay },
    { key: "kuda", label: "Kuda", image: Kuda },
    { key: "paystack", label: "Paystack Titan", image: Paystack },
    { key: "moniepoint", label: "Moniepoint", image: Moniepoint },
  ];

  const isFormValid = accountNumber.trim() !== "" && selectedBank !== "";

  return (
    <div className=' space-y-6'>
      <header className='p-4 pt-6 flex justify-between items-center gap-4'>
        <div className='flex items-center gap-2'>
          <Button
            color='default'
            variant='flat'
            isIconOnly
            aria-label='left'
            radius='full'
            size='sm'
            as={Link}
            href='/demo'
          >
            <RiArrowLeftLine />
          </Button>

          <span className='font-semibold'>Send Money</span>
        </div>
      </header>

      <div className='px-4 flex flex-col gap-4'>
        <Input
          label='Account Number'
          labelPlacement='outside'
          placeholder='Enter 10 digit account number'
          radius='sm'
          type='num'
          value={accountNumber}
          onValueChange={setAccountNumber}
        />

        <Select
          label='Bank Name'
          labelPlacement='outside'
          placeholder='Select'
          radius='sm'
          selectedKeys={selectedBank ? [selectedBank] : []}
          onSelectionChange={(keys) => {
            const selectedKey = Array.from(keys)[0];
            setSelectedBank(selectedKey || "");
          }}
        >
          {banks.map((bank) => (
            <SelectItem
              key={bank.key}
              className='flex flex-row items-center gap-4'
            >
              {bank.label}
            </SelectItem>
          ))}
        </Select>

        {/* NAME CONFIRMATION */}
        {isFormValid && (
          <div className='p-2 flex items-center gap-2 rounded-md bg-primary-50 text-primary-600'>
            <RiCheckboxCircleFill />
            <span className='text-sm'>NOAH DAMILARE AYODELE</span>
          </div>
        )}

        <Button
          color='primary'
          fullWidth
          radius='full'
          isDisabled={!isFormValid}
        >
          Next
        </Button>
      </div>

      <div className='p-4 border-t border-foreground-100 space-y-6'>
        <span className='font-semibold'>Recent</span>

        <div className='flex flex-col gap-4'>
          <Link href='/' className='flex items-center gap-2'>
            <Avatar src='https://cdn-1.webcatalog.io/catalog/kuda/kuda-icon-filled-256.webp?v=1750639062630' />
            <div className='flex flex-col max-w-md gap-1'>
              <span className='text-sm text-foreground-900'>
                Inioluwa Abiodun
              </span>
              <div className='flex items-center gap-2'>
                <span className='text-foreground-500 text-sm'>9550152944</span>
                <span className='text-foreground-500 text-sm'>Kuda</span>
              </div>
            </div>
          </Link>

          <Link href='/' className='flex items-center gap-2'>
            <Avatar
              className='border border-foreground-100'
              src='https://play-lh.googleusercontent.com/ArowgQs3NWtBgXbtJT67dHR9gMvNq6IZyssJCDKtxh-_qsKQlRrmBQy3Fq2Pdw0RSkE=w480-h960-rw'
            />
            <div className='flex flex-col max-w-md gap-1'>
              <span className='text-sm text-foreground-900'>
                Adedoyin Adebayo
              </span>
              <div className='flex items-center gap-2'>
                <span className='text-foreground-500 text-sm'>8023562567</span>
                <span className='text-foreground-500 text-sm'>Opay</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
