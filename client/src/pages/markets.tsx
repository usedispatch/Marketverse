import { MarketTable } from "@/components/markets/market-table";
import { AssetCard } from "@/components/markets/asset-card";
import { mockMarkets } from "@/lib/mock-data";

export default function Markets() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Markets</h1>
      
      <MarketTable />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockMarkets.map((market) => (
          <AssetCard key={market.id} asset={market} />
        ))}
      </div>
    </div>
  );
}
