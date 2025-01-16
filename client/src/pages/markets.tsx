import { MarketTable } from "@/components/markets/market-table";
import { AssetCard } from "@/components/markets/asset-card";
import { TradingFeed } from "@/components/markets/trading-feed";
import { mockMarkets } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Markets() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-lcd">Markets Terminal</h1>
          <p className="text-calculator-dim font-mono">Real-time market data and trading</p>
        </div>
        <Card className="calculator-display">
          <CardContent className="py-2 px-4">
            <div className="font-mono text-sm space-y-1">
              <div className="text-calculator-dim text-xs">CURRENT PERIOD</div>
              <div>SEASON 1: WEEK 3</div>
              <div className="text-calculator-dim text-xs">TIME LEFT: 2D 14H</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Market Overview - Takes up 3 columns */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="calculator-display lcd-container">
            <CardHeader className="border-b border-calculator-text">
              <CardTitle className="font-lcd flex items-center justify-between">
                <span>MARKET OVERVIEW</span>
                <span className="text-sm font-mono text-calculator-dim">PRESS [M] FOR MARKETS</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <MarketTable />
            </CardContent>
          </Card>

          {/* Asset Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-lcd">Asset Details</h2>
              <div className="font-mono text-sm text-calculator-dim">
                PRESS [1-4] TO SELECT ASSET
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {mockMarkets.map((market) => (
                <AssetCard key={market.id} asset={market} />
              ))}
            </div>
          </div>
        </div>

        {/* Trading Feed - Takes up 1 column */}
        <div className="lg:col-span-1">
          <TradingFeed />
        </div>
      </div>
    </div>
  );
}