import { MarketTable } from "@/components/markets/market-table";
import { AssetCard } from "@/components/markets/asset-card";
import { mockMarkets } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Markets() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-lcd">Markets</h1>
        <Card className="calculator-display">
          <CardContent className="py-2 px-4">
            <span className="font-mono text-sm">Season 1: Week 3</span>
          </CardContent>
        </Card>
      </div>

      <Card className="calculator-display lcd-container">
        <CardHeader>
          <CardTitle className="font-lcd">Market Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <MarketTable />
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-lcd">Market Details</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockMarkets.map((market) => (
            <AssetCard key={market.id} asset={market} />
          ))}
        </div>
      </div>
    </div>
  );
}