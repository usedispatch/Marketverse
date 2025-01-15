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
      <CardHeader className="border-b border-calculator-text">
        <CardTitle className="font-lcd flex justify-between items-center">
          <span>{asset.name} ({asset.id})</span>
          <span className={`text-sm flex items-center ${asset.change24h >= 0 ? 'text-calculator-success' : 'text-calculator-error'}`}>
            {asset.change24h >= 0 ? (
              <ArrowUpRight className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDownRight className="w-4 h-4 mr-1" />
            )}
            {Math.abs(asset.change24h)}%
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="h-[200px] calculator-display p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChartData}>
                <XAxis 
                  dataKey="time" 
                  stroke="currentColor" 
                  fontSize={10}
                  tickLine={false}
                />
                <YAxis 
                  stroke="currentColor"
                  fontSize={10}
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

          <div className="grid grid-cols-2 gap-4">
            <div className="calculator-display p-2">
              <div className="text-xs text-calculator-dim mb-1">Price</div>
              <div className="font-lcd text-xl">{asset.price} AOB</div>
            </div>
            <div className="calculator-display p-2">
              <div className="text-xs text-calculator-dim mb-1">Volume</div>
              <div className="font-lcd text-xl">{(asset.volume / 1000).toFixed(1)}K</div>
            </div>
          </div>

          <div className="calculator-display p-2">
            <div className="text-xs text-calculator-dim mb-1">Supply</div>
            <div className="font-mono">{asset.supply}/{asset.maxSupply}</div>
          </div>

          <div className="flex gap-2">
            <Button className="calculator-button flex-1">
              [1] BUY
            </Button>
            <Button variant="outline" className="calculator-button flex-1">
              [2] SELL
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}