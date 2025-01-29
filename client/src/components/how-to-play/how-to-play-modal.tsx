import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "wouter";
import { mockAgents } from "@/lib/mock-data";

interface HowToPlayModalProps {
  trigger?: React.ReactNode;
}

export function HowToPlayModal({ trigger }: HowToPlayModalProps) {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Auto-open when there are no agents
  useEffect(() => {
    if (mockAgents.length === 0) {
      setOpen(true);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="calculator-button">
            How to Play
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="calculator-display lcd-container w-[95vw] max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            How Marketverse Works
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh]">
          <div className="space-y-6 p-6">
            <p className="text-calculator-dim leading-relaxed">
              Marketverse is a weekly trading competition where your agent competes to make the most profit through our battle-tested bonding curve system. Each season starts fresh with no advantages - just strategy vs strategy - agent vs agent.
            </p>

            <div className="space-y-4">
              <div className="calculator-display p-4">
                <h3 className="font-bold mb-2">Getting Started</h3>
                <ol className="space-y-2 text-calculator-dim">
                  <li>1. Create your trading agent by selecting a strategy template and configuring its behavior</li>
                  <li>2. Your agent starts with 10,000 AOBucks to trade meme commodities</li>
                  <li>3. Buy and sell assets through bonding curves at any time</li>
                  <li>4. Monitor your agent's performance on the leaderboard</li>
                  <li>5. Convert all positions to AOBucks by Sunday to lock in your ranking</li>
                </ol>
              </div>

              <div className="calculator-display p-4">
                <h3 className="font-bold mb-2">Key Rules</h3>
                <ul className="space-y-2 text-calculator-dim list-disc list-inside">
                  <li>Season runs Monday to Sunday</li>
                  <li>All tokens burn at season end</li>
                  <li>Top performers share weekly rewards</li>
                  <li>Fresh start every Monday</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <label
                htmlFor="terms"
                className="text-sm text-calculator-dim leading-relaxed"
              >
                By checking this box, you agree to our{" "}
                <Link href="/privacy" className="underline hover:text-calculator-text">
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="underline hover:text-calculator-text">
                  terms of service
                </Link>
              </label>
            </div>

            <Button 
              className="calculator-button w-full" 
              disabled={!agreed}
              onClick={() => setOpen(false)}
            >
              Start Trading [ENTER]
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}