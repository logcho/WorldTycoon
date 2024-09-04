"use client";
import Image from "next/image";
import Link from "next/link"
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "../client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

import localFont from "next/font/local";
const jersey = localFont({src: "../Jersey_10/Jersey10-Regular.ttf"});

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-[url('/img/map_0.png')]">
        {/* <div className={jersey.className}> */}
          <Tabs defaultValue="deposit" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="deposit">Deposit</TabsTrigger>
              <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            </TabsList>
            <TabsContent value="deposit">
              <Card>
                <CardHeader>
                  {/* <CardTitle>Deposit</CardTitle> */}
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="bg-slate-100 p-2 rounded-sm	">
                    <Label>Deposit</Label>
                    <div className="space-y-1 py-2">
                      <Input id="deposit" placeholder="0" className="border-none text-4xl focus-visible:ring-0 shadow-none" />
                    </div>
                    <div className="flex flex-row justify-end p-0">
                      <div className="flex flex-col justify-center">
                        <h2 className="text-xs">0 USDC available</h2>
                      </div>
                      <div className="flex flex-col justify-center">
                        <Button size="sm" className="p-0.5 h-4 mx-0.5 bg-slate-200 text-slate-400">↑max</Button>
                      </div>
                    </div>
                  </div>
                  
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Confirm</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="withdraw">
              <Card>
                <CardHeader>
                  {/* <CardTitle>Withdraw</CardTitle> */}
                </CardHeader>
                <CardContent className="space-y-2">
                <div className="bg-slate-100 p-2 rounded-sm	">
                    <Label>Withdraw</Label>
                    <div className="space-y-1 py-2">
                      <Input id="withdraw" placeholder="0" className="border-none text-4xl focus-visible:ring-0 shadow-none" />
                    </div>
                    <div className="flex flex-row justify-end p-0">
                      <div className="flex flex-col justify-center">
                        <h2 className="text-xs">0 USDC available</h2>
                      </div>
                      <div className="flex flex-col justify-center">
                        <Button size="sm" className="p-0.5 h-4 mx-0.5 bg-slate-200 text-slate-400">↑max</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Confirm</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

        {/* </div> */}

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