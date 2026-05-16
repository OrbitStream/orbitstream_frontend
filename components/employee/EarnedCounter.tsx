import React, { useEffect, useState } from "react";

export default function EarnedCounter({ rate = 0 }: { rate?: number }) {
  const [earned, setEarned] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000;
      setEarned(rate * elapsed);
    }, 1000);
    return () => clearInterval(id);
  }, [rate]);
  return <div>{earned.toFixed(4)}</div>;
}
