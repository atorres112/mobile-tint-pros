import { useEffect } from "react";

export default function ElfsightForm() {
  useEffect(() => {
    // Prevent loading multiple times
    if (document.getElementById("elfsight-script")) return;

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.id = "elfsight-script";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-203d7257-e941-4419-a954-06ed83b1d81e"
      data-elfsight-app-lazy
      style={{ minHeight: 400 }}
    />
  );
}
