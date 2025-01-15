import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { mockChartData } from "@/lib/mock-data";

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
    <Card>
      <CardHeader>
        <CardTitle>{asset.name} ({asset.id})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChartData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="text-2xl font-bold">{asset.price} AOB</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">24h Volume</p>
              <p className="text-2xl font-bold">{(asset.volume / 1000).toFixed(1)}K</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button className="flex-1">Buy</Button>
            <Button variant="outline" className="flex-1">Sell</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
