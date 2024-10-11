"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // Menu icon from react-icons
import { IoClose } from "react-icons/io5"; // Close icon

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Menu open/close state

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Horizontal floating nav for larger screens */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "hidden sm:flex max-w-full sm:max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow-lg z-[5000] px-6 sm:px-10 py-3 sm:py-5 items-center justify-center space-x-4 border-white/[0.2] bg-black-100",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-600 dark:text-neutral-50 items-center flex space-x-1 sm:space-x-2 text-xs sm:text-sm dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-xs sm:text-sm">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Menu Icon for smaller screens */}
      <div className="sm:hidden fixed top-10 right-5 z-[5001]">
        <button
          onClick={toggleMenu}
          className="p-2 text-white bg-black rounded-md shadow-md"
        >
          {menuOpen ? <IoClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Vertical sliding menu for smaller screens */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-black-100 shadow-lg z-[5000] flex flex-col items-start p-6 space-y-4"
          >
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`vertical-link=${idx}`}
                href={navItem.link}
                className="text-white text-lg hover:text-gray-300"
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {navItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
