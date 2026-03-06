import { TrendingUp, TrendingDown } from 'lucide-react';

const MARKET_DATA = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 64231.50, change: 4.2, volume: '24.5B' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3452.12, change: -1.5, volume: '12.1B' },
  { id: 3, name: 'Solana', symbol: 'SOL', price: 145.82, change: 8.4, volume: '4.2B' },
  { id: 4, name: 'NVIDIA', symbol: 'NVDA', price: 875.21, change: 2.1, volume: '18.9B' },
  { id: 5, name: 'Tesla', symbol: 'TSLA', price: 175.45, change: -3.2, volume: '9.4B' },
  { id: 6, name: 'Apple', symbol: 'AAPL', price: 182.10, change: 0.5, volume: '7.2B' },
];

export const MarketTable = () => {
  return (
    <section id="markets" className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Market Overview</h2>
          <p className="text-zinc-500">Real-time performance of top assets</p>
        </div>
        <button className="text-sm font-bold text-brand-primary hover:underline">View All Markets</button>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-surface/30">
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">24h Change</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Volume</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {MARKET_DATA.map((asset) => (
                <tr key={asset.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-xs">
                        {asset.symbol[0]}
                      </div>
                      <div>
                        <div className="font-bold">{asset.name}</div>
                        <div className="text-xs text-zinc-500">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono font-medium">
                    ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-1 font-mono font-bold ${asset.change >= 0 ? 'text-brand-primary' : 'text-brand-secondary'}`}>
                      {asset.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {asset.change > 0 ? '+' : ''}{asset.change}%
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-400 font-mono">
                    {asset.volume}
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1.5 rounded-lg bg-zinc-800 text-xs font-bold hover:bg-zinc-700 transition-colors">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
