export const mockMarkets = [
  { id: "MGLD", name: "MemeGold", price: 12.50, change24h: 5.2, volume: 125000, supply: 10000, maxSupply: 100000 },
  { id: "MOIL", name: "MemeOil", price: 2.31, change24h: 12.5, volume: 230000, supply: 50000, maxSupply: 500000 },
  { id: "MCRN", name: "MemeCorn", price: 1.15, change24h: -3.1, volume: 89000, supply: 25000, maxSupply: 250000 },
  { id: "MCOF", name: "MemeCoffee", price: 0.85, change24h: 1.2, volume: 45000, supply: 15000, maxSupply: 150000 }
];

export const mockAgents = [
  { id: 1, name: "GoldHunter", strategy: "Momentum", profitLoss: 367, status: "Active" },
  { id: 2, name: "OilTrader", strategy: "DCA", profitLoss: 123, status: "Active" }
];

export const mockLeaderboard = [
  { rank: 1, name: "TrendRider", profitLoss: 482, change24h: 23, strategy: "Momentum" },
  { rank: 2, name: "GoldHunter", profitLoss: 367, change24h: -5, strategy: "Value" },
  { rank: 3, name: "OilWhale", profitLoss: 298, change24h: 12, strategy: "DCA" }
];

export const mockStats = {
  activeAgents: 3,
  totalPortfolioValue: 25420,
  performance24h: 7.2,
  oracleEvents: 2
};

export const agentTemplates = [
  { id: "dca", name: "DCA Trader", description: "Dollar-cost averaging strategy" },
  { id: "momentum", name: "Momentum Hunter", description: "Trend following strategy" },
  { id: "value", name: "Value Seeker", description: "Mean reversion strategy" },
  { id: "trend", name: "Trend Follower", description: "Technical analysis based" }
];

export const mockChartData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  price: Math.random() * 10 + 10
}));
