"use client";

import {
  Carbon,
  Curve2,
  GTB,
  HeroImage,
  Kuda,
  Moniepoint,
  Opay,
  PalmPay,
  Paystack,
  Uba,
  Wema,
} from "@/assets";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiInstagramFill } from "@remixicon/react";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-neutral-950" : "bg-transparent"
        }`}
      >
        <nav className='flex justify-between items-center p-4 max-w-6xl mx-auto'>
          <h1 className='text-xl font-medium text-foreground-50'>KoboWise</h1>
          <Button
            as={Link}
            href='/demo'
            color='primary'
            className='bg-[#f0f2f533] border-2 border-[#f0f2f533] text-foreground-50'
          >
            Try Demo
          </Button>
        </nav>
      </header>

      <main className='md:space-y-32 space-y-24 '>
        {/* HERO SECTION */}
        <section className='h-screen pt-24 bg-gradient-to-br from-primary-900 to-neutral-950 text-foreground-50'>
          <div className='w-full h-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center relative z-10 px-4'>
            <div className='max-w-xl space-y-4 md:space-y-8'>
              <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-foreground-400'>
                One App, All Your Banks
              </h1>
              <p className='text-foreground-300 text-sm md:text-base md:font-medium'>
                Connect multiple banks and wallets like Opay, Kuda, GTB, and
                more. Make smart payments with AI-powered insights and seamless
                transactions.
              </p>

              <div className='flex gap-4 items-center'>
                <Button
                  color='primary'
                  as={Link}
                  href='/demo'
                  size='lg'
                  className='border-2 border-primary-400 md:w-fit w-full'
                >
                  Try Demo
                </Button>
                <Button
                  color='primary'
                  size='lg'
                  className='bg-[#f0f2f533] border-2 border-[#f0f2f533] text-foreground-50 md:w-fit w-full'
                >
                  Join Waitlist
                </Button>
              </div>
            </div>

            <div className='w-full pt-4 md:p-0 h-full overflow-hidden flex flex-col md:flex-row justify-end items-center md:items-start'>
              <Image
                src={HeroImage}
                alt='hero image'
                width={500}
                height={500}
                objectFit='contain'
                className='w-fit h-full object-contain'
              />
            </div>
          </div>

          <Image
            src={Curve2}
            alt='background image'
            width={1000}
            height={2500}
            className='z-10 absolute object-contain bottom-0 w-full '
          />
        </section>

        <section className='max-w-6xl mx-auto space-y-16 p-4'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground-900 max-w-xl'>
            Why Choose KoboWise?
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-primary-600 p-8 rounded-md col-span-1 md:col-span-2'>
              <div className='space-y-4'>
                <div className='space-y-1'>
                  <h3 className='text-xl font-bold text-foreground-50'>
                    Multiple Banks
                  </h3>
                  <p className='text-foreground-50'>
                    Connect all your bank accounts and digital wallets in one
                    secure platform.
                  </p>
                </div>
                <Button
                  color='primary'
                  className='bg-[#f0f2f533] border-2 border-[#f0f2f533] text-foreground-50'
                >
                  Try it out
                </Button>
              </div>
            </div>

            <div className='bg-neutral-100 p-8 rounded-md'>
              <div className='space-y-2'>
                <h3 className='text-xl font-bold text-foreground-900'>
                  Smart Payments
                </h3>
                <p className='text-foreground-500'>
                  AI-powered recommendations for optimal payment methods based
                  on fees, speed, and availability. Save money on every
                  transaction.
                </p>
              </div>
            </div>

            <div className='bg-neutral-900 p-8 rounded-md'>
              <div className='space-y-2'>
                <h3 className='text-xl font-bold text-foreground-50'>
                  Bank-Level Security
                </h3>
                <p className='text-foreground-50'>
                  Multi-layer encryption, biometric authentication, and fraud
                  detection keep your money and data completely secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='space-y-24 bg-gradient-to-br from-primary-900 via-secondary-900 to-neutral-950 text-foreground-50 py-16 px-4 md:py-24'>
          <div className='max-w-6xl mx-auto space-y-8 md:space-y-16 flex flex-col items-center'>
            <h2 className='text-2xl md:text-4xl font-bold text-foreground-50 max-w-xl text-center w-full'>
              Supported Banks & Wallets
            </h2>

            <div className='h-16 bg-gradient-to-b from-[#f0f2f533] to-tranparent w-0.5' />

            <div className='flex gap-4 flex-wrap justify-center'>
              <Chip
                variant='faded'
                color='primary'
                size='lg'
                className='bg-transparent border-1 border-[#f0f2f533] text-foreground-50'
                startContent={
                  <Image
                    src={Opay}
                    alt='opay'
                    width={20}
                    height={20}
                    className='rounded-full'
                  />
                }
              >
                Opay
              </Chip>
              <Chip
                variant='faded'
                color='primary'
                size='lg'
                className='bg-transparent border-1 border-[#f0f2f533] text-foreground-50'
                startContent={
                  <Image
                    src={Kuda}
                    alt='kuda'
                    width={20}
                    height={20}
                    className='rounded-full'
                  />
                }
              >
                Kuda
              </Chip>
              <Chip
                variant='faded'
                color='primary'
                size='lg'
                className='bg-transparent border-1 border-[#f0f2f533] text-foreground-50'
                startContent={
                  <Image
                    src={GTB}
                    alt='gtb'
                    width={20}
                    height={20}
                    className='rounded-full'
                  />
                }
              >
                Guaranty Trust Bank
              </Chip>
              <Chip
                variant='faded'
                color='primary'
                size='lg'
                className='bg-transparent border-1 border-[#f0f2f533] text-foreground-50'
                startContent={
                  <Image
                    src={Paystack}
                    alt='paystack'
                    width={20}
                    height={20}
                    className='rounded-full'
                  />
                }
              >
                Paystack Titan
              </Chip>
              <Chip
                variant='faded'
                color='primary'
                size='lg'
                className='bg-transparent border-1 border-[#f0f2f533] text-foreground-50'
                startContent={
                  <Image
                    src={Moniepoint}
                    alt='moniepoint'
                    width={20}
                    height={20}
                    className='rounded-full'
                  />
                }
              >
                Moniepoint
              </Chip>
              <Chip
                variant='faded'
                color='primary'
                size='lg'
                className='bg-transparent border-1 border-[#f0f2f533] text-foreground-50'
                startContent={
                  <Image
                    src={PalmPay}
                    alt='palmpay'
                    width={20}
                    height={20}
                    className='rounded-full'
                  />
                }
              >
                PalmPay
              </Chip>

              <Chip
                variant='faded'
                color='primary'
                size='lg'
                className='bg-transparent border-1 border-[#f0f2f533] text-foreground-50'
                startContent={
                  <Image
                    src={Carbon}
                    alt='carbon'
                    width={20}
                    height={20}
                    className='rounded-full'
                  />
                }
              >
                Carbon
              </Chip>

              <Chip
                variant='faded'
                color='primary'
                size='lg'
                className='bg-transparent border-1 border-[#f0f2f533] text-foreground-50'
                startContent={
                  <Image
                    src={Uba}
                    alt='uba'
                    width={20}
                    height={20}
                    className='rounded-full'
                  />
                }
              >
                United Bank for Africa
              </Chip>

              <Chip
                variant='faded'
                color='primary'
                size='lg'
                className='bg-transparent border-1 border-[#f0f2f533] text-foreground-50'
                startContent={
                  <Image
                    src={Wema}
                    alt='wema'
                    width={20}
                    height={20}
                    className='rounded-full'
                  />
                }
              >
                Wema Bank
              </Chip>
            </div>

            <span className='text-foreground-500 text-sm text-center'>
              20+ banks and wallets supported | More being added every month
            </span>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className='max-w-6xl mx-auto space-y-16 py-24'>
          <FeaturesTabs />
        </section>

        <footer>
          <section className='bg-gradient-to-b from-primary-800 to-neutral-950 text-foreground-50'>
            <div className='max-w-6xl mx-auto space-y-16 flex flex-col items-center py-16'>
              <div className='space-y-4'>
                <h2 className='text-4xl font-bold text-foreground-50 max-w-xl text-center w-full'>
                  Join the waitlist
                </h2>

                <p className='text-foreground-500 text-center w-full'>
                  Be the first to know when we launch
                </p>
              </div>

              <Button
                color='primary'
                size='lg'
                className='bg-[#f0f2f533] border-2 border-[#f0f2f533] text-foreground-50'
              >
                Join Waitlist
              </Button>
            </div>
          </section>

          <section className=' space-y-16 border-t-1 border-[#f0f2f533] bg-neutral-950 py-16'>
            <div className='max-w-6xl mx-auto space-y-4'>
              <div className='flex flex-col md:flex-row items-center gap-2 justify-between w-full'>
                <span className='text-foreground-50 font-bold text-2xl'>
                  KoboWise
                </span>
                <div className='flex flex-col items-center md:items-end gap-2'>
                  <Button
                    isIconOnly
                    variant='flat'
                    color='primary'
                    radius='full'
                  >
                    <RiInstagramFill />
                  </Button>
                  <a
                    href='mailto:info@kobowise.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-foreground-500 text-sm'
                  >
                    info@kobowise.com
                  </a>
                </div>
              </div>

              <div className='flex flex-col md:flex-row items-center gap-2 justify-center'>
                <span className='text-foreground-500'>
                  © {new Date().getFullYear()}
                </span>
                <span className='text-foreground-500'>All rights reserved</span>
              </div>
            </div>
          </section>
        </footer>
      </main>
    </div>
  );
}

function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const features = [
    {
      title: "Protected and regulated",
      description:
        "Your funds are protected by industry-leading security standards and regulatory compliance.",
      icon: "🔒",
      image: "/api/placeholder/400/300/1a1a1a/ffffff?text=Security+Shield",
    },
    {
      title: "Two-factor authentication",
      description:
        "Protect your earnings with an extra layer of security, preventing unauthorized access to your account.",
      icon: "🛡️",
      image: "/api/placeholder/400/300/1a1a1a/ffffff?text=2FA+Protection",
    },
    {
      title: "Real-time monitoring",
      description:
        "Advanced fraud detection systems monitor your transactions 24/7 for suspicious activity.",
      icon: "👁️",
      image: "/api/placeholder/400/300/1a1a1a/ffffff?text=Monitoring",
    },
    // {
    //   title: "Encrypted transactions",
    //   description:
    //     "All your financial data is encrypted using bank-level security protocols.",
    //   icon: "🔐",
    //   image: "/api/placeholder/400/300/1a1a1a/ffffff?text=Encryption",
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(progressInterval);
  }, [activeTab]);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start p-4'>
      {/* left side - Content */}
      <div className='space-y-8 col-span-1 md:col-span-2'>
        <h2 className='text-3xl md:text-5xl font-bold text-foreground-900'>
          How smart payment work
        </h2>

        {/* Progress bar */}
        <div className='relative w-full h-1 bg-gray-200 rounded-full overflow-hidden'>
          <div
            className='h-full bg-primary-600 transition-all duration-75 ease-linear'
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Tab list */}
        <div className='space-y-2'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='border border-gray-200 rounded-lg overflow-hidden'
            >
              <button
                onClick={() => setActiveTab(index)}
                className={`w-full px-6 py-4 text-left transition-all duration-300 flex items-center justify-between ${
                  index === activeTab
                    ? "bg-primary-50 border-l-4 border-primary-600"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className='flex items-center gap-3'>
                  <span className='text-2xl'>{feature.icon}</span>
                  <h3
                    className={`text-lg font-semibold ${
                      index === activeTab
                        ? "text-primary-900"
                        : "text-foreground-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTab ? "bg-primary-600" : "bg-gray-300"
                  }`}
                />
              </button>

              {/* Accordion content */}
              {index === activeTab && (
                <div className='px-6 pb-6 bg-primary-50 border-t border-primary-100'>
                  <div className='pt-4 space-y-4'>
                    <p className='text-foreground-600 leading-relaxed'>
                      {feature.description}
                    </p>
                    <Button
                      color='primary'
                      size='sm'
                      className='bg-primary-600 hover:bg-primary-700'
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Image */}
      <div className='relative h-96 bg-gradient-to-br from-slate-800 to-neutral-900 rounded-2xl overflow-hidden col-span-1 '>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-8xl'>{features[activeTab].icon}</div>
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
      </div>
    </div>
  );
}
