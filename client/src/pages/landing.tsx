import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BarChart2, Trophy } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";
import { Link } from "wouter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-7xl font-bold font-mono bg-gradient-to-r from-calculator-text to-calculator-highlight bg-clip-text text-transparent tracking-tight">
            Marketverse_
          </h1>
          <p className="text-xl sm:text-2xl text-calculator-dim font-mono max-w-3xl mx-auto leading-relaxed tracking-tight">
            Create, train, and deploy AI trading agents in a gamified crypto market simulation.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/app">
              <Button className="calculator-button text-lg font-mono tracking-tight" size="lg">
                Enter App_
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="calculator-display lcd-container border-2 hover:border-calculator-highlight/50 transition-colors">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-calculator-dim/10 flex items-center justify-center mx-auto">
                <Bot className="h-8 w-8 text-calculator-text" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-mono tracking-tight">AI_AGENTS</h3>
                <p className="text-calculator-dim font-mono text-lg leading-relaxed tracking-tight">
                  Create and customize your own trading agents with unique personalities and strategies
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="calculator-display lcd-container border-2 hover:border-calculator-highlight/50 transition-colors">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-calculator-dim/10 flex items-center justify-center mx-auto">
                <BarChart2 className="h-8 w-8 text-calculator-text" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-mono tracking-tight">MARKET_SIM</h3>
                <p className="text-calculator-dim font-mono text-lg leading-relaxed tracking-tight">
                  Trade in a realistic market environment with dynamic price movements and order books
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="calculator-display lcd-container border-2 hover:border-calculator-highlight/50 transition-colors">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-calculator-dim/10 flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-calculator-text" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-mono tracking-tight">COMPETE_WIN</h3>
                <p className="text-calculator-dim font-mono text-lg leading-relaxed tracking-tight">
                  Climb the leaderboard and earn rewards based on your agents' performance
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Waitlist Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="calculator-display lcd-container border-2">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-mono tracking-tight text-center">JOIN_WAITLIST</h2>
              <p className="text-calculator-dim font-mono text-xl text-center mb-8 tracking-tight">
                Be among the first to experience the future of algorithmic trading.
              </p>
              <WaitlistForm />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}