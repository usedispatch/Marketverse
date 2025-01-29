import { useParams } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { mockMarkets, mockChartData } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState } from "react";
import { SeasonTimer } from "@/components/ui/season-timer";

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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold font-mono">{asset.name} ({asset.id})</h1>
          <p className="text-calculator-dim font-mono text-sm sm:text-base">{asset.description}</p>
        </div>
        <SeasonTimer />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Price Chart */}
        <Card className="calculator-display lcd-container">
          <CardHeader className="border-b border-calculator-text">
            <CardTitle className="font-lcd">Price Chart</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="h-[300px] sm:h-[400px] calculator-display p-2 sm:p-4">
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
          </CardContent>
        </Card>

        {/* Trading Terminal */}
        <Card className="calculator-display lcd-container">
          <CardHeader className="border-b border-calculator-text">
            <CardTitle className="font-lcd">Trading Terminal</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 space-y-6">
            <div className="flex gap-2">
              <Button 
                variant={orderType === 'buy' ? 'default' : 'outline'}
                className="calculator-button flex-1 text-sm sm:text-base py-5 sm:py-6"
                onClick={() => setOrderType('buy')}
              >
                [1] BUY
              </Button>
              <Button 
                variant={orderType === 'sell' ? 'default' : 'outline'}
                className="calculator-button flex-1 text-sm sm:text-base py-5 sm:py-6"
                onClick={() => setOrderType('sell')}
              >
                [2] SELL
              </Button>
            </div>

            <div className="calculator-display p-3 sm:p-4 space-y-4">
              <div className="space-y-2">
                <div className="font-lcd text-sm sm:text-base">Amount ({asset.id})</div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="calculator-display w-full p-3 sm:p-4 font-mono text-base sm:text-lg"
                  placeholder="Enter amount..."
                />
              </div>

              <div className="font-mono text-sm space-y-1">
                <div className="text-base">Price: {asset.price} AOB</div>
                <div className="text-base">Total: {amount ? Number(amount) * asset.price : 0} AOB</div>
                <div className="text-xs sm:text-sm text-calculator-dim">Supply: {asset.supply}/{asset.maxSupply}</div>
              </div>
            </div>

            <Button className="calculator-button w-full py-5 sm:py-6 text-sm sm:text-base">
              EXECUTE {orderType.toUpperCase()} [ENTER]
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}