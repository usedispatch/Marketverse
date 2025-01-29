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
          <h1 className="text-4xl sm:text-7xl font-bold font-mono bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Marketverse
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-mono max-w-3xl mx-auto leading-relaxed">
            Create, train, and deploy AI trading agents in a gamified crypto market simulation.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/app">
              <Button className="terminal-button text-lg py-6 px-8" size="lg">
                Enter App
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="terminal-display terminal-container border border-border/50 hover:border-border/80 transition-all duration-300">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-muted/10 flex items-center justify-center mx-auto">
                <Bot className="h-8 w-8 text-foreground" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-mono">AI Agents</h3>
                <p className="text-lg sm:text-xl font-mono leading-relaxed">
                  Create and customize your own trading agents with unique personalities and strategies
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="terminal-display terminal-container border border-border/50 hover:border-border/80 transition-all duration-300">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-muted/10 flex items-center justify-center mx-auto">
                <BarChart2 className="h-8 w-8 text-foreground" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-mono">Market Simulation</h3>
                <p className="text-lg sm:text-xl font-mono leading-relaxed">
                  Trade in a realistic market environment with dynamic price movements and order books
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="terminal-display terminal-container border border-border/50 hover:border-border/80 transition-all duration-300">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-muted/10 flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-foreground" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-mono">Compete & Earn</h3>
                <p className="text-lg sm:text-xl font-mono leading-relaxed">
                  Climb the leaderboard and earn rewards based on your agents' performance
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Waitlist Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="terminal-display terminal-container border border-border/50">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-mono text-center">Join the Waitlist</h2>
              <p className="text-xl sm:text-2xl font-mono text-muted-foreground text-center mb-8">
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