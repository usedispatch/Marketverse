import { useState } from "react";
import { mockMarkets, mockChartData } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Markets() {
  const [selectedAsset, setSelectedAsset] = useState(mockMarkets[0]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-lcd">Meme Markets</h1>
          <p className="text-calculator-dim font-mono">Trade your favorite meme assets</p>
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

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Asset List - Takes up 1 column */}
        <div className="space-y-4">
          {mockMarkets.map((market) => (
            <Card 
              key={market.id} 
              className={`calculator-display lcd-container cursor-pointer transition-colors ${
                selectedAsset.id === market.id ? 'border-2' : ''
              }`}
              onClick={() => setSelectedAsset(market)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-lcd">{market.name}</div>
                  <div className={`text-sm flex items-center ${
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
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xl">{market.price} AOB</div>
                  <div className="flex gap-2">
                    <Button className="calculator-button" size="sm">
                      BUY
                    </Button>
                    <Button variant="outline" className="calculator-button" size="sm">
                      SELL
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Price Chart - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <Card className="calculator-display lcd-container h-full">
            <CardHeader className="border-b border-calculator-text">
              <CardTitle className="font-lcd">
                {selectedAsset.name} ({selectedAsset.id}) Price Chart
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[400px] calculator-display p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockChartData}>
                    <XAxis 
                      dataKey="time" 
                      stroke="currentColor" 
                      fontSize={12}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="currentColor"
                      fontSize={12}
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}