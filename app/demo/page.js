"use client";

import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/react";
import { Tab, Tabs } from "@heroui/tabs";
import {
  RiArrowRightUpLine,
  RiCopperCoinFill,
  RiEyeOffFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HistoryItem from "../../components/HistoryItem";
import { BANK_ACCOUNTS, TRANSACTION_HISTORY } from "./constants";

export default function DemoPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedAccount, setSelectedAccount] = React.useState(null);
  const [selectedTab, setSelectedTab] = React.useState("kobowise");
  const [hiddenBalances, setHiddenBalances] = React.useState({
    total: false,
    ...BANK_ACCOUNTS.reduce((acc, account) => {
      acc[account.key] = false;
      return acc;
    }, {}),
  });

  // Calculate total balance from all bank accounts
  const totalBalance = BANK_ACCOUNTS.reduce(
    (sum, account) => sum + account.balance,
    0
  );

  const toggleBalanceVisibility = (key) => {
    setHiddenBalances((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const formatBalance = (balance, key) => {
    if (hiddenBalances[key]) {
      return "••••••";
    }
    return `₦${balance.toLocaleString()}`;
  };

  const handleViewDetails = (account) => {
    setSelectedAccount(account);
    onOpen();
  };

  return (
    <>
      {/* Bank details */}
      <Drawer isOpen={isOpen} placement='bottom' onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className='flex items-center gap-1'>
                {selectedAccount && (
                  <>
                    <Image
                      src={selectedAccount.image}
                      width={24}
                      height={24}
                      objectFit='cover'
                      className='rounded-full'
                      alt={selectedAccount.label}
                    />
                    {selectedAccount.label}
                  </>
                )}
              </DrawerHeader>
              <DrawerBody className='flex flex-col gap-6'>
                {selectedAccount && (
                  <>
                    <Card className='min-w-fit shadow-none bg-foreground-50'>
                      <CardHeader>
                        <div className='flex items-center px-2 py-1 rounded-full bg-foreground-200'>
                          <span className='text-sm'>
                            ******{selectedAccount.accountNumber.slice(-4)}
                          </span>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <h1 className='text-xl font-semibold'>
                          ₦{selectedAccount.balance.toLocaleString()}
                        </h1>
                      </CardBody>
                    </Card>

                    <div className='space-y-4'>
                      <span className='font-semibold text-sm'>
                        Transaction History
                      </span>

                      <div className='space-y-4'>
                        {selectedAccount.history.map((item) => (
                          <HistoryItem
                            key={item.id}
                            item={item}
                            // href={{
                            //   pathname: "/demo/transaction-history",
                            //   query: { id: item.id },
                            // }}
                            oneBank
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </DrawerBody>
              <DrawerFooter>
                <Button color='primary' onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>

      <div className='py-4 space-y-6 max-w-5xl mx-auto w-full'>
        <header className='flex items-center justify-between pt-6 px-4'>
          <div className='flex items-center gap-1'>
            <RiCopperCoinFill />
            <h1 className='font-bold text-lg'>KoboWise</h1>
          </div>
          <Avatar name='NA' className='w-8 h-8' />
        </header>

        <div className='space-y-2 px-4 max-w-[100vw]'>
          <Tabs
            variant='light'
            radius='full'
            size='sm'
            className='custom-tabs w-full'
            selectedKey={selectedTab}
            onSelectionChange={setSelectedTab}
            classNames={{
              tab: "data-[selected=true]:!bg-foreground-100 data-[selected=true]:!text-foreground-900",

              tabList: "overflow-x-scroll w-full",
            }}
          >
            <Tab
              key='kobowise'
              title={
                <div className='flex items-center space-x-1'>
                  <RiCopperCoinFill className='size-4' />
                  <span>Total assets</span>
                </div>
              }
            >
              <div>
                <span className='text-sm text-foreground-500'>
                  Total available balance
                </span>
                <div className='flex items-center gap-2'>
                  <h1 className='font-bold text-2xl'>
                    {formatBalance(totalBalance, "total")}
                  </h1>
                  <Button
                    color='primary'
                    variant='flat'
                    isIconOnly
                    aria-label='Eye'
                    radius='full'
                    size='sm'
                    className='size-5'
                    onPress={() => toggleBalanceVisibility("total")}
                  >
                    <RiEyeOffFill size={12} />
                  </Button>
                </div>
              </div>
            </Tab>
            {BANK_ACCOUNTS.map((acct) => (
              <Tab
                key={acct.key}
                title={
                  <div className='flex items-center gap-1 pr-4'>
                    <Image
                      src={acct.image}
                      width={16}
                      height={16}
                      objectFit='cover'
                      className='rounded-full'
                      alt={acct.label}
                    />

                    <span>{acct.label}</span>
                  </div>
                }
              >
                <div>
                  <span className='text-sm text-foreground-500'>
                    Total balance
                  </span>
                  <div className='flex items-center gap-2'>
                    <h1 className='font-bold text-2xl'>
                      {formatBalance(acct.balance, acct.key)}
                    </h1>
                    <Button
                      color='primary'
                      variant='flat'
                      isIconOnly
                      aria-label='Eye'
                      radius='full'
                      size='sm'
                      className='size-5'
                      onPress={() => toggleBalanceVisibility(acct.key)}
                    >
                      <RiEyeOffFill size={12} />
                    </Button>
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>

          <div className='flex items-center gap-2'>
            <Button
              startContent={<RiArrowRightUpLine size={16} />}
              color='primary'
              size='sm'
              radius='full'
              as={Link}
              href='/demo/send-money'
            >
              Send
            </Button>

            {selectedTab !== "kobowise" && (
              <Button
                color='default'
                variant='bordered'
                size='sm'
                radius='full'
                onPress={() => {
                  // Find the account that matches the selected tab
                  const currentAccount = BANK_ACCOUNTS.find(
                    (acct) => acct.key === selectedTab
                  );
                  if (currentAccount) {
                    handleViewDetails(currentAccount);
                  }
                }}
              >
                View Details
              </Button>
            )}
            <Button color='default' variant='bordered' size='sm' radius='full'>
              Add Account
            </Button>
          </div>
        </div>

        <div className='space-y-6 p-4 border-t border-foreground-100'>
          <div className='flex justify-between items-center'>
            <span className='font-semibold'>Transactions</span>
            <Link href='/' className='text-primary-500 text-sm'>
              See all
            </Link>
          </div>

          <div className='space-y-6'>
            {TRANSACTION_HISTORY.map((item) => (
              <HistoryItem
                key={item.id}
                item={item}
                href={{
                  pathname: "/demo/transaction-history",
                  query: { id: item.id },
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
