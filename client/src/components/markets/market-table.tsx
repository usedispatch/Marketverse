import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { mockMarkets } from "@/lib/mock-data";

export function MarketTable() {
  return (
    <div className="space-y-4">
      {/* Market Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
        {mockMarkets.map((market) => (
          <div key={market.id} className="calculator-display p-2 sm:p-3 font-mono animate-lcd-blink">
            <div className="text-xs text-calculator-dim truncate">{market.id}</div>
            <div className="flex items-center justify-between text-sm sm:text-base">
              <span className="truncate">{market.price}</span>
              <span className={market.change24h >= 0 ? 'text-calculator-success' : 'text-calculator-error'}>
                {market.change24h >= 0 ? '↑' : '↓'}{Math.abs(market.change24h)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Market Table */}
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b-2 border-calculator-text">
              <TableHead className="font-lcd text-xs sm:text-sm">ASSET</TableHead>
              <TableHead className="text-right font-lcd text-xs sm:text-sm">PRICE</TableHead>
              <TableHead className="text-right font-lcd text-xs sm:text-sm">24H CHANGE</TableHead>
              <TableHead className="text-right font-lcd text-xs sm:text-sm">VOLUME</TableHead>
              <TableHead className="text-right font-lcd text-xs sm:text-sm">SUPPLY</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="font-mono">
            {mockMarkets.map((market) => (
              <TableRow 
                key={market.id} 
                className="border-b border-calculator-text/50 hover:bg-calculator-dim/10 cursor-pointer"
              >
                <TableCell className="font-medium text-xs sm:text-sm">
                  <div className="flex flex-col">
                    <span>{market.name}</span>
                    <span className="text-xs text-calculator-dim">{market.id}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right tabular-nums text-xs sm:text-sm">{market.price} AOB</TableCell>
                <TableCell className={`text-right flex items-center justify-end text-xs sm:text-sm ${market.change24h >= 0 ? 'text-calculator-success' : 'text-calculator-error'}`}>
                  {market.change24h >= 0 ? (
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  )}
                  {Math.abs(market.change24h)}%
                </TableCell>
                <TableCell className="text-right tabular-nums text-xs sm:text-sm">{(market.volume / 1000).toFixed(1)}K</TableCell>
                <TableCell className="text-right tabular-nums text-xs sm:text-sm">
                  <div className="flex flex-col items-end">
                    <span>{market.supply}</span>
                    <span className="text-xs text-calculator-dim">/ {market.maxSupply}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}