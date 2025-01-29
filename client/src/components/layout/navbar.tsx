import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart2, Bot, Trophy, Wallet, Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AgentCreationDialog } from "@/components/agents/agent-creation-dialog";
import { useWallet } from "@/hooks/use-wallet";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const { connect, disconnect, isConnected, balance, address } = useWallet();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link href="/markets">
        <Button 
          variant={location === "/markets" ? "secondary" : "ghost"}
          className="calculator-button flex items-center gap-2 w-full md:w-auto justify-start md:justify-center font-mono text-sm"
        >
          <BarChart2 className="w-4 h-4" />
          Markets
        </Button>
      </Link>
      <Link href="/app">
        <Button 
          variant={location === "/app" ? "secondary" : "ghost"}
          className="calculator-button flex items-center gap-2 w-full md:w-auto justify-start md:justify-center font-mono text-sm"
        >
          <Bot className="w-4 h-4" />
          Agents
        </Button>
      </Link>
      <Link href="/leaderboard">
        <Button 
          variant={location === "/leaderboard" ? "secondary" : "ghost"}
          className="calculator-button flex items-center gap-2 w-full md:w-auto justify-start md:justify-center font-mono text-sm"
        >
          <Trophy className="w-4 h-4" />
          Leaderboard
        </Button>
      </Link>
    </>
  );

  return (
    <Card className="border-b rounded-none">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link href="/">
            <span className="text-xl font-bold font-mono cursor-pointer tracking-tight">Marketverse_</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavLinks />
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="calculator-button">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-0">
              <div className="flex flex-col space-y-2 p-4 font-mono">
                <NavLinks />
                {isConnected && <AgentCreationDialog />}
              </div>
            </SheetContent>
          </Sheet>

          {/* Wallet Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isConnected ? (
              <>
                <AgentCreationDialog />
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="calculator-button hidden sm:flex items-center gap-2 font-mono text-sm">
                    <Wallet className="w-4 h-4" />
                    {balance.toLocaleString()} AOB
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="calculator-button font-mono text-xs text-calculator-dim"
                    onClick={disconnect}
                  >
                    {address?.slice(0, 6)}...{address?.slice(-4)} [X]
                  </Button>
                </div>
              </>
            ) : (
              <Button onClick={connect} className="calculator-button flex items-center gap-2 font-mono text-sm">
                <Wallet className="w-4 h-4" />
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}