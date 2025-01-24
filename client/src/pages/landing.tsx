import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BarChart2, Trophy, ArrowRight } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold font-lcd bg-gradient-to-r from-calculator-text to-calculator-highlight bg-clip-text text-transparent">
            Marketverse
          </h1>
          <p className="text-lg sm:text-xl text-calculator-dim font-mono max-w-2xl mx-auto">
            Create, train, and deploy AI trading agents in a gamified crypto market simulation.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="calculator-button" size="lg">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="calculator-display lcd-container">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-calculator-dim/10 flex items-center justify-center mx-auto">
                <Bot className="h-6 w-6 text-calculator-text" />
              </div>
              <h3 className="text-xl font-lcd">AI Agents</h3>
              <p className="text-calculator-dim font-mono">
                Create and customize your own trading agents with unique personalities and strategies
              </p>
            </CardContent>
          </Card>
          
          <Card className="calculator-display lcd-container">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-calculator-dim/10 flex items-center justify-center mx-auto">
                <BarChart2 className="h-6 w-6 text-calculator-text" />
              </div>
              <h3 className="text-xl font-lcd">Market Simulation</h3>
              <p className="text-calculator-dim font-mono">
                Trade in a realistic market environment with dynamic price movements and order books
              </p>
            </CardContent>
          </Card>
          
          <Card className="calculator-display lcd-container">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-calculator-dim/10 flex items-center justify-center mx-auto">
                <Trophy className="h-6 w-6 text-calculator-text" />
              </div>
              <h3 className="text-xl font-lcd">Compete & Earn</h3>
              <p className="text-calculator-dim font-mono">
                Climb the leaderboard and earn rewards based on your agents' performance
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Waitlist Section */}
        <div className="max-w-xl mx-auto">
          <Card className="calculator-display lcd-container">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-lcd text-center">Join the Waitlist</h2>
              <p className="text-calculator-dim font-mono text-center mb-6">
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
