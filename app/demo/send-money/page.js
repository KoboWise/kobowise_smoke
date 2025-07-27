"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { Select, SelectItem, Spinner } from "@heroui/react";
import { RiArrowLeftLine, RiCheckboxCircleFill } from "@remixicon/react";
import React, { useState } from "react";
import HistoryItem from "../../../components/HistoryItem";
import { BANK_ACCOUNTS, TRANSACTION_HISTORY } from "../constants";

export default function TransferMoneyPage() {
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const banks = BANK_ACCOUNTS;

  const isFormValid = accountNumber.trim() !== "" && selectedBank !== "";

  React.useEffect(() => {
    let timer;
    if (isFormValid) {
      setLoading(true);
      setShowConfirmation(false);
      timer = setTimeout(() => {
        setLoading(false);
        setShowConfirmation(true);
      }, 2000);
    } else {
      setLoading(false);
      setShowConfirmation(false);
    }
    return () => clearTimeout(timer);
  }, [accountNumber, selectedBank]);

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
          maxLength={10}
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
        {isFormValid &&
          (loading ? (
            <div className='p-2 flex items-center gap-2 rounded-md bg-primary-50 text-primary-600'>
              <Spinner />
            </div>
          ) : (
            showConfirmation && (
              <div className='p-2 flex items-center gap-2 rounded-md bg-primary-50 text-primary-600'>
                <RiCheckboxCircleFill />
                <span className='text-sm'>NOAH DAMILARE AYODELE</span>
              </div>
            )
          ))}

        <Button
          color='primary'
          fullWidth
          radius='full'
          isDisabled={!isFormValid}
          as={Link}
          href={`/demo/send-money/amount?accountNumber=${accountNumber}&bank=${selectedBank}`}
        >
          Next
        </Button>
      </div>

      <div className='p-4 border-t border-foreground-100 space-y-6'>
        <span className='font-semibold'>Recent</span>

        {TRANSACTION_HISTORY.map((item) => (
          <HistoryItem
            key={item.id}
            item={item}
            href={{
              pathname: "/demo/transaction-history",
              query: { id: item.id },
            }}
            hasImage
          />
        ))}
      </div>
    </div>
  );
}
