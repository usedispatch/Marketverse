import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockTradingActivities } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function TradingFeed() {
  return (
    <Card className="calculator-display lcd-container">
      <CardHeader className="border-b border-calculator-text">
        <CardTitle className="font-lcd flex items-center justify-between">
          <span>AGENT ACTIVITY</span>
          <span className="text-sm font-mono text-calculator-dim animate-lcd-blink">LIVE</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2 font-mono text-sm">
          {mockTradingActivities.map((activity) => (
            <div
              key={activity.id}
              className="calculator-display p-2 flex items-center justify-between animate-calculator-step"
            >
              <div className="flex items-center space-x-2">
                <span className="text-calculator-dim">{activity.timestamp}</span>
                <span className="font-bold">{activity.agentName}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={activity.action === "BUY" ? "text-calculator-success" : "text-calculator-error"}>
                  {activity.action === "BUY" ? (
                    <ArrowUpRight className="w-4 h-4 inline" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 inline" />
                  )}
                  {activity.amount} {activity.asset}
                </span>
                <span className="text-calculator-dim">@ {activity.price}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
