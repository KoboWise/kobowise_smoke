"use client";

import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";
import {
  RiArrowLeftLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCheckboxCircleFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { Opay } from "../../../../assets";
import OpayImg from "@/assets/images/opay.jpeg";
import KudaImg from "@/assets/images/kuda.png";
import MoniepointImg from "@/assets/images/moniepoint.jpg";
import { InputOtp } from "@heroui/input-otp";
import { Spinner } from "@heroui/spinner";
import { BANK_ACCOUNTS } from "../../constants";

export default function AmountPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // step: 'allocation' | 'review' | 'otp' | 'success'
  const [step, setStep] = React.useState("allocation");
  const [otp, setOtp] = React.useState("");
  const [otpError, setOtpError] = React.useState("");
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
            href='/demo/send-money'
          >
            <RiArrowLeftLine />
          </Button>

          <span className='font-semibold'>Amount</span>
        </div>
      </header>

      <div className='flex flex-col gap-6 px-4'>
        <div className='flex items-center gap-2'>
          <Avatar src='https://cdn-1.webcatalog.io/catalog/kuda/kuda-icon-filled-256.webp?v=1750639062630' />
          <div className='flex flex-col'>
            <span>NOAH DAMILARE AYODELE</span>
            <div className='flex items-center gap-4'>
              <span className='text-sm text-foreground-500'>8023562567</span>
              <span className='text-sm text-foreground-500'>Kuda</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Input
            label='Amount'
            labelPlacement='outside'
            placeholder='Enter amount'
            radius='sm'
            type='num'
          />
          <Input
            label='Note'
            labelPlacement='outside'
            placeholder='Enter description'
            radius='sm'
            type='num'
          />

          <Button color='primary' fullWidth radius='full' onPress={onOpen}>
            Next
          </Button>

          <Drawer
            isOpen={isOpen}
            placement='bottom'
            onOpenChange={(open) => {
              onOpenChange(open);
              if (!open) {
                setStep("allocation");
                setOtp("");
                setOtpError("");
              }
            }}
          >
            <DrawerContent>
              {(onClose) => (
                <>
                  <DrawerHeader className='flex items-center gap-2'>
                    {step === "review" || step === "otp" ? (
                      <Button
                        color='default'
                        variant='flat'
                        isIconOnly
                        aria-label='back'
                        radius='full'
                        size='sm'
                        onPress={() =>
                          setStep(step === "otp" ? "review" : "allocation")
                        }
                      >
                        <RiArrowLeftLine />
                      </Button>
                    ) : null}
                    <span>
                      {step === "allocation" && "Payment Source"}
                      {step === "review" && "Review"}
                      {step === "otp" && "Enter OTP"}
                      {step === "success" && "Success"}
                    </span>
                  </DrawerHeader>
                  <DrawerBody className='flex flex-col gap-4'>
                    {step === "allocation" && (
                      <AccountAllocation totalAmount={5000} />
                    )}
                    {step === "review" && (
                      <Card className='shadow-none bg-foreground-50'>
                        <CardBody>
                          <div className='flex gap-4 flex-col'>
                            <div className='flex items-center justify-between gap-8'>
                              <span className='text-foreground-500 text-xs'>
                                Bank
                              </span>
                              <span className='max-w-xs text-xs text-right'>
                                Kuda
                              </span>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                              <span className='text-foreground-500 text-xs'>
                                Account Number
                              </span>
                              <span className='max-w-xs text-xs text-right'>
                                8023562567
                              </span>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                              <span className='text-foreground-500 text-sm'>
                                Name
                              </span>
                              <span className='max-w-xs text-xs text-right'>
                                NOAH DAMILARE AYODELE
                              </span>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                              <span className='text-foreground-500 text-sm'>
                                Amount
                              </span>
                              <span className='max-w-xs text-xs text-right'>
                                ₦5000.00
                              </span>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                              <span className='text-foreground-500 text-sm'>
                                Transaction Fee
                              </span>
                              <span className='max-w-xs text-xs text-right'>
                                ₦0.00
                              </span>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    )}
                    {step === "otp" && (
                      <div className='flex flex-col items-center gap-6 py-6'>
                        <InputOtp
                          value={otp}
                          onValueChange={(val) => {
                            setOtp(val);
                            if (otpError) setOtpError("");
                          }}
                          length={4}
                          inputMode='numeric'
                          autoFocus
                        />
                        {otpError && (
                          <span className='text-red-500 text-sm'>
                            {otpError}
                          </span>
                        )}
                      </div>
                    )}
                    {step === "success" && (
                      <div className='flex w-full flex-col items-center justify-center gap-4 py-8'>
                        <RiCheckboxCircleFill
                          className='text-green-500'
                          size={64}
                        />
                        <div>
                          <h2 className='text-xl font-semibold text-center'>
                            Payment Successful!
                          </h2>
                          <p className='text-foreground-500 text-sm text-center'>
                            Your payment has been processed successfully.
                          </p>
                        </div>
                        <Button
                          as={Link}
                          href='/demo'
                          color='primary'
                          radius='full'
                          className='mt-2'
                        >
                          Go home
                        </Button>
                      </div>
                    )}
                  </DrawerBody>
                  <DrawerFooter>
                    {step === "allocation" && (
                      <Button
                        color='primary'
                        fullWidth
                        radius='full'
                        onPress={() => setStep("review")}
                      >
                        Next
                      </Button>
                    )}
                    {step === "review" && (
                      <Button
                        color='primary'
                        fullWidth
                        radius='full'
                        onPress={() => setStep("otp")}
                      >
                        Make Payment
                      </Button>
                    )}
                    {step === "otp" && (
                      <Button
                        color='primary'
                        fullWidth
                        radius='full'
                        isDisabled={otp.length !== 4}
                        onPress={() => {
                          if (otp === "2003") {
                            setStep("loading");
                            setTimeout(() => setStep("success"), 3000);
                          } else {
                            setOtpError("Incorrect PIN. Please try again.");
                          }
                        }}
                      >
                        Pay
                      </Button>
                    )}
                    {step === "loading" && (
                      <div className='flex w-full flex-col items-center justify-center gap-4 py-8'>
                        <Spinner size='lg' />
                        <span className='text-foreground-500'>
                          Processing payment...
                        </span>
                      </div>
                    )}
                  </DrawerFooter>
                </>
              )}
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

function AccountAllocation({ totalAmount }) {
  const accounts = BANK_ACCOUNTS.map((acct) => ({
    id: acct.key,
    name: acct.label,
    img: acct.image,
    balance: acct.balance,
  }));

  const [selected, setSelected] = useState(["kuda"]);
  const [allocations, setAllocations] = useState({ kuda: totalAmount });

  // Update allocations when selected accounts change
  React.useEffect(() => {
    if (selected.length === 0) return;
    const equal = Math.floor((totalAmount * 100) / selected.length) / 100;
    const newAlloc = {};
    selected.forEach((id, idx) => {
      // Last account gets the remainder
      if (idx === selected.length - 1) {
        newAlloc[id] = totalAmount - equal * (selected.length - 1);
      } else {
        newAlloc[id] = equal;
      }
    });
    setAllocations(newAlloc);
    // eslint-disable-next-line
  }, [selected.length]);

  // Handle account select/deselect
  const toggleAccount = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Handle manual allocation change
  const handleAllocChange = (id, value) => {
    let val = parseFloat(value.replace(/[^\d.]/g, "")) || 0;
    val = Math.max(0, Math.min(val, totalAmount));
    const others = selected.filter((x) => x !== id);
    const remaining = totalAmount - val;
    let newAlloc = { ...allocations, [id]: val };
    if (others.length > 0) {
      const equal = Math.floor((remaining * 100) / others.length) / 100;
      others.forEach((oid, idx) => {
        if (idx === others.length - 1) {
          newAlloc[oid] = remaining - equal * (others.length - 1);
        } else {
          newAlloc[oid] = equal;
        }
      });
    }
    setAllocations(newAlloc);
  };

  return (
    <div className='flex flex-col gap-4'>
      {/* Horizontal selector */}
      <div className='flex gap-2 overflow-x-scroll pb-2'>
        {accounts.map((acct) => (
          <button
            key={acct.id}
            className={`flex flex-col items-center px-4 py-2 rounded-lg border transition min-w-[80px] ${
              selected.includes(acct.id)
                ? "border-primary bg-primary/10"
                : "border-foreground-100 bg-white"
            }`}
            onClick={() => toggleAccount(acct.id)}
            type='button'
          >
            <Image
              src={acct.img}
              alt={acct.name}
              width={32}
              height={32}
              className='rounded-full mb-1 object-cover'
            />
            <span className='text-xs font-medium'>{acct.name}</span>
            <span className='text-[10px] text-foreground-400'>
              ₦
              {acct.balance.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </span>
          </button>
        ))}
      </div>
      <span className='text-sm text-foreground-400'>
        Total amount: (₦{totalAmount})
      </span>
      {/* Allocations */}
      <div className='flex flex-col gap-3'>
        {selected.map((id) => {
          const acct = accounts.find((a) => a.id === id);
          return (
            <div
              key={id}
              className='flex items-center gap-3 p-2 rounded-lg border border-foreground-100 bg-white'
            >
              <Image
                src={acct.img}
                alt={acct.name}
                width={28}
                height={28}
                className='rounded-full'
              />
              <span className='w-20 text-sm'>{acct.name}</span>
              <Input
                className='max-w-[120px] ml-auto'
                size='sm'
                type='text'
                value={`₦${allocations[id]?.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                onChange={(e) => handleAllocChange(id, e.target.value)}
                startContent={<span className='text-foreground-400'>₦</span>}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
