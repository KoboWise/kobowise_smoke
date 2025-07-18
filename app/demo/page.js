"use client";

import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { Chip, useDisclosure } from "@heroui/react";
import {
  RiAddLine,
  RiArrowDownLine,
  RiArrowLeftDownLine,
  RiArrowRightUpLine,
  RiCopperCoinFill,
  RiEyeOffFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GTB, Kuda, Opay } from "../../assets";
import { Tab, Tabs } from "@heroui/tabs";
import { BANK_ACCOUNTS, TRANSACTION_HISTORY } from "./constants";
import HistoryItem from "../../components/HistoryItem";

export default function DemoPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* Bank details */}
      <Drawer isOpen={isOpen} placement='bottom' onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className='flex items-center gap-1'>
                <Image
                  src={Opay}
                  width={24}
                  height={24}
                  objectFit='cover'
                  className='rounded-full'
                  alt='Opay'
                />{" "}
                Opay
              </DrawerHeader>
              <DrawerBody className='flex flex-col gap-6'>
                <Card className='min-w-fit shadow-none bg-foreground-50'>
                  <CardHeader>
                    <div className='flex items-center px-2 py-1 rounded-full bg-foreground-200'>
                      <span className='text-sm'>******2567</span>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <h1 className='text-xl font-semibold'>₦0.00</h1>
                  </CardBody>
                </Card>

                <div className='space-y-4'>
                  <span className='font-semibold text-sm'>
                    Transaction History
                  </span>

                  <div className='flex items-center gap-4 justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='size-10 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center'>
                        <RiArrowRightUpLine size={14} />
                      </div>
                      <div className='flex flex-col max-w-md gap-1'>
                        <span className='text-sm'>
                          Transfer to Inioluwa Abiodun
                        </span>
                        <div className='flex items-center gap-2'>
                          <Chip size='sm' className='size-5 bg-foreground-100'>
                            Opay
                          </Chip>
                          <Chip size='sm' className='size-5 bg-foreground-100'>
                            GTB
                          </Chip>
                          <span className='text-foreground-500 text-sm'>
                            Jul 15
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className='text-sm text-green-600'>+ ₦4,000.00</span>
                  </div>
                </div>
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

      <div className='py-4 space-y-8'>
        <header className='flex items-center justify-between pt-6 px-4'>
          <div className='flex items-center gap-1'>
            <RiCopperCoinFill />
            <h1 className='font-bold text-lg'>KoboWise</h1>
          </div>
          <Avatar
            name='NA'
            src='https://quess-prototype.vercel.app/Moshood.jpg'
            className='w-8 h-8'
          />
        </header>

        <div className='space-y-2 px-4'>
          <Tabs
            variant='light'
            radius='full'
            size='sm'
            className='custom-tabs relative'
            classNames={{
              tab: "data-[selected=true]:!bg-foreground-100 data-[selected=true]:!text-foreground-900",
              tabContent:
                "data-[selected=true]:!bg-foreground-100 data-[selected=true]:!text-foreground-900 ",
              cursor: "!bg-foreground-100",
              tabList: "bg-transparent",
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
                  <h1 className='font-bold text-2xl'>₦53,501.00</h1>
                  <Button
                    color='primary'
                    variant='flat'
                    isIconOnly
                    aria-label='Eye'
                    radius='full'
                    size='sm'
                    className='size-5'
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
                  <div className='flex items-center space-x-1'>
                    <Image
                      src={acct.image}
                      width={12}
                      height={12}
                      objectFit='cover'
                      className='rounded-full size-4'
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
                      ₦{acct.balance.toLocaleString()}
                    </h1>
                    <Button
                      color='primary'
                      variant='flat'
                      isIconOnly
                      aria-label='Eye'
                      radius='full'
                      size='sm'
                      className='size-5'
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

            <Button
              color='default'
              variant='bordered'
              size='sm'
              radius='full'
              onPress={onOpen}
            >
              View Details
            </Button>
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
