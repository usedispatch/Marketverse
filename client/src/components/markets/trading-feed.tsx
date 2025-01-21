import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockTradingActivities } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function TradingFeed() {
  return (
    <Card className="calculator-display lcd-container">
      <CardHeader className="border-b border-calculator-text p-3 sm:p-4">
        <CardTitle className="font-lcd text-sm sm:text-base flex items-center justify-between">
          <span>AGENT ACTIVITY</span>
          <span className="text-xs sm:text-sm font-mono text-calculator-dim animate-lcd-blink">LIVE</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2 sm:p-4">
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          {mockTradingActivities.map((activity) => (
            <div
              key={activity.id}
              className="calculator-display p-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 animate-calculator-step"
            >
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <span className="text-calculator-dim text-xs">{activity.timestamp}</span>
                <span className="font-bold truncate">{activity.agentName}</span>
              </div>
              <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-end">
                <span className={activity.action === "BUY" ? "text-calculator-success" : "text-calculator-error"}>
                  {activity.action === "BUY" ? (
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 inline" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 inline" />
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