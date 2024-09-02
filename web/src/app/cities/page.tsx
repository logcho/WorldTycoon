"use client";
import Image from "next/image";
import Link from "next/link"
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "../client";
import { Button } from "@/components/ui/button";

import localFont from "next/font/local";
const jersey = localFont({src: "../Jersey_10/Jersey10-Regular.ttf"});

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-[url('/img/map_0.png')]">
        <div className={jersey.className}>

            <h1 className="text-8xl text-amber-200">
                cities
            </h1> 

          
        </div>

      </div>
      

    </main>
  );
}

function Header() {
  return (
    <header className="flex justify-between align-middle p-2 bg-black">
      <div className="flex flex-col justify-center">
        <div className={jersey.className}>
            <Button className="text-4xl">
                <Link href="/">
                    Home
                </Link>
            </Button>
            <Button className="text-4xl">
              <Link href="/cities">
                Cities
              </Link>
            </Button>
            <Button className="text-4xl">
              <Link href="/profile">
                  Profile
              </Link>
            </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center">
          <ConnectButton
            client={client}
            connectButton={{
              style: {
                fontSize: "28px",
                fontFamily: jersey.style.fontFamily,
              },
            }}
          />
        </div>
    </header>
  )
}