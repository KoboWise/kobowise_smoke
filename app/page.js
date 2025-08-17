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
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-neutral-950" : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
          <h1 className="text-xl font-medium text-foreground-50">KoboWise</h1>
          <Button
            as={Link}
            href="/demo"
            color="primary"
            className="bg-[#f0f2f533] border-2 border-[#f0f2f533] text-foreground-50"
          >
            Try Demo
          </Button>
        </nav>
      </motion.header>

      <main className="md:space-y-32 space-y-24 ">
        {/* HERO SECTION */}
        <section className="h-screen pt-24 bg-gradient-to-br from-primary-900 to-neutral-950 text-foreground-50">
          <div className="w-full h-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center relative z-10 px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-xl space-y-4 md:space-y-8"
            >
              <motion.h1
                variants={itemAnimation}
                className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-foreground-400"
              >
                One App, All Your Banks,
              </motion.h1>
              <motion.p
                variants={itemAnimation}
                className="text-foreground-300 text-sm md:text-base md:font-medium"
              >
                Track all your accounts, understand where your money goes, and
                save more money — automatically. Built to help you survive the
                Nigerian economy.
              </motion.p>

              <motion.div
                variants={itemAnimation}
                className="flex gap-4 items-center"
              >
                <Button
                  color="primary"
                  as={Link}
                  href="/demo"
                  size="lg"
                  className="border-2 border-primary-400 md:w-fit w-full"
                >
                  Try Demo
                </Button>
                <Button
                  color="primary"
                  as={Link}
                  href="https://bvihlh66ytn.typeform.com/to/lcXpfYXa"
                  size="lg"
                  className="bg-[#f0f2f533] border-2 border-[#f0f2f533] text-foreground-50 md:w-fit w-full"
                >
                  Join Waitlist
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="w-full pt-4 md:p-0 h-full overflow-hidden flex flex-col md:flex-row justify-end items-center md:items-start"
            >
              <Image
                src={HeroImage}
                alt="hero image"
                width={500}
                height={500}
                objectFit="contain"
                className="w-fit h-full object-contain"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src={Curve2}
              alt="background image"
              width={1000}
              height={2500}
              className="z-10 absolute object-contain bottom-0 w-full hidden md:block"
            />
          </motion.div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-16 p-4"
        >
          <motion.h2
            variants={itemAnimation}
            className="text-4xl md:text-5xl font-bold text-foreground-900 max-w-xl"
          >
            Why Choose KoboWise?
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.div
              variants={itemAnimation}
              className="bg-primary-600 p-8 rounded-md col-span-1 md:col-span-2"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground-50">
                    Multiple Banks
                  </h3>
                  <p className="text-foreground-50">
                    Connect all your bank accounts and digital wallets in one
                    secure platform.
                  </p>
                </div>
                <Button
                  color="primary"
                  className="bg-[#f0f2f533] border-2 border-[#f0f2f533] text-foreground-50"
                >
                  Try it out
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={itemAnimation}
              className="bg-neutral-100 p-8 rounded-md"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground-900">
                  Smart Payments at your fingertips
                </h3>
                <p className="text-foreground-500">
                  We know sometimes your cash is spread thin so we allow you to pool
                  money from different accounts to make a single payment.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemAnimation}
              className="bg-neutral-900 p-8 rounded-md"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground-50">
                  Bank-Level Security
                </h3>
                <p className="text-foreground-50">
                  Multi-layer encryption, biometric authentication, and fraud
                  detection keep your money and data completely secure.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-24 bg-gradient-to-br from-primary-900 via-secondary-900 to-neutral-950 text-foreground-50 py-16 px-4 md:py-24"
        >
          <div className="max-w-6xl mx-auto space-y-8 md:space-y-16 flex flex-col items-center">
            <motion.h2
              variants={itemAnimation}
              className="text-2xl md:text-4xl font-bold text-foreground-50 max-w-xl text-center w-full"
            >
              Supported Banks & Wallets
            </motion.h2>

            <motion.div
              variants={itemAnimation}
              className="h-16 bg-gradient-to-b from-[#f0f2f533] to-tranparent w-0.5"
            />

            <motion.div
              variants={staggerContainer}
              className="flex gap-4 flex-wrap justify-center"
            >
              {[
                { src: Opay, alt: "opay", name: "Opay" },
                { src: Kuda, alt: "kuda", name: "Kuda" },
                { src: GTB, alt: "gtb", name: "Guaranty Trust Bank" },
                { src: Paystack, alt: "paystack", name: "Paystack Titan" },
                { src: Moniepoint, alt: "moniepoint", name: "Moniepoint" },
                { src: PalmPay, alt: "palmpay", name: "PalmPay" },
                { src: Carbon, alt: "carbon", name: "Carbon" },
                { src: Uba, alt: "uba", name: "United Bank for Africa" },
                { src: Wema, alt: "wema", name: "Wema Bank" },
              ].map((bank, index) => (
                <motion.div
                  key={index}
                  variants={itemAnimation}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Chip
                    variant="faded"
                    color="primary"
                    size="lg"
                    className="bg-transparent border-1 border-[#f0f2f533] text-foreground-50"
                    startContent={
                      <Image
                        src={bank.src}
                        alt={bank.alt}
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                    }
                  >
                    {bank.name}
                  </Chip>
                </motion.div>
              ))}
            </motion.div>

            <motion.span
              variants={itemAnimation}
              className="text-foreground-500 text-sm text-center"
            >
              20+ banks and wallets supported | More being added every month
            </motion.span>
          </div>
        </motion.section>

        {/* FEATURES SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-16 py-24"
        >
          <FeaturesTabs />
        </motion.section>

        <footer>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
            className="bg-gradient-to-b from-primary-800 to-neutral-950 text-foreground-50"
          >
            <div className="max-w-6xl mx-auto space-y-16 flex flex-col items-center py-16">
              <motion.div variants={itemAnimation} className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground-50 max-w-xl text-center w-full">
                  Join the waitlist
                </h2>

                <p className="text-foreground-500 text-center w-full">
                  Be the first to know when we launch
                </p>
              </motion.div>

              <motion.div
                variants={itemAnimation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  color="primary"
                  as={Link}
                  href="https://bvihlh66ytn.typeform.com/to/lcXpfYXa"
                  size="lg"
                  className="bg-[#f0f2f533] border-2 border-[#f0f2f533] text-foreground-50"
                >
                  Join Waitlist
                </Button>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
            className=" space-y-16 border-t-1 border-[#f0f2f533] bg-neutral-950 py-16"
          >
            <div className="max-w-6xl mx-auto space-y-4">
              <motion.div
                variants={itemAnimation}
                className="flex flex-col md:flex-row items-center gap-2 justify-between w-full"
              >
                <span className="text-foreground-50 font-bold text-2xl">
                  KoboWise
                </span>
                <div className="flex flex-col items-center md:items-end gap-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      isIconOnly
                      variant="flat"
                      color="primary"
                      radius="full"
                    >
                      <RiInstagramFill />
                    </Button>
                  </motion.div>
                  <a
                    href="mailto:info@kobowise.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-500 text-sm"
                  >
                    info@kobowise.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemAnimation}
                className="flex flex-col md:flex-row items-center gap-2 justify-center"
              >
                <span className="text-foreground-500">
                  © {new Date().getFullYear()}
                </span>
                <span className="text-foreground-500">All rights reserved</span>
              </motion.div>
            </div>
          </motion.section>
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
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start px-4 md:p-4">
        {/* left side - Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInLeft}
          className="space-y-8 col-span-1 lg:col-span-2"
        >
          <motion.h2
            variants={itemAnimation}
            className="text-3xl md:text-5xl font-bold text-foreground-900"
          >
            How smart payments work
          </motion.h2>

          {/* Progress bar */}
          <motion.div
            variants={itemAnimation}
            className="relative w-full h-1 bg-gray-200 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-primary-600"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </motion.div>

          {/* Tab list */}
          <motion.div variants={staggerContainer} className="space-y-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveTab(index)}
                  className={`w-full px-6 py-4 text-left transition-all duration-300 flex items-center justify-between ${
                    index === activeTab
                      ? "bg-primary-50 border-l-4 border-primary-600"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
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
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="px-6 pb-6 bg-primary-50 border-t border-primary-100"
                  >
                    <div className="pt-4 space-y-4">
                      <p className="text-foreground-600 leading-relaxed">
                        {feature.description}
                      </p>
                      <Button
                        color="primary"
                        size="sm"
                        className="bg-primary-600 hover:bg-primary-700"
                      >
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInRight}
          className="relative h-96 bg-gradient-to-br from-slate-800 to-neutral-900 rounded-2xl overflow-hidden col-span-1"
        >
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-8xl">{features[activeTab].icon}</div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}
