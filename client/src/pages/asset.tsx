import { useParams } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { mockMarkets, mockChartData } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState } from "react";

export default function Asset() {
  const { id } = useParams();
  const asset = mockMarkets.find(m => m.id === id);
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');

  if (!asset) {
    return <div>Asset not found</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-lcd">{asset.name} ({asset.id})</h1>
          <p className="text-calculator-dim font-mono">Trading Terminal</p>
        </div>
        <Card className="calculator-display">
          <CardContent className="py-2 px-4">
            <div className="font-mono text-sm animate-lcd-blink">
              <div>PRICE: {asset.price} AOB</div>
              <div className={`text-xs ${asset.change24h >= 0 ? 'text-calculator-success' : 'text-calculator-error'}`}>
                {asset.change24h >= 0 ? '↑' : '↓'}{Math.abs(asset.change24h)}%
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Price Chart */}
        <Card className="calculator-display lcd-container">
          <CardHeader className="border-b border-calculator-text">
            <CardTitle className="font-lcd">Price Chart</CardTitle>
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

        {/* Trading Terminal */}
        <Card className="calculator-display lcd-container">
          <CardHeader className="border-b border-calculator-text">
            <CardTitle className="font-lcd">Trading Terminal</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex gap-2">
              <Button 
                variant={orderType === 'buy' ? 'default' : 'outline'}
                className="calculator-button flex-1"
                onClick={() => setOrderType('buy')}
              >
                [1] BUY
              </Button>
              <Button 
                variant={orderType === 'sell' ? 'default' : 'outline'}
                className="calculator-button flex-1"
                onClick={() => setOrderType('sell')}
              >
                [2] SELL
              </Button>
            </div>

            <div className="calculator-display p-4 space-y-4">
              <div className="space-y-2">
                <div className="font-lcd">Amount ({asset.id})</div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="calculator-display w-full p-2 font-mono"
                  placeholder="Enter amount..."
                />
              </div>

              <div className="font-mono text-sm space-y-1">
                <div>Price: {asset.price} AOB</div>
                <div>Total: {amount ? Number(amount) * asset.price : 0} AOB</div>
                <div className="text-calculator-dim">Supply: {asset.supply}/{asset.maxSupply}</div>
              </div>
            </div>

            <Button className="calculator-button w-full">
              EXECUTE {orderType.toUpperCase()} [ENTER]
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
