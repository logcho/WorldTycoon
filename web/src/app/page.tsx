"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import { Button } from "@/components/ui/button";

import localFont from "next/font/local";
const jersey = localFont({src: "./Jersey_10/Jersey10-Regular.ttf"});

export default function Home() {
  return (
    <main>
      <Header />
      {/* <div className="flex justify-center bg-[#56b690]">
        <Image
          src="/WorldTycoonDev.webp" 
          alt="World Tycoon Development" 
          width={800} 
          height={600}
        />
      </div> */}
      

    </main>
  );
}

function Header() {
  return (
    <header className="flex justify-between align-middle p-2 bg-black">
      <div className="flex flex-col justify-center">
        <div className={jersey.className}>
            <Button className="text-4xl">
              Home
            </Button>
            <Button className="text-4xl">
              Cities
            </Button>
            <Button className="text-4xl">
              Contests
            </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <ConnectButton
          client={client}
        />
      </div>        
    </header>
  )
}