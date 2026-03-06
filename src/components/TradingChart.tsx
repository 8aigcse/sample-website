import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', price: 62000 },
  { time: '04:00', price: 62500 },
  { time: '08:00', price: 61800 },
  { time: '12:00', price: 63200 },
  { time: '16:00', price: 64100 },
  { time: '20:00', price: 63800 },
  { time: '23:59', price: 64231 },
];

export const TradingChart = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold">BTC/USD</h3>
              <span className="px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary text-[10px] font-bold">LIVE</span>
            </div>
            <div className="flex gap-2">
              {['1H', '4H', '1D', '1W', '1M'].map((t) => (
                <button key={t} className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${t === '1D' ? 'bg-brand-primary text-black' : 'hover:bg-white/5 text-zinc-500'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  stroke="#525252" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#525252" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `$${value/1000}k`}
                  domain={['dataMin - 500', 'dataMax + 500']}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '8px' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="glass p-6 rounded-2xl flex-1">
            <h4 className="font-bold mb-4">Quick Trade</h4>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-zinc-500 uppercase font-bold mb-2 block">Amount (USD)</label>
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="w-full bg-zinc-900 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary font-mono"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-brand-primary text-black font-bold py-3 rounded-xl hover:opacity-90 transition-all">Buy</button>
                <button className="bg-brand-secondary text-white font-bold py-3 rounded-xl hover:opacity-90 transition-all">Sell</button>
              </div>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl">
            <h4 className="font-bold mb-4">Recent Activity</h4>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-brand-primary' : 'bg-brand-secondary'}`} />
                    <span className="text-zinc-400">{i % 2 === 0 ? 'Bought' : 'Sold'} BTC</span>
                  </div>
                  <span className="font-mono">$1,200.00</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
