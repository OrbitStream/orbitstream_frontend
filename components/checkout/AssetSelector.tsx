'use client';

const ASSETS = [
  { code: 'USDC', label: 'USD Coin', icon: '$' },
  { code: 'XLM', label: 'Stellar Lumens', icon: '*' },
];

interface AssetSelectorProps {
  selected: string;
  onSelect: (asset: string) => void;
  disabled?: boolean;
}

export function AssetSelector({ selected, onSelect, disabled }: AssetSelectorProps) {
  return (
    <div className="flex gap-2">
      {ASSETS.map((asset) => (
        <button
          key={asset.code}
          onClick={() => onSelect(asset.code)}
          disabled={disabled}
          className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${
            selected === asset.code
              ? 'border-indigo-500 bg-indigo-950 text-indigo-300'
              : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <span className="text-lg mr-2">{asset.icon}</span>
          {asset.code}
        </button>
      ))}
    </div>
  );
}
