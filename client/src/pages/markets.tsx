import { mockMarkets } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Markets() {
  const [, navigate] = useLocation();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-lcd">Meme Markets</h1>
          <p className="text-calculator-dim font-mono">Select an asset to trade</p>
        </div>
        <Card className="calculator-display">
          <CardContent className="py-2 px-4">
            <div className="font-mono text-sm">
              <div>SEASON 1: WEEK 3</div>
              <div className="text-calculator-dim text-xs">2D 14H LEFT</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Asset List */}
      <div className="space-y-4">
        {mockMarkets.map((market) => (
          <Card 
            key={market.id} 
            className="calculator-display lcd-container cursor-pointer hover:border-calculator-highlight"
            onClick={() => navigate(`/markets/${market.id}`)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-lcd text-lg">{market.name}</div>
                  <div className="text-xs text-calculator-dim font-mono">{market.id}</div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="text-right">
                    <div className="text-xs text-calculator-dim font-mono">PRICE</div>
                    <div className="font-mono text-lg">{market.price} AOB</div>
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

                  <div className="text-right text-calculator-dim font-mono">
                    <div>Vol: {(market.volume / 1000).toFixed(1)}K</div>
                    <div className="text-xs">Supply: {market.supply}/{market.maxSupply}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="calculator-button" size="sm">
                      BUY
                    </Button>
                    <Button variant="outline" className="calculator-button" size="sm">
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