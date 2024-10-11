"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaBook } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

export function ThreeDCardDemo() {
  return (
    <div className="py-20 px-4 overflow-hidden" id="myBooks">
      <h1 className="heading text-center">
        My <span className="text-purple">Books</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* First Book Card */}
        <CardContainer className="inter-var w-full xs:w-[18rem] sm:w-[20rem] md:w-[25rem] h-[18rem] sm:h-[20rem] md:h-[25rem]">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-white/[0.3] h-full rounded-xl p-6 border-2 border-white/[0.3]">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              The Unhappy Girl
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This book is based on a girl who is usually very unhappy at
              certain stages of life...but still finds happiness!
            </CardItem>
            <div className="flex flex-row items-center justify-center">
              <CardItem translateZ="100" className="w-[80px] h-[80px] mt-4">
                <a href="https://www.amazon.in/Unhappy-Girl-DEVIKA-HARSHEY/dp/1645469654">
                  <Image
                    src="/book1.png"
                    height="100"
                    width="100"
                    className="object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Second Book Card */}
        <CardContainer className="inter-var w-full xs:w-[18rem] sm:w-[20rem] md:w-[25rem] h-[18rem] sm:h-[20rem] md:h-[25rem]">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-white/[0.3] dark:bg-black-100 h-full rounded-xl p-6 border-2 border-white/[0.3]">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Soft Days
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              A poetry anthology of 100+ beautiful poems by Writer's Pocket,
              featuring my poem named "The Opportunity".
            </CardItem>
            <div className="flex flex-row items-center justify-center">
              <CardItem translateZ="100" className="w-[80px] h-[80px] mt-4">
                <a href="https://www.amazon.in/Poetry-book-Soft-Writers-Pocket/dp/8119266846">
                  <Image
                    src="/book2.png"
                    height="100"
                    width="100"
                    className="object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Third Book Card */}
        <CardContainer className="inter-var w-full xs:w-[18rem] sm:w-[20rem] md:w-[25rem] h-[18rem] sm:h-[20rem] md:h-[25rem]">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-white/[0.3] dark:bg-black-100 h-full rounded-xl p-6 border-2 border-white/[0.3]">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Threads Of Reverie
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is a collection of my poems which explores feelings like
              love, loss, and hope in a simple and heartfelt way.
            </CardItem>
            <div className="flex flex-row items-center justify-center">
              <CardItem translateZ="100" className="w-[80px] h-[80px] mt-4">
                <a href="https://www.amazon.in/Poetry-Threads-Reverie-Devika-Harshey/dp/9360830879">
                  <Image
                    src="/book3.png"
                    height="100"
                    width="100"
                    className="object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <a
        href="http://surl.li/aincyt"
        className="flex justify-center relative z-10"
      >
        <MagicButton title="More Books" icon={<FaBook />} position={"right"} />
      </a>
    </div>
  );
}
