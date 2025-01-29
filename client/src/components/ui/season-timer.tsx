import { Card, CardContent } from "@/components/ui/card";

export function SeasonTimer() {
  return (
    <Card className="calculator-display w-full sm:w-auto">
      <CardContent className="py-2 px-4">
        <div className="font-mono text-sm">
          <div>SEASON 1: WEEK 3</div>
          <div className="text-calculator-dim text-xs">2D 14H 23M LEFT</div>
        </div>
      </CardContent>
    </Card>
  );
}
