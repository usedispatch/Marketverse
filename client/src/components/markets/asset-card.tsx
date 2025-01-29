import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { mockChartData } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface AssetCardProps {
  asset: {
    id: string;
    name: string;
    price: number;
    change24h: number;
    volume: number;
    supply: number;
    maxSupply: number;
  };
}

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <Card className="calculator-display lcd-container">
      <CardHeader className="border-b border-calculator-text p-3 sm:p-4">
        <CardTitle className="font-lcd text-sm sm:text-base flex justify-between items-center">
          <span className="font-medium">{asset.name} ({asset.id})</span>
          <span className={`text-xs sm:text-sm flex items-center ${asset.change24h >= 0 ? 'text-calculator-success' : 'text-calculator-error'}`}>
            {asset.change24h >= 0 ? (
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            ) : (
              <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            )}
            {Math.abs(asset.change24h)}%
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        <div className="space-y-3 sm:space-y-4">
          <div className="h-[150px] sm:h-[200px] calculator-display p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChartData}>
                <XAxis 
                  dataKey="time" 
                  stroke="currentColor" 
                  fontSize={11}
                  tickLine={false}
                />
                <YAxis 
                  stroke="currentColor"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <Line 
                  type="stepAfter"
                  dataKey="price" 
                  stroke="currentColor"
                  strokeWidth={1.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div className="calculator-display p-2">
              <div className="text-sm text-calculator-dim font-medium mb-1">Current Price</div>
              <div className="font-lcd text-sm sm:text-xl font-medium">{asset.price} AOB</div>
            </div>
            <div className="calculator-display p-2">
              <div className="text-sm text-calculator-dim font-medium mb-1">Volume</div>
              <div className="font-lcd text-sm sm:text-xl font-medium">{(asset.volume / 1000).toFixed(1)}K</div>
            </div>
          </div>

          <div className="calculator-display p-2">
            <div className="text-sm text-calculator-dim font-medium mb-1">Supply</div>
            <div className="font-mono text-sm sm:text-base font-medium">{asset.supply}/{asset.maxSupply}</div>
          </div>

          <div className="flex gap-2">
            <Button className="calculator-button flex-1 py-4 sm:py-5 text-sm font-medium">
              [1] BUY
            </Button>
            <Button variant="outline" className="calculator-button flex-1 py-4 sm:py-5 text-sm font-medium">
              [2] SELL
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}