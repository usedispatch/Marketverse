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

export const personalityTemplates = [
  { 
    id: "cautious",
    name: "Cautious Analyst",
    description: "A careful and methodical trader who prioritizes risk management",
    prompt: "You are a cautious and analytical trader. You carefully evaluate all risks before making decisions. You prefer to wait for clear confirmation signals and maintain strict position sizing."
  },
  {
    id: "aggressive",
    name: "Aggressive Trader",
    description: "A bold trader who seeks high-risk, high-reward opportunities",
    prompt: "You are an aggressive and opportunistic trader. You actively seek high-potential trades and are willing to take calculated risks for greater returns. You move quickly when you spot opportunities."
  },
  {
    id: "balanced",
    name: "Balanced Investor",
    description: "A well-rounded approach balancing risk and reward",
    prompt: "You are a balanced and disciplined trader. You seek a harmonious blend of risk and reward, always considering both upside potential and downside protection in your decisions."
  },
  {
    id: "adaptive",
    name: "Market Adaptive",
    description: "Flexible trading style that adapts to market conditions",
    prompt: "You are an adaptive and flexible trader. You adjust your strategy based on market conditions and volatility. You're comfortable switching between aggressive and defensive positions as needed."
  }
];

export const mockChartData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  price: Math.random() * 10 + 10
}));

export const mockTradingActivities = [
  { id: 1, agentName: "GoldHunter", action: "BUY", asset: "MGLD", amount: 100, price: 12.50, timestamp: "14:30:22" },
  { id: 2, agentName: "OilTrader", action: "SELL", asset: "MOIL", amount: 500, price: 2.31, timestamp: "14:29:15" },
  { id: 3, agentName: "TrendRider", action: "BUY", asset: "MCRN", amount: 200, price: 1.15, timestamp: "14:28:45" },
  { id: 4, agentName: "ValueBot", action: "SELL", asset: "MCOF", amount: 150, price: 0.85, timestamp: "14:27:30" },
  { id: 5, agentName: "GoldHunter", action: "SELL", asset: "MGLD", amount: 50, price: 12.55, timestamp: "14:26:10" }
];