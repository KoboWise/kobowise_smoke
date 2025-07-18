"use client";

import { Avatar } from "@heroui/avatar";
import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Accordion, AccordionItem } from "@heroui/react";
import {
  RiArrowDownLine,
  RiArrowLeftDownLine,
  RiArrowLeftLine,
  RiArrowRightSLine,
  RiArrowRightUpLine,
  RiShare2Line,
} from "@remixicon/react";
import React from "react";
import { Kuda, Opay } from "../../../assets";
import Image from "next/image";
import Link from "next/link";

export default function TransactionHistoryPage() {
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

          <span className='font-semibold'>Transaction Receipt</span>
        </div>

        <Button
          variant='flat'
          size='sm'
          startContent={<RiShare2Line size={16} />}
        >
          Share
        </Button>
      </header>

      <div className='space-y-4 px-4'>
        <Card className='shadow-none bg-foreground-50'>
          <CardBody className='space-y-4'>
            <div className='flex flex-col items-center gap-2'>
              <div className='size-10 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center'>
                <RiArrowRightUpLine size={16} />
              </div>

              <div className='flex flex-col items-center'>
                <span className='text-sm text-foreground-500'>
                  Transfer to Inioluwa Abiodun
                </span>
                <span className='font-bold'>₦2,400.00</span>
              </div>
              <Chip color='success' variant='flat' size='sm'>
                Success
              </Chip>
            </div>
            <div className='flex gap-4 flex-col'>
              <div className='flex items-center justify-between gap-8'>
                <span className='text-foreground-500 text-sm'>
                  Transaction Amount
                </span>
                <span className='max-w-xs text-xs text-right'>₦2,400.00</span>
              </div>

              <div className='flex items-center justify-between gap-8'>
                <span className='text-foreground-500 text-xs'>Charge</span>
                <span className='max-w-xs text-xs text-right'>₦0</span>
              </div>

              <div className='flex items-center justify-between gap-8'>
                <span className='text-foreground-500 text-xs'>
                  Total Amount
                </span>
                <span className='max-w-xs text-xs text-right'>₦2,400.00</span>
              </div>
            </div>
          </CardBody>
        </Card>

        <Accordion>
          <AccordionItem
            key='1'
            aria-label='Accordion 1'
            title='Transfer breakdown'
          >
            <div className='flex flex-col gap-4'>
              <Card className='shadow-none bg-foreground-50'>
                <CardHeader className='flex items-center justify-between'>
                  <div className='flex items-center gap-1'>
                    <Image
                      src={Opay}
                      width={24}
                      height={24}
                      objectFit='cover'
                      className='rounded-full'
                      alt='Opay'
                    />
                    <div className='flex flex-col'>
                      <span>Opay</span>
                      <span className='text-xs text-foreground-500'>
                        8023562567
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-xs text-foreground-500'>₦1,200</span>
                    <Chip color='success' variant='flat' size='sm'>
                      Success
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className='flex gap-4 flex-col'>
                    <div className='flex items-center justify-between gap-8'>
                      <span className='text-foreground-500 text-xs'>
                        Transcation ID
                      </span>
                      <span className='max-w-xs text-xs text-right'>
                        #1023231
                      </span>
                    </div>

                    <div className='flex items-center justify-between gap-8'>
                      <span className='text-foreground-500 text-xs'>
                        Reference
                      </span>
                      <span className='max-w-xs text-xs text-right'>
                        #1023231
                      </span>
                    </div>

                    <div className='flex items-center justify-between gap-8'>
                      <span className='text-foreground-500 text-xs'>
                        Processed At
                      </span>
                      <span className='max-w-xs text-xs text-right'>15:30</span>
                    </div>

                    <div className='flex items-center justify-between gap-8'>
                      <span className='text-foreground-500 text-xs'>
                        Processing Time
                      </span>
                      <span className='max-w-xs text-xs text-right'>0.8s</span>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className='shadow-none bg-foreground-50'>
                <CardHeader className='flex items-center justify-between'>
                  <div className='flex items-center gap-1'>
                    <Image
                      src={Kuda}
                      width={24}
                      height={24}
                      objectFit='cover'
                      className='rounded-full'
                      alt='Kuda'
                    />
                    <div className='flex flex-col'>
                      <span>Kuda</span>
                      <span className='text-xs text-foreground-500'>
                        8023562567
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-xs text-foreground-500'>₦1,200</span>
                    <Chip color='success' variant='flat' size='sm'>
                      Success
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className='flex gap-4 flex-col'>
                    <div className='flex items-center justify-between gap-8'>
                      <span className='text-foreground-500 text-xs'>
                        Transcation ID
                      </span>
                      <span className='max-w-xs text-xs text-right'>
                        #1023231
                      </span>
                    </div>

                    <div className='flex items-center justify-between gap-8'>
                      <span className='text-foreground-500 text-xs'>
                        Reference
                      </span>
                      <span className='max-w-xs text-xs text-right'>
                        #1023231
                      </span>
                    </div>

                    <div className='flex items-center justify-between gap-8'>
                      <span className='text-foreground-500 text-xs'>
                        Processed At
                      </span>
                      <span className='max-w-xs text-xs text-right'>15:30</span>
                    </div>

                    <div className='flex items-center justify-between gap-8'>
                      <span className='text-foreground-500 text-xs'>
                        Processing Time
                      </span>
                      <span className='max-w-xs text-xs text-right'>0.8s</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </AccordionItem>
        </Accordion>

        <Card className='shadow-none bg-foreground-50'>
          <CardHeader>Transfer details</CardHeader>
          <CardBody>
            <div className='flex gap-4 flex-col'>
              <div className='flex items-center justify-between gap-8'>
                <span className='text-foreground-500 text-xs'>
                  Receipt Details
                </span>
                <span className='max-w-xs text-xs text-right'>
                  Inioluwa Abiodun | 8023562567 | Opay
                </span>
              </div>

              <div className='flex items-center justify-between gap-8'>
                <span className='text-foreground-500 text-xs'>Description</span>
                <span className='max-w-xs text-xs text-right'>
                  Happy Birthday
                </span>
              </div>

              <div className='flex items-center justify-between gap-8'>
                <span className='text-foreground-500 text-xs'>
                  Transcation ID
                </span>
                <span className='max-w-xs text-xs text-right'>#1023231</span>
              </div>

              <div className='flex items-center justify-between gap-8'>
                <span className='text-foreground-500 text-xs'>Session ID</span>
                <span className='max-w-xs text-xs text-right'>#1023231</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
