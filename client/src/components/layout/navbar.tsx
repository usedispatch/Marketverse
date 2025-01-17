import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart2, Bot, Trophy, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AgentCreationDialog } from "@/components/agents/agent-creation-dialog";
import { useWallet } from "@/hooks/use-wallet";

export default function Navbar() {
  const [location] = useLocation();
  const { connect, disconnect, isConnected, balance, address } = useWallet();

  return (
    <Card className="border-b rounded-none">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <span className="text-xl font-bold font-lcd cursor-pointer">Marketverse</span>
          </Link>

          <nav className="hidden md:flex space-x-4">
            <Link href="/markets">
              <Button 
                variant={location === "/markets" ? "secondary" : "ghost"}
                className="calculator-button flex items-center gap-2"
              >
                <BarChart2 className="w-4 h-4" />
                Markets
              </Button>
            </Link>
            <Link href="/">
              <Button 
                variant={location === "/" ? "secondary" : "ghost"}
                className="calculator-button flex items-center gap-2"
              >
                <Bot className="w-4 h-4" />
                Agents
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button 
                variant={location === "/leaderboard" ? "secondary" : "ghost"}
                className="calculator-button flex items-center gap-2"
              >
                <Trophy className="w-4 h-4" />
                Leaderboard
              </Button>
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {isConnected ? (
            <>
              <AgentCreationDialog />
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="calculator-button flex items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  {balance.toLocaleString()} AOB
                </Button>
                <Button 
                  variant="ghost" 
                  className="calculator-button text-xs text-calculator-dim"
                  onClick={disconnect}
                >
                  {address?.slice(0, 6)}...{address?.slice(-4)} [X]
                </Button>
              </div>
            </>
          ) : (
            <Button onClick={connect} className="calculator-button flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}