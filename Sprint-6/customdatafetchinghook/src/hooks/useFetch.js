import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    let active = true; // in case component unmounts

    async function getData() {
      try {
        setPending(true);
        const res = await fetch(url);
        const json = await res.json();
        if (active) setData(json);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        if (active) setPending(false);
      }
    }

    getData();
    return () => (active = false);
  }, [url]);

  return { data, pending };
}
