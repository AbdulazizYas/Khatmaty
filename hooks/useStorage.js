import { useEffect, useState } from "react";

export default function useStorage(key, value) {
  const [val, setVal] = useState(() => {
    if (typeof window !== "undefined") {
      const json = localStorage.getItem(key);
      if (json) return JSON.parse(json);
    }

    return typeof value === "function" ? val() : value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal];
}
