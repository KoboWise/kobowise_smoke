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
  RiLockLine,
  RiLockUnlockLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Opay } from "../../../../assets";
import OpayImg from "@/assets/images/opay.jpeg";
import KudaImg from "@/assets/images/kuda.png";
import MoniepointImg from "@/assets/images/moniepoint.jpg";
import { InputOtp } from "@heroui/input-otp";
import { Spinner } from "@heroui/spinner";
import { BANK_ACCOUNTS } from "../../constants";

export default function AmountPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const searchParams = useSearchParams();
  // step: 'allocation' | 'review' | 'otp' | 'success'
  const [step, setStep] = React.useState("allocation");
  const [otp, setOtp] = React.useState("");
  const [otpError, setOtpError] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [note, setNote] = React.useState("");
  const [isAllocationValid, setIsAllocationValid] = React.useState(false);
  const [selectedAccounts, setSelectedAccounts] = React.useState([]);
  const [accountAllocations, setAccountAllocations] = React.useState({});

  // Get account number and bank from URL parameters
  const accountNumber = searchParams.get("accountNumber") || "8023562567";
  const selectedBankKey = searchParams.get("bank") || "kuda";

  // Find the selected bank info from BANK_ACCOUNTS
  const selectedBank =
    BANK_ACCOUNTS.find((bank) => bank.key === selectedBankKey) ||
    BANK_ACCOUNTS[1]; // Default to Kuda

  // Format amount with commas for thousands
  const formatAmount = (value) => {
    // Remove all non-digit characters
    const numericValue = value.replace(/[^\d]/g, "");

    if (numericValue === "") return "";

    // Convert to number and format with commas
    const number = parseInt(numericValue, 10);
    return number.toLocaleString();
  };

  // Handle amount input change
  const handleAmountChange = (value) => {
    const formatted = formatAmount(value);
    setAmount(formatted);
  };

  // Get numeric amount for calculations
  const getNumericAmount = () => {
    return parseInt(amount.replace(/[^\d]/g, ""), 10) || 0;
  };
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
          <Image
            alt='bank image'
            width={32}
            height={32}
            className='rounded-full size-8'
            src={selectedBank.image}
          />
          <div className='flex flex-col'>
            <span>NOAH DAMILARE AYODELE</span>
            <div className='flex items-center gap-4'>
              <span className='text-sm text-foreground-500'>
                {accountNumber}
              </span>
              <span className='text-sm text-foreground-500'>
                {selectedBank.label}
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Input
            label='Amount'
            labelPlacement='outside'
            placeholder='Enter amount'
            radius='sm'
            type='text'
            value={amount}
            onValueChange={handleAmountChange}
            startContent={<span className='text-foreground-400'>₦</span>}
          />
          <Input
            label='Note'
            labelPlacement='outside'
            placeholder='Enter description'
            radius='sm'
            type='text'
            value={note}
            onValueChange={setNote}
          />

          <Button
            color='primary'
            fullWidth
            radius='full'
            onPress={onOpen}
            isDisabled={getNumericAmount() === 0}
          >
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
                      <AccountAllocation
                        totalAmount={getNumericAmount()}
                        onValidationChange={setIsAllocationValid}
                        onAccountsChange={(accounts, allocations) => {
                          setSelectedAccounts(accounts);
                          setAccountAllocations(allocations);
                        }}
                      />
                    )}
                    {step === "review" && (
                      <Card className='shadow-none bg-foreground-50'>
                        <CardBody>
                          <div className='flex gap-4 flex-col'>
                            <div className='flex items-center justify-between gap-8'>
                              <span className='text-foreground-500 text-xs'>
                                Reciepient Bank
                              </span>
                              <span className='max-w-xs text-xs text-right'>
                                {selectedBank.label}
                              </span>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                              <span className='text-foreground-500 text-xs'>
                                Reciepient Account Number
                              </span>
                              <span className='max-w-xs text-xs text-right'>
                                {accountNumber}
                              </span>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                              <span className='text-foreground-500 text-sm'>
                                Reciepient Name
                              </span>
                              <span className='max-w-xs text-xs text-right'>
                                NOAH DAMILARE AYODELE
                              </span>
                            </div>

                            <div className='flex flex-col items-start gap-1'>
                              <span className='text-foreground-500 text-sm'>
                                Selected Accounts
                              </span>
                              <div className='w-full text-xs text-foreground-500'>
                                {selectedAccounts.length > 0 ? (
                                  <div className='flex flex-col gap-1'>
                                    {selectedAccounts.map((account) => (
                                      <div
                                        key={account.id}
                                        className='flex justify-between items-center'
                                      >
                                        <span className='text-foreground-600'>
                                          {account.name}
                                        </span>
                                        <span className='text-foreground-500'>
                                          ₦{account.allocated.toLocaleString()}
                                        </span>
                                      </div>
                                    ))}
                                    <div className='border-t border-foreground-200 pt-1 mt-1'>
                                      <div className='flex justify-between items-center font-medium'>
                                        <span className='text-foreground-700'>
                                          Total
                                        </span>
                                        <span className='text-foreground-700'>
                                          ₦
                                          {selectedAccounts
                                            .reduce(
                                              (sum, account) =>
                                                sum + account.allocated,
                                              0
                                            )
                                            .toLocaleString()}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <span className='text-foreground-400'>
                                    No accounts selected
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className='flex items-center justify-between gap-8'>
                              <span className='text-foreground-500 text-sm'>
                                Amount
                              </span>
                              <span className='max-w-xs text-xs text-right'>
                                ₦{getNumericAmount().toLocaleString()}.00
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
                        <span className='text-foreground-500 text-sm'>
                          Hint: its 2003
                        </span>
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
                          Go to home
                        </Button>
                      </div>
                    )}
                  </DrawerBody>
                  <DrawerFooter>
                    {step === "allocation" && (
                      <div className='flex flex-col gap-2'>
                        {!isAllocationValid && (
                          <p className='text-xs text-foreground-500 text-center'>
                            Please ensure all accounts have sufficient balance
                            and the total amount is properly allocated
                          </p>
                        )}
                        <Button
                          color='primary'
                          fullWidth
                          radius='full'
                          onPress={() => setStep("review")}
                          isDisabled={!isAllocationValid}
                        >
                          Next
                        </Button>
                      </div>
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

function AccountAllocation({
  totalAmount,
  onValidationChange,
  onAccountsChange,
}) {
  const accounts = BANK_ACCOUNTS.map((acct) => ({
    id: acct.key,
    name: acct.label,
    img: acct.image,
    balance: acct.balance,
  }));

  const [selected, setSelected] = useState(["kuda"]);
  const [allocations, setAllocations] = useState({ kuda: totalAmount });
  const [lockedAccount, setLockedAccount] = useState(null);

  // Validation states
  const [validationErrors, setValidationErrors] = useState({});
  const [isAmountBalanced, setIsAmountBalanced] = useState(false);

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
    // Reset locked account when selection changes
    setLockedAccount(null);
    // eslint-disable-next-line
  }, [selected.length, totalAmount]);

  // Validate allocations whenever allocations or selected accounts change
  React.useEffect(() => {
    const errors = {};
    let totalAllocated = 0;
    let hasInsufficientBalance = false;

    selected.forEach((id) => {
      const account = accounts.find((a) => a.id === id);
      const allocated = allocations[id] || 0;
      totalAllocated += allocated;

      // Check if account has insufficient balance
      if (allocated > account.balance) {
        errors[id] =
          `Insufficient balance. Available: ₦${account.balance.toLocaleString()}`;
        hasInsufficientBalance = true;
      }
    });

    // Check if total allocation matches the required amount
    const isBalanced = Math.abs(totalAllocated - totalAmount) < 0.01; // Allow small floating point differences

    setValidationErrors(errors);
    setIsAmountBalanced(isBalanced && !hasInsufficientBalance);

    // Notify parent component about validation state
    if (onValidationChange) {
      onValidationChange(isBalanced && !hasInsufficientBalance);
    }
  }, [allocations, selected, totalAmount, accounts, onValidationChange]);

  // Notify parent component about selected accounts and allocations
  React.useEffect(() => {
    if (onAccountsChange) {
      const selectedAccountDetails = selected.map((id) => {
        const account = accounts.find((a) => a.id === id);
        return {
          id,
          name: account.name,
          balance: account.balance,
          allocated: allocations[id] || 0,
        };
      });
      onAccountsChange(selectedAccountDetails, allocations);
    }
  }, [selected, allocations, accounts, onAccountsChange]);

  // Handle account select/deselect
  const toggleAccount = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Handle manual allocation change
  const handleAllocChange = (id, value) => {
    // Don't allow changes to locked account
    if (lockedAccount === id) {
      return;
    }

    // Remove currency symbol and commas, keep only numbers and decimal point
    const cleanValue = value.replace(/[₦,\s]/g, "");

    // Allow empty input for better UX
    if (cleanValue === "" || cleanValue === ".") {
      setAllocations((prev) => ({ ...prev, [id]: 0 }));
      return;
    }

    // Parse the numeric value
    let val = parseFloat(cleanValue);

    // Handle invalid input
    if (isNaN(val)) {
      return;
    }

    // Ensure value is within reasonable bounds
    val = Math.max(0, val);

    // Get editable accounts (excluding the locked one)
    const editableAccounts = selected.filter((x) => x !== lockedAccount);
    const others = editableAccounts.filter((x) => x !== id);

    // Calculate remaining amount after accounting for locked account
    const lockedAmount = lockedAccount ? allocations[lockedAccount] || 0 : 0;
    const remaining = totalAmount - lockedAmount - val;

    let newAlloc = { ...allocations, [id]: val };

    // Distribute remaining amount among other editable accounts
    if (others.length > 0) {
      if (remaining >= 0) {
        // If there's remaining amount, distribute it equally
        const equal = Math.floor((remaining * 100) / others.length) / 100;
        others.forEach((oid, idx) => {
          if (idx === others.length - 1) {
            newAlloc[oid] = Math.max(
              0,
              remaining - equal * (others.length - 1)
            );
          } else {
            newAlloc[oid] = Math.max(0, equal);
          }
        });
      } else {
        // If the input exceeds available amount, reduce other allocations proportionally
        const excess = Math.abs(remaining);
        const totalOthers = others.reduce(
          (sum, oid) => sum + (allocations[oid] || 0),
          0
        );

        if (totalOthers > 0) {
          others.forEach((oid) => {
            const currentAlloc = allocations[oid] || 0;
            const reduction = (currentAlloc / totalOthers) * excess;
            newAlloc[oid] = Math.max(0, currentAlloc - reduction);
          });
        }
      }
    }

    setAllocations(newAlloc);
  };

  // Handle lock/unlock account
  const toggleLock = (id) => {
    if (lockedAccount === id) {
      setLockedAccount(null);
    } else {
      setLockedAccount(id);
    }
  };

  // Calculate total allocated amount
  const totalAllocated = selected.reduce(
    (sum, id) => sum + (allocations[id] || 0),
    0
  );
  const remaining = totalAmount - totalAllocated;

  return (
    <div className='flex flex-col gap-4'>
      {/* Horizontal selector */}
      <div className='flex gap-2 overflow-x-scroll pb-2'>
        {accounts.map((acct) => {
          const isSelected = selected.includes(acct.id);
          const hasError = validationErrors[acct.id];

          return (
            <button
              key={acct.id}
              className={`flex flex-col items-center px-4 py-2 rounded-lg border transition min-w-[80px] ${
                isSelected
                  ? hasError
                    ? "border-red-500 bg-red-50"
                    : "border-primary bg-primary/10"
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
              {hasError && (
                <span className='text-[8px] text-red-500 text-center mt-1'>
                  Low Balance
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Total amount and balance info */}
      <div className='flex flex-col gap-2'>
        <span className='text-sm text-foreground-400'>
          Total amount: ₦{totalAmount.toLocaleString()}
        </span>
        <div className='flex justify-between text-sm'>
          <span className='text-foreground-500'>
            Allocated: ₦{totalAllocated.toLocaleString()}
          </span>
          <span
            className={`${remaining !== 0 ? "text-red-500" : "text-green-500"}`}
          >
            {remaining > 0
              ? `Remaining: ₦${remaining.toLocaleString()}`
              : remaining < 0
                ? `Excess: ₦${Math.abs(remaining).toLocaleString()}`
                : "Balanced ✓"}
          </span>
        </div>
        {selected.length >= 3 && (
          <div className='p-2 bg-blue-50 border border-blue-200 rounded-lg'>
            <p className='text-xs text-blue-700'>
              💡 <strong>Tip:</strong> Lock an account to set a fixed amount,
              then freely edit the remaining accounts.
            </p>
          </div>
        )}
      </div>

      {/* Warning message for insufficient balance */}
      {Object.keys(validationErrors).length > 0 && (
        <div className='p-3 bg-red-50 border border-red-200 rounded-lg'>
          <p className='text-sm text-red-700 font-medium mb-2'>
            ⚠️ Insufficient Balance Detected
          </p>
          <p className='text-xs text-red-600'>
            Some selected accounts have insufficient balance for the allocated
            amount. Please add more accounts or reduce the allocation to
            proceed.
          </p>
        </div>
      )}

      {/* Allocations */}
      <div className='flex flex-col gap-3'>
        {selected.map((id) => {
          const acct = accounts.find((a) => a.id === id);
          const hasError = validationErrors[id];
          const allocated = allocations[id] || 0;
          const isInsufficient = allocated > acct.balance;
          const isLocked = lockedAccount === id;
          const showLockButton = selected.length >= 3;

          return (
            <div
              key={id}
              className={`flex items-center gap-3 p-3 rounded-lg border ${
                hasError
                  ? "border-red-200 bg-red-50"
                  : isLocked
                    ? "border-blue-200 bg-blue-50"
                    : "border-foreground-100 bg-white"
              }`}
            >
              <Image
                src={acct.img}
                alt={acct.name}
                width={28}
                height={28}
                className='rounded-full'
              />
              <div className='flex flex-col flex-1'>
                <div className='flex items-center gap-2'>
                  <span className='text-sm font-medium'>{acct.name}</span>
                  {isLocked && (
                    <span className='text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full'>
                      Locked
                    </span>
                  )}
                </div>
                <span className='text-xs text-foreground-500'>
                  Balance: ₦{acct.balance.toLocaleString()}
                </span>
                {hasError && (
                  <span className='text-xs text-red-600 mt-1'>
                    {validationErrors[id]}
                  </span>
                )}
              </div>
              <div className='flex items-center gap-2'>
                {showLockButton && (
                  <Button
                    isIconOnly
                    size='sm'
                    variant='flat'
                    color={isLocked ? "primary" : "default"}
                    onPress={() => toggleLock(id)}
                    className='min-w-8'
                  >
                    {isLocked ? (
                      <RiLockLine size={16} />
                    ) : (
                      <RiLockUnlockLine size={16} />
                    )}
                  </Button>
                )}
                <Input
                  className={`max-w-[120px] ${hasError ? "border-red-300" : ""} ${
                    isLocked ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  size='sm'
                  type='text'
                  value={allocated.toString()}
                  onChange={(e) => handleAllocChange(id, e.target.value)}
                  placeholder='0.00'
                  color={hasError ? "danger" : "default"}
                  isDisabled={isLocked}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
