import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart2, Bot, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Navbar() {
  const [location] = useLocation();

  return (
    <Card className="border-b rounded-none">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <a className="text-xl font-bold">Marketverse</a>
          </Link>

          <nav className="hidden md:flex space-x-4">
            <Link href="/markets">
              <Button 
                variant={location === "/markets" ? "secondary" : "ghost"}
                className="flex items-center gap-2"
              >
                <BarChart2 className="w-4 h-4" />
                Markets
              </Button>
            </Link>
            <Link href="/">
              <Button 
                variant={location === "/" ? "secondary" : "ghost"}
                className="flex items-center gap-2"
              >
                <Bot className="w-4 h-4" />
                Agents
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button 
                variant={location === "/leaderboard" ? "secondary" : "ghost"}
                className="flex items-center gap-2"
              >
                <Trophy className="w-4 h-4" />
                Leaderboard
              </Button>
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="calculator-button flex items-center gap-2">
            10,000 AOB
          </Button>
        </div>
      </div>
    </Card>
  );
}