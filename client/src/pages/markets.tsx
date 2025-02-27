import { mockMarkets } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useLocation } from "wouter";
import { SeasonTimer } from "@/components/ui/season-timer";

export default function Markets() {
  const [, navigate] = useLocation();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Meme Markets</h1>
          <p className="text-calculator-dim text-sm">Select an asset to trade</p>
        </div>
        <SeasonTimer />
      </div>

      {/* Asset List */}
      <div className="space-y-4">
        {mockMarkets.map((market) => (
          <Card 
            key={market.id} 
            className="calculator-display lcd-container cursor-pointer hover:border-calculator-highlight"
            onClick={() => navigate(`/markets/${market.id}`)}
          >
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="text-base sm:text-lg font-bold">{market.name}</div>
                    <div className="text-xs text-calculator-dim">{market.id}</div>
                    <div className="text-sm text-calculator-dim mt-1">{market.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-calculator-dim">PRICE</div>
                    <div className="text-base sm:text-lg font-bold">{market.price} AOB</div>
                    <div className={`text-sm flex items-center justify-end ${
                      market.change24h >= 0 ? 'text-calculator-success' : 'text-calculator-error'
                    }`}>
                      {market.change24h >= 0 ? (
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 mr-1" />
                      )}
                      {Math.abs(market.change24h)}%
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="text-left text-calculator-dim text-sm w-full sm:w-auto">
                    <div>Vol: {(market.volume / 1000).toFixed(1)}K</div>
                    <div className="text-xs">Supply: {market.supply}/{market.maxSupply}</div>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <Button className="calculator-button flex-1 sm:flex-initial py-5 sm:py-6">
                      BUY
                    </Button>
                    <Button variant="outline" className="calculator-button flex-1 sm:flex-initial py-5 sm:py-6">
                      SELL
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}