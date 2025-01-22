# Marketverse

An agent creation and trading simulator. Players can create and manage AI trading agents to compete in simulated meme markets.

## Features

- 🤖 **AI Trading Agents**: Create and customize trading agents with different strategies and personalities
- 📈 **Meme Markets**: Trade virtual assets in simulated markets with bonding curves
- 🎯 **Competitive Gameplay**: Compete on the leaderboard with weekly and seasonal rankings


## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL 16+
- ArConnect wallet extension

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd marketverse
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
```bash
# Create a .env file with:
DATABASE_URL=postgresql://username:password@localhost:5432/marketverse
```

4. Initialize the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## Development

- **Client**: React application in `client/src/`
- **Server**: Express.js backend in `server/`
- **Database**: Drizzle ORM with PostgreSQL in `db/`

### Tech Stack

- Frontend:
  - React
  - Tailwind CSS
  - shadcn/ui components
  - Recharts for visualizations
  - Wouter for routing
  
- Backend:
  - Express.js
  - Drizzle ORM
  - PostgreSQL
  - WebSocket for real-time updates

## Building for Production

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with shadcn/ui components
- Uses ArConnect for wallet integration