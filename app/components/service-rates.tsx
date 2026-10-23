type Rate = { title: string; scope: string; ngn: number | null; usd: number | null; ngnMax?: number; usdMax?: number; plus?: boolean };

export function amount(value: number | null, max: number | undefined, currency: 'NGN' | 'USD', plus?: boolean) {
  if (value === null) return 'Quoted for your scope';
  const format = (price: number) => new Intl.NumberFormat('en', { maximumFractionDigits: 0 }).format(price);
  return `${currency === 'NGN' ? '₦' : '$'}${format(value)}${max ? `–${currency === 'NGN' ? '₦' : '$'}${format(max)}` : ''}${plus ? '+' : ''}`;
}

export function ServiceRates({ items, international = true, starting = false }: { items: Rate[]; international?: boolean; starting?: boolean }) {
  return <dl className="service-rates">{items.map((item) => <div className="service-rate" key={item.title}><dt><strong>{item.title}</strong><span>{item.scope}</span></dt><dd><span><small>Nigeria {starting ? 'from' : ''}</small><b>{amount(item.ngn, item.ngnMax, 'NGN', item.plus && item.ngn !== null)}</b></span>{international && <span><small>International {starting ? 'from' : ''}</small><b>{amount(item.usd, item.usdMax, 'USD', item.plus)}</b></span>}</dd></div>)}</dl>;
}
