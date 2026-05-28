'use client';

import { QRCodeSVG } from 'qrcode.react';

interface QRCodeProps {
  uri: string;
  address: string;
}

export function QRCodeDisplay({ uri, address }: QRCodeProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="p-4 bg-white rounded-xl">
        <QRCodeSVG value={uri} size={200} level="M" />
      </div>
      <div className="w-full">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Send payment to</p>
        <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2">
          <code className="text-xs text-zinc-300 font-mono truncate flex-1">{address}</code>
          <button
            onClick={() => navigator.clipboard.writeText(address)}
            className="text-xs text-indigo-400 hover:text-indigo-300 shrink-0"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
